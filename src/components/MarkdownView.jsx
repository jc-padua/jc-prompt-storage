import React, { useMemo } from 'react';
import { marked } from 'marked';

// Configure marked options
marked.setOptions({
  gfm: true,
  breaks: true
});

export default function MarkdownView({ content, fontSize = 'sm' }) {
  const html = useMemo(() => {
    if (!content) return '';
    try {
      return marked.parse(content);
    } catch (e) {
      console.error('Markdown parse error:', e);
      return content;
    }
  }, [content]);

  const fontSizeClass = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  }[fontSize] || 'text-xs';

  return (
    <div
      className={`markdown-body font-mono text-neutral-800 dark:text-neutral-200 leading-relaxed ${fontSizeClass}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
