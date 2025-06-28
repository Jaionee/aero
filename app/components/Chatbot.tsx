'use client';

import React from 'react';
import Script from 'next/script';

// Extend the Window interface to include initChatbot for TypeScript
declare global {
  interface Window {
    initChatbot?: (options: {
      container: HTMLElement | null;
      chatbotTitle: string;
      chatbotDescription: string;
      welcomeMessage: string;
    }) => void;
  }
}

export default function Chatbot() {
  const handleScriptLoad = () => {
    if (typeof window.initChatbot === 'function') {
      window.initChatbot({
        container: document.getElementById('chatbot-container'),
        chatbotTitle: 'Aero4fa Asistente IA',
        chatbotDescription: 'Informa sobre los productos y servicios de Aero4fa',
        welcomeMessage: '¡Hola! Bienvenido al chat de Aero4fa. Soy tu asistente virtual y estoy aquí para ayudarte a descubrir todos los servicios y productos que ofrecemos. ¿Te gustaría saber más sobre alguna solución en particular o revisar nuestras ofertas especiales? ¡Estoy aquí para asistirte!'
      });
    }
  };

  return (
    <>
      <div id="chatbot-container" className="relative z-[9999]" />
      <Script
        src="https://beta.pickaxeproject.com/embed.js"
        strategy="lazyOnload"
        onLoad={handleScriptLoad}
      />
    </>
  );
}