import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getDiagramInfo } from "@/components/ToolDiagram";

export default function ToolCard({ theme }) {
  const diagram = getDiagramInfo(theme.title);
  if (!diagram) return null;
  const Diagram = diagram.Component;
  return (
    <Link to={`/tema/${theme.id}`} className="group rounded-2xl border border-border bg-card p-5 hover:border-primary/40 hover:shadow-sm transition-all flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-heading font-semibold text-lg group-hover:text-primary transition-colors">{theme.title}</h3>
        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
      </div>
      <div className="rounded-lg border border-border bg-background/50 p-3 mb-3 overflow-hidden" style={{ color: "#666" }}>
        <Diagram />
      </div>
      {theme.origin && (
        <div className="mb-2.5">
          <p className="text-[10px] uppercase tracking-wide text-muted-foreground mb-0.5">Origem</p>
          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{theme.origin}</p>
        </div>
      )}
      {theme.contexts?.length > 0 && (
        <div className="mb-2.5">
          <p className="text-[10px] uppercase tracking-wide text-muted-foreground mb-1">Em que se aplica</p>
          <div className="flex flex-wrap gap-1">
            {theme.contexts.slice(0, 5).map((ctx) => (
              <span key={ctx} className="text-[10px] font-medium text-primary border border-primary/20 bg-primary/5 rounded-full px-2 py-0.5">{ctx}</span>
            ))}
          </div>
        </div>
      )}
      {theme.when_to_use && (
        <div className="mb-2.5">
          <p className="text-[10px] uppercase tracking-wide text-muted-foreground mb-0.5">Quando usar</p>
          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{theme.when_to_use}</p>
        </div>
      )}
      {theme.how_to_apply && (
        <div className="mb-3">
          <p className="text-[10px] uppercase tracking-wide text-muted-foreground mb-0.5">Como utilizar</p>
          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">{theme.how_to_apply}</p>
        </div>
      )}
      <span className="mt-auto inline-flex items-center gap-1 text-xs font-medium text-primary group-hover:gap-1.5 transition-all">
        Ver ficha completa <ArrowRight className="h-3 w-3" />
      </span>
    </Link>
  );
}
