import React from "react";

const SYMBOLS = [
  // 1. Ciclo PDCA
  <g key="0">
    <path d="M 12 3 A 9 9 0 1 1 3 12" />
    <polygon points="3,12 6,8 7,16" fill="currentColor" stroke="none" />
  </g>,
  // 2. Fluxograma
  <g key="1">
    <rect x="0" y="5" width="8" height="8" rx="1" />
    <polygon points="11,9 16,4 21,9 16,14" />
    <rect x="24" y="5" width="8" height="8" rx="1" />
    <line x1="8" y1="9" x2="11" y2="9" />
    <line x1="21" y1="9" x2="24" y2="9" />
  </g>,
  // 3. Checklist
  <g key="2">
    <rect x="0" y="0" width="16" height="20" rx="1.5" />
    <path d="M 4 6 L 7 9 L 12 4" />
    <path d="M 4 13 L 7 16 L 12 11" />
  </g>,
  // 4. Gráfico de indicadores
  <g key="3">
    <line x1="0" y1="20" x2="22" y2="20" />
    <rect x="2" y="13" width="4" height="7" />
    <rect x="9" y="8" width="4" height="12" />
    <rect x="16" y="4" width="4" height="16" />
  </g>,
  // 5. Lupa
  <g key="4">
    <circle cx="9" cy="9" r="6" />
    <line x1="14" y1="14" x2="20" y2="20" />
  </g>,
  // 6. Matriz de risco
  <g key="5">
    <rect x="0" y="0" width="20" height="20" rx="1" />
    <line x1="10" y1="0" x2="10" y2="20" />
    <line x1="0" y1="10" x2="20" y2="10" />
    <line x1="0" y1="0" x2="10" y2="10" strokeDasharray="2,2" />
  </g>,
  // 7. Engrenagem
  <g key="6">
    <circle cx="10" cy="10" r="5" />
    <circle cx="10" cy="10" r="1.5" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => {
      const rad = (a * Math.PI) / 180;
      return <line key={a} x1={10 + 6 * Math.cos(rad)} y1={10 + 6 * Math.sin(rad)} x2={10 + 8 * Math.cos(rad)} y2={10 + 8 * Math.sin(rad)} />;
    })}
  </g>,
  // 8. Melhoria contínua (seta ascendente)
  <g key="7">
    <path d="M 2 18 L 8 10 L 13 14 L 19 4" />
    <polygon points="19,4 15,5 17,8" fill="currentColor" stroke="none" />
    <line x1="0" y1="22" x2="22" y2="22" strokeDasharray="2,2" />
  </g>,
];

export default function QualityWatermark({ className }) {
  const symbolWidth = 50;
  const patternWidth = symbolWidth * SYMBOLS.length;
  const repeats = Math.ceil(1300 / patternWidth) + 1;

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className || ""}`}>
      {/* Bottom strip — continuous horizontal pattern */}
      <div className="absolute bottom-0 left-0 right-0 text-petroleo" style={{ opacity: 0.13 }}>
        <svg viewBox="0 0 1200 30" preserveAspectRatio="xMidYMid meet" className="w-full h-12 md:h-14">
          <g fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            {Array.from({ length: repeats }).flatMap((_, ri) =>
              SYMBOLS.map((sym, si) => (
                <g key={`${ri}-${si}`} transform={`translate(${ri * patternWidth + si * symbolWidth + 6}, 4)`}>
                  {sym}
                </g>
              ))
            )}
          </g>
        </svg>
      </div>
    </div>
  );
}
