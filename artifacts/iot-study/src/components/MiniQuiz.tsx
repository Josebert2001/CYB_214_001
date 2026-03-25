import React, { useState } from 'react';
import { miniQuizData } from '@/data/mini-quiz-data';
import { cn } from '@/lib/utils';
import { CheckCircle2, XCircle, RotateCcw, ChevronRight, Trophy } from 'lucide-react';

interface MiniQuizProps {
  chapterId: string;
}

export function MiniQuiz({ chapterId }: MiniQuizProps) {
  const chapterQuiz = miniQuizData.find(q => q.chapterId === chapterId);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [answeredCorrectly, setAnsweredCorrectly] = useState<boolean[]>([]);

  if (!chapterQuiz || chapterQuiz.questions.length === 0) return null;

  const questions = chapterQuiz.questions;
  const total = questions.length;
  const question = questions[currentIdx];

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    const correct = selectedOption === question.correctAnswer;
    setIsAnswered(true);
    if (correct) setScore(s => s + 1);
    setAnsweredCorrectly(prev => [...prev, correct]);
  };

  const handleNext = () => {
    if (currentIdx < total - 1) {
      setCurrentIdx(i => i + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleReset = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
    setAnsweredCorrectly([]);
  };

  const percentage = Math.round((score / total) * 100);

  return (
    <div className="mt-16 border-t-2 border-dashed border-border pt-10">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-primary/10 text-primary rounded-xl">
          <Trophy className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-display font-bold text-foreground">Chapter Quick Check</h3>
          <p className="text-sm text-muted-foreground">Test what you just learned — {total} questions</p>
        </div>
      </div>

      {isFinished ? (
        <div className="bg-card border border-border rounded-2xl p-8 text-center shadow-sm">
          <div className={cn(
            "w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-extrabold",
            percentage >= 75 ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" :
            percentage >= 50 ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" :
            "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
          )}>
            {percentage}%
          </div>
          <p className="font-bold text-lg text-foreground mb-1">
            {score} / {total} correct
          </p>
          <p className="text-muted-foreground text-sm mb-2">
            {percentage >= 75 ? "Great work! You've got this chapter down." :
             percentage >= 50 ? "Not bad — re-read the highlighted sections and try again." :
             "Review this chapter again before moving on."}
          </p>

          {/* Per-question dots */}
          <div className="flex justify-center gap-2 my-4">
            {answeredCorrectly.map((correct, i) => (
              <div
                key={i}
                className={cn(
                  "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold",
                  correct ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                )}
              >
                {i + 1}
              </div>
            ))}
          </div>

          <button
            onClick={handleReset}
            className="mt-2 px-6 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 transition-all flex items-center gap-2 mx-auto"
          >
            <RotateCcw className="w-4 h-4" /> Try Again
          </button>
        </div>
      ) : (
        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
          {/* Progress dots */}
          <div className="px-5 pt-4 flex items-center gap-1.5">
            {questions.map((_, i) => (
              <div
                key={i}
                className={cn(
                  "h-1.5 flex-1 rounded-full transition-all",
                  i < currentIdx ? "bg-primary" :
                  i === currentIdx ? "bg-primary/50" :
                  "bg-border"
                )}
              />
            ))}
          </div>

          {/* Question */}
          <div className="p-5 md:p-6 border-b border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Question {currentIdx + 1} of {total}
            </p>
            <p className="text-base md:text-lg font-semibold text-foreground leading-relaxed">
              {question.question}
            </p>
          </div>

          {/* Options */}
          <div className="p-5 md:p-6 space-y-2.5">
            {question.options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === question.correctAnswer;
              let style = "border-border hover:border-primary/40 hover:bg-muted/40";
              let Icon = null;

              if (isAnswered) {
                if (isCorrect) {
                  style = "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-900 dark:text-green-100";
                  Icon = <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />;
                } else if (isSelected && !isCorrect) {
                  style = "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-900 dark:text-red-100";
                  Icon = <XCircle className="w-4 h-4 text-red-500 shrink-0" />;
                } else {
                  style = "border-border opacity-40";
                }
              } else if (isSelected) {
                style = "border-primary bg-primary/5 text-primary ring-1 ring-primary";
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  disabled={isAnswered}
                  className={cn(
                    "w-full text-left text-sm p-3.5 rounded-xl border-2 transition-all duration-200 flex items-center justify-between gap-3",
                    style
                  )}
                >
                  <span className="font-medium">{option}</span>
                  {Icon}
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {isAnswered && (
            <div className={cn(
              "mx-5 md:mx-6 mb-4 p-4 rounded-xl border text-sm",
              selectedOption === question.correctAnswer
                ? "bg-green-50 border-green-200 dark:bg-green-900/10 dark:border-green-900/30"
                : "bg-red-50 border-red-200 dark:bg-red-900/10 dark:border-red-900/30"
            )}>
              <span className={cn(
                "font-bold mr-1",
                selectedOption === question.correctAnswer ? "text-green-700 dark:text-green-400" : "text-red-700 dark:text-red-400"
              )}>
                {selectedOption === question.correctAnswer ? "Correct!" : "Incorrect."}
              </span>
              <span className="text-foreground/80">{question.explanation}</span>
            </div>
          )}

          {/* Action button */}
          <div className="px-5 md:px-6 pb-5 flex justify-end">
            {!isAnswered ? (
              <button
                onClick={handleSubmit}
                disabled={selectedOption === null}
                className="px-5 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                Check Answer
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-5 py-2 rounded-xl bg-foreground text-background text-sm font-bold hover:bg-foreground/90 transition-all flex items-center gap-2"
              >
                {currentIdx < total - 1 ? "Next Question" : "See Results"}
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
