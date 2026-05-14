# Behavioral Adjustments v1

## Objetivo

Ajustes pequenos e cirúrgicos para melhorar futuras execuções reais do OpenSquad.

Não são novas layers.
Não são novas engines.
Não são mudanças de arquitetura.

São ajustes de comportamento, prompt, priorização e clareza.

---

## 1. Usar Evidência Real Antes De Generalizar

**Problema observado na Maroma:**  
O sistema identificou WhatsApp como gargalo, mas não explorou o conteúdo real do arquivo disponível.

**Ajuste:**  
Quando houver prints, conversas, relatórios, planilhas ou textos reais, o agente deve extrair evidências concretas antes de escrever diagnóstico amplo.

**Regra prática:**  
Antes de dizer "a comunicação é informal", mostrar:
- uma tarefa recorrente;
- uma cobrança repetida;
- uma decisão sem dono;
- um exemplo de contexto perdido.

---

## 2. Separar Fato, Hipótese E Lacuna

**Problema observado na Maroma:**  
Algumas conclusões estavam corretas, mas misturavam fato documentado com inferência operacional.

**Ajuste:**  
Toda análise sensível deve marcar:
- fato observado;
- hipótese forte;
- hipótese fraca;
- dado ausente.

**Exemplo:**  
Em vez de:
> A loja não tem DRE confiável.

Usar:
> Fato: há documentos de dívida e pressão de caixa.  
> Hipótese forte: o DRE operacional não está consolidado.  
> Dado ausente: faturamento mensal real dos últimos 12 meses.

---

## 3. Reduzir Tabelas Quando A Decisão Já Está Clara

**Problema observado na Maroma:**  
Algumas tabelas ajudaram, mas o excesso de estrutura aumenta sensação de output de IA.

**Ajuste:**  
Usar tabela apenas quando ela muda a decisão.

**Regra prática:**  
Se a conclusão é "separe PF/PJ primeiro", não esconder isso dentro de matriz grande. Dizer direto.

---

## 4. Trocar Linguagem De Framework Por Linguagem De Operação

**Problema observado na Maroma:**  
Termos como "fricção", "maturidade", "estrutura de informação" e "critério de conclusão" funcionam internamente, mas podem soar consultivos demais.

**Ajuste:**  
Preferir linguagem que o operador reconhece.

Trocas recomendadas:
- "fricção" → "onde trava";
- "maturidade operacional" → "o quanto a loja aguenta sem depender de uma pessoa";
- "estrutura de informação" → "onde o dado nasce, onde se perde e quem precisa lembrar";
- "critério de conclusão" → "como saber que funcionou";
- "quick win" → "primeira melhoria prática".

---

## 5. Governance Deve Ser Mais Duro E Menos Defensivo

**Problema observado na Maroma:**  
O governance review aprovou o output com elogio demais, mesmo havendo lacunas importantes: WhatsApp não analisado e falta de receita real.

**Ajuste:**  
Governance deve procurar falhas que impedem decisão, não apenas confirmar que o output não tem hype.

**Regra prática:**  
Se existe dado real disponível e o agente não usou, isso vira falha relevante.

---

## 6. Medir Adoção Provável, Não Só Qualidade Da Ideia

**Problema observado na Maroma:**  
Trello faz sentido tecnicamente, mas talvez tenha baixa adoção em operação familiar.

**Ajuste:**  
Toda recomendação deve responder:
- quem precisa mudar comportamento;
- qual resistência provável;
- qual versão mínima seria aceita;
- o que fazer se não for adotado.

**Exemplo:**  
Antes de propor Trello, considerar:
- mensagem fixada no WhatsApp;
- checklist impresso;
- quadro físico simples;
- ritual semanal de 15 minutos.

---

## 7. Comprimir O Final Em Decisão Executiva

**Problema observado na Maroma:**  
A prioridade existe, mas está espalhada em vários arquivos.

**Ajuste:**  
Toda execução real deve terminar com uma página simples:
- faça primeiro;
- faça depois;
- ignore agora;
- dado que falta;
- risco se nada mudar.

**Regra prática:**  
O founder deve entender o próximo passo em menos de 2 minutos.

---

## 8. Evitar Códigos No Output Final

**Problema observado na Maroma:**  
F01, OPP-01 e QW-01 ajudam organização, mas deixam o output com cara de sistema.

**Ajuste:**  
Manter códigos se forem úteis internamente, mas no output final usar títulos humanos.

**Exemplo:**  
Em vez de:
> QW-02: Planilha de DRE simples.

Usar:
> Saber toda segunda-feira se a loja pagou a própria semana.

---

## 9. Não Assumir Que Simples É Fácil

**Problema observado na Maroma:**  
Algumas ações são simples tecnicamente, mas difíceis emocionalmente ou culturalmente.

**Ajuste:**  
Sempre diferenciar:
- simples de explicar;
- simples de executar;
- simples de manter.

**Exemplo:**  
Separar PF/PJ é simples como decisão, mas pode ser difícil porque expõe a realidade financeira.

---

## 10. Apontar O Que Não Dá Para Concluir

**Problema observado na Maroma:**  
O diagnóstico foi honesto, mas poderia ter sido mais firme sobre limites.

**Ajuste:**  
Toda execução deve listar no final:
- dado ausente;
- decisão que ainda não pode ser tomada;
- risco de concluir cedo demais.

**Exemplo:**  
Sem faturamento mensal real, não concluir viabilidade da loja. Concluir apenas nível de pressão e necessidade de visibilidade.

---

## Prioridade Para A Próxima Execução

Aplicar somente estes 3 ajustes primeiro:

1. usar evidência real antes de generalizar;
2. separar fato, hipótese e lacuna;
3. terminar com decisão executiva comprimida.

Se isso melhorar o output, manter.

Se não melhorar perceptivelmente, descartar.
