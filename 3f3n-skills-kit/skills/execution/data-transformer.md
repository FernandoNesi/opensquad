---
name: data-transformer
category: execution
version: 1.0
source: created
---

# Objetivo
Aplicar transformações determinísticas em datasets estruturados: filtrar, mapear, agregar, enriquecer e reformatar dados de entrada para um formato de saída definido.

# Quando usar
- Filtrar registros por condição (ex: "apenas ativos", "criados após X")
- Mapear/renomear campos entre sistemas (ex: API A → schema do banco B)
- Agregar dados (somar, contar, média por grupo)
- Calcular campos derivados (total = quantidade × preço)
- Preparar dados para dashboards, relatórios ou exports

# Inputs
- `data`: array de objetos JSON (dataset de entrada)
- `transforms`: lista ordenada de operações a aplicar
  - `filter`: { field, operator, value } — operadores: eq, neq, gt, gte, lt, lte, contains, in
  - `map`: { from, to, transform? } — renomear/transformar campos
  - `aggregate`: { group_by, operations } — sum, count, avg, min, max
  - `calculate`: { field, expression } — campo derivado
  - `sort`: { field, order } — asc ou desc
  - `limit`: number — máximo de registros no output

# Outputs
```json
{
  "status": "success",
  "input_records": 100,
  "output_records": 25,
  "transforms_applied": ["filter", "map", "sort"],
  "output": [
    { "campo1": "valor1" }
  ],
  "metadata": {
    "filtered_out": 75,
    "execution_time_ms": 12
  }
}
```

# Regras
- Transformações aplicadas em ORDEM sequencial (filter → map → aggregate → calculate → sort → limit)
- Dados originais NUNCA são mutados — sempre criar cópia
- Se campo referenciado não existe → warning (não erro) + pular registro
- Tipos devem ser preservados (number fica number, não vira string)
- Null handling: null é tratado como "ausente" — filtros de comparação ignoram nulls
- Aggregate sem group_by → agrega todo o dataset em 1 registro
- Limit aplica DEPOIS de todas as outras transformações

# Processo
1. Validar que `data` é array de objetos
2. Para cada transform na lista (em ordem):
   a. filter → remover registros que não atendem condição
   b. map → renomear/transformar campos
   c. aggregate → agrupar e calcular métricas
   d. calculate → gerar campos derivados
   e. sort → ordenar por campo
   f. limit → truncar registros
3. Gerar metadata (input_records, output_records, filtered_out)
4. Retornar resultado estruturado

# Fallbacks
- Se `data` não é array → tentar wrapping em array, gerar warning
- Se transform inválido → pular e adicionar ao warnings
- Se campo não encontrado → pular registro + warning, não abortar pipeline
- Se divisão por zero em calculate → resultado = null + warning

# Exemplo
Input:
```json
{
  "data": [
    {"produto": "Widget A", "categoria": "tech", "preco": 50, "qty": 10, "ativo": true},
    {"produto": "Widget B", "categoria": "tech", "preco": 30, "qty": 5, "ativo": false},
    {"produto": "Gadget C", "categoria": "tech", "preco": 80, "qty": 3, "ativo": true},
    {"produto": "Thing D", "categoria": "office", "preco": 15, "qty": 20, "ativo": true}
  ],
  "transforms": [
    {"filter": {"field": "ativo", "operator": "eq", "value": true}},
    {"calculate": {"field": "total", "expression": "preco * qty"}},
    {"sort": {"field": "total", "order": "desc"}}
  ]
}
```

Output:
```json
{
  "status": "success",
  "input_records": 4,
  "output_records": 3,
  "transforms_applied": ["filter", "calculate", "sort"],
  "output": [
    {"produto": "Widget A", "categoria": "tech", "preco": 50, "qty": 10, "ativo": true, "total": 500},
    {"produto": "Thing D", "categoria": "office", "preco": 15, "qty": 20, "ativo": true, "total": 300},
    {"produto": "Gadget C", "categoria": "tech", "preco": 80, "qty": 3, "ativo": true, "total": 240}
  ],
  "metadata": {
    "filtered_out": 1,
    "execution_time_ms": 3
  }
}
```
