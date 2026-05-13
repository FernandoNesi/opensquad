---
name: skill-analyzer-3f3n
description: Analisa uma skill do diretório _raw para entender funcionamento e apontar falhas
category: analysis
version: 1.0
---
# Objetivo
Desconstruir e analisar skills brutas (recém baixadas) para extrair sua lógica e identificar oportunidades de melhoria antes de sua reescrita.

# Inputs
- O conteúdo ou caminho de um arquivo `SKILL.md` (ou similar) localizado na pasta `/_raw`.

# Outputs
Um relatório estruturado contendo:
- **Objetivo real**: O que a skill *de fato* tenta resolver.
- **Inputs esperados**: Dados que a skill precisa para funcionar.
- **Outputs gerados**: O que a skill produz como resultado.
- **Regras explícitas**: Regras escritas claramente no prompt.
- **Regras implícitas**: Comportamentos que o assistente assume nas entrelinhas.
- **Classificação recomendada**: (analysis | rules | execution | workflow | integration)
- **Falhas encontradas**: (Ex: falhas estruturais, ambiguidade, falta de padronização, prompts genéricos).

# Regras
- Nunca reescreva o código ainda. Apenas analise e documente.
- Avalie o grau de "genérico" da skill e aponte isso na seção de falhas.
- Formate a saída usando bullet points limpos.

# Exemplos
**Input:** `Analise a skill localizada em /skills/_raw/agent-browser/SKILL.md`
**Output real:** Relatório detalhando os inputs de navegação, a categoria (integration) e apontando se falta estruturação nos retornos.

# Quando usar
Sempre que o usuário baixar uma nova skill para `/_raw` e quiser movê-la para a esteira de processamento (`/_processed`) antes de transformá-la na versão final Ouro.
