import React from "react";

const S = { stroke: "currentColor", strokeWidth: 1, fill: "none" };
const STROKE = { stroke: "currentColor", strokeWidth: 1.5, fill: "none" };
const TXT = { fontSize: 10, fill: "currentColor", fontFamily: "ui-sans-serif, system-ui" };
const TXT_BOLD = { fontSize: 10, fill: "currentColor", fontFamily: "ui-sans-serif, system-ui", fontWeight: 600 };
const TXT_SM = { fontSize: 8, fill: "currentColor", fontFamily: "ui-sans-serif, system-ui" };

function IshikawaDiagram() {
  return (
    <svg viewBox="0 0 600 280" className="w-full" style={{ color: "#444" }}>
      <line x1="40" y1="140" x2="500" y2="140" {...STROKE} />
      <rect x="500" y="120" width="84" height="40" rx="4" {...STROKE} />
      <text x="542" y="138" textAnchor="middle" {...TXT_BOLD}>Efeito</text>
      <text x="542" y="152" textAnchor="middle" {...TXT_SM}>problema</text>
      {/* Top bones */}
      {[{ x: 120, label: "Máquina" }, { x: 250, label: "Método" }, { x: 380, label: "Material" }].map((b, i) => (
        <g key={i}>
          <line x1={b.x} y1="140" x2={b.x - 40} y2="60" {...S} />
          <text x={b.x - 40} y="50" textAnchor="middle" {...TXT_BOLD}>{b.label}</text>
          <line x1={b.x - 22} y1="90" x2={b.x - 12} y2="90" {...S} />
          <line x1={b.x - 30} y1="110" x2={b.x - 20} y2="110" {...S} />
        </g>
      ))}
      {/* Bottom bones */}
      {[{ x: 120, label: "Mão de obra" }, { x: 250, label: "Medição" }, { x: 380, label: "Meio ambiente" }].map((b, i) => (
        <g key={i}>
          <line x1={b.x} y1="140" x2={b.x - 40} y2="220" {...S} />
          <text x={b.x - 40} y="238" textAnchor="middle" {...TXT_BOLD}>{b.label}</text>
          <line x1={b.x - 22} y1="190" x2={b.x - 12} y2="190" {...S} />
          <line x1={b.x - 30} y1="170" x2={b.x - 20} y2="170" {...S} />
        </g>
      ))}
    </svg>
  );
}

function FluxogramaDiagram() {
  return (
    <svg viewBox="0 0 600 200" className="w-full" style={{ color: "#444" }}>
      <ellipse cx="60" cy="100" rx="36" ry="20" {...STROKE} />
      <text x="60" y="104" textAnchor="middle" {...TXT}>Início</text>
      <line x1="96" y1="100" x2="130" y2="100" {...STROKE} />
      <polygon points="130,100 150,80 150,120" fill="currentColor" stroke="none" />
      <rect x="155" y="80" width="90" height="40" rx="2" {...STROKE} />
      <text x="200" y="104" textAnchor="middle" {...TXT}>Processo</text>
      <line x1="245" y1="100" x2="275" y2="100" {...STROKE} />
      <polygon points="275,100 295,80 295,120" fill="currentColor" stroke="none" />
      <polygon points="300,100 340,70 380,100 340,130" {...STROKE} />
      <text x="340" y="104" textAnchor="middle" {...TXT}>Decisão</text>
      <line x1="380" y1="100" x2="410" y2="100" {...STROKE} />
      <polygon points="410,100 430,80 430,120" fill="currentColor" stroke="none" />
      <rect x="435" y="80" width="80" height="40" rx="2" {...STROKE} />
      <text x="475" y="104" textAnchor="middle" {...TXT}>Ação</text>
      <line x1="515" y1="100" x2="540" y2="100" {...STROKE} />
      <polygon points="540,100 560,80 560,120" fill="currentColor" stroke="none" />
      <ellipse cx="575" cy="100" rx="20" ry="20" {...STROKE} />
      <text x="575" y="104" textAnchor="middle" {...TXT}>Fim</text>
      <text x="340" y="155" textAnchor="middle" {...TXT_SM}>Sim</text>
      <path d="M 340 130 Q 340 165 300 165 Q 200 165 200 120" {...S} />
      <text x="250" y="160" textAnchor="middle" {...TXT_SM}>Não</text>
    </svg>
  );
}

