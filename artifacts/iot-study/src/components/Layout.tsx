import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { cn } from '@/lib/utils';
import { Book, CheckCircle2, ChevronRight, Menu, X, BrainCircuit, FileText, Home, Sun, Moon, Monitor, Layers, BookOpen, FlaskConical } from 'lucide-react';
import { useStudyStore } from '@/store/use-study-store';
import { chaptersData } from '@/data/chapters-data';
import { useTheme } from '@/components/theme-provider';

type Theme = 'light' | 'dark' | 'system';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const options: { value: Theme; icon: React.ComponentType<{ className?: string }> }[] = [
    { value: 'light', icon: Sun },
    { value: 'system', icon: Monitor },
    { value: 'dark', icon: Moon },
  ];

  return (
    <div className="flex items-center gap-1 bg-sidebar-border/40 rounded-lg p-0.5">
      {options.map(({ value, icon: Icon }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          aria-label={`Switch to ${value} theme`}
          className={cn(
            "p-1.5 rounded-md transition-colors",
            theme === value
              ? "bg-sidebar text-sidebar-primary shadow-sm"
              : "text-sidebar-foreground/50 hover:text-sidebar-foreground"
          )}
        >
          <Icon className="w-3.5 h-3.5" />
        </button>
      ))}
    </div>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { completedChapters } = useStudyStore();

  const navLinks = [
    { href: '/', label: 'Dashboard', icon: Home },
    { href: '/quiz', label: 'Practice Quiz', icon: BrainCircuit },
    { href: '/flashcards', label: 'Flashcards', icon: Layers },
    { href: '/glossary', label: 'Glossary', icon: BookOpen },
    { href: '/practicals', label: 'Practicals', icon: FlaskConical },
    { href: '/pdfs', label: 'Original PDFs', icon: FileText },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-border bg-card sticky top-0 z-50">
        <div className="flex items-center gap-2 text-primary font-display font-bold text-xl">
          <Book className="w-6 h-6" />
          <span>IoT Master</span>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-foreground">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-40 w-72 bg-sidebar border-r border-sidebar-border transform transition-transform duration-300 ease-in-out flex flex-col",
        mobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        "md:sticky md:top-0 md:h-screen"
      )}>
        <div className="p-6 hidden md:flex items-center justify-between border-b border-sidebar-border">
          <div className="flex items-center gap-3 text-sidebar-primary font-display font-bold text-2xl">
            <div className="bg-sidebar-primary text-sidebar-primary-foreground p-1.5 rounded-lg">
              <Book className="w-5 h-5" />
            </div>
            IoT Master
          </div>
          <ThemeToggle />
        </div>

        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-8 scrollbar-thin">
          
          {/* Main Links */}
          <div className="space-y-1">
            <div className="px-3 text-xs font-semibold text-sidebar-foreground/50 uppercase tracking-wider mb-2">Main Menu</div>
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location === link.href;
              return (
                <Link key={link.href} href={link.href} onClick={closeMenu} className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-sidebar-primary/10 text-sidebar-primary" 
                    : "text-sidebar-foreground hover:bg-sidebar-border/50"
                )}>
                  <Icon className="w-4 h-4" />
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Chapters */}
          <div className="space-y-1">
            <div className="px-3 text-xs font-semibold text-sidebar-foreground/50 uppercase tracking-wider mb-2">Chapters</div>
            {chaptersData.map((chapter) => {
              const href = `/chapter/${chapter.id}`;
              const isActive = location === href;
              const isCompleted = completedChapters.includes(chapter.id);
              
              return (
                <Link key={chapter.id} href={href} onClick={closeMenu} className={cn(
                  "flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-all duration-200 group",
                  isActive 
                    ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-md shadow-primary/20" 
                    : "text-sidebar-foreground hover:bg-sidebar-border/50"
                )}>
                  <span className="truncate font-medium">{chapter.title}</span>
                  {isCompleted ? (
                    <CheckCircle2 className={cn("w-4 h-4 shrink-0", isActive ? "text-primary-foreground" : "text-green-500")} />
                  ) : (
                    <ChevronRight className={cn("w-4 h-4 shrink-0 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0", isActive && "opacity-100 translate-x-0")} />
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Progress Summary Footer */}
        <div className="p-4 border-t border-sidebar-border bg-sidebar-border/20">
          <div className="text-xs text-sidebar-foreground/70 font-medium mb-2 flex justify-between">
            <span>Course Progress</span>
            <span>{Math.round((completedChapters.length / chaptersData.length) * 100)}%</span>
          </div>
          <div className="h-1.5 w-full bg-sidebar-border rounded-full overflow-hidden">
            <div 
              className="h-full bg-sidebar-primary transition-all duration-500" 
              style={{ width: `${(completedChapters.length / chaptersData.length) * 100}%` }}
            />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 flex flex-col min-h-screen">
        <div className="flex-1 p-4 md:p-8 lg:p-10 max-w-5xl mx-auto w-full">
          {children}
        </div>
      </main>

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden backdrop-blur-sm transition-opacity"
          onClick={closeMenu}
        />
      )}
    </div>
  );
}
