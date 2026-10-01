import React from "react";
import { useAuth } from "@/lib/AuthContext";
import { Lock } from "lucide-react";

export default function AdminOnly({ children, label = "Conteúdo restrito à administradora" }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return (
      <div className="flex items-center gap-2 text-xs text-muted-foreground italic mt-3">
        <Lock className="h-3.5 w-3.5" /> {label}
      </div>
    );
  }
  return <>{children}</>;
}
