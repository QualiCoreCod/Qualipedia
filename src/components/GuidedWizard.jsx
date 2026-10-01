import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronLeft, Search, X, BookOpen, Compass, FolderOpen } from "lucide-react";
import { SECTORS, COMPANY_TYPES, CONTENT_TYPES, getSector } from "@/lib/sectors";

const STEPS = [
  { title: "O que você precisa?", placeholder: "Ex.: reduzir defeitos, montar indicadores, estruturar auditoria, melhorar atendimento" },
  { title: "Em qual setor você trabalha?" },
  { title: "Qual o tipo de empresa?" },
  { title: "Qual conteúdo procura?" },
  { title: "Resultados" },
];

export default function GuidedWizard({ themes = [], guides = [], materials = [] }) {
  const [step, setStep] = useState(0);
  const [need, setNeed] = useState("");
  const [sector, setSector] = useState("");
  const [companyType, setCompanyType] = useState("");
  const [contentType, setContentType] = useState("");
  const [subQuery, setSubQuery] = useState("");
  const [filterCat, setFilterCat] = useState("Todas");

  const reset = () => {
    setStep(0); setNeed(""); setSector(""); setCompanyType(""); setContentType(""); setSubQuery(""); setFilterCat("Todas");
  };

  const canAdvance = () => {
    if (step === 0) return need.trim().length > 0;
    if (step === 1) return !!sector;
    if (step === 2) return !!companyType;
    if (step === 3) return !!contentType;
    return true;
  };

  const filterThemes = (list) => {
    let result = list;
    if (sector) {
      const sec = getSector(sector);
      if (sec) {
        result = result.filter((t) =>
          (t.contexts || []).some((c) => sec.contexts.some((ctx) => c.toLowerCase().includes(ctx.toLowerCase())))
        );
      }
    }
    if (contentType) {
      const ct = CONTENT_TYPES.find((c) => c.id === contentType);
      if (ct) {
        if (ct.category) {
          result = result.filter((t) => t.category === ct.category);
        } else if (ct.contextMatch) {
          result = result.filter((t) => (t.contexts || []).some((c) => c.toLowerCase().includes(ct.contextMatch)));
        } else if (ct.tagMatch) {
          result = result.filter((t) => (t.tags || []).some((c) => c.toLowerCase().includes(ct.tagMatch)) || (t.contexts || []).some((c) => c.toLowerCase().includes(ct.tagMatch)));
        }
      }
    }
    if (need.trim()) {
      const q = need.trim().toLowerCase();
      result = result.filter((t) => [t.title, t.concept, t.when_to_use, t.how_to_apply, t.examples].some((f) => f?.toLowerCase().includes(q)));
    }
    if (filterCat !== "Todas") {
      result = result.filter((t) => t.category === filterCat);
    }
    if (subQuery.trim()) {
      const q = subQuery.trim().toLowerCase();
      result = result.filter((t) => [t.title, t.concept, t.when_to_use, t.how_to_apply].some((f) => f?.toLowerCase().includes(q)));
    }
    return result;
  };

  const filteredThemes = filterThemes(themes);
  const cats = ["Todas", "Metodologia", "Norma", "Ferramenta", "Indicador", "Processo", "Conceito"];

  const StepContent = () => {
    if (step === 0) {
      return (
        <textarea
          value={need}
          onChange={(e) => setNeed(e.target.value)}
          rows={3}
          placeholder={STEPS[0].placeholder}
          autoFocus
          className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
        />
      );
    }
    if (step === 1) {
      return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {SECTORS.map((s) => {
            const Icon = s.icon;
            return (
              <button
                key={s.id}
                onClick={() => setSector(s.id)}
                className={`flex items-center gap-2.5 rounded-lg border p-3 text-left text-sm transition-all ${sector === s.id ? "border-primary bg-primary/5" : "border-border hover:bg-accent"}`}
              >
                <Icon className="h-4 w-4 shrink-0 text-muted-foreground" />
                <span className="font-medium">{s.name}</span>
              </button>
            );
          })}
        </div>
      );
    }
    if (step === 2) {
      return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {COMPANY_TYPES.map((c) => (
            <button
              key={c}
              onClick={() => setCompanyType(c)}
              className={`rounded-lg border p-3 text-sm font-medium transition-all ${companyType === c ? "border-primary bg-primary/5" : "border-border hover:bg-accent"}`}
            >
              {c}
            </button>
          ))}
        </div>
      );
    }
    if (step === 3) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {CONTENT_TYPES.map((c) => (
            <button
              key={c.id}
              onClick={() => setContentType(c.id)}
              className={`rounded-lg border p-3 text-left text-sm font-medium transition-all ${contentType === c.id ? "border-primary bg-primary/5" : "border-border hover:bg-accent"}`}
            >
              {c.label}
            </button>
          ))}
        </div>
      );
    }
    // Step 4: Results
    return (
      <div>
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={subQuery}
              onChange={(e) => setSubQuery(e.target.value)}
              placeholder="Refinar dentro dos resultados..."
              className="w-full rounded-lg border border-input bg-background pl-9 pr-3 py-2 text-sm outline-none focus:border-primary"
            />
          </div>
          <button onClick={reset} className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
            <X className="h-3.5 w-3.5" /> Recomeçar
          </button>
        </div>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilterCat(c)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${filterCat === c ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground hover:text-foreground hover:bg-accent"}`}
            >
              {c}
            </button>
          ))}
        </div>

        {filteredThemes.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
            Nenhuma ficha encontrada com esses critérios. Tente ajustar os filtros ou recomeçar.
          </div>
        ) : (
          <>
            <p className="text-sm text-muted-foreground mb-3">{filteredThemes.length} ficha(s) encontrada(s)</p>
            <div className="grid gap-3">
              {filteredThemes.map((t) => (
                <Link key={t.id} to={`/tema/${t.id}`} className="group rounded-xl border border-border bg-card p-4 hover:border-primary/40 hover:shadow-sm transition-all">
                  <div className="flex items-center justify-between gap-3 mb-1">
                    <h4 className="font-heading font-semibold group-hover:text-primary transition-colors">{t.title}</h4>
                    <span className="text-[10px] uppercase tracking-wide text-muted-foreground border border-border rounded-full px-2 py-0.5 shrink-0">{t.category}</span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">{t.concept}</p>
                  {t.when_to_use && <p className="text-xs text-muted-foreground mt-2 italic line-clamp-1">Quando usar: {t.when_to_use}</p>}
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
      {/* Stepper */}
      {step < 4 && (
        <div className="flex items-center gap-1.5 mb-6">
          {STEPS.slice(0, 4).map((_, i) => (
            <div key={i} className="flex items-center gap-1.5 flex-1">
              <div className={`h-1.5 rounded-full flex-1 transition-colors ${i <= step ? "bg-primary" : "bg-border"}`} />
            </div>
          ))}
        </div>
      )}

      <h3 className="font-heading text-lg font-semibold mb-1">{STEPS[step].title}</h3>
      {step < 4 && <p className="text-sm text-muted-foreground mb-4">Etapa {step + 1} de 5</p>}

      <div className="mb-5">
        <StepContent />
      </div>

      {step < 4 && (
        <div className="flex items-center justify-between">
          <button
            onClick={() => step > 0 && setStep(step - 1)}
            disabled={step === 0}
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground disabled:opacity-30"
          >
            <ChevronLeft className="h-4 w-4" /> Voltar
          </button>
          <button
            onClick={() => canAdvance() && setStep(step + 1)}
            disabled={!canAdvance()}
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 disabled:opacity-50"
          >
            {step === 3 ? "Ver resultados" : "Continuar"} <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}
