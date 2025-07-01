import React from 'react';
import { createChatBotMessage } from "react-chatbot-kit";
import ChatHeader from '../components/chatbot/ChatHeader';
import BotAvatar from '../components/chatbot/BotAvatar';
import UserAvatar from '../components/chatbot/UserAvatar';

const config = {
  initialMessages: [createChatBotMessage(`¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte?`)],
  botName: "Aero4 Asistente",
  customComponents: {
    header: () => <ChatHeader />,
    botAvatar: (props) => <BotAvatar {...props} />,
    userAvatar: (props) => <UserAvatar {...props} />,
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "#f3f4f6", // Fondo gris claro para el bot
      color: "#1f2937", // Texto gris oscuro
      padding: "10px 15px", // Espaciado interno
      borderRadius: "10px", // Bordes redondeados
      maxWidth: "70%", // Ancho máximo para las burbujas
      marginLeft: "auto", // Alinear a la derecha
      marginRight: "10px",
    },
    userMessageBox: {
      backgroundColor: "#e0e7ff", // Fondo índigo claro para el usuario
      color: "#1f2937", // Texto gris oscuro
      padding: "10px 15px", // Espaciado interno
      borderRadius: "10px", // Bordes redondeados
      maxWidth: "70%", // Ancho máximo para las burbujas
      marginRight: "auto", // Alinear a la izquierda
      marginLeft: "10px",
    },
    chatButton: {
      backgroundColor: "#4f46e5", // Índigo-600
      color: "white", // Color del icono
      borderRadius: "50%", // Botón circular
      padding: "12px", // Más padding para un tamaño adecuado
      width: "40px", // Tamaño fijo para consistencia
      height: "40px", // Tamaño fijo para consistencia
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  messageContainerStyle: {
    display: "flex",
    flexDirection: "column", // Mensajes en columna
    gap: "10px", // Espacio entre mensajes
  },
  messageParser: (message) => {
    if (message.type === "user") {
      return {
        ...message,
        props: {
          ...message.props,
          style: {
            ...message.props.style,
            alignSelf: "flex-start", // Mensajes del usuario a la izquierda
          },
        },
      };
    } else {
      return {
        ...message,
        props: {
          ...message.props,
          style: {
            ...message.props.style,
            alignSelf: "flex-end", // Mensajes del bot a la derecha
          },
        },
      };
    }
  },
};

export default config;