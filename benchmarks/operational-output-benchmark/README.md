# Operational Output Benchmark

Data de início: 2026-05-13

## Diretriz Da Fase

O OpenSquad entra temporariamente em fase de benchmark operacional real.

Durante esta fase, não evoluir o core como resposta automática a problemas de output. Primeiro validar se o sistema atual já gera melhoria perceptível em entregas reais.

## Congelamento Temporário

Não criar:

- novo runtime;
- nova engine;
- nova layer;
- sistema distribuído;
- simulação organizacional avançada;
- memória infinita;
- economia multiagente;
- arquitetura acadêmica.

Focar somente em:

- squads reais;
- outputs reais;
- comparação de qualidade;
- auditoria hostil;
- refinamento incremental;
- benchmark humano.

## Regra Para Camadas Futuras

Uma nova camada só deve existir se melhorar perceptivelmente o output final em pelo menos um destes pontos:

- credibilidade;
- especificidade;
- humanidade;
- clareza operacional;
- redução de hype;
- redução de teatralidade;
- redução de linguagem genérica;
- capacidade de conversão real;
- sensação de "isso foi vivido".

Se a melhoria não aparecer no output, a camada deve ser descartada ou arquivada como experimento.

## Unidade De Benchmark

Cada execução avaliada deve gerar uma pasta em:

```text
benchmarks/operational-output-benchmark/runs/{YYYY-MM-DD}-{squad}-{case}/
```

Arquivos esperados:

```text
01-original-output.md
02-hostile-review.md
03-scorecard.md
04-failure-excerpts.md
05-refined-output.md
06-comparison.md
```

Use os templates em `templates/`.

## Métricas

Escala: `0-10`.

Para métricas positivas, `10` é melhor.
Para métricas de risco, `10` é pior.

| Métrica | Tipo | O que mede |
|---|---|---|
| Human Reality Score | positivo | Parece vivido, humano, situado e não fabricado. |
| Operational Specificity | positivo | Traz cenas, mecanismos, fluxos, restrições e exemplos concretos. |
| Founder Authenticity | positivo | Soa como operador/fundador real, não como performance de founder. |
| Proof Strength | positivo | A força da prova sustenta o tamanho das afirmações. |
| Genericness Risk | risco | Poderia servir para qualquer empresa, consultoria ou startup IA. |
| Overclaim Risk | risco | Promete mais do que prova, escopo ou maturidade permitem. |
| Template Feeling | risco | Parece estrutura pronta, framework artificial ou output de IA. |
| Emotional Manipulation Risk | risco | Usa tensão, culpa ou urgência como teatro em vez de clareza. |

## Veredito

Use quatro decisões:

- `APPROVED`: output publicável com pouca edição.
- `NEEDS_REVISION`: bom núcleo, mas falhas claras.
- `BLOCKED`: risco alto de parecer genérico, inflado, teatral ou artificial.
- `DISCARD_LAYER_HYPOTHESIS`: quando uma camada/alteração não melhora o output de forma perceptível.

## Matriz De Evolução

Toda entrega com versões deve atualizar:

```text
benchmarks/operational-output-benchmark/matrices/{squad}-{artifact}.md
```

Comparar `v1`, `v2`, `v3` em:

- menos robótico;
- menos consultoria;
- menos startup AI genérica;
- menos teatral;
- mais operacional;
- mais humano;
- mais específico;
- mais credível.

## Critério Principal

O objetivo do OpenSquad agora não é parecer mais inteligente.

O objetivo é parecer mais real.
