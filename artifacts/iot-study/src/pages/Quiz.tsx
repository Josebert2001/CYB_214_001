import React, { useState } from 'react';
import { quizData } from '@/data/quiz-data';
import { useStudyStore } from '@/store/use-study-store';
import { PageTransition, ProgressBar } from '@/components/ui-elements';
import { CheckCircle2, XCircle, RotateCcw, Award, ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'wouter';

export default function Quiz() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  
  const { addQuizScore } = useStudyStore();
  
  const question = quizData[currentIdx];
  const totalQuestions = quizData.length;
  const progress = ((currentIdx) / totalQuestions) * 100;

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    
    setIsAnswered(true);
    if (selectedOption === question.correctAnswer) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < totalQuestions - 1) {
      setCurrentIdx(i => i + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      window.scrollTo(0, 0);
    } else {
      setIsFinished(true);
      // Determine final score since state update might be slightly delayed in this render cycle
      const finalScore = score + (selectedOption === question.correctAnswer ? 1 : 0);
      addQuizScore(finalScore);
    }
  };

  const resetQuiz = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
    window.scrollTo(0, 0);
  };

  if (isFinished) {
    const percentage = Math.round((score / totalQuestions) * 100);
    let feedback = "";
    if (percentage >= 90) feedback = "Outstanding! You're fully prepared.";
    else if (percentage >= 70) feedback = "Great job! You have a solid grasp of the concepts.";
    else if (percentage >= 50) feedback = "Good effort, but you might want to review a few chapters.";
    else feedback = "Keep studying! Review the chapters and try again.";

    return (
      <PageTransition>
        <div className="max-w-2xl mx-auto mt-10 text-center">
          <div className="bg-card p-10 rounded-3xl border border-border shadow-xl">
            <div className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-12 h-12" />
            </div>
            <h2 className="text-4xl font-display font-extrabold mb-4">Quiz Complete!</h2>
            <div className="text-7xl font-bold text-primary mb-6">{percentage}%</div>
            <p className="text-xl text-muted-foreground mb-2">You scored {score} out of {totalQuestions}</p>
            <p className="text-foreground font-medium mb-10">{feedback}</p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={resetQuiz}
                className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-5 h-5" /> Retake Quiz
              </button>
              <Link 
                href="/"
                className="px-8 py-3 rounded-xl bg-secondary text-secondary-foreground font-bold hover:bg-secondary/80 transition-all flex items-center justify-center gap-2"
              >
                <Home className="w-5 h-5" /> Back to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto">
        
        {/* Header & Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-end mb-4">
            <div>
              <h1 className="text-3xl font-display font-bold">Practice Quiz</h1>
              <p className="text-muted-foreground mt-1">Test your IoT knowledge</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary">{currentIdx + 1} <span className="text-muted-foreground text-lg">/ {totalQuestions}</span></div>
            </div>
          </div>
          <ProgressBar progress={progress} />
        </div>

        {/* Question Card */}
        <div className="bg-card rounded-2xl border border-border shadow-md overflow-hidden">
          
          <div className="p-6 md:p-8 border-b border-border bg-slate-50/50 dark:bg-slate-900/50">
            <div className="flex items-center gap-2 mb-4">
              <span className={cn(
                "px-2.5 py-1 text-xs font-bold rounded-md uppercase tracking-wider",
                question.difficulty === 'Easy' ? "bg-green-100 text-green-700" :
                question.difficulty === 'Medium' ? "bg-yellow-100 text-yellow-700" :
                "bg-red-100 text-red-700"
              )}>
                {question.difficulty}
              </span>
              <span className="text-muted-foreground text-sm font-medium">Question {currentIdx + 1}</span>
            </div>
            <h2 className="text-xl md:text-2xl font-semibold leading-relaxed text-foreground">
              {question.question}
            </h2>
          </div>

          <div className="p-6 md:p-8 space-y-3">
            {question.options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === question.correctAnswer;
              
              let styleClass = "border-border hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-slate-800/50";
              let Icon = null;
              
              if (isAnswered) {
                if (isCorrect) {
                  styleClass = "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-900 dark:text-green-100";
                  Icon = <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />;
                } else if (isSelected && !isCorrect) {
                  styleClass = "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-900 dark:text-red-100";
                  Icon = <XCircle className="w-5 h-5 text-red-500 shrink-0" />;
                } else {
                  styleClass = "border-border opacity-50";
                }
              } else if (isSelected) {
                styleClass = "border-primary bg-primary/5 text-primary ring-1 ring-primary";
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  disabled={isAnswered}
                  className={cn(
                    "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between gap-4",
                    styleClass
                  )}
                >
                  <span className="font-medium">{option}</span>
                  {Icon}
                </button>
              );
            })}
          </div>
          
          {/* Explanation Box */}
          {isAnswered && (
            <div className={cn(
              "m-6 md:m-8 mt-0 p-5 rounded-xl border",
              selectedOption === question.correctAnswer 
                ? "bg-green-50 border-green-200 dark:bg-green-900/10 dark:border-green-900/30" 
                : "bg-red-50 border-red-200 dark:bg-red-900/10 dark:border-red-900/30"
            )}>
              <h4 className={cn(
                "font-bold mb-2 flex items-center gap-2",
                selectedOption === question.correctAnswer ? "text-green-700 dark:text-green-400" : "text-red-700 dark:text-red-400"
              )}>
                {selectedOption === question.correctAnswer ? "Correct!" : "Incorrect"}
              </h4>
              <p className="text-sm text-foreground/80 leading-relaxed">{question.explanation}</p>
            </div>
          )}

          <div className="p-6 md:p-8 pt-0 flex justify-end">
            {!isAnswered ? (
              <button
                onClick={handleSubmit}
                disabled={selectedOption === null}
                className="px-6 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-6 py-2.5 rounded-xl bg-foreground text-background font-bold hover:bg-foreground/90 transition-all flex items-center gap-2"
              >
                {currentIdx < totalQuestions - 1 ? "Next Question" : "View Results"}
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

      </div>
    </PageTransition>
  );
}