function ParetoDiagram() {
  const bars = [80, 60, 42, 28, 18, 10];
  const cats = ["A", "B", "C", "D", "E", "F"];
  const cum = bars.map((_, i) => bars.slice(0, i + 1).reduce((a, b) => a + b, 0));
  const total = bars.reduce((a, b) => a + b, 0);
  const cumPct = cum.map((c) => (c / total) * 100);
  return (
    <svg viewBox="0 0 600 280" className="w-full" style={{ color: "#444" }}>
      <line x1="50" y1="240" x2="560" y2="240" {...STROKE} />
      <line x1="50" y1="40" x2="50" y2="240" {...STROKE} />
      <line x1="560" y1="40" x2="560" y2="240" {...STROKE} />
      {bars.map((h, i) => {
        const x = 60 + i * 82;
        const bh = (h / 80) * 180;
        return (
          <g key={i}>
            <rect x={x} y={240 - bh} width="60" height={bh} {...S} />
            <text x={x + 30} y="255" textAnchor="middle" {...TXT_SM}>{cats[i]}</text>
          </g>
        );
      })}
      <polyline
        points={cumPct.map((p, i) => `${60 + i * 82 + 30},${240 - (p / 100) * 180}`).join(" ")}
        {...STROKE}
      />
      {cumPct.map((p, i) => (
        <circle key={i} cx={60 + i * 82 + 30} cy={240 - (p / 100) * 180} r="2.5" fill="currentColor" stroke="none" />
      ))}
      {[0, 25, 50, 75, 100].map((p) => (
        <g key={p}>
          <text x="568" y={244 - (p / 100) * 180} {...TXT_SM}>{p}%</text>
        </g>
      ))}
      <text x="305" y="275" textAnchor="middle" {...TXT_SM}>Categorias (defeitos)</text>
      <text x="20" y="140" textAnchor="middle" transform="rotate(-90 20 140)" {...TXT_SM}>Frequência</text>
    </svg>
  );
}

function HistogramaDiagram() {
  const bars = [15, 35, 70, 95, 80, 45, 20, 8];
  return (
    <svg viewBox="0 0 600 280" className="w-full" style={{ color: "#444" }}>
      <line x1="50" y1="240" x2="560" y2="240" {...STROKE} />
      <line x1="50" y1="40" x2="50" y2="240" {...STROKE} />
      {bars.map((h, i) => {
        const x = 55 + i * 62;
        const bh = (h / 95) * 180;
        return <rect key={i} x={x} y={240 - bh} width="56" height={bh} {...S} />;
      })}
      {[0, 25, 50, 75, 95].map((v, i) => (
        <text key={i} x="42" y={244 - (v / 95) * 180} textAnchor="end" {...TXT_SM}>{v}</text>
      ))}
      <text x="305" y="270" textAnchor="middle" {...TXT_SM}>Valores (bins)</text>
      <text x="20" y="140" textAnchor="middle" transform="rotate(-90 20 140)" {...TXT_SM}>Frequência</text>
      <path d="M 55 200 Q 200 50 400 60 Q 500 80 555 220" {...S} strokeDasharray="3 3" />
    </svg>
  );
}

function CartaControleDiagram() {
  const points = [72, 75, 78, 73, 76, 79, 74, 77, 80, 75, 73, 76, 78, 95, 74, 77];
  const min = 60, max = 100, cl = 76, ucl = 90, lcl = 62;
  const y = (v) => 240 - ((v - min) / (max - min)) * 180;
  return (
    <svg viewBox="0 0 600 280" className="w-full" style={{ color: "#444" }}>
      <line x1="50" y1="240" x2="560" y2="240" {...STROKE} />
      <line x1="50" y1="40" x2="50" y2="240" {...STROKE} />
      <line x1="50" y1={y(cl)} x2="560" y2={y(cl)} {...STROKE} />
      <text x="565" y={y(cl) + 3} {...TXT_SM}>LC</text>
      <line x1="50" y1={y(ucl)} x2="560" y2={y(ucl)} {...S} strokeDasharray="4 3" />
      <text x="565" y={y(ucl) + 3} {...TXT_SM}>LSC</text>
      <line x1="50" y1={y(lcl)} x2="560" y2={y(lcl)} {...S} strokeDasharray="4 3" />
      <text x="565" y={y(lcl) + 3} {...TXT_SM}>LIC</text>
      <polyline
        points={points.map((p, i) => `${60 + i * 31},${y(p)}`).join(" ")}
        {...S}
      />
      {points.map((p, i) => (
        <circle key={i} cx={60 + i * 31} cy={y(p)} r="2.5" fill={p > ucl || p < lcl ? "currentColor" : "none"} stroke="currentColor" strokeWidth={1} />
      ))}
      <text x="305" y="270" textAnchor="middle" {...TXT_SM}>Amostras (tempo)</text>
      <text x="20" y="140" textAnchor="middle" transform="rotate(-90 20 140)" {...TXT_SM}>Valor medido</text>
    </svg>
  );
}

