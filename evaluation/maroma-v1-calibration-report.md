# Relatório de Calibração Operacional — Maroma v1

## Escopo

Este relatório avalia os outputs gerados pela squad `operational-diagnosis-aios` para o caso real `Maroma`.

Arquivos analisados:
- `operational-map.md`
- `friction-analysis.md`
- `human-dependency-report.md`
- `aiopportunities.md`
- `quickwins.md`
- `implementation-roadmap.md`
- `governance-review.md`

Objetivo da análise:
- medir utilidade prática;
- reduzir artificialidade;
- identificar o que gera ação real;
- ajustar comportamento futuro por prompts, priorização e clareza.

Não propor novas arquiteturas, layers, engines ou runtime.

---

## Veredito Geral

**Resultado: BOM, mas ainda precisa calibração.**

A execução Maroma foi uma das mais úteis até agora porque saiu do discurso de IA e entrou em operação real:
- caixa;
- dívida;
- WhatsApp;
- estoque;
- pais;
- dependência do Fernando;
- inverno;
- rotina informal.

O diagnóstico não tentou vender tecnologia. Isso é positivo.

Mas ainda existem problemas:
- pouca exploração do material real de WhatsApp;
- pouca tensão sobre resistência familiar;
- alguns pontos assumem adoção fácil demais;
- o governance review foi complacente;
- faltou uma síntese executiva mais dura: "faça isso primeiro, ignore o resto por enquanto".

---

## O Que Soou Mais Humano

### 1. Nomear a operação como ela é

Trechos como:
- "A Maroma funciona por rotina informal repetida";
- "O ser humano é a cola entre todas elas";
- "A loja descobre o gargalo quando ele já chegou";
- "redistribuir dependência, não eliminar pessoas".

Esses trechos soam humanos porque não parecem template. Eles descrevem uma operação real, pequena, familiar, pressionada por caixa.

### 2. Reconhecer que a Maroma não precisa de IA agora

O melhor momento da execução está em `aiopportunities.md`:

> A Maroma não precisa de IA. Ela precisa de informação acessível e fluxos que não dependam de memória humana.

Isso gerou maturidade. O sistema não tentou forçar AIOS onde a operação ainda precisa de separação PF/PJ, DRE básico e rotina mínima.

### 3. Quick wins simples

Os melhores quick wins foram:
- separar PF/PJ;
- DRE semanal mínimo;
- ponto de pedido para 5 produtos;
- checklist de abertura em 1 folha A4.

Isso parece operador experiente. Não parece consultoria tentando justificar complexidade.

### 4. Conexão entre Maroma e energia mental da 3F3N

O roadmap acertou ao dizer que o maior risco não é só operacional, mas de atenção. Isso é específico do caso e provavelmente faria Fernando parar para pensar.

---

## O Que Soou Mais IA

### 1. Estrutura excessivamente limpa

Todos os arquivos seguem estrutura muito simétrica:
- categoria;
- tabela;
- risco;
- recomendação;
- critério.

Isso facilita leitura, mas começa a gerar sensação de output fabricado. Operação real costuma ter mais atrito, cortes e hierarquia desigual.

Ajuste necessário:
- alternar blocos estruturados com observações curtas e diretas;
- reduzir tabelas quando a decisão já estiver clara;
- permitir frases mais secas quando houver risco evidente.

### 2. Uso recorrente de "diagnóstico", "fricção", "maturidade", "estrutura"

Esses termos ajudam internamente, mas se repetem demais. Em excesso, viram linguagem de framework.

Ajuste necessário:
- trocar parte dos termos por linguagem operacional concreta:
  - "fricção" → "onde trava";
  - "maturidade" → "o quanto a operação aguenta sem Fernando";
  - "estrutura de informação" → "onde o dado nasce, onde se perde e quem precisa lembrar".

### 3. Governance review aprovando demais

O `governance-review.md` pareceu mais defensor do output do que auditor. Ele apontou duas lacunas reais, mas ainda deu `APPROVED` com tom muito positivo.

