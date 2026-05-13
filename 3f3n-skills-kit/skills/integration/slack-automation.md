---
name: slack-automation
category: integration
version: 1.0
source: rewritten
---

# Objetivo
Interagir com workspaces Slack para buscar canais, ler mensagens, criar canais e categorizar conteúdo, usando a API REST do Slack via curl/fetch.

# Quando usar
- Buscar canais por nome ou termo
- Ler mensagens recentes de um canal
- Criar novos canais (públicos ou privados)
- Extrair e categorizar mensagens para relatórios
- Monitorar canais internos para newsletters ou resumos

# Inputs
- `SLACK_BOT_TOKEN`: variável de ambiente (prefixo `xoxb-`, obrigatória)
- `operation`: search_channels | read_messages | create_channel | categorize
- `channel_name`: nome do canal alvo
- `days`: período de tempo para filtrar mensagens (padrão: 7)
- `limit`: número máximo de resultados (padrão: 20, max: 100)

# Outputs
```json
{
  "operation": "read_messages",
  "channel": "internal-projeto",
  "messages_count": 15,
  "period": "7 days",
  "messages": [
    {
      "user": "U123ABC",
      "text": "Deploy feito com sucesso",
      "timestamp": "2026-05-05T14:30:00Z"
    }
  ]
}
```

# Regras
- SLACK_BOT_TOKEN nunca deve ser commitado (armazenar em .env)
- Operações são read-only exceto criação de canais
- Bot precisa ser convidado para canais privados (`/invite @botname`)
- Respeitar rate limit: máximo ~50 requests/minuto
- Adicionar delay de 1s entre requests em batch
- Padrão de nomeação de canais: `internal-{nome-do-cliente}`
- Escopos mínimos: channels:read, channels:history, groups:read, groups:history
- Para criar canais: escopo channels:manage adicional

# Processo
1. Verificar se SLACK_BOT_TOKEN está configurado
2. Testar conexão: `curl -s -H "Authorization: Bearer $SLACK_BOT_TOKEN" https://slack.com/api/auth.test`
3. Executar operação solicitada via API REST
4. Parsear resposta JSON
5. Formatar resultado estruturado

# Fallbacks
- Se SLACK_BOT_TOKEN não configurado → guiar: "Vá em api.slack.com/apps → Create App → OAuth → Bot Token"
- Se canal não encontrado → listar canais disponíveis via conversations.list
- Se rate limited → aguardar Retry-After header e tentar novamente
- Se bot não está no canal → instruir: `/invite @botname` no canal

# Exemplo
Input: "Busque canais que contenham 'projeto' no nome"
Output:
```bash
curl -s "https://slack.com/api/conversations.list?types=public_channel,private_channel&limit=100" \
  -H "Authorization: Bearer ${SLACK_BOT_TOKEN}" | \
  jq '.channels[] | select(.name | contains("projeto")) | {id, name, num_members}'
```
Resultado:
```json
{
  "operation": "search_channels",
  "query": "projeto",
  "results": [
    {"id": "C01ABC", "name": "projeto-alpha", "num_members": 8},
    {"id": "C02DEF", "name": "projeto-beta", "num_members": 5}
  ]
}
```