function DispersaoDiagram() {
  const points = [
    [80, 85], [100, 90], [120, 95], [140, 100], [160, 110], [180, 105], [200, 120], [220, 125], [240, 130], [260, 140], [280, 135], [300, 150], [320, 145], [340, 160], [360, 155], [380, 170], [400, 165], [420, 180], [440, 175], [460, 190], [480, 185], [500, 200], [520, 195],
  ];
  return (
    <svg viewBox="0 0 600 280" className="w-full" style={{ color: "#444" }}>
      <line x1="50" y1="240" x2="560" y2="240" {...STROKE} />
      <line x1="50" y1="40" x2="50" y2="240" {...STROKE} />
      {points.map(([x, y], i) => (
        <circle key={i} cx={50 + x / 600 * 510} cy={240 - (y - 70) / 140 * 180} r="2.5" fill="currentColor" stroke="none" />
      ))}
      <line x1="60" y1="200" x2="555" y2="70" {...S} strokeDasharray="4 3" />
      <text x="305" y="270" textAnchor="middle" {...TXT_SM}>Variável X</text>
      <text x="20" y="140" textAnchor="middle" transform="rotate(-90 20 140)" {...TXT_SM}>Variável Y</text>
    </svg>
  );
}

function SipocDiagram() {
  const cols = [
    { title: "Fornecedores", items: ["Fornecedor A", "Cliente interno"] },
    { title: "Entradas", items: ["Requisição", "Especificação"] },
    { title: "Processo", items: ["1. Receber", "2. Processar", "3. Entregar"] },
    { title: "Saídas", items: ["Produto conforme", "Relatório"] },
    { title: "Clientes", items: ["Cliente final", "Próxima etapa"] },
  ];
  return (
    <svg viewBox="0 0 600 240" className="w-full" style={{ color: "#444" }}>
      {cols.map((col, ci) => {
        const x = 20 + ci * 116;
        return (
          <g key={ci}>
            <rect x={x} y="20" width="106" height="28" {...STROKE} />
            <text x={x + 53} y="38" textAnchor="middle" {...TXT_BOLD}>{col.title}</text>
            {col.items.map((item, ii) => {
              const y = 56 + ii * 30;
              return (
                <g key={ii}>
                  <rect x={x} y={y} width="106" height="26" {...S} />
                  <text x={x + 53} y={y + 17} textAnchor="middle" {...TXT_SM}>{item}</text>
                </g>
              );
            })}
          </g>
        );
      })}
      {[0, 1, 2, 3].map((i) => (
        <polygon key={i} points={`${136 + i * 116},34 ${142 + i * 116},28 ${142 + i * 116},40`} fill="currentColor" stroke="none" />
      ))}
    </svg>
  );
}

function PdcaDiagram() {
  const cx = 300, cy = 130, r = 85;
  return (
    <svg viewBox="0 0 600 280" className="w-full" style={{ color: "#444" }}>
      <circle cx={cx} cy={cy} r={r} {...STROKE} />
      <line x1={cx} y1={cy - r} x2={cx} y2={cy + r} {...S} />
      <line x1={cx - r} y1={cy} x2={cx + r} y2={cy} {...S} />
      <text x={cx} y={cy - r - 8} textAnchor="middle" {...TXT_BOLD}>Plan (Planejar)</text>
      <text x={cx} y={cy - r + 6} textAnchor="middle" {...TXT_SM}>definir metas e plano</text>
      <text x={cx + r + 8} y={cy + 4} textAnchor="start" {...TXT_BOLD}>Do (Executar)</text>
      <text x={cx + r + 8} y={cy + 18} textAnchor="start" {...TXT_SM}>executar o plano</text>
      <text x={cx} y={cy + r + 18} textAnchor="middle" {...TXT_BOLD}>Check (Verificar)</text>
      <text x={cx} y={cy + r + 32} textAnchor="middle" {...TXT_SM}>avaliar resultados</text>
      <text x={cx - r - 8} y={cy + 4} textAnchor="end" {...TXT_BOLD}>Act (Agir)</text>
      <text x={cx - r - 8} y={cy + 18} textAnchor="end" {...TXT_SM}>padronizar ou corrigir</text>
      <path d="M 300 45 A 85 85 0 0 1 385 130" {...S} strokeDasharray="3 3" />
      <polygon points="385,130 378,122 382,135" fill="currentColor" stroke="none" />
    </svg>
  );
}

