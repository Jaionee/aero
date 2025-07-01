import React from 'react';
import { Bot } from 'lucide-react';

const BotAvatar = () => {
  return (
    <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white flex-shrink-0">
      <Bot className="w-6 h-6" />
    </div>
  );
};

export default BotAvatar;