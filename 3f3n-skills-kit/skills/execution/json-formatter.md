---
name: json-formatter
category: execution
version: 1.0
source: created
---

# Objetivo
Converter qualquer entrada de dados (texto livre, CSV, YAML, tabelas, logs) em JSON estruturado, válido e semanticamente correto.

# Quando usar
- Transformar texto não estruturado em JSON parseável
- Converter CSV, YAML, XML ou tabelas markdown para JSON
- Normalizar dados de APIs com formatos inconsistentes
- Preparar payloads para APIs REST
- Extrair dados estruturados de logs ou outputs de terminal

# Inputs
- `data`: conteúdo bruto a ser convertido (string, tabela, CSV, YAML, etc.)
- `format_source`: "text" | "csv" | "yaml" | "xml" | "table" | "log" | "auto"
- `schema`: estrutura desejada do output (opcional — se omitido, inferir automaticamente)
- `array_mode`: true/false — forçar output como array (padrão: false)

# Outputs
```json
{
  "status": "success",
  "format_detected": "csv",
  "records": 15,
  "output": [
    {
      "field1": "value1",
      "field2": "value2"
    }
  ],
  "warnings": []
}
```

# Regras
- Output DEVE ser JSON válido (parseable por JSON.parse/json.loads)
- Chaves em camelCase (padrão) ou snake_case (se dados originais usam)
- Valores null explícitos — NUNCA omitir campos (consistência entre records)
- Strings vazias "" são diferentes de null — preservar distinção
- Números: manter como number, não string ("42" → 42)
- Datas: converter para ISO 8601 (YYYY-MM-DDTHH:mm:ssZ)
- Booleanos: normalizar ("yes"/"true"/"1"/"sim" → true)
- Arrays: detectar delimitadores (vírgula, pipe, ponto-e-vírgula)
- Se schema fornecido → validar output contra schema
- Se dado ambíguo → adicionar warning, não adivinhar

# Processo
1. Detectar formato de entrada (auto ou explícito)
2. Parsear dados brutos separando records e campos
3. Inferir tipos de cada campo (string, number, boolean, date, null)
4. Normalizar valores (datas → ISO 8601, booleans → true/false)
5. Aplicar schema se fornecido (validar campos obrigatórios)
6. Gerar JSON formatado com indentação de 2 espaços
7. Validar output final (JSON.parse)
8. Reportar warnings para dados ambíguos

# Fallbacks
- Se formato não detectável → tratar como texto livre e extrair key-value pairs
- Se schema não bate com dados → gerar output parcial + warnings com campos faltantes
- Se encoding inválido → tentar UTF-8, depois Latin-1, reportar se falhar

# Exemplo
Input:
```csv
nome,email,idade,ativo
João Silva,joao@email.com,28,sim
Maria Costa,maria@email.com,,não
Pedro Santos,pedro@email.com,35,yes
```

Output:
```json
{
  "status": "success",
  "format_detected": "csv",
  "records": 3,
  "output": [
    {
      "nome": "João Silva",
      "email": "joao@email.com",
      "idade": 28,
      "ativo": true
    },
    {
      "nome": "Maria Costa",
      "email": "maria@email.com",
      "idade": null,
      "ativo": false
    },
    {
      "nome": "Pedro Santos",
      "email": "pedro@email.com",
      "idade": 35,
      "ativo": true
    }
  ],
  "warnings": [
    "Record 2: campo 'idade' vazio convertido para null"
  ]
}
```
