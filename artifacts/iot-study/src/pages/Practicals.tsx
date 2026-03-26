import React, { useState } from 'react';
import { practicalsData } from '@/data/practicals-data';
import { WiringDiagram } from '@/components/WiringDiagram';
import { cn } from '@/lib/utils';
import {
  Cpu,
  Zap,
  Wrench,
  Code2,
  CircuitBoard,
  CheckCircle2,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Package,
} from 'lucide-react';

import arduinoImg from '@assets/Official_Arduino_Uno_R3_SMD_Microcontroller_Board_1774485602003.webp';
import ledImg from '@assets/10820-03-L_RGB_Clear_Common_Anode_LED-5mm_1774485602003.jpg';
import buttonImg from '@assets/61bkpqiCYsL_1774485602002.jpg';
import breadboardImg from '@assets/breadboard_1774485602003.jpg';
import p1DiagramImg from '@assets/ChatGPT_Image_Mar_26,_2026,_01_47_10_AM_1774486043489.png';

const componentImages: Record<string, string> = {
  arduino: arduinoImg,
  led: ledImg,
  button: buttonImg,
  breadboard: breadboardImg,
};

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const tokenize = (line: string) => {
    const keywords = ['const', 'int', 'void', 'if', 'else', 'return'];
    const functions = ['setup', 'loop', 'pinMode', 'digitalWrite', 'digitalRead'];
    const constants = ['INPUT', 'OUTPUT', 'HIGH', 'LOW', 'INPUT_PULLUP'];

    const parts: { text: string; type: string }[] = [];
    let remaining = line;

    while (remaining.length > 0) {
      let matched = false;

      for (const kw of keywords) {
        const re = new RegExp(`^(${kw})\\b`);
        const m = remaining.match(re);
        if (m) {
          parts.push({ text: m[1], type: 'keyword' });
          remaining = remaining.slice(m[1].length);
          matched = true;
          break;
        }
      }
      if (matched) continue;

      for (const fn of functions) {
        const re = new RegExp(`^(${fn})\\b`);
        const m = remaining.match(re);
        if (m) {
          parts.push({ text: m[1], type: 'function' });
          remaining = remaining.slice(m[1].length);
          matched = true;
          break;
        }
      }
      if (matched) continue;

      for (const c of constants) {
        const re = new RegExp(`^(${c})\\b`);
        const m = remaining.match(re);
        if (m) {
          parts.push({ text: m[1], type: 'constant' });
          remaining = remaining.slice(m[1].length);
          matched = true;
          break;
        }
      }
      if (matched) continue;

      const numMatch = remaining.match(/^(\d+)/);
      if (numMatch) {
        parts.push({ text: numMatch[1], type: 'number' });
        remaining = remaining.slice(numMatch[1].length);
        continue;
      }

      parts.push({ text: remaining[0], type: 'plain' });
      remaining = remaining.slice(1);
    }

    return parts;
  };

  const colorOf = (type: string) => {
    switch (type) {
      case 'keyword': return 'text-violet-400';
      case 'function': return 'text-yellow-300';
      case 'constant': return 'text-orange-300';
      case 'number': return 'text-cyan-300';
      default: return 'text-slate-200';
    }
  };

  return (
    <div className="relative rounded-2xl overflow-hidden border border-border shadow-lg">
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-800 border-b border-slate-700">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-500" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-2 text-slate-400 text-xs font-mono">sketch.ino</span>
        </div>
        <button
          onClick={handleCopy}
          className="text-xs text-slate-400 hover:text-white transition-colors px-2 py-1 rounded-md hover:bg-slate-700"
        >
          {copied ? '✓ Copied!' : 'Copy'}
        </button>
      </div>
      <pre className="bg-slate-900 p-5 overflow-x-auto text-sm leading-relaxed font-mono">
        {code.split('\n').map((line, i) => (
          <div key={i} className="flex">
            <span className="select-none text-slate-600 text-xs w-8 shrink-0 text-right pr-3 pt-0.5">
              {i + 1}
            </span>
            <span>
              {tokenize(line).map((part, j) => (
                <span key={j} className={colorOf(part.type)}>{part.text}</span>
              ))}
            </span>
          </div>
        ))}
      </pre>
    </div>
  );
}

