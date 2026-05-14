# Primeiros Prompts — OpenSquad

Este guia é para quem acabou de instalar o OpenSquad e quer entender como começar de forma prática.

A regra é simples: quanto mais contexto você der, melhor o resultado. Não precisa ser longo — precisa ser claro.

---

## Antes de tudo: configure o contexto da empresa

Abra o arquivo `_opensquad/_memory/company.md` e preencha as informações básicas da sua operação. Esse arquivo é carregado automaticamente em todo squad que você criar.

**Template para preencher:**

```markdown
# Contexto da Empresa

**Nome:** [nome da empresa ou projeto]
**O que faz:** [descrição em 1-2 frases do que a empresa faz]
**Público-alvo:** [quem é o cliente ou audiência]
**Tom de comunicação:** [ex: direto, informal, técnico, inspiracional]
**Canais principais:** [ex: LinkedIn, Instagram, e-mail, blog]
**Produto ou serviço principal:** [o que você vende ou entrega]
**Diferencial:** [o que te distingue da concorrência]
```

Você só faz isso uma vez. A partir daí, todos os squads já sabem quem você é.

---

## Prompt de onboarding — criar o primeiro squad

Use esse prompt para criar seu primeiro squad. Substitua os campos em colchetes pelo seu contexto real.

```
/opensquad create

Quero criar um squad para [objetivo principal].

Contexto:
- Empresa: [nome]
- Produto/serviço: [o que você oferece]
- Público: [para quem]
- Tom: [como você fala]
- Formato de entrega esperado: [ex: post de LinkedIn, e-mail, relatório em markdown]

Referência (opcional): [link de um perfil ou exemplo que você admira]
```

**Exemplo real:**

```
/opensquad create

Quero criar um squad para produzir posts semanais no LinkedIn.

Contexto:
- Empresa: Agência Norte — consultoria de marketing para SaaS
- Serviço: estratégia de conteúdo e gestão de campanhas
- Público: founders e heads de marketing de startups B2B
- Tom: direto, baseado em dados, sem jargão desnecessário
- Formato: 3 posts por semana, com gancho forte, corpo em blocos curtos e CTA no final

Referência: linkedin.com/in/[perfil de referência]
```

---

## Prompt de onboarding — explorar o que o sistema pode fazer

Se você não sabe ainda por onde começar, use esse prompt para explorar:

```
/opensquad help

Me mostra o que o OpenSquad consegue fazer para uma empresa de [seu setor].
Quero entender quais tipos de squad fazem mais sentido para o meu contexto.
```

O sistema vai sugerir modos de uso e tipos de squad adequados para o seu caso.

---

## Primeiros fluxos ideais

### Fluxo 1 — Conteúdo (o mais rápido para sentir valor)

**Para quem:** Qualquer pessoa que produz conteúdo regularmente e gasta tempo demais nisso.

```
/opensquad create
Objetivo: gerar 1 post para LinkedIn sobre [tema] com base no meu tom habitual.
Tom: [descreva em uma frase como você escreve]
Público: [quem vai ler]
```

Resultado em menos de 5 minutos: post completo, revisado, formatado.

---

### Fluxo 2 — Diagnóstico (o mais impactante para gestores)

**Para quem:** Founders e gestores que precisam tomar decisões com mais clareza.

```
/opensquad create
Objetivo: diagnóstico do meu processo de [área — ex: onboarding, vendas, suporte].
Vou descrever como funciona hoje e quero uma análise com os principais gargalos e recomendações.

Descrição do processo atual:
[cole aqui como o processo funciona hoje, em texto livre]
```

Resultado: análise estruturada com pontos de atenção e próximas ações priorizadas.

---

### Fluxo 3 — Pesquisa de referência com Sherlock

**Para quem:** Quem quer entender como um concorrente ou referência se comunica.

```
/opensquad create
Objetivo: analisar o perfil de conteúdo de [nome ou link do perfil].
Quero entender: frequência de posts, formatos mais usados, tom, temas recorrentes e o que gera mais engajamento.
```

O Sherlock — agente investigador do sistema — visita o perfil, extrai os padrões e entrega um relatório de análise.

---

### Fluxo 4 — Reexecutar um squad existente

Quando um squad já está criado, rodar novamente é simples:

```
/opensquad run [nome-do-squad]
```

Se quiser ajustar o contexto antes de rodar:

```
/opensquad run linkedin-semanal
Contexto adicional desta semana: foco em case de cliente do setor de saúde.
```

---

## Dicas para primeiros resultados

**Seja específico no tom.** "Tom profissional" é genérico. "Tom direto, sem rodeios, como conversa entre founders" é útil.

**Cole exemplos quando puder.** Se tiver um texto seu que representa bem como você escreve, cole no prompt. O sistema vai usá-lo como referência.

**Não tente fazer tudo de uma vez.** Comece com um squad para uma tarefa específica. Quando funcionar bem, expanda.

**Use os checkpoints.** Quando o sistema pausar para pedir aprovação, leia com atenção. É ali que você ajusta o rumo antes de ir longe demais.

**Salve o que funciona.** Quando um squad gerar um resultado que você aprovou, documente o contexto usado. Vai economizar tempo nas próximas execuções.

---

## O que esperar nos primeiros 30 dias

| Semana | O que fazer | O que esperar |
|---|---|---|
| 1 | Configurar empresa, criar primeiro squad, rodar uma vez | Entender o fluxo e ajustar o tom |
| 2 | Reexecutar o mesmo squad com variações de contexto | Resultado mais consistente e rápido |
| 3 | Criar um segundo squad para outra área | Perceber que o sistema aprende com o contexto acumulado |
| 4 | Rodar dois squads em paralelo | Sentir a diferença entre operar com IA e depender de IA |
