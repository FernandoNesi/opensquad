---
name: system-orchestrator
category: workflow
version: 1.0
source: created
---

# Objetivo
Atuar como o ponto único de entrada do sistema 3F3N. Interpretar a intenção do usuário em texto livre e orquestrar dinamicamente uma pipeline de skills (seleção, execução e encadeamento) para gerar resultados consistentes e estruturados.

# Quando usar
- Sempre que o usuário fizer um pedido livre ("prompt raw") ao sistema
- Para determinar automaticamente qual sequência de skills resolve um problema complexo
- Para garantir que NENHUMA resposta saia fora do padrão arquitetural 3F3N
- Quando a resolução exigir múltiplas etapas (ex: extrair → transformar → formatar)

# Inputs
- `user_request`: o pedido livre do usuário em linguagem natural

# Outputs
```json
{
  "pipeline_used": ["web-scraping", "json-formatter", "output-structurer"],
  "result": {
    "type": "summary",
    "content": "..."
  },
  "status": "success",
  "notes": ["Scraping concluído.", "JSON validado."]
}
```

# Regras
- NUNCA responder diretamente sem construir e rodar uma pipeline de skills
- A saída de uma skill DEVE ser mapeada como entrada da skill subsequente
- Priorizar previsibilidade e consistência absoluta sobre criatividade textual
- Garantir a compatibilidade de dados entre as etapas (ex: usar json-formatter como bridge se houver divergência)
- O output final do orquestrador é SEMPRE o JSON estrito, sem conversas adicionais

# Processo
1. Receber o `user_request` (texto livre).
2. Se o input for vago ou incompleto:
   → usar `prompt-optimizer`
   → melhorar o input
   → só então continuar.
3. Interpretar a intenção e determinar os requisitos de dados.
4. Selecionar o arquétipo de pipeline adequado:
   - Para web: `web-scraping` → `data-transformer` → `output-structurer`
   - Para APIs/SaaS: `[integration-skill]` → `data-transformer` → `output-structurer`
   - Para criação: `[generation-skill]` → `json-formatter` → `output-structurer`
5. Orquestrar a execução invocando cada skill na ordem correta.
6. Monitorar erros de cada skill e forçar o uso dos seus fallbacks internos.
7. Consolidar os outputs parciais no formato JSON final de orquestração.
8. Entregar o output e encerrar.

# Fallbacks
- Se a intenção do usuário for completamente ininteligível → retornar `status: "error"` e detalhar na seção `notes` o que faltou.
- Se uma skill falhar definitivamente (esgotar seus retries) → mudar status para `fallback` ou `error`, preservar os dados parciais em `result` e documentar a falha em `notes`.
- Se faltar uma skill específica para a tarefa → adaptar usando ferramentas genéricas (ex: curl) mas forçar a passagem pelo `json-formatter` e `output-structurer` para mascarar a lacuna.

# Exemplo
Input: "Pegue as últimas issues do meu repo e resuma as mais urgentes."
Output:
```json
{
  "pipeline_used": [
    "github-automation",
    "data-transformer",
    "output-structurer"
  ],
  "result": {
    "type": "report",
    "title": "Issues Urgentes",
    "sections": []
  },
  "status": "success",
  "notes": [
    "github-automation listou 10 issues.",
    "data-transformer filtrou pelas labels 'bug' e 'urgent'.",
    "output-structurer gerou o relatório final."
  ]
}
```
