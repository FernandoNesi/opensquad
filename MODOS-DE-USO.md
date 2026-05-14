# Modos de Uso — OpenSquad

O OpenSquad opera em quatro modos. Cada um tem um propósito diferente e funciona melhor em situações específicas.

---

## Modo Executor

**O que é**
Executa uma tarefa única, do início ao fim, sem montar estrutura de squad permanente. Ideal para tarefas pontuais que você quer resolver agora.

**Quando usar**
- Quando você tem uma tarefa clara e delimitada
- Quando não precisa de um fluxo recorrente
- Quando quer resultado rápido sem configurar nada

**Exemplo de uso**
Você precisa de um e-mail de follow-up para um cliente. Não quer criar um squad inteiro para isso — só quer o e-mail.

**Input**
```
/opensquad run executor
Preciso de um e-mail de follow-up para um cliente que não respondeu a proposta enviada há 5 dias.
Tom: direto, sem pressão. Empresa: consultoria de marketing B2B.
```

**Output esperado**
Um e-mail redigido, com assunto, corpo e assinatura — pronto para enviar ou ajustar.

---

## Modo Squad

**O que é**
Monta um time de agentes específico para um objetivo maior e recorrente. É o modo principal do OpenSquad. O squad é salvo e pode ser reexecutado sempre que necessário.

**Quando usar**
- Quando você tem um fluxo de trabalho recorrente
- Quando a tarefa envolve múltiplas etapas que dependem umas das outras
- Quando você quer consistência ao longo do tempo (mesmo tom, mesmo formato, mesmo processo)

**Exemplo de uso**
Você produz conteúdo para o LinkedIn toda semana. Quer que um time de agentes pesquise, redija, revise e formate os posts automaticamente.

**Input**
```
/opensquad create
Objetivo: produção semanal de 3 posts para LinkedIn
Público: founders e gestores de PMEs
Tom: direto, com dados, sem enrolação
Referência: [link do perfil de LinkedIn que você admira]
```

**Output esperado**
- Squad criado em `squads/linkedin-semanal/`
- 3 posts redigidos, revisados e formatados em `squads/linkedin-semanal/output/`
- Fluxo pronto para ser reexecutado na semana seguinte com `/opensquad run linkedin-semanal`

---

## Modo Diagnóstico

**O que é**
Analisa uma situação, processo ou conjunto de informações e entrega um diagnóstico estruturado com pontos de atenção e recomendações.

**Quando usar**
- Quando você quer entender o que está funcionando ou falhando em algo
- Quando tem dados ou contexto e precisa de uma leitura clara
- Quando precisa apresentar uma análise para alguém (time, cliente, sócio)

**Exemplo de uso**
Você quer entender por que sua taxa de abertura de e-mails caiu nos últimos 30 dias.

**Input**
```
/opensquad create
Objetivo: diagnóstico da queda de abertura de e-mails
Dados disponíveis: relatório de campanha dos últimos 3 meses (colado ou anexado)
Resultado esperado: análise com causa provável e 3 ações prioritárias
```

**Output esperado**
- Diagnóstico em markdown com: resumo da situação, análise por variável, hipóteses de causa, recomendações priorizadas
- Arquivo salvo em `squads/diagnostico-email/output/diagnostico.md`

---

## Modo Operação AIOS

**O que é**
AIOS — AI Operating System. É o modo de uso mais avançado, onde o OpenSquad deixa de ser uma ferramenta pontual e passa a funcionar como a camada operacional da empresa. Múltiplos squads rodam de forma coordenada, cobrindo diferentes áreas: marketing, vendas, operações, suporte.

**Quando usar**
- Quando você quer que a IA opere de forma contínua, não episódica
- Quando tem processos recorrentes em diferentes áreas que hoje dependem de execução manual
- Quando quer centralizar a inteligência operacional da empresa em um único sistema

**Exemplo de uso**
Uma agência digital com 3 clientes quer operar conteúdo, relatórios e atendimento com IA rodando em paralelo para cada conta.

**Input**
Cada cliente tem seu próprio squad configurado:
```
squads/cliente-a-conteudo/
squads/cliente-a-relatorio/
squads/cliente-b-conteudo/
squads/cliente-b-diagnostico/
```

Cada squad roda com:
```
/opensquad run cliente-a-conteudo
/opensquad run cliente-b-relatorio
```

**Output esperado**
- Cada squad entrega seu output na pasta correspondente
- Operação paralela sem dependência de execução manual por tarefa
- Dashboard visual disponível para acompanhar o status de cada squad em tempo real

**Nota sobre o AIOS**
Esse modo exige configuração prévia de cada squad e uma boa descrição do contexto de cada cliente ou área em `_opensquad/_memory/`. Quanto mais contexto você der, melhor a qualidade da execução.

---

## Comparativo rápido

| Modo | Quando usar | Complexidade | Reutilizável |
|---|---|---|---|
| Executor | Tarefa pontual | Baixa | Não |
| Squad | Fluxo recorrente | Média | Sim |
| Diagnóstico | Análise e leitura | Média | Sim |
| AIOS | Operação contínua | Alta | Sim |
