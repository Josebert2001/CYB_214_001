import React, { useState, useEffect } from 'react';
import { flashcardData } from '@/data/flashcard-data';
import { chaptersData } from '@/data/chapters-data';
import { PageTransition } from '@/components/ui-elements';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, RotateCcw, Layers } from 'lucide-react';

export default function Flashcards() {
  const [selectedChapter, setSelectedChapter] = useState<string>('all');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [shuffled, setShuffled] = useState(false);
  const [cards, setCards] = useState(flashcardData);

  const chapterOptions = [
    { id: 'all', label: 'All Chapters' },
    ...chaptersData.map(c => ({ id: c.id, label: c.title }))
  ];

  useEffect(() => {
    const filtered = selectedChapter === 'all'
      ? flashcardData
      : flashcardData.filter(f => f.chapterId === selectedChapter);
    const ordered = shuffled ? [...filtered].sort(() => Math.random() - 0.5) : filtered;
    setCards(ordered);
    setCurrentIdx(0);
    setFlipped(false);
  }, [selectedChapter, shuffled]);

  const card = cards[currentIdx];
  const total = cards.length;

  const goNext = () => {
    setFlipped(false);
    setTimeout(() => setCurrentIdx(i => Math.min(i + 1, total - 1)), 150);
  };

  const goPrev = () => {
    setFlipped(false);
    setTimeout(() => setCurrentIdx(i => Math.max(i - 1, 0)), 150);
  };

  const handleFlip = () => setFlipped(f => !f);

  const chapterLabel = chaptersData.find(c => c.id === card?.chapterId)?.title ?? '';

  if (total === 0) {
    return (
      <PageTransition>
        <div className="max-w-2xl mx-auto text-center mt-20">
          <p className="text-muted-foreground">No flashcards for this selection.</p>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-display font-extrabold tracking-tight text-foreground">Flashcards</h1>
          <p className="text-muted-foreground mt-1">{total} cards — click the card to reveal the definition</p>
        </div>

        {/* Chapter Filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          {chapterOptions.map(opt => (
            <button
              key={opt.id}
              onClick={() => setSelectedChapter(opt.id)}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border",
                selectedChapter === opt.id
                  ? "bg-primary text-primary-foreground border-primary shadow-sm"
                  : "bg-card border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
              )}
            >
              {opt.id === 'all' ? 'All Chapters' : opt.label.split('.')[0]}
            </button>
          ))}
        </div>

        {/* Controls row */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-muted-foreground font-medium">
            Card {currentIdx + 1} / {total}
          </span>
          <button
            onClick={() => setShuffled(s => !s)}
            className={cn(
              "flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all",
              shuffled
                ? "bg-primary/10 text-primary border-primary/30"
                : "bg-card border-border text-muted-foreground hover:border-primary/30"
            )}
          >
            <Layers className="w-3.5 h-3.5" />
            {shuffled ? "Shuffled" : "Shuffle"}
          </button>
        </div>

        {/* Flip Card */}
        <div
          className="relative h-72 md:h-80 cursor-pointer select-none"
          style={{ perspective: '1200px' }}
          onClick={handleFlip}
        >
          <div
            className="relative w-full h-full transition-transform duration-500"
            style={{
              transformStyle: 'preserve-3d',
              transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            }}
          >
            {/* Front */}
            <div
              className="absolute inset-0 rounded-3xl border-2 border-border bg-card shadow-lg flex flex-col items-center justify-center p-8 text-center"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <div className="text-xs font-semibold text-primary/70 uppercase tracking-wider mb-4 border border-primary/20 rounded-full px-3 py-1 bg-primary/5">
                {chapterLabel.replace(/^\d+\.\s*/, '')}
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-extrabold text-foreground leading-tight">
                {card?.term}
              </h2>
              <p className="text-sm text-muted-foreground mt-6">Tap to reveal definition</p>
            </div>

            {/* Back */}
            <div
              className="absolute inset-0 rounded-3xl border-2 border-primary/40 bg-primary/5 shadow-lg flex flex-col items-center justify-center p-8 text-center"
              style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
            >
              <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-4">
                Definition
              </div>
              <p className="text-base md:text-lg text-foreground leading-relaxed font-medium">
                {card?.definition}
              </p>
              <p className="text-xs text-muted-foreground mt-6">Tap to flip back</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={goPrev}
            disabled={currentIdx === 0}
            className="p-3 rounded-xl border border-border bg-card hover:border-primary/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Progress dots (max 10 shown) */}
          <div className="flex gap-1.5 overflow-hidden max-w-[200px]">
            {cards.slice(Math.max(0, currentIdx - 4), Math.min(total, currentIdx + 6)).map((_, i) => {
              const absIdx = Math.max(0, currentIdx - 4) + i;
              return (
                <button
                  key={absIdx}
                  onClick={() => { setFlipped(false); setCurrentIdx(absIdx); }}
                  className={cn(
                    "w-2 h-2 rounded-full shrink-0 transition-all",
                    absIdx === currentIdx ? "bg-primary w-4" : "bg-border hover:bg-primary/40"
                  )}
                />
              );
            })}
          </div>

          <button
            onClick={goNext}
            disabled={currentIdx === total - 1}
            className="p-3 rounded-xl border border-border bg-card hover:border-primary/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Reset */}
        {currentIdx === total - 1 && (
          <div className="text-center mt-6">
            <button
              onClick={() => { setCurrentIdx(0); setFlipped(false); }}
              className="text-sm text-primary font-semibold hover:underline flex items-center gap-1 mx-auto"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Start over
            </button>
          </div>
        )}
      </div>
    </PageTransition>
  );
}
