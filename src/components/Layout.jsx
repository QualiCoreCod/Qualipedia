import React, { useState } from "react";
import { Outlet, NavLink, useLocation, Link } from "react-router-dom";
import { useAuth } from "@/lib/AuthContext";
import { Menu, X, LogIn, LogOut } from "lucide-react";
import Footer from "@/components/Footer";

const navItems = [
  { to: "/", label: "Início", end: true },
  { to: "/decisao", label: "Qual ferramenta usar?" },
  { to: "/enciclopedia", label: "Enciclopédia" },
  { to: "/iso", label: "ISO 9001" },
  { to: "/enciclopedia", label: "Metodologias" },
  { to: "/acervo", label: "Acervo" },
  { to: "/adicionar", label: "Área privada" },
];

function Monogram({ className }) {
  return (
    <div className={`${className} flex items-center justify-center rounded-[3px] border border-grafite`}>
      <span className="font-heading font-bold text-sm leading-none text-grafite">Q</span>
    </div>
  );
}

export default function Layout() {
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <Monogram className="h-7 w-7" />
              <span className="font-heading font-semibold tracking-tight text-sm">QualiPédia</span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `px-3 py-1.5 text-[13px] transition-colors border-b-2 ${
                      isActive
                        ? "border-destaque text-destaque font-medium"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Auth + Mobile toggle */}
            <div className="flex items-center gap-3">
              {isAuthenticated ? (
                <button
                  onClick={() => logout()}
                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  <LogOut className="h-3.5 w-3.5" /> <span className="hidden sm:inline">Sair</span>
                </button>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
                >
                  <LogIn className="h-3.5 w-3.5" /> <span className="hidden sm:inline">Entrar</span>
                </Link>
              )}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-1.5 text-muted-foreground hover:text-foreground transition-colors"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile nav */}
          {mobileOpen && (
            <nav className="lg:hidden border-t border-border py-3 space-y-0.5">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={item.end}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 text-sm rounded-md transition-colors ${
                      isActive
                        ? "text-destaque font-medium bg-azul-claro"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Main */}
      <main key={location.pathname} className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
