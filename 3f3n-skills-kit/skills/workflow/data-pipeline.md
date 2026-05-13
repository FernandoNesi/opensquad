---
name: data-pipeline
category: workflow
version: 1.0
source: rewritten
---

# Objetivo
Projetar e implementar pipelines ETL (Extract, Transform, Load) com código executável, scheduling e validação de qualidade de dados.

# Quando usar
- Migrar dados entre sistemas (API → banco, banco → planilha)
- Criar relatórios automatizados diários/semanais
- Sincronizar fontes de dados heterogêneas
- Limpar e transformar datasets para análise

# Inputs
- `source`: tipo e conexão da fonte (api_url | database_connection | file_path)
- `destination`: tipo e conexão do destino (database | spreadsheet | file | api)
- `transforms`: lista de transformações (clean | map | aggregate | filter | enrich)
- `schedule`: frequência (hourly | daily | weekly | on_demand)

# Outputs
```json
{
  "pipeline_name": "daily-sales-sync",
  "status": "success",
  "rows_extracted": 1250,
  "rows_transformed": 1248,
  "rows_loaded": 1248,
  "rows_rejected": 2,
  "execution_time_ms": 3400,
  "quality_checks": {
    "null_rate": 0.02,
    "duplicates": 0,
    "schema_valid": true
  }
}
```

# Regras
- Sempre seguir ordem: Extract → Transform → Load (nunca pular etapas)
- Validar schema ANTES do carregamento
- Quality checks obrigatórios: null_rate < 5%, duplicates = 0, schema_valid = true
- Implementar retry com backoff exponencial (max 3 tentativas)
- Logar rows_extracted, rows_transformed, rows_loaded, rows_rejected
- Se rows_rejected > 5% do total → gerar alerta e pausar
- Nunca sobrescrever dados sem backup ou flag explícita

# Processo
1. Conectar à fonte e extrair dados raw
2. Validar schema dos dados extraídos
3. Aplicar transformações na ordem definida
4. Executar quality checks no dataset transformado
5. Carregar dados no destino (append ou upsert)
6. Gerar relatório de execução com métricas
7. Enviar alerta se houver falhas ou anomalias

# Fallbacks
- Se fonte indisponível → retry 3x com backoff → notificar e abortar
- Se destino indisponível → salvar dados transformados em arquivo local temporário
- Se quality check falhar → salvar rejeitados em arquivo separado para revisão
- Se sem schedule configurado → executar como on_demand

# Exemplo
Input: "Extraia pedidos da API do Shopify e carregue no PostgreSQL"
Output:
```javascript
// extract
const orders = await fetch('https://store.myshopify.com/admin/api/2024-01/orders.json', {
  headers: { 'X-Shopify-Access-Token': process.env.SHOPIFY_TOKEN }
}).then(r => r.json());

// transform
const cleaned = orders.orders.map(o => ({
  order_id: o.id,
  email: o.email,
  total: parseFloat(o.total_price),
  items: o.line_items.length,
  date: o.created_at.split('T')[0]
}));

// load
await pool.query(
  `INSERT INTO orders (order_id, email, total, items, date)
   VALUES ($1, $2, $3, $4, $5)
   ON CONFLICT (order_id) DO UPDATE SET total = $3`,
  cleaned.map(o => [o.order_id, o.email, o.total, o.items, o.date])
);
```
