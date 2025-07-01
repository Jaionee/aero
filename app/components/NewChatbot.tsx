
"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X } from "lucide-react";
import Chatbot from "react-chatbot-kit";
import config from "../lib/chatbot-config";
import MessageParser from "../lib/MessageParser";
import ActionProvider from "../lib/ActionProvider";

const useOutsideClick = (ref: React.RefObject<HTMLElement | null>, callback: () => void): void => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};

const NewChatbot = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const chatbotRef = useRef<HTMLDivElement>(null);

  const toggleChatbot = () => {
    setShowChatbot((prev) => !prev);
  };

  useOutsideClick(chatbotRef, () => {
    if (showChatbot) {
      setShowChatbot(false);
    }
  });

  return (
    <>
      {/* Chatbot Window with Animation */}
      <div
        ref={chatbotRef}
        className={`
          fixed bottom-24 right-5 z-50
          transition-all duration-300 ease-in-out
          ${showChatbot ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}
        `}
      >
        <div className="rounded-xl overflow-hidden bg-gray-900 shadow-2xl border border-gray-700">
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={toggleChatbot}
        className="fixed bottom-5 right-5 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:scale-110"
        aria-label="Toggle Chatbot"
      >
        {showChatbot ? (
          <X className="h-6 w-6" aria-hidden="true" />
        ) : (
          <MessageSquare className="h-6 w-6" aria-hidden="true" />
        )}
      </button>
    </>
  );
};

export default NewChatbot;
