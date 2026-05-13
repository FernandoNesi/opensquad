---
name: 3f3n-cognitive-layer
description: Camada cognitiva local da 3F3N para refinar briefing, injetar contexto markdown, criticar outputs e humanizar entregas de conteúdo/marketing feitas com OpenSquad.
type: prompt
version: "0.1.0"
categories: [content, marketing, critique, brand-voice, humanization]
---

# 3F3N Cognitive Layer

Use esta skill quando o operador pedir explicitamente para usar a "3F3N Cognitive Layer" antes de criar um squad, antes de executar um squad, ou depois de receber um output do OpenSquad.

Esta skill nao substitui o OpenSquad. Ela melhora a entrada, injeta contexto, critica a entrega e aplica uma rodada curta de humanizacao. O OpenSquad continua sendo o runtime operacional.

## Principios do MVP

1. Simplicidade antes de autonomia.
2. Contexto markdown antes de banco vetorial.
3. Uma critica e uma reescrita, nunca loops infinitos.
4. Melhorar conteudo real, nao simular uma mente.
5. Preservar intencao, fatos e restricoes do usuario.
6. Cortar cara de IA sem deixar o texto artificialmente informal.

## Escopo

Use principalmente para squads e outputs de conteudo/marketing:

- posts de Instagram, LinkedIn, Twitter/X e YouTube;
- carrosseis, roteiros, captions, emails e landing copy;
- campanhas, ideias editoriais e posicionamento;
- revisao de textos com linguagem generica, corporativa ou robotica.

Nao use esta skill para criar um novo runtime, memoria autonoma, DAG complexo, agente auto-evolutivo ou arquitetura distribuida.

## Arquivos de Contexto

Antes de refinar ou criticar, tente ler os arquivos abaixo na raiz do projeto:

- `context/brand.md`
- `context/tone.md`
- `context/examples.md`
- `context/forbidden.md`

Se algum arquivo estiver vazio ou ausente, continue usando os demais. Nao invente regras de marca; marque lacunas como "nao informado".

Use somente o contexto relevante para a tarefa atual. Nao despeje todo o conteudo dos arquivos no output final.

## Operacao 1: Input Refiner

Use quando o usuario trouxer um pedido vago, como "criar squad para Instagram", "fazer conteudo para lancamento" ou "melhorar posts".

Transforme o pedido em um briefing estruturado que possa ser usado no `/opensquad create`.

### Formato de Saida

```markdown
# Briefing Refinado 3F3N

## Objetivo
[resultado desejado, em uma frase concreta]

## Contexto
[negocio, produto, momento, canal ou problema]

## Publico
[quem deve receber a mensagem]

## Tom e Identidade
[voz recomendada com base em context/tone.md e context/brand.md]

## Referencias
[referencias citadas pelo usuario ou exemplos relevantes de context/examples.md]

## Restricoes
[o que evitar, incluindo context/forbidden.md]

## Nivel de Profundidade
[leve, intermediario ou profundo, com justificativa]

## Prompt Para OpenSquad
/opensquad create "[prompt pronto, especifico e acionavel]"
```

### Regras

- Se faltar uma informacao importante, faca no maximo 2 perguntas antes de montar o briefing.
- Se o usuario pedir velocidade, assuma defaults a partir de `context/`.
- O prompt final para OpenSquad deve ser direto e especifico.
- Nao criar agentes, pipeline ou arquivos nesta etapa; apenas preparar a entrada.

## Operacao 2: Context Injector

Use antes de criar ou executar squads, ou antes de criticar um output.

### Procedimento

1. Leia os arquivos de `context/`.
2. Extraia apenas pontos relevantes para o objetivo atual.
3. Produza um "Context Pack" curto.
4. Use esse pack como insumo para o briefing, para a critica ou para a reescrita.

### Formato de Saida

```markdown
# Context Pack 3F3N

## Identidade Relevante
[2-5 bullets]

## Voz Relevante
[2-5 bullets]

## Exemplos Aplicaveis
[2-3 padroes, nao copiar textos longos]

## Evitar Nesta Entrega
[2-6 proibicoes concretas]
```

## Operacao 3: Reflection Critic

Use depois de um output do OpenSquad, antes de humanizar.

Avalie o output com firmeza editorial. O objetivo nao e elogiar; e encontrar o que impede a entrega de parecer especifica, humana e alinhada a marca.

### Rubrica

Dê nota de 1 a 10 para:

- Humanidade: parece escrito por alguem com perspectiva real?
- Clareza: a ideia e facil de entender sem ficar rasa?
- Naturalidade: o texto flui sem estrutura robotica?
- Alinhamento de marca: respeita `context/brand.md` e `context/tone.md`?
- Originalidade: evita formulas genericas e frases previsiveis?

### Formato de Saida

```markdown
# Critica 3F3N

## Score
| Criterio | Nota | Diagnostico |
|---|---:|---|
| Humanidade | X/10 | ... |
| Clareza | X/10 | ... |
| Naturalidade | X/10 | ... |
| Alinhamento de marca | X/10 | ... |
| Originalidade | X/10 | ... |

## Problemas Principais
1. [problema concreto]
2. [problema concreto]
3. [problema concreto]

## O Que Manter
1. [parte boa que nao deve ser perdida]
2. [parte boa que nao deve ser perdida]

## Direcao De Refinamento
[instrucoes objetivas para uma unica reescrita]
```

## Operacao 4: Humanizer

Use apos a Reflection Critic.

Reescreva uma unica vez. Preserve fatos, intencao, estrutura essencial e restricoes. Corte artificialidade evidente.

### O Que Fazer

- Trocar frases genericas por linguagem especifica.
- Reduzir tom corporativo e excesso de neutralidade.
- Remover listas desnecessarias quando a narrativa funcionar melhor.
- Variar ritmo de frases sem virar texto baguncado.
- Manter clareza e utilidade.
- Inserir ponto de vista quando o contexto permitir.

### O Que Nao Fazer

- Nao fingir intimidade.
- Nao adicionar girias aleatorias.
- Nao exagerar informalidade.
- Nao criar fatos, numeros ou promessas novas.
- Nao fazer segunda, terceira ou quarta rodada sem pedido explicito do usuario.

### Formato de Saida

```markdown
# Output Humanizado 3F3N

[versao refinada]

## Alteracoes Aplicadas
- [mudanca objetiva 1]
- [mudanca objetiva 2]
- [mudanca objetiva 3]
```

## Fluxos Recomendados

### Criar um squad novo

1. Operador pede: "Use a 3F3N Cognitive Layer para refinar este pedido: ..."
2. Rode Input Refiner + Context Injector.
3. Entregue o `Prompt Para OpenSquad`.
4. O operador usa esse prompt no `/opensquad create`.

### Melhorar output existente

1. Operador cola ou aponta o arquivo do output.
2. Rode Context Injector.
3. Rode Reflection Critic.
4. Rode Humanizer uma vez.
5. Entregue a versao humanizada e a lista curta do que mudou.

## Limites Obrigatorios

- Sem memoria infinita.
- Sem autoaprendizado.
- Sem loops autonomos.
- Sem banco vetorial.
- Sem substituir o OpenSquad.
- Sem alterar `_opensquad/core/`.
- Sem publicar, deletar ou executar acoes externas sem aprovacao humana.
