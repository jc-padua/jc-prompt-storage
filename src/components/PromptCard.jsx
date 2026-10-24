import React, { useState, useRef } from 'react';
import {
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  MousePointerClick,
  FileText,
  Code2
} from 'lucide-react';
import { copyToClipboard } from '../utils/promptUtils';
import MarkdownView from './MarkdownView';

export default function PromptCard({
  prompt,
  isExpanded = true,
  onToggleExpand,
  fontSize = 'sm',
  wordWrap = true,
  renderMode = 'markdown',
  onCopySuccess
}) {
  const [copied, setCopied] = useState(false);
  const [selectedAll, setSelectedAll] = useState(false);
  const [localRenderMode, setLocalRenderMode] = useState(null);
  const contentContainerRef = useRef(null);

  const activeRenderMode = localRenderMode || renderMode;

  const handleCopy = async () => {
    await copyToClipboard(prompt.content);
    setCopied(true);
    if (onCopySuccess) onCopySuccess(prompt.title);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSelectAll = () => {
    if (contentContainerRef.current) {
      const range = document.createRange();
      range.selectNodeContents(contentContainerRef.current);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      setSelectedAll(true);
      setTimeout(() => setSelectedAll(false), 1500);
    }
  };

  // Font size class mapping for raw view
  const fontSizeClass = {
    sm: 'text-xs leading-relaxed',
    md: 'text-sm leading-relaxed',
    lg: 'text-base leading-relaxed'
  }[fontSize] || 'text-xs leading-relaxed';

  return (
    <article
      id={prompt.id}
      className="relative border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-black rounded-lg transition-all shadow-xs flex flex-col justify-between h-full"
    >
      {/* Blueprint Corner Crosshairs */}
      <span className="absolute -top-1.5 -left-1.5 text-neutral-400 dark:text-neutral-600 text-xs font-mono select-none pointer-events-none">+</span>
      <span className="absolute -top-1.5 -right-1.5 text-neutral-400 dark:text-neutral-600 text-xs font-mono select-none pointer-events-none">+</span>
      <span className="absolute -bottom-1.5 -left-1.5 text-neutral-400 dark:text-neutral-600 text-xs font-mono select-none pointer-events-none">+</span>
      <span className="absolute -bottom-1.5 -right-1.5 text-neutral-400 dark:text-neutral-600 text-xs font-mono select-none pointer-events-none">+</span>

      <div>
        {/* Category & Tag Strip (Clean, no indexes or counters) */}
        {(prompt.category || prompt.tag) && (
          <div className="flex items-center gap-2 px-4 py-2 border-b border-neutral-200 dark:border-neutral-800 text-[11px] font-mono text-neutral-500 select-none">
            {prompt.category && (
              <span className="px-2 py-0.5 rounded border border-neutral-300 dark:border-neutral-800 uppercase tracking-wider text-black dark:text-white font-medium">
                {prompt.category}
              </span>
            )}
            {prompt.tag && (
              <span className="text-neutral-400 dark:text-neutral-500">#{prompt.tag}</span>
            )}
          </div>
        )}

        {/* Card Header: Title Section (Full Width) */}
        <div className="p-4 border-b border-neutral-200 dark:border-neutral-800 flex flex-col gap-3">
          
          {/* Full-width Title & Description */}
          <div className="w-full">
            <h2 className="font-mono text-base font-bold text-black dark:text-white tracking-tight leading-snug break-words">
              {prompt.title}
            </h2>
            {prompt.description && (
              <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1.5 font-mono leading-relaxed">
                {prompt.description}
              </p>
            )}
          </div>

          {/* Action Controls Bar Placed Underneath Title */}
          <div className="flex items-center justify-between gap-2 pt-2 border-t border-neutral-200/70 dark:border-neutral-800/70 flex-wrap">
            
            <div className="flex items-center gap-1.5">
              {/* View Mode Toggle: Markdown vs Raw */}
              <button
                onClick={() => setLocalRenderMode(activeRenderMode === 'markdown' ? 'raw' : 'markdown')}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono border border-neutral-300 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
                title={`Switch to ${activeRenderMode === 'markdown' ? 'Raw Code' : 'Formatted Markdown'}`}
              >
                {activeRenderMode === 'markdown' ? (
                  <>
                    <Code2 className="w-3.5 h-3.5" />
                    <span>RAW</span>
                  </>
                ) : (
                  <>
                    <FileText className="w-3.5 h-3.5" />
                    <span>MD</span>
                  </>
                )}
              </button>

              {/* Select All Text */}
              <button
                onClick={handleSelectAll}
                className="flex items-center justify-center p-1.5 rounded text-xs font-mono border border-neutral-300 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
                title="Select entire prompt text"
              >
                <MousePointerClick className="w-3.5 h-3.5" />
              </button>

              {/* Expand / Collapse */}
              <button
                onClick={onToggleExpand}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono border border-neutral-300 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
                title={isExpanded ? "Collapse preview" : "Expand preview"}
              >
                {isExpanded ? (
                  <>
                    <ChevronUp className="w-3.5 h-3.5" />
                    <span>HIDE</span>
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-3.5 h-3.5" />
                    <span>VIEW</span>
                  </>
                )}
              </button>
            </div>

            {/* Copy Prompt Primary Button */}
            <button
              onClick={handleCopy}
              className={`flex items-center gap-1.5 px-3.5 py-1 rounded text-xs font-mono font-bold border transition-all cursor-pointer ${
                copied
                  ? 'bg-black text-white dark:bg-white dark:text-black border-transparent shadow-xs'
                  : 'border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'
              }`}
              title="Copy exact prompt text to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>COPIED ✓</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>COPY</span>
                </>
              )}
            </button>

          </div>

        </div>

        {/* Prompt Body */}
        {isExpanded && (
          <div className="p-3.5 sm:p-4">
            <div className="relative rounded border border-neutral-300 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-950/70 overflow-hidden">
              
              {/* Content Area */}
              <div
                ref={contentContainerRef}
                className="p-4 overflow-x-auto max-h-[500px] overflow-y-auto select-all"
              >
                {activeRenderMode === 'markdown' ? (
                  /* Formatted Markdown View */
                  <MarkdownView content={prompt.content} fontSize={fontSize} />
                ) : (
                  /* Raw View */
                  <pre
                    className={`font-mono text-neutral-900 dark:text-neutral-200 ${fontSizeClass} ${
                      wordWrap ? 'whitespace-pre-wrap' : 'whitespace-pre'
                    }`}
                  >
                    {prompt.content}
                  </pre>
                )}
              </div>

            </div>
          </div>
        )}
      </div>

      {/* Collapsed Preview Teaser */}
      {!isExpanded && (
        <div
          onClick={onToggleExpand}
          className="px-4 py-3 bg-neutral-50/50 dark:bg-neutral-950/50 text-xs font-mono text-neutral-500 hover:text-black dark:hover:text-white cursor-pointer transition-colors flex items-center justify-between"
        >
          <span className="truncate">
            &gt; {prompt.content.slice(0, 60)}...
          </span>
          <span className="text-[10px] shrink-0 font-bold uppercase underline ml-2">
            Click to view
          </span>
        </div>
      )}
    </article>
  );
}
