
import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [createChatBotMessage(`¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte?`)]
,  botName: "Aero4fa Asistente",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
};

export default config;
