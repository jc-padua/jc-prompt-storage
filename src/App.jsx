import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import SidebarControls from './components/SidebarControls';
import PromptCard from './components/PromptCard';
import EmptyState from './components/EmptyState';
import Toast from './components/Toast';
import { PROMPTS } from './data/prompts';

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('jc_theme');
      return saved === 'light' ? 'light' : 'dark';
    } catch {
      return 'dark';
    }
  });

  const [toast, setToast] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [fontSize, setFontSize] = useState('sm'); // sm | md | lg
  const [wordWrap, setWordWrap] = useState(true);
  const [globalRenderMode, setGlobalRenderMode] = useState('markdown'); // 'markdown' | 'raw'

  // Expanded states map
  const [expandedMap, setExpandedMap] = useState(() => {
    const init = {};
    PROMPTS.forEach(p => {
      init[p.id] = true;
    });
    return init;
  });

  // Sync theme with <html> element & localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('jc_theme', theme);
    } catch (e) {
      // ignore
    }
  }, [theme]);

  const handleCopySuccess = (title) => {
    setToast({ message: `COPIED: ${title || 'PROMPT'}` });
    setTimeout(() => {
      setToast(null);
    }, 2500);
  };

  // Toggle individual card
  const handleToggleCard = (id) => {
    setExpandedMap(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Check if all are expanded
  const allExpanded = useMemo(() => {
    return PROMPTS.every(p => expandedMap[p.id]);
  }, [expandedMap]);

  // Toggle all cards
  const handleToggleExpandAll = () => {
    const targetState = !allExpanded;
    const nextMap = {};
    PROMPTS.forEach(p => {
      nextMap[p.id] = targetState;
    });
    setExpandedMap(nextMap);
  };

  // Smooth scroll to card
  const handleScrollToPrompt = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Ensure it is expanded if jumped to
      setExpandedMap(prev => ({ ...prev, [id]: true }));
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filtered prompts
  const filteredPrompts = useMemo(() => {
    if (!searchQuery.trim()) return PROMPTS;
    const q = searchQuery.toLowerCase().trim();
    return PROMPTS.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.content.toLowerCase().includes(q) ||
      (p.description && p.description.toLowerCase().includes(q)) ||
      (p.category && p.category.toLowerCase().includes(q)) ||
      (p.tag && p.tag.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-200 ${
        theme === 'dark' ? 'bg-lines-dark text-white' : 'bg-lines-light text-black'
      }`}
    >
      {/* Minimal Header */}
      <Header
        theme={theme}
        setTheme={setTheme}
      />

      {/* Main Container: Split Layout with Sticky Left Sidebar */}
      <main className="flex-1 max-w-[1700px] w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        
        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
          
          {/* Sticky Left Controls Sidebar */}
          {PROMPTS && PROMPTS.length > 0 && (
            <SidebarControls
              prompts={PROMPTS}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              allExpanded={allExpanded}
              onToggleExpandAll={handleToggleExpandAll}
              fontSize={fontSize}
              onChangeFontSize={setFontSize}
              wordWrap={wordWrap}
              onToggleWordWrap={() => setWordWrap(!wordWrap)}
              renderMode={globalRenderMode}
              onToggleRenderMode={() => setGlobalRenderMode(prev => prev === 'markdown' ? 'raw' : 'markdown')}
              onScrollToPrompt={handleScrollToPrompt}
              onScrollToTop={handleScrollToTop}
            />
          )}

          {/* Right Main Content Area: 3-Column Adaptive Grid */}
          <div className="flex-1 min-w-0 w-full">
            {filteredPrompts && filteredPrompts.length > 0 ? (
              <div className="flex flex-wrap gap-6 items-stretch">
                {filteredPrompts.map((prompt, idx) => (
                  <div
                    key={prompt.id || idx}
                    className={`flex-1 min-w-[320px] transition-all ${
                      filteredPrompts.length === 1
                        ? 'basis-full'
                        : filteredPrompts.length === 2
                        ? 'basis-full xl:basis-[calc(50%-12px)]'
                        : 'basis-full md:basis-[calc(50%-12px)] xl:basis-[calc(33.333%-16px)]'
                    }`}
                  >
                    <PromptCard
                      prompt={prompt}
                      isExpanded={Boolean(expandedMap[prompt.id])}
                      onToggleExpand={() => handleToggleCard(prompt.id)}
                      fontSize={fontSize}
                      wordWrap={wordWrap}
                      renderMode={globalRenderMode}
                      onCopySuccess={handleCopySuccess}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="border border-dashed border-neutral-300 dark:border-neutral-800 rounded-lg p-10 text-center font-mono text-xs text-neutral-500 bg-white/50 dark:bg-black/50">
                {searchQuery ? (
                  <div>
                    <p className="font-bold text-black dark:text-white mb-2">
                      NO PROMPTS MATCH FILTER: "{searchQuery}"
                    </p>
                    <button
                      onClick={() => setSearchQuery('')}
                      className="px-3 py-1 border border-neutral-300 dark:border-neutral-700 rounded hover:bg-neutral-100 dark:hover:bg-neutral-900 text-black dark:text-white transition-colors cursor-pointer"
                    >
                      CLEAR FILTER
                    </button>
                  </div>
                ) : (
                  <EmptyState />
                )}
              </div>
            )}
          </div>

        </div>

      </main>

      {/* Clean Minimal Footer */}
      <footer className="border-t border-neutral-300 dark:border-neutral-900 py-6 text-center text-xs font-mono text-neutral-500 dark:text-neutral-500 transition-colors bg-white/50 dark:bg-black/50 mt-12">
        <div className="max-w-[1700px] mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>&lt;jc/prompt&gt;</span>
          <span>Personal Prompt Storage</span>
        </div>
      </footer>

      {/* Action Toast */}
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
}