function TroubleshootingItem({ problem, fix }: { problem: string; fix: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-muted/40 transition-colors"
      >
        <div className="flex items-center gap-3">
          <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
          <span className="text-sm font-medium text-foreground">{problem}</span>
        </div>
        {open ? (
          <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-4 pb-4 pt-1 bg-amber-50 dark:bg-amber-900/10 border-t border-amber-200/50 dark:border-amber-800/30">
          <div className="flex gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
            <p className="text-sm text-foreground/80">{fix}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Practicals() {
  const practical = practicalsData[0];

  return (
    <div className="space-y-10 pb-16">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider mb-3">
          <CircuitBoard className="w-4 h-4" />
          Lab Practicals
        </div>
        <h1 className="text-3xl md:text-4xl font-display font-extrabold text-foreground mb-2">
          {practical.title}: {practical.subtitle}
        </h1>
        <p className="text-muted-foreground text-base leading-relaxed max-w-2xl">
          {practical.objective}
        </p>
      </div>

      {/* ── Components Section ── */}
      <section>
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
            <Package className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-display font-bold text-foreground">Components Required</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {practical.components.map((comp) => (
            <div
              key={comp.name}
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {comp.imageKey && componentImages[comp.imageKey] ? (
                <div className="h-36 bg-muted flex items-center justify-center overflow-hidden">
                  <img
                    src={componentImages[comp.imageKey]}
                    alt={comp.name}
                    className="w-full h-full object-contain p-3"
                  />
                </div>
              ) : (
                <div className="h-36 bg-muted/50 flex items-center justify-center">
                  <Cpu className="w-10 h-10 text-muted-foreground/30" />
                </div>
              )}
              <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-sm font-bold text-foreground leading-tight">{comp.name}</h3>
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full shrink-0">
                    {comp.quantity}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{comp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Wiring Diagram ── */}
      <section>
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-xl">
            <CircuitBoard className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-display font-bold text-foreground">Circuit Diagram</h2>
        </div>
        <div className="bg-white dark:bg-slate-900 border border-border rounded-2xl overflow-hidden shadow-sm">
          <img
            src={p1DiagramImg}
            alt="Practical 1 circuit diagram — push button controls LED with Arduino"
            className="w-full object-contain"
          />
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Yellow wire = D13 (LED). Blue wire = D7 (button). Red wire = 5V. Black wire = GND.
        </p>

        {/* Schematic overview */}
        <div className="mt-4 bg-card border border-border rounded-2xl p-4 md:p-6 shadow-sm">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Connection Overview</p>
          <WiringDiagram />
        </div>
      </section>

      {/* ── Wiring Steps Table ── */}
      <section>
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-xl">
            <Zap className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-display font-bold text-foreground">Pin-by-Pin Wiring</h2>
        </div>
        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left px-4 py-3 font-semibold text-foreground">#</th>
                <th className="text-left px-4 py-3 font-semibold text-foreground">From</th>
                <th className="text-left px-4 py-3 font-semibold text-foreground">To</th>
                <th className="text-left px-4 py-3 font-semibold text-foreground hidden sm:table-cell">Wire</th>
              </tr>
            </thead>
            <tbody>
              {practical.wiring.map((step, i) => (
                <tr key={i} className={cn("border-b border-border last:border-0", i % 2 === 0 ? "" : "bg-muted/20")}>
                  <td className="px-4 py-3 text-muted-foreground font-mono text-xs">{i + 1}</td>
                  <td className="px-4 py-3 font-medium text-foreground">{step.from}</td>
                  <td className="px-4 py-3 text-foreground/80">{step.to}</td>
                  <td className="px-4 py-3 hidden sm:table-cell">
                    <div className="flex items-center gap-2">
                      <span
                        className="inline-block w-4 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: step.color }}
                      />
                      <span className="text-xs text-muted-foreground">{step.note}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          <strong>Tip:</strong> Always connect GND first so there is a common reference for all components.
        </p>
      </section>

      {/* ── Arduino Code ── */}
      <section>
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2 bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 rounded-xl">
            <Code2 className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-display font-bold text-foreground">Arduino Code</h2>
        </div>
        <CodeBlock code={practical.code} />
      </section>

      {/* ── How It Works ── */}
      <section>
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded-xl">
            <Cpu className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-display font-bold text-foreground">How It Works</h2>
        </div>
        <div className="space-y-3">
          {practical.howItWorks.map((step, i) => (
            <div key={i} className="flex gap-4 bg-card border border-border rounded-xl p-4">
              <div className="w-7 h-7 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 flex items-center justify-center text-xs font-extrabold shrink-0 mt-0.5">
                {i + 1}
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Troubleshooting ── */}
      <section>
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-xl">
            <Wrench className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-display font-bold text-foreground">Troubleshooting</h2>
          <span className="text-xs text-muted-foreground">Click a problem to see the fix</span>
        </div>
        <div className="space-y-2">
          {practical.troubleshooting.map((item, i) => (
            <TroubleshootingItem key={i} problem={item.problem} fix={item.fix} />
          ))}
        </div>
      </section>
    </div>
  );
}