Problema:
- se o WhatsApp real não foi analisado, não é uma imperfeição menor;
- se não há faturamento real, o diagnóstico financeiro ainda está incompleto;
- se a operação familiar tem resistência provável, isso deveria pesar mais.

Ajuste necessário:
- governance deve aprovar com ressalvas duras;
- evitar linguagem de celebração como "Isso é maturidade profissional";
- registrar lacunas como bloqueios parciais, não elogios.

---

## O Que Gerou Clareza Real

### Clareza 1: O primeiro gargalo é financeiro, não tecnológico

O sistema deixou claro que separar PF/PJ e montar DRE mínimo vem antes de automação, IA, marketing ou integração.

Valor prático: alto.

### Clareza 2: Fernando é gargalo e também infraestrutura

O diagnóstico mostrou que Fernando concentra:
- pagamento;
- decisão;
- conciliação;
- estratégia;
- marketing;
- reorganização.

Isso torna visível algo que muitas vezes fica emocionalmente confuso.

Valor prático: alto.

### Clareza 3: WhatsApp é o sistema operacional informal

O output acertou ao identificar o WhatsApp como local onde tarefas, aprovações e decisões desaparecem.

Valor prático: médio-alto.

Faltou:
- extrair exemplos reais do histórico;
- apontar 3 padrões de mensagem recorrente;
- mostrar quais decisões se repetem no grupo.

### Clareza 4: Nem tudo deve ser automatizado

A lista "O que NÃO propor" foi um ponto forte:
- CRM;
- chatbot;
- e-commerce;
- previsão de demanda;
- troca de sistema da franquia.

Valor prático: alto.

---

## O Que Provavelmente Geraria Ação

### Alta chance de ação

1. **Separar conta PF/PJ**
   - ação objetiva;
   - responsável claro;
   - justificativa forte;
   - bloqueia todo o restante.

2. **DRE semanal de 4 campos**
   - simples o bastante para começar;
   - útil em menos de 7 dias;
   - gera clareza de caixa.

3. **Ponto de pedido dos 5 produtos principais**
   - conversa curta com o pai;
   - não exige software;
   - reduz ruptura e ansiedade.

4. **Checklist de abertura em folha A4**
   - baixo atrito;
   - respeita operação familiar;
   - não exige mudança cultural grande.

### Chance média de ação

1. **3 posts por semana no Instagram**
   - útil, mas pode virar peso se Fernando estiver sobrecarregado;
   - depende de energia criativa e execução visual.

2. **Trello fora do WhatsApp**
   - correto em tese;
   - risco alto de rejeição familiar;
   - talvez precise começar com uma versão mais simples: mensagem fixada, checklist impresso ou quadro físico.

### Baixa chance de ação imediata

1. **Treinar pai no Trello**
   - pode ser cedo demais;
   - parece simples para quem é digital, mas pode ser mudança cultural para operação familiar.

---

## O Que Ficou Genérico

### 1. "Marketing inconsistente"

O diagnóstico aponta o problema, mas ainda não mostra como a Maroma vende no inverno de forma específica.

Faltou:
- quais produtos puxam consumo no frio;
- se delivery existe ou não;
- se há bairro, fluxo local, turismo ou recorrência;
- que tipo de post venderia sem parecer desesperado.

### 2. "Comunicação via WhatsApp"

O diagnóstico acertou a categoria, mas ficou genérico porque havia arquivo real de WhatsApp disponível.

Faltou:
- exemplos de mensagens;
- padrões de cobrança;
- tarefas repetidas;
- decisões sem dono;
- horários de tensão.

### 3. "Pais resistem à mudança"

O output sugere resistência, mas não explora comportamento provável.

Faltou diferenciar:
- resistência por cansaço;
- resistência por costume;
- resistência por medo de controle;
- resistência por achar que "sempre funcionou assim".

---

## O Que Ficou Consultoria Demais

### 1. Mapa de calor com emoji e categoria

Funciona visualmente, mas ainda parece artefato de diagnóstico corporativo.

Melhor:
- listar os 3 problemas que mais quebram caixa;
- depois listar os 2 problemas que mais quebram Fernando;
- depois listar o que pode esperar.

