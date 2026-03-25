import React from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle2, ChevronRight, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export function ConceptCard({ title, def, icon: Icon }: { title: string, def: string, icon?: any }) {
  return (
    <div className="bg-card rounded-2xl p-5 shadow-sm border border-border/50 hover:shadow-md hover:border-primary/20 transition-all duration-300 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:bg-primary/10 transition-colors" />
      <div className="flex items-start gap-4">
        {Icon && (
          <div className="p-2.5 bg-primary/10 rounded-xl text-primary mt-1">
            <Icon size={20} />
          </div>
        )}
        <div>
          <h4 className="font-display text-lg font-bold text-foreground">{title}</h4>
          <p className="mt-2 text-muted-foreground leading-relaxed text-sm">{def}</p>
        </div>
      </div>
    </div>
  );
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-2xl font-display font-bold text-foreground mt-10 mb-4 pb-2 border-b border-border/50">
      {children}
    </h3>
  );
}

export function List({ items }: { items: string[] | React.ReactNode[] }) {
  return (
    <ul className="space-y-3 my-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <span className="text-muted-foreground">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
      <motion.div 
        className="h-full bg-primary"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </div>
  );
}

export function PageTransition({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
