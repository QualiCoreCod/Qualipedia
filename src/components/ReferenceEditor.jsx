import React, { useState } from "react";
import { Plus, X, ExternalLink } from "lucide-react";

export default function ReferenceEditor({ value = [], onChange }) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const add = (e) => {
    e.preventDefault();
    if (!url.trim()) return;
    onChange([...(value || []), { name: name.trim() || url.trim(), url: url.trim() }]);
    setName("");
    setUrl("");
  };

  const remove = (idx) => onChange((value || []).filter((_, i) => i !== idx));

  return (
    <div className="space-y-3">
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome da fonte (ex.: ASQ — Ishikawa Diagram)"
          className="flex-1 rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
        />
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://..."
          className="flex-1 rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
        />
        <button
          type="button"
          onClick={add}
          disabled={!url.trim()}
          className="shrink-0 inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-sm hover:bg-accent disabled:opacity-50 transition-colors"
        >
          <Plus className="h-4 w-4" /> Adicionar
        </button>
      </div>
      {(value || []).length > 0 && (
        <div className="space-y-2">
          {value.map((ref, idx) => (
            <div key={idx} className="flex items-center justify-between gap-3 rounded-lg border border-border bg-accent/40 px-3 py-2">
              <a href={ref.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 min-w-0 text-sm hover:text-primary">
                <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground" />
                <span className="truncate">{ref.name || ref.url}</span>
              </a>
              <button type="button" onClick={() => remove(idx)} className="text-muted-foreground hover:text-destructive shrink-0">
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
