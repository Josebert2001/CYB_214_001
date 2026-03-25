import React from 'react';
import { Link } from 'wouter';
import { useStudyStore } from '@/store/use-study-store';
import { chaptersData } from '@/data/chapters-data';
import { PageTransition } from '@/components/ui-elements';
import { BookOpen, Award, ChevronRight, PlayCircle, FileText, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Dashboard() {
  const { completedChapters, lastVisitedChapter, quizScores } = useStudyStore();
  
  const progressPercent = Math.round((completedChapters.length / chaptersData.length) * 100);
  const bestQuizScore = quizScores.length > 0 ? Math.max(...quizScores) : null;
  
  // Find first incomplete chapter for the resume button
  const nextChapter = chaptersData.find(c => !completedChapters.includes(c.id))?.id || chaptersData[0].id;
  const resumeLink = lastVisitedChapter ? `/chapter/${lastVisitedChapter}` : `/chapter/${nextChapter}`;

  return (
    <PageTransition>
      <div className="space-y-8 pb-10">
        
        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden bg-primary text-primary-foreground shadow-xl shadow-primary/20 p-8 md:p-12 border border-primary-border">
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-64 h-64 bg-black/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10">
            <h1 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4">
              Master the Internet of Things
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mb-8">
              Your comprehensive study guide for the upcoming exam. Master the architecture, protocols, security, and applications of IoT.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href={resumeLink} className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-bold hover:bg-white/90 transition-colors shadow-lg hover:-translate-y-0.5 active:translate-y-0">
                <PlayCircle className="w-5 h-5" />
                {completedChapters.length === 0 ? "Start Learning" : "Resume Study"}
              </Link>
              <Link href="/quiz" className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-md text-white border border-white/20 px-6 py-3 rounded-xl font-bold hover:bg-white/20 transition-colors">
                <Award className="w-5 h-5" />
                Take Practice Quiz
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-card p-6 rounded-2xl border border-border shadow-sm flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <p className="text-muted-foreground text-sm font-medium">Course Progress</p>
              <h3 className="text-2xl font-bold font-display">{progressPercent}%</h3>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-2xl border border-border shadow-sm flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-muted-foreground text-sm font-medium">Chapters Read</p>
              <h3 className="text-2xl font-bold font-display">{completedChapters.length} / {chaptersData.length}</h3>
            </div>
          </div>

          <div className="bg-card p-6 rounded-2xl border border-border shadow-sm flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <p className="text-muted-foreground text-sm font-medium">Best Quiz Score</p>
              <h3 className="text-2xl font-bold font-display">{bestQuizScore !== null ? `${bestQuizScore}/30` : '-'}</h3>
            </div>
          </div>
        </div>

        {/* Course Modules */}
        <div>
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
            Course Modules
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {chaptersData.map((chapter, index) => {
              const isCompleted = completedChapters.includes(chapter.id);
              return (
                <Link key={chapter.id} href={`/chapter/${chapter.id}`} className="group bg-card hover:bg-accent/5 border border-border hover:border-accent/30 rounded-2xl p-5 transition-all duration-300 shadow-sm hover:shadow-md flex items-start gap-4">
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0",
                    isCompleted ? "bg-green-100 text-green-600" : "bg-muted text-muted-foreground group-hover:bg-accent/20 group-hover:text-accent"
                  )}>
                    {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground group-hover:text-accent transition-colors">{chapter.title.replace(/^\d+\.\s*/, '')}</h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{chapter.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        
        {/* Original Materials */}
        <div className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-6 md:p-8 border border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-display font-bold mb-2">Need the original context?</h3>
            <p className="text-muted-foreground">View the original CamScanner PDFs provided for the course directly within the app.</p>
          </div>
          <Link href="/pdfs" className="bg-background text-foreground hover:bg-accent hover:text-accent-foreground px-6 py-3 rounded-xl font-semibold transition-colors border border-border shadow-sm whitespace-nowrap flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Open PDF Viewer
          </Link>
        </div>

      </div>
    </PageTransition>
  );
}
