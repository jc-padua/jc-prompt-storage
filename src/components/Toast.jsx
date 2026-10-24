import React from 'react';
import { Check } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-black text-black dark:text-white shadow-xl font-mono text-xs animate-in fade-in slide-in-from-bottom-2 duration-150">
      <Check className="w-4 h-4 text-black dark:text-white" />
      <span>{toast.message}</span>
    </div>
  );
}
