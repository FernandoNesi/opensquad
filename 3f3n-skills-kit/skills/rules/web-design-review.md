---
name: web-design-review
category: rules
version: 1.0
source: rewritten
---

# Objetivo
Revisar código de interface web contra diretrizes de UI/UX, identificando violações com localização exata (arquivo:linha) e sugestão de correção.

# Quando usar
- Auditar UI de um projeto existente
- Verificar acessibilidade de componentes
- Code review focado em qualidade visual
- Validar conformidade com padrões de design

# Inputs
- `files`: arquivo(s) ou padrão glob a ser revisado (ex: `src/components/*.tsx`)
- `focus`: área de foco opcional (acessibilidade | tipografia | cores | layout | performance)

# Outputs
```json
{
  "file": "src/components/Header.tsx",
  "issues": [
    {
      "line": 42,
      "severity": "warning",
      "rule": "contrast-ratio",
      "message": "Texto #999 sobre fundo #fff tem contraste 2.8:1 (mínimo: 4.5:1)",
      "suggestion": "Usar #595959 ou mais escuro"
    }
  ],
  "total_issues": 5,
  "passed": 12
}
```

# Regras
- Verificar: contraste (WCAG AA 4.5:1), tamanhos de fonte (≥ 16px body), alt em imagens
- Verificar: hierarquia de headings (h1 → h2 → h3, sem pular)
- Verificar: interactive elements com estados hover/focus/active
- Verificar: responsividade (media queries ou container queries)
- Verificar: performance visual (font-display: swap, lazy loading em imagens)
- Formato de saída: sempre `arquivo:linha — [severidade] mensagem`
- Severidades: error (quebrando) | warning (degradando) | info (oportunidade)

# Processo
1. Receber arquivo(s) para revisão
2. Ler conteúdo de cada arquivo
3. Aplicar checklist de regras por categoria
4. Gerar relatório com localização exata (arquivo:linha)
5. Ordenar por severidade (errors primeiro)
6. Incluir sugestão de correção para cada issue

# Fallbacks
- Se nenhum arquivo especificado → perguntar ao usuário
- Se arquivo não é HTML/CSS/JSX/TSX → informar limitação
- Se guidelines externas indisponíveis → usar checklist local hardcoded

# Exemplo
Input: "Revise o componente Button.tsx"
Output:
```
src/components/Button.tsx:15 — [warning] Botão sem estado :focus-visible
src/components/Button.tsx:23 — [info] Considerar font-size: 1rem em vez de 14px
src/components/Button.tsx:31 — [error] Cor de texto #aaa sobre #fff (contraste 2.3:1)
```
