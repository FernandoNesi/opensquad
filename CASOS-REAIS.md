# Casos Reais — OpenSquad

Cinco exemplos de uso real, do input até o resultado. Cada caso mostra o que entra, o que o sistema faz e o que você recebe no final.

---

## Caso 1 — Landing Page

**Contexto:** Fundadora de uma plataforma SaaS de gestão de benefícios para PMEs. Vai lançar uma nova funcionalidade e precisa de uma landing page para a campanha.

---

**INPUT**

```
/opensquad create

Objetivo: criar o copy completo de uma landing page para o lançamento de uma nova funcionalidade.

Empresa: Beneflex — plataforma de gestão de benefícios para PMEs
Funcionalidade: painel unificado de benefícios com integração automática à folha de pagamento
Público: RH e donos de pequenas empresas com 20-200 funcionários
Tom: claro, direto, sem jargão de TI
Formato esperado: headline, subheadline, 3 blocos de benefício, prova social (placeholder), CTA
```

---

**PROCESSO**

1. Agente pesquisador identifica dores do público-alvo com base no contexto
2. Agente redator produz cada seção da landing page
3. Agente revisor verifica clareza, consistência de tom e força do CTA
4. Checkpoint: sistema apresenta a estrutura para aprovação antes de finalizar

---

**OUTPUT**

Arquivo `squads/landing-beneflex/output/landing-copy.md` com:

```markdown
# Headline
Gerencie todos os benefícios da sua empresa em um só lugar — sem planilha, sem retrabalho.

## Subheadline
O Beneflex integra automaticamente com a sua folha de pagamento e centraliza férias, vale-refeição, plano de saúde e mais. Tudo visível, tudo no controle.

## Benefício 1: Integração automática
Chega de conciliar manualmente. O painel sincroniza com a folha de pagamento em tempo real.

## Benefício 2: Visão unificada
Um painel para ver todos os benefícios de todos os funcionários. Filtro por cargo, área ou período.

## Benefício 3: Menos erros, menos chamados
Com tudo centralizado, o RH resolve em minutos o que antes levava dias.

## Prova social
[Depoimento do cliente X] — "Reduzimos em 70% o tempo gasto com gestão de benefícios no primeiro mês."

## CTA
Teste grátis por 14 dias. Sem cartão de crédito.
```

---

**RESULTADO**

Copy completo em 8 minutos. A fundadora ajustou dois parágrafos e publicou a landing page no mesmo dia. Estimativa de tempo sem o sistema: 3-4 horas entre briefing, redação e revisão.

---

## Caso 2 — Diagnóstico Operacional

**Contexto:** Gestor de uma agência de marketing com 12 pessoas. Percebe que o time está sobrecarregado, os projetos atrasam e ele não consegue identificar onde está o gargalo.

---

**INPUT**

```
/opensquad create

Objetivo: diagnóstico do processo de entrega de projetos da agência.

Contexto:
- Time: 12 pessoas (4 gestores de conta, 4 criativos, 2 tráfego, 1 dados, 1 CS)
- Problema percebido: atrasos frequentes, time sobrecarregado, cliente reclamando
- Processo atual: briefing recebido pelo gestor → distribuído no Slack → cada área executa → reunião semanal de alinhamento → entrega
- Ferramentas: Notion para tasks, Slack para comunicação, Google Drive para arquivos

Quero entender: onde está o gargalo, o que está sendo feito em duplicidade e quais são as 3 ações prioritárias para resolver.
```

---

**PROCESSO**

1. Agente analista lê o processo descrito e identifica padrões de ineficiência
2. Agente de diagnóstico estrutura a análise por camadas: comunicação, processo, responsabilidade
3. Agente de recomendação prioriza ações por impacto e facilidade de implementação
4. Agente revisor verifica se as recomendações são práticas e acionáveis

---

**OUTPUT**

Arquivo `squads/diagnostico-agencia/output/diagnostico.md` com:

- Resumo da situação em 3 parágrafos
- Mapa de gargalos identificados (comunicação, handoff, visibilidade)
- Análise: o Slack como canal de briefing cria ruído e perda de contexto
- Análise: ausência de responsável único por entrega gera responsabilidade difusa
- 3 ações prioritárias:
  1. Criar template de briefing estruturado no Notion com campo de responsável único
  2. Substituir distribuição por Slack por um ritual de kickoff de 15 min por projeto
  3. Implementar status semanal automático (sem reunião) por projeto

---

**RESULTADO**

O gestor implementou as 3 ações em 2 semanas. Nos 30 dias seguintes, os atrasos caíram pela metade e o volume de mensagens no Slack reduziu 40%.

---

## Caso 3 — Produção de Conteúdo

