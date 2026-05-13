# USO DAS SKILLS — Guia Prático 3F3N

> Guia rápido de fluxos e regras para uso do repertório atual de skills.



## 1. Landing Page (Geral)
Ideal para páginas institucionais ou de serviços. Usa a versão **compactada (11 blocos)** da metodologia 3F3N — sem ancoragem de preço obrigatória e sem "conversa séria" agressiva.

**Ordem recomendada:**
1. `prompt-optimizer` → Refinar o briefing.
2. `analyser-14-low-ticket-3f3n` (mode: `landing_page`) → Validar os 11 blocos compactados.
3. `frontend-design` → Definir visual e componentes.
4. `web-design-review` → Revisar usabilidade e estética.
5. `conversion-audit` → Validar copy e pontos de conversão.
6. `conversion-optimizer` → Sugerir melhorias finais.



## 2. Página de Venda Low-Ticket
Foco total em conversão direta usando a metodologia de **14 blocos completos**. Nenhum bloco pode ser omitido.

**Ordem recomendada:**
1. `prompt-optimizer` → Definir oferta e público.
2. `analyser-14-low-ticket-3f3n` (mode: `sales_page_low_ticket`) → Validar a estrutura dos 14 blocos.
3. `conversion-audit` → Revisar a força da copy.
4. `conversion-optimizer` → Otimizar argumentos de venda.
5. `frontend-design` → Criar o visual baseado na estrutura validada.
6. `web-design-review` → Ajustes finais de design.

**⚠️ REGRA:** Página de venda low-ticket **NUNCA** começa pelo design. Valide a promessa e a estrutura primeiro.

---

## 2.1 Página de Captura (Lead)
Foco em captação de leads com **9 blocos reduzidos**. Sem preço, sem CTA de compra. Foco em redução de fricção.

**Ordem recomendada:**
1. `prompt-optimizer` → Definir o lead magnet e o público.
2. `analyser-14-low-ticket-3f3n` (mode: `capture_page`) → Validar os 9 blocos reduzidos.
3. `frontend-design` → Layout limpo com mínima fricção.
4. `web-design-review` → Revisar forma e usabilidade.

**⚠️ REGRA:** Não forçar ancoragem de preço nem CTA de compra em página de captura.

---

## 3. Micro-SaaS
Desenvolvimento de ferramentas e aplicações focadas em funcionalidade. **Não usa** as estruturas de persuasão da `analyser-14-low-ticket-3f3n`, **exceto** quando houver uma página comercial do produto (landing page ou venda direta).

**Ordem recomendada:**
1. `prompt-optimizer` → Alinhar requisitos e escopo.
2. `system-orchestrator` → Mapear a arquitetura e fluxos de dados.
3. `react-best-practices` → Garantir código limpo e performático.
4. `frontend-design` → Criar interface funcional e UX.
5. `json-formatter` → Padronizar comunicação de dados.
6. `output-structurer` → Estruturar retornos da aplicação.

---

## 4. Skills para Evitar em Produção

| Skill | Motivo / Uso Correto |
|---|---|
| `skills/wip/*` | Em desenvolvimento. Não use para entregas reais. |
| `find-skills` | Apenas para pesquisa no ecossistema, não para execução. |
| `conversion-one-unit-3f3n` | Use apenas para analisar **um bloco ou unidade isolada**. |

---

## 5. Regras Anti-Overengineering

- **Simplicidade:** Não use os 14 blocos para páginas de captura simples ou landing pages institucionais.
- **Foco:** Micro-SaaS foca em `system-orchestrator` e lógica, não em estruturas de persuasão de vendas longas.
- **Produção:** Mantenha-se nas skills validadas (fora da pasta `/wip`).
- **Integridade:** Não altere o registry sem pedido explícito; use o que já existe.
- **Contexto:** `conversion-one-unit-3f3n` é o bisturi para ajustes finos em blocos específicos, não para auditoria completa.

---

*Última atualização: 2026-05-06 — v3.1.0*