function DmaicDiagram() {
  const phases = ["Define", "Measure", "Analyze", "Improve", "Control"];
  const descs = ["definir", "medir", "analisar", "melhorar", "controlar"];
  return (
    <svg viewBox="0 0 600 160" className="w-full" style={{ color: "#444" }}>
      {phases.map((p, i) => {
        const x = 30 + i * 114;
        return (
          <g key={i}>
            <rect x={x} y="40" width="100" height="50" rx="4" {...STROKE} />
            <text x={x + 50} y="62" textAnchor="middle" {...TXT_BOLD}>{p}</text>
            <text x={x + 50} y="78" textAnchor="middle" {...TXT_SM}>{descs[i]}</text>
            {i < 4 && <polygon points={`${x + 104},65 ${x + 114},58 ${x + 114},72`} fill="currentColor" stroke="none" />}
          </g>
        );
      })}
    </svg>
  );
}

function FiveSDiagram() {
  const sensos = [
    { jp: "Seiri", pt: "Utilização", desc: "separar o necessário do desnecessário" },
    { jp: "Seiton", pt: "Organização", desc: "um lugar para cada coisa" },
    { jp: "Seiso", pt: "Limpeza", desc: "limpar e inspecionar" },
    { jp: "Seiketsu", pt: "Padronização", desc: "manter os 3S anteriores" },
    { jp: "Shitsuke", pt: "Disciplina", desc: "sustentar pela educação" },
  ];
  return (
    <svg viewBox="0 0 600 220" className="w-full" style={{ color: "#444" }}>
      {sensos.map((s, i) => {
        const x = 20 + i * 116;
        return (
          <g key={i}>
            <rect x={x} y="30" width="106" height="120" rx="4" {...STROKE} />
            <text x={x + 53} y="55" textAnchor="middle" {...TXT_BOLD}>{s.jp}</text>
            <text x={x + 53} y="75" textAnchor="middle" {...TXT}>{s.pt}</text>
            <line x1={x + 10} y1="85" x2={x + 96} y2="85" {...S} />
            {s.desc.split(" ").reduce((acc, word, wi) => {
              const line = acc[acc.length - 1];
              if (line.length + word.length + 1 < 18) {
                acc[acc.length - 1] = line + (line ? " " : "") + word;
              } else {
                acc.push(word);
              }
              return acc;
            }, [""]).map((line, li) => (
              <text key={li} x={x + 53} y={105 + li * 14} textAnchor="middle" {...TXT_SM}>{line}</text>
            ))}
            {i < 4 && <polygon points={`${x + 110},90 ${x + 116},84 ${x + 116},96`} fill="currentColor" stroke="none" />}
          </g>
        );
      })}
    </svg>
  );
}

function MatrizGutDiagram() {
  return (
    <svg viewBox="0 0 600 280" className="w-full" style={{ color: "#444" }}>
      {/* 3D box effect */}
      <g>
        {/* Front face - Gravidade x Urgência */}
        <rect x="80" y="60" width="200" height="160" {...STROKE} />
        <line x1="80" y1="140" x2="280" y2="140" {...S} />
        <line x1="180" y1="60" x2="180" y2="220" {...S} />
        <text x="180" y="50" textAnchor="middle" {...TXT_BOLD}>Urgência</text>
        <text x="70" y="140" textAnchor="middle" transform="rotate(-90 70 140)" {...TXT_BOLD}>Gravidade</text>
        <text x="130" y="100" textAnchor="middle" {...TXT_SM}>Alta/Alta</text>
        <text x="230" y="100" textAnchor="middle" {...TXT_SM}>Baixa/Alta</text>
        <text x="130" y="180" textAnchor="middle" {...TXT_SM}>Alta/Baixa</text>
        <text x="230" y="180" textAnchor="middle" {...TXT_SM}>Baixa/Baixa</text>
        {/* Top face - Tendência */}
        <polygon points="80,60 280,60 340,30 140,30" {...STROKE} />
        <text x="210" y="22" textAnchor="middle" {...TXT_BOLD}>Tendência</text>
        {/* Right face */}
        <polygon points="280,60 340,30 340,190 280,220" {...STROKE} />
      </g>
      <text x="300" y="265" textAnchor="middle" {...TXT_SM}>Priorização: Gravidade × Urgência × Tendência</text>
    </svg>
  );
}

