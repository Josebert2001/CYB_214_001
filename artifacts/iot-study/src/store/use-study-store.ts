import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface StudyState {
  completedChapters: string[];
  toggleChapter: (chapterId: string) => void;
  quizScores: number[];
  addQuizScore: (score: number) => void;
  lastVisitedChapter: string | null;
  setLastVisitedChapter: (chapterId: string) => void;
}

export const useStudyStore = create<StudyState>()(
  persist(
    (set) => ({
      completedChapters: [],
      toggleChapter: (chapterId) =>
        set((state) => ({
          completedChapters: state.completedChapters.includes(chapterId)
            ? state.completedChapters.filter((id) => id !== chapterId)
            : [...state.completedChapters, chapterId],
        })),
      quizScores: [],
      addQuizScore: (score) =>
        set((state) => ({
          quizScores: [...state.quizScores, score],
        })),
      lastVisitedChapter: null,
      setLastVisitedChapter: (chapterId) => set({ lastVisitedChapter: chapterId }),
    }),
    {
      name: 'iot-study-progress',
    }
  )
);
