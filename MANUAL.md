# Manual do OpenSquad

---

## O que é o OpenSquad

OpenSquad é um sistema que organiza agentes de IA para executar trabalho real de forma coordenada.

Em vez de você abrir o ChatGPT, escrever um prompt, copiar o resultado, abrir outra ferramenta, ajustar manualmente e repetir o processo — o OpenSquad monta um time de agentes que faz esse ciclo por você, do início ao fim.

Você descreve o que precisa. O sistema organiza quem faz o quê, em qual ordem, e entrega o resultado.

---

## O que ele resolve

A maioria das pessoas usa IA de forma fragmentada: um prompt aqui, outro ali, resultado solto, sem continuidade. O trabalho até sai — mas exige que você seja o fio condutor de tudo.

O OpenSquad resolve exatamente isso.

**Sem o OpenSquad:**
- Você escreve prompt → ajusta → copia → cola em outro lugar → revisa → formata → repete
- O trabalho depende de você como operador manual da IA

**Com o OpenSquad:**
- Você descreve o que quer → o sistema executa → você revisa o resultado final
- A IA opera como um time, não como uma ferramenta avulsa

Casos onde faz diferença:
- Produção de conteúdo com consistência de voz e formato
- Diagnósticos e análises que precisam de múltiplos ângulos
- Automações que envolvem coleta, processamento e entrega
- Operações recorrentes que hoje dependem de execução manual

---

## Como funciona

O OpenSquad funciona em três etapas:

### 1. Você descreve o objetivo
Pelo terminal ou pelo seu editor com suporte a Claude, você abre o OpenSquad e diz o que quer fazer.

```
/opensquad create
```

O sistema faz perguntas simples para entender o contexto: qual é o objetivo, quem é o público, qual o formato do resultado esperado.

### 2. O sistema monta o time
Com base no que você descreveu, o Architect — o agente principal do OpenSquad — define quais agentes vão trabalhar, em qual sequência e com quais responsabilidades.

Esse time é chamado de **squad**.

Um squad pode ter:
- Um agente pesquisador (que coleta informações)
- Um agente redator (que produz o texto)
- Um agente revisor (que corrige e ajusta)
- Um agente formatador (que entrega no formato certo)

### 3. O squad executa e entrega
Os agentes trabalham em sequência, passando o resultado de um para o outro. Em pontos críticos, o sistema pausa e pede sua aprovação antes de continuar.

No final, você recebe o output — um arquivo, um texto, uma análise — pronto para usar.

---

## Inputs

O que o OpenSquad precisa de você para funcionar:

| Input | Descrição | Exemplo |
|---|---|---|
| Objetivo | O que você quer produzir ou resolver | "Quero criar um post de LinkedIn sobre o lançamento do meu produto" |
| Contexto da empresa | Quem é você, o que faz, qual seu tom | Configurado uma vez em `_opensquad/_memory/company.md` |
| Referências (opcional) | Perfis de redes sociais para análise de estilo | Link do Instagram ou LinkedIn de referência |
| Aprovações | Confirmações nos checkpoints durante a execução | "Sim, pode continuar" ou ajuste pontual |

---

## Outputs

O que o OpenSquad entrega:

| Output | Formato | Onde encontrar |
|---|---|---|
| Conteúdo produzido | Texto, markdown, HTML | `squads/{nome}/output/` |
| Análise ou diagnóstico | Markdown estruturado | `squads/{nome}/output/` |
| Arquivos gerados | `.md`, `.html`, `.txt`, `.json` | `squads/{nome}/output/` |
| Investigação de perfil | Relatório de padrões de conteúdo | `squads/{nome}/_investigations/` |

---

## Resultados esperados

O que você pode esperar ao usar o OpenSquad de forma consistente:

**Velocidade de execução**
Tarefas que levavam horas de coordenação manual passam a ser configuradas uma vez e reexecutadas em minutos.

**Consistência**
O squad usa o mesmo contexto de empresa, tom e formato em toda execução. O resultado não varia conforme o humor do dia.

**Menos retrabalho**
Com checkpoints e revisores embutidos no fluxo, os erros são corrigidos antes de chegar até você.

**Escalabilidade**
Uma vez que um squad funciona, ele pode ser reexecutado para novos contextos sem precisar ser reconfigurado do zero.

---

## Requisitos para começar

- Node.js 20 ou superior
- Editor compatível: Claude Code, Cursor, VS Code + Copilot, ou similar
- Conta na Anthropic (Claude) com acesso ao modelo

**Instalação:**
```bash
npx opensquad init
```

Isso configura o ambiente, cria a estrutura de pastas e instala as dependências necessárias.

---

## Primeiros passos

1. Rode `npx opensquad init` na pasta do seu projeto
2. Abra o editor e configure o contexto da sua empresa em `_opensquad/_memory/company.md`
3. Digite `/opensquad create` para criar seu primeiro squad
4. Responda as perguntas do wizard
5. Rode `/opensquad run {nome-do-squad}` para executar

O resultado estará em `squads/{nome}/output/`.
