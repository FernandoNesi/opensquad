# Avaliacao MVP: 3F3N Cognitive Layer

Este roteiro valida se a camada cognitiva melhora outputs reais de conteudo/marketing gerados com OpenSquad.

## Objetivo

Comparar 5 outputs antes/depois e decidir se a camada reduz cara de IA, melhora alinhamento de marca e diminui necessidade de edicao humana.

O MVP passa se pelo menos 4 de 5 casos forem avaliados como melhores por julgamento humano.

## Preparacao

1. Preencha os arquivos em `context/` com contexto minimo da marca.
2. Escolha 5 pedidos reais de conteudo/marketing.
3. Para cada pedido, gere uma entrega com OpenSquad sem aplicar a camada cognitiva.
4. Depois aplique a `3f3n-cognitive-layer` no mesmo caso.

## Casos De Teste

| Caso | Canal/Formato | Pedido Original | Squad/Run | Avaliador | Resultado |
|---|---|---|---|---|---|
| 1 |  |  |  |  |  |
| 2 |  |  |  |  |  |
| 3 |  |  |  |  |  |
| 4 |  |  |  |  |  |
| 5 |  |  |  |  |  |

## Registro Por Caso

Copie este bloco para cada caso avaliado.

```markdown
# Caso X

## Prompt Original


## Briefing Refinado 3F3N


## Output OpenSquad Original


## Critica 3F3N


## Output Humanizado 3F3N


## Scores

| Criterio | Antes | Depois | Observacao |
|---|---:|---:|---|
| Humanidade | /10 | /10 |  |
| Clareza | /10 | /10 |  |
| Naturalidade | /10 | /10 |  |
| Alinhamento de marca | /10 | /10 |  |
| Originalidade | /10 | /10 |  |

## Julgamento Humano

- Melhorou, piorou ou neutro:
- Exigiria menos edicao manual? Sim/Nao:
- O que melhorou:
- O que ainda ficou fraco:
```

## Criterios De Avaliacao

### Humanidade

O texto parece ter perspectiva, escolha editorial e intencao real, ou parece uma resposta padrao de IA?

### Clareza

A ideia principal aparece rapido e sem excesso de explicacao?

### Naturalidade

O texto flui como comunicacao humana, sem estrutura robotica ou simetria artificial?

### Alinhamento De Marca

O output respeita `context/brand.md`, `context/tone.md` e `context/forbidden.md`?

### Originalidade

O texto evita frases previsiveis, clichês e frameworks genericos?

## Decisao Final

Ao terminar os 5 casos, registre:

- Casos melhores:
- Casos neutros:
- Casos piores:
- Principais ganhos:
- Principais falhas:
- Decisao: manter, ajustar ou descartar o MVP.

## Regras Da Avaliacao

- Nao permita mais de uma rodada de critica + humanizacao por caso.
- Nao altere o output humanizado manualmente antes de pontuar.
- Nao compare contra um ideal abstrato; compare contra o output OpenSquad original.
- Se a camada mudar fatos ou promessas, marque como falha grave.
