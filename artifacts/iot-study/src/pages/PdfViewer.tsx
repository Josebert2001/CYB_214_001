import React, { useState } from 'react';
import { PageTransition } from '@/components/ui-elements';
import { FileText, Download } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function PdfViewer() {
  const [activePdf, setActivePdf] = useState<'manual' | 'notes'>('manual');

  const pdfs = {
    manual: {
      title: "IoT Manual - Full Course Book",
      path: import.meta.env.BASE_URL + "iot-manual.pdf"
    },
    notes: {
      title: "IoT Lecture Notes",
      path: import.meta.env.BASE_URL + "iot-lecture-notes.pdf"
    }
  };

  return (
    <PageTransition className="flex flex-col h-[calc(100vh-80px)]">
      
      <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 shrink-0">
        <div>
          <h1 className="text-3xl font-display font-bold">Original Materials</h1>
          <p className="text-muted-foreground mt-1">View the source PDFs directly in your browser.</p>
        </div>
        
        <div className="flex bg-muted p-1 rounded-xl w-full md:w-auto">
          <button
            onClick={() => setActivePdf('manual')}
            className={cn(
              "flex-1 md:flex-none px-6 py-2 rounded-lg font-medium text-sm transition-all",
              activePdf === 'manual' ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            )}
          >
            Course Manual
          </button>
          <button
            onClick={() => setActivePdf('notes')}
            className={cn(
              "flex-1 md:flex-none px-6 py-2 rounded-lg font-medium text-sm transition-all",
              activePdf === 'notes' ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            )}
          >
            Lecture Notes
          </button>
        </div>
      </div>

      <div className="flex-1 bg-card border border-border rounded-2xl shadow-sm overflow-hidden flex flex-col relative">
        <div className="p-4 border-b border-border bg-slate-50/50 dark:bg-slate-900/50 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-2 font-medium">
            <FileText className="w-5 h-5 text-primary" />
            {pdfs[activePdf].title}
          </div>
          <a 
            href={pdfs[activePdf].path} 
            download
            className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Download PDF</span>
          </a>
        </div>
        
        <div className="flex-1 relative bg-slate-100 dark:bg-slate-950">
          <iframe 
            src={pdfs[activePdf].path} 
            className="absolute inset-0 w-full h-full border-none"
            title={pdfs[activePdf].title}
          />
        </div>
      </div>

    </PageTransition>
  );
}
