import React from "react";

export default function AcervoSection({ id, num, title, subtitle, children }) {
  return (
    <section id={id} className="mb-12 scroll-mt-20">
      <div className="flex items-baseline gap-3 mb-1">
        {num && <span className="text-sm font-heading font-semibold text-primary/60">{num}</span>}
        <h2 className="font-heading text-xl md:text-2xl font-semibold tracking-tight">{title}</h2>
      </div>
      {subtitle && <p className="text-sm text-muted-foreground mb-5 ml-7">{subtitle}</p>}
      <div className={subtitle ? "ml-7" : "mt-5 ml-7"}>{children}</div>
    </section>
  );
}
