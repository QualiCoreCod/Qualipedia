import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-accent/20">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col items-center text-center gap-1">
        <p className="font-heading font-semibold tracking-tight text-base">QualiPédia</p>
        <p className="text-sm text-muted-foreground">Sua enciclopédia de gestão da qualidade.</p>
        <p className="text-xs text-muted-foreground mt-3">Projeto autoral — Bruna Silva Ramos</p>
        <p className="text-[11px] text-muted-foreground/60">© 2026 — Conteúdo, idealização e curadoria.</p>
      </div>
    </footer>
  );
}
