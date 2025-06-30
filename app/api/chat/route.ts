
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY, // Asegúrate que esta variable de entorno esté definida
});

const assistantId = process.env.OPENAI_ASSISTANT_ID;

// Función auxiliar para esperar a que el Asistente complete su ejecución (run)
const waitForRunCompletion = async (threadId: string, runId: string) => {
  let run = await openai.beta.threads.runs.retrieve(runId, { thread_id: threadId });
  while (run.status === "in_progress" || run.status === "queued") {
    await new Promise((resolve) => setTimeout(resolve, 500)); // Esperamos 0.5 segundos antes de volver a consultar
    run = await openai.beta.threads.runs.retrieve(runId, { thread_id: threadId });
  }
  return run;
};

export async function POST(req: Request) {
  if (!assistantId) {
    return NextResponse.json(
      { error: "El ID del Asistente de OpenAI no está configurado en las variables de entorno (OPENAI_ASSISTANT_ID)." },
      { status: 500 }
    );
  }

  try {
    // Extraemos el 'message' y opcionalmente el 'threadId' del cuerpo de la petición
    const { message, threadId: existingThreadId } = await req.json();

    // Si ya existe un hilo de conversación, lo usamos. Si no, creamos uno nuevo.
    const threadId =
      existingThreadId ?? (await openai.beta.threads.create()).id;

    // Añadimos el mensaje del usuario al hilo
    await openai.beta.threads.messages.create(threadId, {
      role: "user",
      content: message,
    });

    // Creamos y ejecutamos el 'run' con el ID de tu asistente
    const run = await openai.beta.threads.runs.create(threadId, {
      assistant_id: assistantId,
    });

    // Esperamos a que el 'run' se complete
    await waitForRunCompletion(threadId, run.id);

    // Recuperamos los mensajes del hilo
    const messages = await openai.beta.threads.messages.list(threadId);

    // Buscamos la última respuesta del asistente
    const assistantMessage = messages.data.find(
      (m) => m.run_id === run.id && m.role === "assistant"
    );

    if (assistantMessage && assistantMessage.content[0].type === "text") {
      const reply = assistantMessage.content[0].text.value;
      // Devolvemos la respuesta y el threadId para mantener la conversación
      return NextResponse.json({ reply, threadId });
    }

    return NextResponse.json(
      { error: "No se recibió una respuesta de texto del asistente." },
      { status: 500 }
    );
  } catch (error) {
    console.error("Error al procesar el mensaje del chat:", error);
    return NextResponse.json(
      { error: "Ha ocurrido un error al procesar tu solicitud." },
      { status: 500 }
    );
  }
}
