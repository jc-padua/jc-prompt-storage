# <jc/prompt> — Personal Prompt Storage

A clean, high-contrast, distraction-free storage website for AI master prompts and custom prompt libraries with sticky workbench controls and Markdown formatting.

---

## ⚡ Design & Features

- **Distraction-Free Layout**: Stripped of unnecessary developer jargon, line numbers, specification text, and index clutter. Focused strictly on your prompts and easy reading/copying.
- **Rich Markdown Formatting**:
  - Automatically parses and renders markdown headers (`#`, `##`, `###`), bold text (`**`), bullet lists (`*`, `-`), code blocks, and dividers into clean typography.
  - Per-card and global toggle: Switch between **`[MD]`** (formatted view) and **`[RAW]`** (raw monospace view).
  - **Pristine Copying**: Clicking **`COPY`** always copies the exact, untouched raw prompt text to your clipboard.
- **Sticky Left Control Sidebar (`lg:sticky lg:top-20`)**:
  - Pinned workbench on the left with search filtering, prompt navigator (`JUMP`), expand/collapse toggles, word wrap, and font size scaling (`SM | MD | LG`).
- **3-Column Adaptive Grid**:
  - 3-column layout on wide screens.
  - When 2 cards are present, they automatically expand to **50% of the row width** to fill the container seamlessly.
- **Monochrome Inverted Design**:
  - Pure black and white with technical blueprint grid lines and corner crosshair markers (`+`).
  - Toggle between `[LIGHT]` and `[DARK]` modes.

---

## 📝 Stored Prompts

1. `Long-Form Business Partner UGC Organic-Style Ad Package`
2. `Universal AI Video Advertisement — Master Prompt Generator`

To add more prompts, add them into [`src/data/prompts.js`](file:///c:/Users/Lenovo/Documents/Antigravity%20Projects/jc-prompt-storage/src/data/prompts.js).

---

## 🚀 Running Locally

```bash
npm run dev
```
Open **[http://localhost:5173/](http://localhost:5173/)** in your browser.