const DIAGRAM_MAP = [
  { match: "ishikawa", Component: IshikawaDiagram, caption: "Espinha-de-peixe com os 6M (Máquina, Método, Material, Mão de obra, Medição, Meio ambiente). Cada osso representa uma categoria de causa; as subespinhas detalham causas específicas que convergem para o efeito (problema) na cabeça." },
  { match: "fluxograma", Component: FluxogramaDiagram, caption: "Símbolos técnicos: oval (terminal), retângulo (processo), losango (decisão) e setas de fluxo. O caminho 'Sim' segue em frente; o 'Não' retorna ao processo anterior." },
  { match: "pareto", Component: ParetoDiagram, caption: "Barras em ordem decrescente de frequência e linha de percentual acumulado. O princípio 80/20: os primeiros itens (esquerda) concentram a maior parte dos problemas." },
  { match: "histograma", Component: HistogramaDiagram, caption: "Distribuição de frequência dos dados. A forma da curva indica se o processo está centrado e se a variabilidade é simétrica. A linha tracejada sugere a curva normal." },
  { match: "carta de controle", Component: CartaControleDiagram, caption: "Linha Central (LC) e Limites Superior (LSC) e Inferior (LIC) de controle. Pontos dentro dos limites indicam processo estável; ponto fora sinaliza causa especial de variação." },
  { match: "cep", Component: CartaControleDiagram, caption: "Linha Central (LC) e Limites Superior (LSC) e Inferior (LIC) de controle. Pontos dentro dos limites indicam processo estável; ponto fora sinaliza causa especial de variação." },
  { match: "dispers", Component: DispersaoDiagram, caption: "Nuvem de pontos que relaciona duas variáveis. A linha de tendência tracejada indica correlação: positiva (sobe), negativa (desce) ou ausente (dispersa)." },
  { match: "sipoc", Component: SipocDiagram, caption: "Tabela de Fornecedores, Entradas, Processo, Saídas e Clientes. Cada coluna lista os elementos que alimentam e recebem o processo, delimitando o escopo antes de melhorias." },
  { match: "pdca", Component: PdcaDiagram, caption: "Ciclo contínuo de quatro fases: Plan (planejar), Do (executar), Check (verificar) e Act (agir/padronizar). Cada volta eleva o nível de qualidade." },
  { match: "dmaic", Component: DmaicDiagram, caption: "Sequência linear das cinco fases do Six Sigma: Define, Measure, Analyze, Improve, Control. Cada fase entrega subsídio para a próxima." },
  { match: "5s", Component: FiveSDiagram, caption: "Os cinco sensos em sequência: Seiri (utilização), Seiton (organização), Seiso (limpeza), Seiketsu (padronização) e Shitsuke (disciplina). Cada senso sustenta o anterior." },
  { match: "gut", Component: MatrizGutDiagram, caption: "Matriz tridimensional de Gravidade, Urgência e Tendência. Quanto maior a pontuação nas três dimensões, maior a prioridade de tratamento." },
];

export function getDiagramInfo(tool) {
  if (!tool) return null;
  const lower = tool.toLowerCase();
  return DIAGRAM_MAP.find((d) => lower.includes(d.match)) || null;
}

export default function ToolDiagram({ tool }) {
  if (!tool) return null;
  const lower = tool.toLowerCase();
  const found = DIAGRAM_MAP.find((d) => lower.includes(d.match));
  if (!found) return null;
  const Diagram = found.Component;
  return (
    <section className="mt-8">
      <h2 className="text-xs uppercase tracking-wider font-medium text-muted-foreground mb-3">Exemplo visual</h2>
      <div className="rounded-xl border border-border bg-card p-6">
        <Diagram />
        <p className="text-xs text-muted-foreground leading-relaxed mt-4">{found.caption}</p>
      </div>
    </section>
  );
}
