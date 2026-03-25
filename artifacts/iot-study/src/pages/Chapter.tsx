import React, { useEffect } from 'react';
import { useRoute, Link } from 'wouter';
import { chaptersData } from '@/data/chapters-data';
import { useStudyStore } from '@/store/use-study-store';
import { PageTransition } from '@/components/ui-elements';
import { MiniQuiz } from '@/components/MiniQuiz';
import { CheckCircle2, ChevronLeft, ChevronRight, Circle } from 'lucide-react';
import { cn } from '@/lib/utils';
import NotFound from './not-found';

export default function Chapter() {
  const [match, params] = useRoute('/chapter/:id');
  const chapterId = params?.id;
  
  const { completedChapters, toggleChapter, setLastVisitedChapter } = useStudyStore();
  
  const chapterIndex = chaptersData.findIndex(c => c.id === chapterId);
  const chapter = chaptersData[chapterIndex];
  
  useEffect(() => {
    if (chapterId) {
      setLastVisitedChapter(chapterId);
      window.scrollTo(0, 0);
    }
  }, [chapterId, setLastVisitedChapter]);

  if (!match || !chapter) {
    return <NotFound />;
  }

  const isCompleted = completedChapters.includes(chapter.id);
  const prevChapter = chapterIndex > 0 ? chaptersData[chapterIndex - 1] : null;
  const nextChapter = chapterIndex < chaptersData.length - 1 ? chaptersData[chapterIndex + 1] : null;

  return (
    <PageTransition>
      <div className="pb-20 max-w-4xl mx-auto">
        
        {/* Breadcrumb & Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link href="/" className="hover:text-primary transition-colors">Dashboard</Link>
            <ChevronRight className="w-4 h-4" />
            <span>Chapters</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium truncate">{chapter.title}</span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/60 pb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-foreground">
                {chapter.title}
              </h1>
              <p className="text-lg text-muted-foreground mt-3 max-w-2xl">
                {chapter.description}
              </p>
            </div>
            
            <button 
              onClick={() => toggleChapter(chapter.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all shrink-0",
                isCompleted 
                  ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 hover:bg-green-200" 
                  : "bg-primary text-primary-foreground shadow-md hover:shadow-lg hover:-translate-y-0.5"
              )}
            >
              {isCompleted ? (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  Completed
                </>
              ) : (
                <>
                  <Circle className="w-5 h-5" />
                  Mark Complete
                </>
              )}
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary">
          {chapter.content}
        </div>

        {/* Chapter Mini Quiz */}
        <MiniQuiz chapterId={chapter.id} />

        {/* Bottom Navigation */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between gap-4">
          {prevChapter ? (
            <Link href={`/chapter/${prevChapter.id}`} className="flex-1 group flex flex-col p-4 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-sm transition-all text-left">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1 flex items-center gap-1">
                <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Previous
              </span>
              <span className="font-medium text-foreground group-hover:text-primary transition-colors">{prevChapter.title}</span>
            </Link>
          ) : <div className="flex-1" />}
          
          {nextChapter ? (
            <Link href={`/chapter/${nextChapter.id}`} className="flex-1 group flex flex-col p-4 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-sm transition-all text-right items-end">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1 flex items-center gap-1">
                Next <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="font-medium text-foreground group-hover:text-primary transition-colors">{nextChapter.title}</span>
            </Link>
          ) : (
            <Link href="/quiz" className="flex-1 group flex flex-col p-4 rounded-2xl border border-primary bg-primary/5 hover:bg-primary/10 transition-all text-right items-end">
              <span className="text-xs font-bold text-primary uppercase tracking-wider mb-1 flex items-center gap-1">
                Ready? <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="font-medium text-primary">Take the Practice Quiz</span>
            </Link>
          )}
        </div>

      </div>
    </PageTransition>
  );
}
