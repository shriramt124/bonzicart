import React from 'react';
import { Headphones } from 'lucide-react';

export default function SupportButton() {
  return (
    <button className="hidden xl:flex items-center text-sm text-gray-600 hover:text-orange-500 transition-colors duration-200 p-1.5 rounded-full hover:bg-orange-50">
      <Headphones size={20} className="mr-1" />
      <div className="flex flex-col items-start">
        <span className="text-xs text-gray-500">
          Support
        </span>
        <span className="font-medium text-xs">
          24/7 Help
        </span>
      </div>
    </button>
  );
}