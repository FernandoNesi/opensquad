---
name: scrape-transform-pipeline
category: workflow
version: 1.0
source: created
---

# Objetivo
Encadear automaticamente 4 skills em pipeline sequencial: extrair dados da web → transformar → formatar em JSON → estruturar output final. Cada etapa alimenta a próxima.

# Quando usar
- Extrair dados de um site e gerar relatório estruturado
- Coletar informações de múltiplas páginas e consolidar em JSON limpo
- Monitorar conteúdo web e transformar em formato consumível por APIs
- Qualquer tarefa que combine scraping + processamento + output padronizado

# Inputs
- `url`: URL alvo para extração
- `transforms`: transformações a aplicar nos dados extraídos (opcional)
- `output_template`: "report" | "table" | "checklist" | "api_response" | "summary"
- `stealth`: true/false (bypass anti-bot)

# Pipeline

```
┌──────────────┐    ┌──────────────────┐    ┌────────────────┐    ┌───────────────────┐
│ web-scraping │───▶│ data-transformer │───▶│ json-formatter │───▶│ output-structurer │
│              │    │                  │    │                │    │                   │
│ Extrair      │    │ Filtrar          │    │ Validar JSON   │    │ Template final    │
│ conteúdo     │    │ Mapear           │    │ Tipar campos   │    │ Metadata          │
│ bruto        │    │ Calcular         │    │ Normalizar     │    │ Entrega           │
└──────────────┘    └──────────────────┘    └────────────────┘    └───────────────────┘
```

# Outputs
```json
{
  "pipeline": "scrape-transform-pipeline",
  "status": "success",
  "stages": {
    "scraping": { "status": "success", "method": "trafilatura", "content_length": 3200 },
    "transform": { "status": "success", "input_records": 10, "output_records": 7 },
    "formatting": { "status": "success", "format_detected": "text", "records": 7 },
    "structuring": { "status": "success", "template": "report" }
  },
  "output": {
    "type": "report",
    "title": "...",
    "sections": [],
    "meta": { "source_url": "...", "timestamp": "...", "pipeline_version": "1.0" }
  },
  "warnings": [],
  "execution_time_ms": 4500
}
```

# Regras
- Cada etapa DEVE receber o output da etapa anterior como input
- Se qualquer etapa falhar → pipeline para, retorna status parcial com estágio que falhou
- Warnings são acumulados entre etapas (não descartados)
- Output final SEMPRE em JSON estruturado
- Etapas NÃO podem ser reordenadas (sequência fixa: scrape → transform → format → structure)
- Se `transforms` não fornecido → pular etapa data-transformer (pass-through)
- Se `output_template` não fornecido → usar "summary" como padrão

# Processo

## Etapa 1: web-scraping
1. Verificar robots.txt do domínio
2. Executar cascade: trafilatura → requests → Playwright
3. Detectar poison pills (paywall, captcha, cloudflare)
4. Se poison pill detectado → parar pipeline, reportar
5. Passar `{ content, title, method }` para etapa 2

## Etapa 2: data-transformer
1. Receber conteúdo bruto da etapa 1
2. Aplicar transforms definidos (filter, map, calculate, sort)
3. Se nenhum transform definido → passar dados sem alteração
4. Passar dataset transformado para etapa 3

## Etapa 3: json-formatter
1. Receber dados da etapa 2
2. Detectar formato e tipar campos (string, number, boolean, date, null)
3. Normalizar valores (datas → ISO 8601, booleans → true/false)
4. Validar JSON final (parseable)
5. Passar JSON validado para etapa 4

## Etapa 4: output-structurer
1. Receber JSON da etapa 3
2. Aplicar template solicitado (report, table, checklist, api_response, summary)
3. Adicionar metadata (source_url, timestamp, pipeline_version)
4. Acumular warnings de todas as etapas anteriores
5. Retornar output final estruturado

# Fallbacks

| Etapa | Falha | Ação |
|-------|-------|------|
| web-scraping | URL inacessível | Retry 3x → reportar erro com status parcial |
| web-scraping | Poison pill detectado | Parar pipeline → retornar tipo de bloqueio |
| data-transformer | Campo não encontrado | Skip registro + warning, continuar pipeline |
| data-transformer | Transform inválido | Pular transform + warning, continuar |
| json-formatter | Dados não parseáveis | Wrapping em `{"raw": "..."}` + warning |
| output-structurer | Template não adequado | Usar "summary" como fallback |

# Exemplo

**Input:**
```json
{
  "url": "https://example.com/blog/top-frameworks-2026",
  "transforms": [
    { "filter": { "field": "stars", "operator": "gte", "value": 1000 } },
    { "sort": { "field": "stars", "order": "desc" } },
    { "limit": 5 }
  ],
  "output_template": "table"
}
```

**Execução:**

**Etapa 1 — web-scraping:**
```json
{
  "status": "success",
  "method": "trafilatura",
  "title": "Top Frameworks 2026",
  "content": "React - 220k stars\nVue - 210k stars\nSvelte - 80k stars..."
}
```

**Etapa 2 — data-transformer:**
```json
{
  "status": "success",
  "input_records": 12,
  "output_records": 5,
  "output": [
    { "name": "React", "stars": 220000 },
    { "name": "Vue", "stars": 210000 },
    { "name": "Svelte", "stars": 80000 },
    { "name": "Angular", "stars": 95000 },
    { "name": "Next.js", "stars": 125000 }
  ]
}
```

**Etapa 3 — json-formatter:**
```json
{
  "status": "success",
  "format_detected": "array",
  "records": 5,
  "output": [
    { "name": "React", "stars": 220000 },
    { "name": "Vue", "stars": 210000 },
    { "name": "Next.js", "stars": 125000 },
    { "name": "Angular", "stars": 95000 },
    { "name": "Svelte", "stars": 80000 }
  ]
}
```

**Etapa 4 — output-structurer (final):**
```json
{
  "pipeline": "scrape-transform-pipeline",
  "status": "success",
  "output": {
    "type": "table",
    "title": "Top Frameworks 2026",
    "headers": ["name", "stars"],
    "rows": [
      ["React", 220000],
      ["Vue", 210000],
      ["Next.js", 125000],
      ["Angular", 95000],
      ["Svelte", 80000]
    ],
    "total_rows": 5
  },
  "meta": {
    "source_url": "https://example.com/blog/top-frameworks-2026",
    "timestamp": "2026-05-05T22:07:00Z",
    "pipeline_version": "1.0"
  },
  "warnings": []
}
```
