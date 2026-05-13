---
name: output-structurer
category: execution
version: 1.0
source: created
---

# Objetivo
Converter qualquer resposta de agente IA (texto livre, listas, análises) em um formato de saída padronizado, previsível e consumível por outros sistemas ou skills.

# Quando usar
- Padronizar saída de qualquer skill para formato consumível
- Converter análises textuais em relatórios estruturados
- Preparar outputs para dashboards, APIs ou armazenamento
- Transformar respostas do Claude em formatos específicos (markdown, HTML, CSV, JSON)
- Normalizar outputs entre skills diferentes para pipeline consistente

# Inputs
- `content`: conteúdo bruto a ser estruturado (texto, lista, tabela, etc.)
- `template`: formato de saída desejado
  - "report" — relatório com seções e métricas
  - "table" — dados tabulares (markdown ou JSON)
  - "checklist" — lista de verificação com status
  - "api_response" — formato de resposta de API REST
  - "summary" — resumo executivo com key findings
  - "custom" — schema personalizado fornecido pelo usuário
- `metadata`: informações adicionais (autor, data, projeto, versão)

# Outputs

Para template "report":
```json
{
  "type": "report",
  "title": "Título do Relatório",
  "date": "2026-05-05",
  "sections": [
    {
      "heading": "Resumo",
      "content": "...",
      "metrics": [
        {"label": "Total", "value": 42, "unit": "items"}
      ]
    }
  ],
  "conclusions": ["..."],
  "next_steps": ["..."]
}
```

Para template "checklist":
```json
{
  "type": "checklist",
  "title": "Verificação de Deploy",
  "total": 8,
  "passed": 6,
  "failed": 1,
  "skipped": 1,
  "items": [
    {"task": "Testes unitários", "status": "passed", "details": "42/42 passing"},
    {"task": "Lint", "status": "failed", "details": "3 errors em auth.ts"}
  ]
}
```

Para template "api_response":
```json
{
  "success": true,
  "data": {},
  "meta": {
    "timestamp": "2026-05-05T22:00:00Z",
    "version": "1.0",
    "source": "skill-name"
  },
  "errors": []
}
```

# Regras
- Output SEMPRE em JSON válido (exceto se template = "table" com formato markdown)
- Campos obrigatórios por template:
  - report: type, title, date, sections, conclusions
  - table: type, headers, rows, total_rows
  - checklist: type, title, total, passed, failed, items
  - api_response: success, data, meta, errors
  - summary: type, title, key_findings, confidence, recommendations
- Campos null devem ser explícitos, nunca omitidos
- Datas sempre em ISO 8601
- Métricas numéricas devem incluir unidade quando aplicável
- Se conteúdo não cabe no template → usar "custom" com warning

# Processo
1. Receber conteúdo bruto e template desejado
2. Parsear conteúdo identificando seções, métricas e dados
3. Mapear conteúdo para os campos obrigatórios do template
4. Preencher campos faltantes com defaults sensatos
5. Validar que todos os campos obrigatórios estão presentes
6. Adicionar metadata (timestamp, versão, fonte)
7. Retornar JSON formatado e validado

# Fallbacks
- Se template não especificado → usar "summary" como padrão
- Se conteúdo muito curto para template → usar "api_response" minimal
- Se conteúdo não parseável → retornar como string dentro de "data" + warning
- Se schema custom inválido → ignorar schema, usar "summary" + warning

# Exemplo
Input:
```
content: "Analisei o projeto. Encontrei 3 problemas críticos no módulo de auth:
1. Token não expira
2. Senha sem hash
3. CORS aberto para *

Recomendo corrigir urgentemente os itens 1 e 2."

template: "checklist"
```

Output:
```json
{
  "type": "checklist",
  "title": "Análise de Segurança - Módulo Auth",
  "total": 3,
  "passed": 0,
  "failed": 3,
  "skipped": 0,
  "items": [
    {
      "task": "Token não expira",
      "status": "failed",
      "severity": "critical",
      "details": "Tokens devem ter expiração definida"
    },
    {
      "task": "Senha sem hash",
      "status": "failed",
      "severity": "critical",
      "details": "Senhas devem ser hasheadas (bcrypt/argon2)"
    },
    {
      "task": "CORS aberto para *",
      "status": "failed",
      "severity": "critical",
      "details": "CORS deve restringir origens permitidas"
    }
  ],
  "recommendations": [
    "Corrigir urgentemente: Token expiração e Senha hash",
    "Revisar configuração CORS"
  ],
  "meta": {
    "timestamp": "2026-05-05T22:00:00Z",
    "source": "output-structurer",
    "version": "1.0"
  }
}
```
