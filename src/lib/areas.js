import { Headset, ShoppingCart, Workflow, Users, AlertTriangle, TrendingDown, Factory } from "lucide-react";

export const AREAS = [
  { id: "atendimento", name: "Atendimento", description: "Qualidade no atendimento, suporte, experiência do cliente", icon: Headset, contexts: ["atendimento"] },
  { id: "vendas-ecommerce", name: "Vendas e E-commerce", description: "Conversão, devoluções, experiência de compra, gestão de pedidos", icon: ShoppingCart, contexts: ["vendas", "e-commerce"] },
  { id: "projetos-processos", name: "Projetos e Processos", description: "Planejamento, execução, mapeamento e melhoria de processos", icon: Workflow, contexts: ["projetos", "processos"] },
  { id: "gestao-pessoas", name: "Gestão de Pessoas", description: "Turnover, perda de funcionário, treinamento, avaliação, PDI", icon: Users, contexts: ["perda de funcionário", "gestão de pessoas", "turnover"] },
  { id: "riscos-falhas", name: "Riscos e Falhas", description: "Prevenção, matriz de risco, FMEA, não conformidades", icon: AlertTriangle, contexts: ["risco"] },
  { id: "perda-clientes", name: "Perda de Clientes", description: "Churn, retenção, satisfação, recontato", icon: TrendingDown, contexts: ["perda de cliente", "churn"] },
  { id: "industria-operacoes", name: "Indústria e Operações", description: "Produção, CEP, desperdício, Lean", icon: Factory, contexts: ["indústria"] },
];

export const getArea = (id) => AREAS.find((a) => a.id === id);
