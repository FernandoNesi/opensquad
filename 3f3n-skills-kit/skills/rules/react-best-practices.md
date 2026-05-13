---
name: react-best-practices
category: rules
version: 1.0
source: rewritten
---

# Objetivo
Aplicar regras de otimização de performance em código React/Next.js, priorizadas por impacto (CRITICAL → LOW), durante escrita, revisão ou refatoração.

# Quando usar
- Escrever novos componentes React ou páginas Next.js
- Revisar código para problemas de performance
- Refatorar código existente
- Otimizar bundle size ou tempo de carregamento
- Code review de PRs com código React/Next.js

# Inputs
- Código React/Next.js a ser analisado ou gerado
- Contexto: novo componente | refactoring | code review | otimização

# Outputs
```json
{
  "rules_applied": [
    {
      "rule": "async-parallel",
      "priority": "CRITICAL",
      "category": "waterfalls",
      "action": "Usar Promise.all() para operações independentes",
      "file": "app/page.tsx",
      "line": 15
    }
  ],
  "total_issues": 3,
  "critical": 1,
  "high": 1,
  "medium": 1
}
```

# Regras
Aplicar nesta ordem de prioridade:

**CRITICAL — Waterfalls (async-)**
- Checar condições baratas ANTES de await
- Mover await para branches onde é usado
- `Promise.all()` para operações independentes
- Suspense boundaries para streaming

**CRITICAL — Bundle (bundle-)**
- Import direto, evitar barrel files
- `next/dynamic` para componentes pesados
- Carregar analytics/logging após hydration
- Preload em hover/focus

**HIGH — Server (server-)**
- `React.cache()` para deduplicação per-request
- Minimizar dados passados a client components
- Paralelizar fetches reestruturando componentes
- `after()` para operações non-blocking

**MEDIUM — Re-render (rerender-)**
- Não subscrever a state usado apenas em callbacks
- Extrair trabalho pesado em componentes memoizados
- `useDeferredValue` para manter input responsivo
- NUNCA definir componentes dentro de componentes

# Processo
1. Identificar tipo de tarefa (novo código vs revisão vs refactor)
2. Escanear por violações começando pelas regras CRITICAL
3. Para cada violação: indicar arquivo, linha, regra violada e correção
4. Aplicar correções ou sugerir mudanças
5. Verificar se correções não introduzem novos problemas

# Fallbacks
- Se código não é React/Next.js → informar que regras são específicas para React
- Se regra individual não aplicável → pular e seguir para próxima prioridade
- Para detalhes de uma regra específica → consultar `rules/{prefix}-{rule-name}.md`

# Exemplo
Input: "Revise este código de data fetching"
```tsx
async function Page() {
  const user = await getUser();
  const posts = await getPosts(user.id);
  const comments = await getComments(user.id);
  return <Dashboard user={user} posts={posts} comments={comments} />;
}
```
Output:
```json
{
  "rules_applied": [
    {
      "rule": "async-parallel",
      "priority": "CRITICAL",
      "action": "posts e comments são independentes — usar Promise.all()"
    }
  ]
}
```
Correção:
```tsx
async function Page() {
  const user = await getUser();
  const [posts, comments] = await Promise.all([
    getPosts(user.id),
    getComments(user.id)
  ]);
  return <Dashboard user={user} posts={posts} comments={comments} />;
}
```