### 2. Muitas siglas internas

F01, OPP-01, QW-01 ajudam rastreabilidade, mas para founder em caso real podem virar ruído.

Melhor:
- manter códigos nos bastidores;
- no output final, usar títulos humanos:
  - "Separar dinheiro da loja do dinheiro da casa";
  - "Saber se a semana pagou a própria conta";
  - "Parar de descobrir estoque só quando falta".

### 3. "Critério de conclusão"

É útil, mas aparece com tom de projeto. Para operação familiar, pode soar distante.

Melhor:
- "Como saber que funcionou";
- "Sinal de que isso pegou";
- "Quando parar de mexer nisso".

---

## O Que Ficou Superficial

### 1. WhatsApp

Foi tratado como categoria, não como evidência.

Como havia histórico real, o diagnóstico deveria ter extraído pelo menos:
- 5 tipos de mensagens recorrentes;
- 3 tarefas que voltam sempre;
- 3 decisões que dependem de Fernando;
- 3 exemplos de contexto perdido.

### 2. Receita e faturamento

O diagnóstico usa dívidas e compromissos, mas não tem receita real. Isso limita qualquer conclusão sobre viabilidade.

O output deveria ter marcado com mais força:

> Sem faturamento mensal dos últimos 12 meses, qualquer conclusão sobre sobrevivência da loja ainda é incompleta.

### 3. Adoção pelos pais

O sistema propõe Trello e checklist, mas não avalia o custo emocional da adoção.

Faltou:
- qual mudança os pais aceitariam primeiro;
- o que não deve ser apresentado como "controle";
- onde a linguagem deve ser cuidadosa.

---

## O Que Ficou Profundo Demais

Pouca coisa ficou profunda demais. A execução foi relativamente sóbria.

O excesso aparece mais na forma do que no conteúdo:
- muitos arquivos;
- muitas tabelas;
- muitos rótulos;
- muita categorização para problemas que já estavam claros.

O risco não é profundidade intelectual. O risco é volume.

Para operação real, o output final deveria comprimir mais:
- 1 página executiva;
- 3 ações imediatas;
- 3 riscos;
- 3 coisas que não fazer.

---

## Scores De Calibração

Escala: `0-10`.

| Critério | Score | Leitura |
|---|---:|---|
| Realismo operacional | 8 | Boa ancoragem em pessoas, caixa e rotina. |
| Clareza executiva | 7 | As prioridades existem, mas estão espalhadas. |
| Utilidade prática | 8 | Quick wins são acionáveis. |
| Human Reality Score | 7 | Humano em vários trechos, ainda estruturado demais. |
| Operational Specificity | 7 | Bom em financeiro e dependência, fraco no WhatsApp real. |
| Genericness Risk | 4 | Baixo/médio. Alguns pontos ainda poderiam servir a qualquer pequena empresa. |
| Overclaim Risk | 3 | Baixo. O sistema evitou prometer IA. |
| Template Feeling | 6 | A estrutura em arquivos/tabelas dá sensação de template. |
| Founder Authenticity | 7 | A atenção dividida Fernando/3F3N foi um acerto. |
| Proof Strength | 6 | Boa prova por raciocínio, prova documental pouco explorada. |
| Emotional Manipulation Risk | 2 | Baixo. Sem teatralidade. |

---

## Decisão

`PRECISA_AJUSTE`

A execução é útil e provavelmente geraria ação, mas ainda não deve ser considerada calibrada.

Os próximos ajustes devem ser pequenos:
- usar mais evidência real;
- comprimir mais o final;
- reduzir códigos e tabelas no output para founder;
- tornar governance menos complacente;
- tratar adoção familiar como risco operacional real.

---

## Ajuste Incremental Prioritário

Antes de qualquer recomendação, a squad deve separar:

1. **fato observado**;
2. **hipótese forte**;
3. **hipótese fraca**;
4. **dado ausente que impede conclusão**.

Isso reduz invenção, melhora confiança e força o sistema a admitir quando ainda não sabe.
