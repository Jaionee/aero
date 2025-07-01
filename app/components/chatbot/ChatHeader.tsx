import React from 'react';
import { Bot } from 'lucide-react';

const ChatHeader = () => {
  return (
    <div className="bg-gray-800 text-white px-4 py-3 rounded-t-xl flex items-center gap-3 border-b border-gray-700">
      <div className="bg-indigo-600 p-2 rounded-full">
        <Bot className="w-5 h-5" />
      </div>
      <div>
        <p className="font-semibold text-base">Aero4 Asistente</p>
        <p className="text-xs text-green-400">Online</p>
      </div>
    </div>
  );
};

export default ChatHeader;