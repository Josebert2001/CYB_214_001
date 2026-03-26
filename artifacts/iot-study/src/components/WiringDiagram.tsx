import React from 'react';

export function WiringDiagram() {
  return (
    <div className="w-full overflow-x-auto">
      <svg
        viewBox="0 0 820 420"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-3xl mx-auto block"
        style={{ minWidth: '520px' }}
      >
        {/* ── Background ── */}
        <rect width="820" height="420" rx="16" fill="currentColor" className="text-card" opacity="1" />

        {/* ════════════════════════════════════════════════
            ARDUINO UNO (left block)
        ════════════════════════════════════════════════ */}
        <g>
          {/* Board body */}
          <rect x="20" y="60" width="160" height="300" rx="10" fill="#0d7377" />
          <rect x="28" y="68" width="144" height="284" rx="8" fill="#14a085" />
          {/* Label */}
          <text x="100" y="115" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="monospace">ARDUINO</text>
          <text x="100" y="130" textAnchor="middle" fill="white" fontSize="10" fontFamily="monospace">UNO R3</text>

          {/* USB port */}
          <rect x="28" y="72" width="30" height="20" rx="3" fill="#222" />
          <text x="43" y="86" textAnchor="middle" fill="#888" fontSize="7" fontFamily="monospace">USB</text>

          {/* ── Digital pins (right side of board) ── */}
          {/* D13 */}
          <rect x="176" y="118" width="8" height="14" rx="2" fill="#fbbf24" />
          <text x="168" y="128" textAnchor="end" fill="white" fontSize="8" fontFamily="monospace">D13</text>

          {/* D7 */}
          <rect x="176" y="158" width="8" height="14" rx="2" fill="#fb923c" />
          <text x="168" y="168" textAnchor="end" fill="white" fontSize="8" fontFamily="monospace">D7</text>

          {/* 5V */}
          <rect x="176" y="238" width="8" height="14" rx="2" fill="#ef4444" />
          <text x="168" y="248" textAnchor="end" fill="white" fontSize="8" fontFamily="monospace">5V</text>

          {/* GND (main) */}
          <rect x="176" y="278" width="8" height="14" rx="2" fill="#64748b" />
          <text x="168" y="288" textAnchor="end" fill="white" fontSize="8" fontFamily="monospace">GND</text>

          {/* ∞ logo */}
          <text x="100" y="210" textAnchor="middle" fill="white" fontSize="28" opacity="0.3">∞</text>
        </g>

        {/* ════════════════════════════════════════════════
            BREADBOARD (center)
        ════════════════════════════════════════════════ */}
        <g>
          {/* Main body */}
          <rect x="330" y="60" width="180" height="300" rx="8" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1.5" />
          {/* Power rails */}
          <rect x="338" y="68" width="12" height="284" rx="3" fill="#fee2e2" stroke="#fca5a5" strokeWidth="1" />
          <rect x="498" y="68" width="12" height="284" rx="3" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1" />
          {/* Rail labels */}
          <text x="344" y="64" textAnchor="middle" fill="#ef4444" fontSize="8" fontWeight="bold">+</text>
          <text x="344" y="362" textAnchor="middle" fill="#64748b" fontSize="8" fontWeight="bold">−</text>
          <text x="504" y="64" textAnchor="middle" fill="#3b82f6" fontSize="8" fontWeight="bold">+</text>

          {/* Center gap divider */}
          <rect x="355" y="195" width="128" height="10" rx="3" fill="#e2e8f0" />
          <text x="419" y="203" textAnchor="middle" fill="#94a3b8" fontSize="7" fontFamily="monospace">CENTER GAP</text>

          {/* Breadboard tie points rows (decorative dots) */}
          {[80,92,104,116,128,140,152,164,176,188].map((y, i) => (
            <g key={`top-${i}`}>
              {[360,370,380,390,400,410,420,430,440,450,460,470].map((x, j) => (
                <circle key={j} cx={x} cy={y} r="2" fill="#94a3b8" opacity="0.5" />
              ))}
            </g>
          ))}
          {[210,222,234,246,258,270,282,294,306,318].map((y, i) => (
            <g key={`bot-${i}`}>
              {[360,370,380,390,400,410,420,430,440,450,460,470].map((x, j) => (
                <circle key={j} cx={x} cy={y} r="2" fill="#94a3b8" opacity="0.5" />
              ))}
            </g>
          ))}

          {/* Label */}
          <text x="419" y="380" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="monospace">BREADBOARD</text>

          {/* Component row markers */}
          <text x="419" y="105" textAnchor="middle" fill="#0ea5e9" fontSize="7.5" fontFamily="monospace">ROW 5 → LED</text>
          <text x="419" y="165" textAnchor="middle" fill="#f97316" fontSize="7.5" fontFamily="monospace">ROW 10 → BUTTON</text>
        </g>

        {/* ════════════════════════════════════════════════
            LED component
        ════════════════════════════════════════════════ */}
        <g>
          {/* 220Ω resistor */}
          <rect x="590" y="86" width="36" height="14" rx="4" fill="#f5c842" stroke="#d4a017" strokeWidth="1.5" />
          <line x1="580" y1="93" x2="590" y2="93" stroke="#d4a017" strokeWidth="1.5" />
          <line x1="626" y1="93" x2="636" y2="93" stroke="#d4a017" strokeWidth="1.5" />
          <text x="608" y="97" textAnchor="middle" fill="#7c4a00" fontSize="7" fontWeight="bold">220Ω</text>

          {/* LED body */}
          <ellipse cx="660" cy="93" rx="12" ry="12" fill="#bbf7d0" stroke="#22c55e" strokeWidth="2" />
          <polygon points="652,87 668,87 660,99" fill="#22c55e" opacity="0.7" />
          <line x1="668" y1="87" x2="668" y2="99" stroke="#22c55e" strokeWidth="1.5" />
          {/* LED glow */}
          <ellipse cx="660" cy="93" rx="16" ry="16" fill="#22c55e" opacity="0.1" />
          {/* LED legs */}
          <line x1="648" y1="93" x2="636" y2="93" stroke="#22c55e" strokeWidth="1.5" />
          <line x1="672" y1="93" x2="686" y2="93" stroke="#22c55e" strokeWidth="1.5" />
          {/* Anode/Cathode labels */}
          <text x="649" y="82" textAnchor="middle" fill="#16a34a" fontSize="7">+</text>
          <text x="673" y="82" textAnchor="middle" fill="#64748b" fontSize="7">−</text>
          <text x="660" y="118" textAnchor="middle" fill="#16a34a" fontSize="9" fontWeight="bold">LED</text>

          {/* GND line from LED cathode */}
          <line x1="686" y1="93" x2="710" y2="93" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3,2" />
          <line x1="710" y1="93" x2="710" y2="340" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3,2" />
          <text x="716" y="220" fill="#64748b" fontSize="8" fontFamily="monospace">GND</text>
        </g>

        {/* ════════════════════════════════════════════════
            PUSH BUTTON
        ════════════════════════════════════════════════ */}
        <g>
          {/* Button body — straddles center gap */}
          <rect x="590" y="175" width="30" height="30" rx="4" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />
          <circle cx="605" cy="190" r="9" fill="#374151" />
          <circle cx="605" cy="190" r="6" fill="#1f2937" />
          <circle cx="605" cy="190" r="3" fill="#6b7280" />
          {/* Button legs (4 pins) */}
          <line x1="594" y1="175" x2="588" y2="168" stroke="#94a3b8" strokeWidth="1.5" />
          <line x1="616" y1="175" x2="622" y2="168" stroke="#94a3b8" strokeWidth="1.5" />
          <line x1="594" y1="205" x2="588" y2="212" stroke="#94a3b8" strokeWidth="1.5" />
          <line x1="616" y1="205" x2="622" y2="212" stroke="#94a3b8" strokeWidth="1.5" />
          <text x="605" y="230" textAnchor="middle" fill="#64748b" fontSize="8" fontWeight="bold">BUTTON</text>
          <text x="605" y="240" textAnchor="middle" fill="#94a3b8" fontSize="7">(bridges gap)</text>

          {/* 10kΩ resistor below button */}
          <rect x="587" y="255" width="36" height="14" rx="4" fill="#fb923c" stroke="#ea580c" strokeWidth="1.5" />
          <line x1="577" y1="262" x2="587" y2="262" stroke="#ea580c" strokeWidth="1.5" />
          <line x1="623" y1="262" x2="633" y2="262" stroke="#ea580c" strokeWidth="1.5" />
          <text x="605" y="267" textAnchor="middle" fill="#7c2d12" fontSize="7" fontWeight="bold">10kΩ</text>
          {/* GND from 10kΩ */}
          <line x1="633" y1="262" x2="710" y2="262" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3,2" />
          <text x="605" y="295" textAnchor="middle" fill="#64748b" fontSize="7">→ GND</text>
        </g>

        {/* ════════════════════════════════════════════════
            WIRES
        ════════════════════════════════════════════════ */}
        {/* D13 → 220Ω (green) */}
        <path d="M184,125 H310 Q320,125 320,135 V93 H580" stroke="#22c55e" strokeWidth="2" fill="none" />

        {/* D7 → Button side B (orange) */}
        <path d="M184,165 H305 Q315,165 315,175 V190 H510 Q520,190 530,190 H588" stroke="#f97316" strokeWidth="2" fill="none" />

        {/* 5V → Button side A (red) */}
        <path d="M184,245 H300 Q310,245 310,255 V168 H588" stroke="#ef4444" strokeWidth="2" fill="none" />

        {/* GND rail → LED cathode + 10kΩ (black/grey) */}
        <path d="M184,285 H270 Q280,285 280,295 V340 H710" stroke="#64748b" strokeWidth="2" fill="none" />

        {/* LED anode → 220Ω wire (inside) already drawn via component */}

        {/* D7 → 10kΩ row (pull-down, dashed) */}
        <path d="M530,190 V255 H577" stroke="#64748b" strokeWidth="1.5" fill="none" strokeDasharray="4,3" />

        {/* ════════════════════════════════════════════════
            WIRE LEGEND
        ════════════════════════════════════════════════ */}
        <g transform="translate(30, 385)">
          <text x="0" y="12" fill="#64748b" fontSize="8.5" fontFamily="monospace" fontWeight="bold">WIRE KEY:</text>
          <line x1="70" y1="8" x2="90" y2="8" stroke="#22c55e" strokeWidth="2" />
          <text x="93" y="12" fill="#64748b" fontSize="8" fontFamily="monospace">D13 → LED</text>
          <line x1="160" y1="8" x2="180" y2="8" stroke="#f97316" strokeWidth="2" />
          <text x="183" y="12" fill="#64748b" fontSize="8" fontFamily="monospace">D7 → Button</text>
          <line x1="270" y1="8" x2="290" y2="8" stroke="#ef4444" strokeWidth="2" />
          <text x="293" y="12" fill="#64748b" fontSize="8" fontFamily="monospace">5V → Button</text>
          <line x1="370" y1="8" x2="390" y2="8" stroke="#64748b" strokeWidth="2" />
          <text x="393" y="12" fill="#64748b" fontSize="8" fontFamily="monospace">GND</text>
          <line x1="420" y1="8" x2="440" y2="8" stroke="#64748b" strokeWidth="2" strokeDasharray="4,3" />
          <text x="443" y="12" fill="#64748b" fontSize="8" fontFamily="monospace">Pull-down</text>
        </g>
      </svg>
    </div>
  );
}
