import React, { useState, useMemo } from 'react';
import { flashcardData } from '@/data/flashcard-data';
import { chaptersData } from '@/data/chapters-data';
import { PageTransition } from '@/components/ui-elements';
import { cn } from '@/lib/utils';
import { Search, X } from 'lucide-react';

const chapterColorMap: Record<string, string> = {
  ch1: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300",
  ch2: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  ch3: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  ch4: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
  ch5: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300",
  ch6: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
  ch7: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
};

const chapterShortName: Record<string, string> = {
  ch1: "Ch.1 Intro",
  ch2: "Ch.2 Architecture",
  ch3: "Ch.3 Protocols",
  ch4: "Ch.4 Devices",
  ch5: "Ch.5 Cloud",
  ch6: "Ch.6 Security",
  ch7: "Ch.7 Applications",
};

export default function Glossary() {
  const [search, setSearch] = useState('');
  const [filterChapter, setFilterChapter] = useState<string>('all');

  const chapterOptions = [
    { id: 'all', label: 'All' },
    ...chaptersData.map(c => ({ id: c.id, label: `Ch.${c.id.replace('ch', '')}` }))
  ];

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return [...flashcardData]
      .filter(card => {
        const matchSearch = !q || card.term.toLowerCase().includes(q) || card.definition.toLowerCase().includes(q);
        const matchChapter = filterChapter === 'all' || card.chapterId === filterChapter;
        return matchSearch && matchChapter;
      })
      .sort((a, b) => a.term.localeCompare(b.term));
  }, [search, filterChapter]);

  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-display font-extrabold tracking-tight text-foreground">Glossary</h1>
          <p className="text-muted-foreground mt-1">{flashcardData.length} key IoT terms — search and filter to find what you need</p>
        </div>

        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search terms and definitions..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-9 py-2.5 text-sm rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
            />
            {search && (
              <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex gap-1.5 flex-wrap">
            {chapterOptions.map(opt => (
              <button
                key={opt.id}
                onClick={() => setFilterChapter(opt.id)}
                className={cn(
                  "px-3 py-2 rounded-xl text-xs font-semibold border transition-all",
                  filterChapter === opt.id
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card border-border text-muted-foreground hover:border-primary/40"
                )}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className="text-xs text-muted-foreground mb-4">
          {filtered.length === 0 ? 'No terms match your search.' : `${filtered.length} term${filtered.length !== 1 ? 's' : ''} found`}
        </p>

        {/* Term List */}
        <div className="space-y-3">
          {filtered.map(card => (
            <div
              key={card.id}
              className="bg-card border border-border rounded-2xl p-5 hover:border-primary/20 hover:shadow-sm transition-all duration-200"
            >
              <div className="flex items-start gap-3 flex-wrap">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="font-display font-bold text-foreground text-base">{card.term}</h3>
                    <span className={cn(
                      "text-xs font-semibold px-2 py-0.5 rounded-full",
                      chapterColorMap[card.chapterId] ?? "bg-muted text-muted-foreground"
                    )}>
                      {chapterShortName[card.chapterId] ?? card.chapterId}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {search ? highlightMatch(card.definition, search) : card.definition}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No terms match your search. Try a different query.</p>
            <button onClick={() => { setSearch(''); setFilterChapter('all'); }} className="mt-3 text-sm text-primary font-semibold hover:underline">
              Clear filters
            </button>
          </div>
        )}
      </div>
    </PageTransition>
  );
}

function highlightMatch(text: string, query: string): React.ReactNode {
  if (!query) return text;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part) ? <mark key={i} className="bg-yellow-200 dark:bg-yellow-900/50 text-foreground rounded px-0.5">{part}</mark> : part
  );
}
