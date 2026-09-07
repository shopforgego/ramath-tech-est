import React from 'react';
import { storeConfig } from '../config/store';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-11 w-auto" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-10 h-10 flex-shrink-0 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-black shadow-lg shadow-blue-500/25 rounded-xl p-1.5 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
          <rect x="20" y="15" width="60" height="70" rx="12" fill="none" stroke="currentColor" strokeWidth="6" /><circle cx="50" cy="72" r="4" fill="currentColor" /><path d="M35 30 L65 30 M35 45 L55 45" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="font-extrabold text-base sm:text-lg tracking-tight leading-tight">
          {storeConfig.storeNameAr}
        </span>
        <span className="text-[10px] opacity-75 font-medium">
          {storeConfig.companyNameAr}
        </span>
      </div>
    </div>
  );
};
