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
  Info,
} from 'lucide-react';

import arduinoImg from '@assets/Official_Arduino_Uno_R3_SMD_Microcontroller_Board_1774485602003.webp';
import ledImg from '@assets/10820-03-L_RGB_Clear_Common_Anode_LED-5mm_1774485602003.jpg';
import buttonImg from '@assets/61bkpqiCYsL_1774485602002.jpg';
import breadboardImg from '@assets/breadboard_1774485602003.jpg';

import p1DiagramImg from '@assets/ChatGPT_Image_Mar_26,_2026,_01_47_10_AM_1774486043489.png';

import p2ComponentsImg from '@assets/ChatGPT_Image_Mar_26,_2026,_02_01_29_AM_1774486914414.png';
import p2CircuitImg from '@assets/arduino-rgb-led_1774486953407.jpg';
import p2SchematicImg from '@assets/rgb_led_schematic_nxh560bdvq_ET208CfYXL_1774486953408.png';

const componentImages: Record<string, string> = {
  arduino: arduinoImg,
  led: ledImg,
  rgbled: ledImg,
  button: buttonImg,
  breadboard: breadboardImg,
};

const practicalDiagrams: Record<string, React.ReactNode> = {
  p1: (
    <div className="space-y-4">
      <div className="bg-white dark:bg-slate-900 border border-border rounded-2xl overflow-hidden shadow-sm">
        <img
          src={p1DiagramImg}
          alt="Practical 1 circuit diagram — push button controls LED"
          className="w-full object-contain"
        />
      </div>
      <p className="text-xs text-muted-foreground">
        Yellow wire = D13 (LED). Blue wire = D7 (button). Red wire = 5V. Black wire = GND.
      </p>
      <div className="bg-card border border-border rounded-2xl p-4 md:p-6 shadow-sm">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          Connection Overview
        </p>
        <WiringDiagram />
      </div>
    </div>
  ),
  p2: (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-slate-900 border border-border rounded-2xl overflow-hidden shadow-sm">
          <div className="px-4 pt-3 pb-1">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Components Layout
            </p>
          </div>
          <img
            src={p2ComponentsImg}
            alt="Practical 2 components — RGB LED, resistors, breadboard, Arduino Uno, jumper wires"
            className="w-full object-contain p-2"
          />
        </div>
        <div className="bg-white dark:bg-slate-900 border border-border rounded-2xl overflow-hidden shadow-sm">
          <div className="px-4 pt-3 pb-1">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Wiring Diagram
            </p>
          </div>
          <img
            src={p2CircuitImg}
            alt="Practical 2 wiring diagram — RGB LED connected to Arduino Uno"
            className="w-full object-contain p-2"
          />
        </div>
      </div>
      <div className="bg-white dark:bg-slate-900 border border-border rounded-2xl overflow-hidden shadow-sm">
        <div className="px-4 pt-3 pb-1">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Fritzing Schematic — Pin Detail
          </p>
        </div>
        <img
          src={p2SchematicImg}
          alt="Practical 2 Fritzing schematic — RGB LED pin connections on breadboard"
          className="w-full object-contain max-h-72 p-2"
        />
      </div>
    </div>
  ),
};

const P2_COLORS = [
  { label: 'Red',    r: 255, g: 0,   b: 0   },
  { label: 'Green',  r: 0,   g: 255, b: 0   },
  { label: 'Blue',   r: 0,   g: 0,   b: 255 },
  { label: 'Yellow', r: 255, g: 255, b: 0   },
  { label: 'Purple', r: 80,  g: 0,   b: 80  },
  { label: 'Aqua',   r: 0,   g: 255, b: 255 },
];

