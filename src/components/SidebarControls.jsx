import React from 'react';
import {
  Search,
  Maximize2,
  Minimize2,
  Type,
  AlignLeft,
  X,
  Compass,
  ArrowUp,
  Sliders,
  FileText,
  Code2
} from 'lucide-react';

export default function SidebarControls({
  prompts,
  searchQuery,
  setSearchQuery,
  allExpanded,
  onToggleExpandAll,
  fontSize,
  onChangeFontSize,
  wordWrap,
  onToggleWordWrap,
  renderMode = 'markdown',
  onToggleRenderMode,
  onScrollToPrompt,
  onScrollToTop
}) {
  return (
    <aside className="w-full lg:w-72 xl:w-80 shrink-0">
      <div className="lg:sticky lg:top-20 relative border border-neutral-300 dark:border-neutral-800 bg-white/95 dark:bg-black/95 backdrop-blur-md rounded-lg p-4 shadow-xs font-mono text-xs max-h-[calc(100vh-6rem)] overflow-y-auto flex flex-col gap-4">
        
        {/* Blueprint Corner Crosshairs */}
        <span className="absolute -top-1.5 -left-1.5 text-neutral-400 dark:text-neutral-600 text-xs select-none pointer-events-none">+</span>
        <span className="absolute -top-1.5 -right-1.5 text-neutral-400 dark:text-neutral-600 text-xs select-none pointer-events-none">+</span>
        <span className="absolute -bottom-1.5 -left-1.5 text-neutral-400 dark:text-neutral-600 text-xs select-none pointer-events-none">+</span>
        <span className="absolute -bottom-1.5 -right-1.5 text-neutral-400 dark:text-neutral-600 text-xs select-none pointer-events-none">+</span>

        {/* Sidebar Header */}
        <div className="flex items-center justify-between pb-3 border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center gap-2">
            <Sliders className="w-3.5 h-3.5 text-black dark:text-white" />
            <span className="font-bold text-black dark:text-white uppercase tracking-wider">
              CONTROLS
            </span>
          </div>
          <span className="text-[10px] text-neutral-400 font-medium">
            {prompts.length} PROMPT{prompts.length > 1 ? 'S' : ''}
          </span>
        </div>

        {/* Search / Filter Input */}
        <div>
          <label className="block text-[10px] text-neutral-500 uppercase tracking-wider mb-1.5 flex items-center justify-between">
            <span>SEARCH</span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-[10px] text-neutral-400 hover:text-black dark:hover:text-white cursor-pointer"
              >
                CLEAR
              </button>
            )}
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-neutral-400">
              <Search className="w-3.5 h-3.5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search prompts..."
              className="w-full pl-8 pr-7 py-1.5 text-xs bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 rounded text-black dark:text-white placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-2 flex items-center text-neutral-400 hover:text-black dark:hover:text-white cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Prompt Navigator List */}
        <div className="flex-1 min-h-0 flex flex-col">
          <div className="flex items-center justify-between text-[10px] text-neutral-500 uppercase tracking-wider mb-1.5">
            <span className="flex items-center gap-1">
              <Compass className="w-3 h-3" />
              <span>NAVIGATOR</span>
            </span>
          </div>
          
          <div className="space-y-1.5 max-h-48 lg:max-h-56 overflow-y-auto pr-1">
            {prompts.map((p, idx) => (
              <button
                key={p.id || idx}
                onClick={() => onScrollToPrompt(p.id)}
                className="w-full text-left p-2 rounded border border-neutral-200 dark:border-neutral-800/80 hover:border-black dark:hover:border-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white cursor-pointer group"
              >
                {p.category && (
                  <div className="text-[9px] text-neutral-400 dark:text-neutral-500 uppercase mb-0.5">
                    {p.category}
                  </div>
                )}
                <div className="font-medium truncate text-[11px] group-hover:underline">
                  {p.title}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Display Controls Section */}
        <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800 space-y-3">
          <div className="text-[10px] text-neutral-500 uppercase tracking-wider">
            DISPLAY
          </div>

          {/* Markdown Format vs Raw Toggle */}
          {onToggleRenderMode && (
            <button
              onClick={onToggleRenderMode}
              className={`w-full flex items-center justify-between px-3 py-1.5 rounded border transition-colors cursor-pointer ${
                renderMode === 'markdown'
                  ? 'bg-black text-white dark:bg-white dark:text-black border-transparent font-semibold'
                  : 'border-neutral-300 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-700 dark:text-neutral-300'
              }`}
              title="Toggle formatted Markdown vs raw text"
            >
              <span className="flex items-center gap-1.5">
                {renderMode === 'markdown' ? <FileText className="w-3.5 h-3.5" /> : <Code2 className="w-3.5 h-3.5" />}
                <span>FORMAT</span>
              </span>
              <span>{renderMode === 'markdown' ? 'MARKDOWN' : 'RAW'}</span>
            </button>
          )}

          {/* Expand / Collapse All */}
          <button
            onClick={onToggleExpandAll}
            className="w-full flex items-center justify-between px-3 py-1.5 rounded border border-neutral-300 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
          >
            <span className="flex items-center gap-1.5">
              {allExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              <span>CARDS</span>
            </span>
            <span className="font-bold">
              {allExpanded ? 'COLLAPSE ALL' : 'EXPAND ALL'}
            </span>
          </button>

          {/* Word Wrap Toggle */}
          <button
            onClick={onToggleWordWrap}
            className={`w-full flex items-center justify-between px-3 py-1.5 rounded border transition-colors cursor-pointer ${
              wordWrap
                ? 'bg-black text-white dark:bg-white dark:text-black border-transparent font-semibold'
                : 'border-neutral-300 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-700 dark:text-neutral-300'
            }`}
          >
            <span className="flex items-center gap-1.5">
              <AlignLeft className="w-3.5 h-3.5" />
              <span>WRAP</span>
            </span>
            <span>{wordWrap ? 'ON' : 'OFF'}</span>
          </button>

          {/* Font Size Selector */}
          <div className="flex items-center justify-between px-3 py-1.5 rounded border border-neutral-300 dark:border-neutral-800">
            <span className="flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400">
              <Type className="w-3.5 h-3.5" />
              <span>SIZE</span>
            </span>
            <div className="flex items-center border border-neutral-300 dark:border-neutral-700 rounded overflow-hidden">
              {['sm', 'md', 'lg'].map((sz) => (
                <button
                  key={sz}
                  onClick={() => onChangeFontSize(sz)}
                  className={`px-2 py-0.5 text-[10px] uppercase transition-colors cursor-pointer ${
                    fontSize === sz
                      ? 'bg-black text-white dark:bg-white dark:text-black font-bold'
                      : 'hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400'
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800">
          <button
            onClick={onScrollToTop}
            className="w-full flex items-center justify-center gap-1.5 py-1.5 rounded border border-neutral-300 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer text-[11px]"
          >
            <ArrowUp className="w-3 h-3" />
            <span>TOP OF PAGE</span>
          </button>
        </div>

      </div>
    </aside>
  );
}
