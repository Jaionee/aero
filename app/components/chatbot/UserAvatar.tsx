import React from 'react';
import { User } from 'lucide-react';

const UserAvatar = () => {
  return (
    <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white flex-shrink-0">
      <User className="w-6 h-6" />
    </div>
  );
};

export default UserAvatar;