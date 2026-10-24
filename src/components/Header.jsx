import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function Header({ theme, setTheme }) {
  return (
    <header className="sticky top-0 z-30 border-b border-neutral-300 dark:border-neutral-800 bg-white/95 dark:bg-black/95 backdrop-blur-md transition-colors">
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Simple Minimalist Logo */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-base sm:text-lg font-bold tracking-tight text-black dark:text-white select-none">
            &lt;jc/prompt&gt;
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white animate-pulse" />
        </div>

        {/* Light / Dark Mode Toggle */}
        <div className="flex items-center border border-neutral-300 dark:border-neutral-800 rounded-md overflow-hidden text-xs font-mono shadow-xs">
          <button
            onClick={() => setTheme('light')}
            className={`flex items-center gap-1.5 px-3 py-1.5 transition-colors cursor-pointer ${
              theme === 'light'
                ? 'bg-black text-white font-bold'
                : 'bg-transparent text-neutral-500 hover:text-black dark:text-neutral-400'
            }`}
            title="Light mode"
          >
            <Sun className="w-3.5 h-3.5" />
            <span>LIGHT</span>
          </button>
          
          <button
            onClick={() => setTheme('dark')}
            className={`flex items-center gap-1.5 px-3 py-1.5 transition-colors cursor-pointer border-l border-neutral-300 dark:border-neutral-800 ${
              theme === 'dark'
                ? 'bg-white text-black font-bold'
                : 'bg-transparent text-neutral-500 hover:text-white dark:text-neutral-400'
            }`}
            title="Dark mode"
          >
            <Moon className="w-3.5 h-3.5" />
            <span>DARK</span>
          </button>
        </div>

      </div>
    </header>
  );
}
