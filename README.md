# QualiPédia

Enciclopédia digital de gestão da qualidade criada por Bruna Silva Ramos Sousa. O projeto reúne conceitos, ferramentas, trilhas por área e setor, guia de decisão e um acervo profissional com acesso controlado.

## Tecnologias

- React 18
- Vite
- Tailwind CSS
- Base44 SDK para autenticação, entidades e uploads

## Executar localmente

```bash
npm install
npm run dev
```

Para validar uma versão de produção:

```bash
npm run build
```

Copie `.env.example` para `.env.local` quando precisar informar parâmetros locais. Não publique credenciais ou arquivos `.env` reais.

### No Rocket

O Rocket inicia o servidor de Preview automaticamente. Se já houver um servidor em execução, use o botão **Preview** e não execute um segundo `npm run dev`, `pnpm dev` ou `vinext dev`. Para validar o código, execute somente `npm run build` ou `pnpm build`, conforme o gerenciador usado no ambiente.

## Estrutura principal

```text
src/
  api/          integração com o Base44
  components/   componentes compartilhados
  hooks/        hooks da aplicação
  lib/          contexto, constantes e utilitários
  pages/        páginas e rotas
base44/
  entities/     esquemas das entidades
public/         manifesto e configuração de rotas da hospedagem
```

## Privacidade

As pastas `dados/`, `Insumos/`, `biblioteca/` e `documentos/` podem conter materiais profissionais e conteúdo reservado. Elas estão excluídas pelo `.gitignore` e não devem ser adicionadas a um repositório público sem revisão.

## Situação do projeto

Esta versão foi reconstruída manualmente a partir do código disponível no Base44. Antes de publicar ou implantar, confirme que `npm run build` termina sem erros e teste autenticação, rotas internas, consultas às entidades e uploads.
