// app/api/contact/route.ts
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Se crea una instancia de Resend usando la API Key de tus variables de entorno
const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.TO_EMAIL; // Tu correo: filmacionaerea@aero4.net

export async function POST(req: Request) {
  try {
    // 1. Extraer los datos del formulario que vienen en la petición
    const { nombre, email, mensaje } = await req.json();

    if (!toEmail) {
      throw new Error("El destinatario del correo no está configurado.");
    }

    // 2. Usar Resend para enviar el correo
    const { data, error } = await resend.emails.send({
      from: 'Aero4 Contacto <onboarding@resend.dev>', // Dominio de Resend, funciona sin configurar nada más
      to: [toEmail],
      subject: `Nuevo Mensaje de Contacto de ${nombre}`,
      html: `
        <h1>Nuevo mensaje desde la web Aero4</h1>
        <p><strong>Nombre:</strong> </p>
        <p><strong>Email:</strong> </p>
        <hr />
        <p><strong>Mensaje:</strong></p>
        <p></p>
      `,
    });

    // Si hay un error en el envío, devuélvelo
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // 3. Devolver una respuesta exitosa
    return NextResponse.json({ message: '¡Mensaje enviado con éxito!' });

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