function ColorPalette() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <div>
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
        Color Cycle Preview — click a color to see its PWM values
      </p>
      <div className="flex flex-wrap gap-3">
        {P2_COLORS.map((c, i) => (
          <button
            key={c.label}
            onClick={() => setActive(active === i ? null : i)}
            className={cn(
              "flex flex-col items-center gap-2 p-3 rounded-xl border-2 transition-all",
              active === i ? "border-foreground shadow-md scale-105" : "border-transparent hover:border-border"
            )}
          >
            <div
              className="w-12 h-12 rounded-full shadow-inner"
              style={{ backgroundColor: `rgb(${c.r},${c.g},${c.b})` }}
            />
            <span className="text-xs font-semibold text-foreground">{c.label}</span>
            {active === i && (
              <div className="text-xs text-muted-foreground font-mono text-center leading-relaxed">
                <span className="text-red-500">R:{c.r}</span>{' '}
                <span className="text-green-500">G:{c.g}</span>{' '}
                <span className="text-blue-500">B:{c.b}</span>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const tokenize = (line: string) => {
    const keywords = ['const', 'int', 'void', 'if', 'else', 'return', 'define', 'ifdef', 'endif'];
    const functions = [
      'setup', 'loop', 'pinMode', 'digitalWrite', 'digitalRead',
      'analogWrite', 'delay', 'setColor',
    ];
    const constants = ['INPUT', 'OUTPUT', 'HIGH', 'LOW', 'INPUT_PULLUP', 'COMMON_ANODE'];

    const parts: { text: string; type: string }[] = [];
    let remaining = line;

    while (remaining.length > 0) {
      let matched = false;

      if (remaining.startsWith('//')) {
        parts.push({ text: remaining, type: 'comment' });
        remaining = '';
        continue;
      }

      if (remaining.startsWith('#')) {
        const spaceIdx = remaining.indexOf(' ');
        const directive = spaceIdx > -1 ? remaining.slice(0, spaceIdx) : remaining;
        parts.push({ text: directive, type: 'keyword' });
        remaining = spaceIdx > -1 ? remaining.slice(spaceIdx) : '';
        continue;
      }

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
      case 'comment': return 'text-slate-500 italic';
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
        {open
          ? <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0" />
          : <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
        }
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
  const [selectedIdx, setSelectedIdx] = useState(0);
  const practical = practicalsData[selectedIdx];

  return (
    <div className="space-y-10 pb-16">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider mb-3">
          <CircuitBoard className="w-4 h-4" />
          Lab Practicals
        </div>
        <h1 className="text-3xl md:text-4xl font-display font-extrabold text-foreground mb-4">
          Arduino Practicals
        </h1>

        {/* Practical Selector Tabs */}
        <div className="flex gap-2 flex-wrap">
          {practicalsData.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setSelectedIdx(i)}
              className={cn(
                "px-5 py-2.5 rounded-xl text-sm font-semibold border-2 transition-all",
                selectedIdx === i
                  ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20"
                  : "bg-card text-foreground border-border hover:border-primary/40 hover:bg-muted/40"
              )}
            >
              {p.title}
              <span className={cn(
                "ml-2 text-xs",
                selectedIdx === i ? "text-primary-foreground/70" : "text-muted-foreground"
              )}>
                {p.subtitle}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Practical Title + Objective */}
      <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0">
            <CircuitBoard className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-display font-bold text-foreground mb-1">
              {practical.title}: {practical.subtitle}
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">{practical.objective}</p>
          </div>
        </div>
      </div>

      {/* ── Components ── */}
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

      {/* ── Circuit Diagrams ── */}
      <section>
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-xl">
            <CircuitBoard className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-display font-bold text-foreground">Circuit Diagram</h2>
        </div>
        {practicalDiagrams[practical.id]}
      </section>

      {/* ── Color Palette (P2 only) ── */}
      {practical.id === 'p2' && (
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-xl">
              <Zap className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-display font-bold text-foreground">PWM Color Mixing</h2>
          </div>
          <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
            <ColorPalette />
          </div>
        </section>
      )}

      {/* ── Wiring Table ── */}
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
        {practical.wiringNote && (
          <p className="mt-3 text-xs text-muted-foreground">
            <strong>Tip:</strong> {practical.wiringNote}
          </p>
        )}
      </section>

      {/* ── Important Note (P2 common anode) ── */}
      {practical.importantNote && (
        <div className="flex gap-3 bg-blue-50 dark:bg-blue-900/15 border border-blue-200 dark:border-blue-800/40 rounded-2xl p-4">
          <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
          <p className="text-sm text-foreground/80 leading-relaxed">
            <strong className="text-blue-700 dark:text-blue-400">Important — Common Anode vs Cathode: </strong>
            {practical.importantNote}
          </p>
        </div>
      )}

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
