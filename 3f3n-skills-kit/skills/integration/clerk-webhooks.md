---
name: clerk-webhooks
category: integration
version: 1.0
source: rewritten
---

# Objetivo
Gerar handlers completos de webhooks do Clerk para sincronizar eventos de autenticação (criação, atualização, exclusão de usuários e organizações) com banco de dados local, garantindo verificação de assinatura obrigatória.

# Quando usar
- Implementar sync de usuários Clerk → banco de dados
- Reagir a eventos de autenticação (user.created, user.updated, user.deleted)
- Sincronizar memberships de organizações
- Enviar notificações (email, Slack) ao criar usuários
- Qualquer handler de webhook do Clerk em Next.js App Router ou Express

# Inputs
- `CLERK_WEBHOOK_SECRET`: variável de ambiente (svix signing secret do Clerk Dashboard)
- `framework`: "nextjs" ou "express"
- `events`: lista de eventos a escutar (ex: ["user.created", "user.updated", "user.deleted"])
- `db_client`: nome do cliente de banco (ex: prisma, drizzle)

# Outputs
Código TypeScript completo e copy-paste-ready contendo:
```json
{
  "handler_file": "app/api/webhooks/route.ts",
  "middleware_file": "proxy.ts ou middleware.ts",
  "events_covered": ["user.created", "user.updated"],
  "framework": "nextjs"
}
```

# Regras
- NUNCA pular verificação de assinatura — usar `verifyWebhook(req)` (Next.js) ou `new Webhook(secret).verify()` (Express)
- NUNCA gerar stubs, placeholders ou implementações parciais
- Rotas de webhook DEVEM ser excluídas do middleware do Clerk (tornar públicas)
- Express: usar `express.raw({ type: 'application/json' })`, NUNCA `express.json()`
- Sempre retornar HTTP 200 para confirmar recebimento ao Svix
- Usar `svix-id` como chave de idempotência para deduplicar retries
- Incluir try/catch com logging no bloco de verificação

# Processo
1. Identificar framework do projeto (Next.js App Router ou Express)
2. Verificar se `CLERK_WEBHOOK_SECRET` está configurada
3. Gerar handler completo com `verifyWebhook` e switch/if por evento
4. Gerar configuração de middleware para tornar rota pública
5. Incluir referência de payload para cada evento coberto
6. Listar pitfalls comuns como comentários inline

# Fallbacks
- Se framework não identificado: perguntar ao usuário e oferecer ambos (Next.js + Express)
- Se `CLERK_WEBHOOK_SECRET` não configurada: gerar instrução de setup no Clerk Dashboard
- Se ORM não especificado: usar `db` genérico com comentários indicando onde trocar

# Exemplo
Input: "Crie webhook do Clerk para sincronizar usuários com Prisma no Next.js"
Output:
```typescript
// app/api/webhooks/route.ts
import { verifyWebhook } from '@clerk/nextjs/webhooks'
import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest) {
  let evt
  try {
    evt = await verifyWebhook(req)
  } catch (err) {
    console.error('Webhook verification failed:', err)
    return new Response('Verification failed', { status: 400 })
  }

  if (evt.type === 'user.created') {
    const { id, email_addresses, first_name, last_name } = evt.data
    await prisma.user.create({
      data: {
        clerkId: id,
        email: email_addresses[0]?.email_address,
        name: `${first_name ?? ''} ${last_name ?? ''}`.trim()
      }
    })
  }

  return new Response('OK', { status: 200 })
}
```
