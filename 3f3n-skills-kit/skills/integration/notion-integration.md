---
name: notion-integration
category: integration
version: 1.0
source: rewritten
---

# Objetivo
Criar, buscar, atualizar e consultar páginas e databases no Notion via API REST, com suporte a MCP tools quando disponíveis.

# Quando usar
- Documentar trabalho realizado no Notion
- Criar runbooks ou knowledge base automaticamente
- Buscar páginas existentes por título
- Adicionar conteúdo a páginas existentes
- Consultar databases com filtros

# Inputs
- `NOTION_INTEGRATION_KEY`: variável de ambiente (prefixo `ntn_`, obrigatória para API direta)
- `operation`: search | create_page | append_blocks | query_database | update_page
- `parent_id`: ID da página pai ou database (formato UUID com ou sem traços)
- `content`: conteúdo a ser criado/adicionado (texto, headings, blocos)

# Outputs
```json
{
  "operation": "create_page",
  "page_id": "abc123-def456",
  "url": "https://notion.so/abc123def456",
  "status": "success",
  "blocks_created": 3
}
```

# Regras
- Se MCP tools de Notion estiverem disponíveis → usar PRIMEIRO (sem key necessária)
- Verificar `NOTION_INTEGRATION_KEY` antes de qualquer chamada REST direta
- Confirmar que integração foi COMPARTILHADA com página/database alvo no Notion UI
- Header obrigatório: `Notion-Version: 2022-06-28`
- Para páginas grandes: criar primeiro → appendar blocos em batches
- IDs aceitam formato com e sem traços

# Processo
1. Verificar se MCP tools estão disponíveis → se sim, usar MCP
2. Se não: verificar `NOTION_INTEGRATION_KEY` está configurada
3. Executar operação solicitada via curl/fetch
4. Parsear resposta JSON
5. Retornar resultado estruturado com page_id e url

# Fallbacks
- Se MCP indisponível → usar API REST com NOTION_INTEGRATION_KEY
- Se key não configurada → guiar usuário: "Vá em notion.so/my-integrations → Create → Copie o token"
- Se página não encontrada → executar search para listar páginas acessíveis
- Se rate limited → adicionar delay de 1s entre requests

# Exemplo
Input: "Crie uma página 'Sprint Review' dentro da página pai abc123"
Output:
```bash
curl -s https://api.notion.com/v1/pages \
  -H "Authorization: Bearer ${NOTION_INTEGRATION_KEY}" \
  -H "Notion-Version: 2022-06-28" \
  -H "Content-Type: application/json" \
  -d '{
    "parent": {"type": "page_id", "page_id": "abc123"},
    "properties": {
      "title": {
        "title": [{"type": "text", "text": {"content": "Sprint Review"}}]
      }
    },
    "children": [
      {
        "object": "block",
        "type": "heading_2",
        "heading_2": {"rich_text": [{"type": "text", "text": {"content": "Objetivos"}}]}
      }
    ]
  }'
```
Resultado:
```json
{
  "operation": "create_page",
  "page_id": "new-page-id",
  "url": "https://notion.so/new-page-id",
  "status": "success",
  "blocks_created": 1
}
```
