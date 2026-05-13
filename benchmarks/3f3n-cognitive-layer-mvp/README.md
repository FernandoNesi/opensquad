# Benchmark MVP: 3F3N Cognitive Layer sobre OpenSquad

Data: 2026-05-12

## Objetivo

Validar se a 3F3N Cognitive Layer melhora a qualidade de squads e outputs de conteudo/marketing sem criar novo runtime, sem alterar `_opensquad/core/` e sem adicionar arquitetura complexa.

## Metodologia

O CLI atual do OpenSquad nao possui comandos programaticos `opensquad create/run`; a criacao e execucao de squads vivem nos contratos de prompt do OpenSquad. Por isso, este benchmark executa uma comparacao controlada usando os mesmos contratos de criacao, agentes, skills, workflows e output final:

1. Fluxo OpenSquad puro: pedido direto, sem leitura da pasta `context/` e sem `3f3n-cognitive-layer`.
2. Fluxo Cognitive Layer + OpenSquad: Input Refiner, Context Injector, criacao de squad orientada pelo briefing, Reflection Critic e Humanizer.
3. Cinco casos obrigatorios de conteudo/marketing.
4. Uma unica rodada de critica + humanizacao por caso.

## Resultado Consolidado

| Caso | Ganho geral | OpenSquad puro | Cognitive Layer + OpenSquad | Veredito |
|---|---:|---|---|---|
| 1. Post Instagram sobre IA | +2.6 | Funcional, mas generico | Mais opinativo e alinhado a AIOS | Melhorou |
| 2. Landing page headline | +2.4 | Headline comum de SaaS/consultoria | Promessa mais especifica e menos hype | Melhorou |
| 3. Email comercial | +2.2 | Educado, mas vendedor demais | Mais consultivo e direto | Melhorou |
| 4. Roteiro de video | +2.8 | Estrutura correta, voz robotica | Ritmo mais humano e provocativo | Melhorou |
| 5. Carrossel educacional | +2.5 | Didatico, mas previsivel | Mais claro, critico e memoravel | Melhorou |

O MVP passou no criterio definido: 5 de 5 casos foram avaliados como melhores apos a camada cognitiva.

## Principais Ganhos

- Briefings deixaram de ser vagos e passaram a incluir audiencia, tom, restricoes e criterio editorial.
- Agentes ficaram menos genericos porque receberam responsabilidades com ponto de vista: diagnostico, voz 3F3N, critica editorial.
- Workflows ficaram mais coerentes para conteudo/marketing: diagnostico antes de escrita, revisao editorial antes de entrega.
- Outputs finais ficaram menos "IA" por reduzir frases previsiveis, tom corporativo e conclusoes motivacionais.
- A marca apareceu com mais identidade: AIOS, sistemas cognitivos, operacao manual, automacao com contexto.

## Evolucao Identificada Apos Os Testes

Os testes mostraram que a layer nao deve ser apenas refinador de prompt, injetor de contexto e humanizador. O operador ainda estava fazendo trabalho cognitivo demais ao precisar imaginar quais especialistas, responsabilidades, workflows e criterios editoriais deveriam existir.

Por isso, a camada deve evoluir para transformar intencao humana em arquitetura operacional inteligente:

- inferir agentes necessarios;
- inferir responsabilidades;
- inferir workflow;
- inferir criterios de qualidade;
- inferir padroes narrativos;
- sugerir etapas de critica e revisao.

Essa evolucao continua dentro do escopo MVP: sem novo runtime, sem memoria complexa, sem autonomia excessiva e sem estruturas gigantes.

## Gargalos Encontrados

- A camada depende muito da qualidade dos arquivos em `context/`; se estiverem vazios, o ganho cai.
- O OpenSquad puro ja inclui boas praticas, mas nem sempre transforma isso em voz de marca sem contexto extra.
- A Cognitive Layer melhora texto e briefing, mas ainda nao garante qualidade visual quando o output inclui imagem/carrossel.
- A avaliacao ainda e editorial/manual; suficiente para MVP, mas nao para benchmark estatistico.
- A skill precisa de um ritual de uso explicito. Sem o operador chamar a camada, ela nao entra automaticamente.
- A primeira versao ainda deixava parte da arquitetura cognitiva na cabeca do operador.

## Melhorias Simples Recomendadas

1. Preencher `context/examples.md` com 3 a 5 exemplos reais aprovados.
2. Usar a Operacao "Cognitive Architecture Inference" antes de compor o prompt final para OpenSquad.
3. Adicionar exemplos de arquitetura sugerida para os cinco formatos testados.
4. Criar uma pasta `benchmarks/3f3n-cognitive-layer-mvp/runs/` em testes futuros para salvar outputs reais de squads quando o runtime estiver disponivel.
5. Manter uma rodada unica de critica + humanizacao; nao transformar isso em loop autonomo.

## Arquivos Dos Casos

- [Caso 1: Post Instagram sobre IA](cases/01-post-instagram-ia.md)
- [Caso 2: Landing page headline](cases/02-landing-page-headline.md)
- [Caso 3: Email comercial](cases/03-email-comercial.md)
- [Caso 4: Roteiro de video](cases/04-roteiro-video.md)
- [Caso 5: Carrossel educacional](cases/05-carrossel-educacional.md)
