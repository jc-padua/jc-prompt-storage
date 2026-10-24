import React from 'react';
import { Terminal } from 'lucide-react';

export default function EmptyState() {
  return (
    <div className="border border-dashed border-neutral-300 dark:border-neutral-800 rounded-xl p-8 sm:p-12 text-center bg-white/50 dark:bg-black/50 backdrop-blur-xs">
      <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center border border-neutral-300 dark:border-neutral-800 rounded-lg text-neutral-600 dark:text-neutral-400">
        <Terminal className="w-5 h-5" />
      </div>
      <h3 className="font-mono text-sm sm:text-base font-bold text-black dark:text-white mb-2">
        &lt;storage / empty&gt;
      </h3>
      <p className="font-mono text-xs text-neutral-500 dark:text-neutral-400 max-w-md mx-auto leading-relaxed">
        No prompts stored yet. When you are ready, provide your prompts and they will appear here formatted and ready to copy.
      </p>
      <div className="mt-4 font-mono text-[11px] text-neutral-400 dark:text-neutral-600">
        src/data/prompts.js
      </div>
    </div>
  );
}
