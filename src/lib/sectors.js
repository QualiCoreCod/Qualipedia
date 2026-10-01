import { Factory, Headset, Activity, Code, ShoppingCart, Truck, GraduationCap, Building2, LineChart } from "lucide-react";

export const SECTORS = [
  { id: "industria-manufatura", name: "Indústria e Manufatura", description: "Produção, controle estatístico, desperdício, Lean", icon: Factory, contexts: ["indústria", "produção", "manufatura"] },
  { id: "servicos", name: "Serviços", description: "Qualidade em serviços, atendimento, experiência do cliente", icon: Headset, contexts: ["atendimento", "serviços"] },
  { id: "saude", name: "Saúde", description: "Segurança do paciente, protocolos, auditoria clínica", icon: Activity, contexts: ["saúde"] },
  { id: "tecnologia-software", name: "Tecnologia e Software", description: "Qualidade de software, processos de TI, conformidade", icon: Code, contexts: ["tecnologia", "software", "projetos"] },
  { id: "varejo-ecommerce", name: "Varejo e E-commerce", description: "Conversão, devoluções, experiência de compra", icon: ShoppingCart, contexts: ["vendas", "e-commerce", "varejo"] },
  { id: "logistica-suprimentos", name: "Logística e Suprimentos", description: "Cadeia de suprimentos, estoque, distribuição", icon: Truck, contexts: ["logística", "suprimentos"] },
  { id: "educacao", name: "Educação", description: "Qualidade acadêmica, avaliação, processos educacionais", icon: GraduationCap, contexts: ["educação"] },
  { id: "setor-publico", name: "Setor Público", description: "Gestão pública, conformidade, atendimento ao cidadão", icon: Building2, contexts: ["setor público", "público"] },
  { id: "financeiro", name: "Financeiro", description: "Controle, riscos, conformidade regulatória", icon: LineChart, contexts: ["financeiro", "risco"] },
];

export const getSector = (id) => SECTORS.find((s) => s.id === id);

export const COMPANY_TYPES = [
  "Indústria/Fábrica",
  "Operação de Serviços",
  "E-commerce/Varejo",
  "Software/SaaS",
  "Saúde",
  "Outra",
];

export const CONTENT_TYPES = [
  { id: "ferramentas", label: "Ferramentas e técnicas", category: "Ferramenta" },
  { id: "metodologias", label: "Metodologias (PDCA, Lean, Six Sigma, TQM)", category: "Metodologia" },
  { id: "normas", label: "Normas e conformidade (ISO)", category: "Norma" },
  { id: "indicadores", label: "Indicadores e medição", category: "Indicador" },
  { id: "riscos", label: "Gestão de riscos", category: null, contextMatch: "risco" },
  { id: "melhoria", label: "Melhoria contínua", category: null, tagMatch: "melhoria" },
  { id: "fundamentos", label: "Fundamentos e história", category: "Conceito" },
];
