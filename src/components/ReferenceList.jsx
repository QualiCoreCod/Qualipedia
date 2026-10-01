import React from "react";
import { ExternalLink } from "lucide-react";

export default function ReferenceList({ references = [] }) {
  if (!references || references.length === 0) return null;
  return (
    <div className="space-y-2">
      {references.map((ref, i) => (
        <a
          key={i}
          href={ref.url}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2.5 rounded-lg border border-border bg-card px-4 py-3 text-sm hover:border-primary/40 hover:shadow-sm transition-all"
        >
          <ExternalLink className="h-4 w-4 text-muted-foreground shrink-0" />
          <span className="truncate">{ref.name || ref.url}</span>
        </a>
      ))}
    </div>
  );
}