**Contexto:** Consultora de carreira que publica conteúdo no LinkedIn semanalmente. Gasta 3-4 horas por semana escrevendo posts. Quer manter a consistência sem sacrificar a qualidade.

---

**INPUT**

```
/opensquad create

Objetivo: squad de produção semanal de 3 posts para LinkedIn.

Empresa/Autor: Mariana Torres — consultora de carreira para líderes em transição
Público: executivos de 35-50 anos em mudança de setor ou posição
Tom: humano, baseado em experiência real, sem autoajuda
Temas recorrentes: gestão de carreira, mercado de trabalho, decisões difíceis, liderança prática

Para esta semana:
- Post 1: sobre o erro de aceitar o primeiro emprego após demissão por pressão
- Post 2: sobre como avaliar uma proposta de emprego além do salário
- Post 3: sobre a armadilha de se comparar com colegas de geração anterior
```

---

**PROCESSO**

1. Sherlock analisa o histórico de posts da Mariana para calibrar voz e estrutura
2. Agente redator produz os 3 posts com gancho, desenvolvimento e CTA
3. Agente revisor verifica consistência de tom e clareza
4. Checkpoint: Mariana aprova ou ajusta antes da entrega final

---

**OUTPUT**

3 posts prontos em `squads/conteudo-mariana/output/semana-12.md`, cada um com:
- Gancho (primeira linha forte)
- Corpo em blocos curtos
- CTA no final
- Tag de formato: `[OPINIÃO]`, `[PRÁTICO]`, `[REFLEXÃO]`

---

**RESULTADO**

De 3-4 horas semanais para 20 minutos de revisão. A Mariana manteve a cadência por 8 semanas seguidas — algo que não conseguia fazer antes sem o suporte do sistema.

---

## Caso 4 — Automação de Relatório

**Contexto:** Analista de growth de uma startup de fintech. Toda segunda-feira passa 2 horas compilando métricas e escrevendo o relatório semanal para o time de liderança.

---

**INPUT**

```
/opensquad create

Objetivo: squad para gerar relatório semanal de growth automaticamente.

Formato do relatório:
- Resumo executivo (3 parágrafos)
- Principais métricas da semana (com variação vs semana anterior)
- O que funcionou
- O que não funcionou
- Prioridade para a próxima semana

Dados de entrada (colados manualmente ou via arquivo):
[tabela com métricas: CAC, LTV, taxa de ativação, churn, MRR, novos cadastros]

Tom: objetivo, sem enrolação, direto para decisão
Público: CEO, CFO e head de produto
```

---

**PROCESSO**

1. Agente analista processa os dados e calcula variações
2. Agente redator escreve cada seção do relatório
3. Agente revisor garante que o texto seja claro para quem não está no dia a dia dos dados
4. Output gerado em markdown e HTML para facilitar o envio

---

**OUTPUT**

Arquivo `squads/relatorio-growth/output/semana-23.md` com relatório completo, pronto para enviar.

---

**RESULTADO**

2 horas de trabalho virou 15 minutos. O analista cola os dados, o sistema gera o relatório, ele revisa rapidamente e envia. Nenhuma mudança de formato ou qualidade percebida pelo time de liderança.

---

## Caso 5 — AIOS Operacional (Agência com Múltiplos Clientes)

**Contexto:** Agência digital com 4 clientes ativos. Cada cliente tem demandas semanais de conteúdo, relatório e estratégia. A equipe é pequena e não escala mais com o modelo atual.

---

**INPUT**

Configuração feita uma vez por cliente:

```
squads/cliente-saude-conteudo/     → 3 posts LinkedIn por semana
squads/cliente-saude-relatorio/    → relatório mensal de mídia
squads/cliente-edu-conteudo/       → newsletter semanal
squads/cliente-edu-diagnostico/    → diagnóstico trimestral de campanha
squads/cliente-tech-conteudo/      → posts LinkedIn + thread Twitter
squads/cliente-tech-relatorio/     → relatório semanal de growth
```

Execução semanal:
```
/opensquad run cliente-saude-conteudo
/opensquad run cliente-edu-newsletter
/opensquad run cliente-tech-conteudo
```

---

**PROCESSO**

Cada squad roda de forma independente, com contexto próprio por cliente. Os agentes usam o briefing do cliente, o tom configurado e o histórico de entregas anteriores.

---

**OUTPUT**

Cada squad entrega em sua pasta `output/` o conteúdo da semana. A equipe revisa, ajusta e aprova. O dashboard do OpenSquad mostra o status de cada squad em tempo real.

---

**RESULTADO**

A agência passou a operar 4 clientes com uma equipe 30% menor. O tempo gasto em produção caiu em média 60% por cliente. O diferencial competitivo não foi cortar custo — foi liberar a equipe para trabalho estratégico que a IA não faz: relacionamento, posicionamento e tomada de decisão.
