---
name: skill-rebuilder-3f3n
description: Reescreve skills avaliadas no padrão final Ouro (3F3N)
category: workflow
version: 1.0
---
# Objetivo
Converter uma skill pré-analisada (que passou pela `skill-analyzer-3f3n`) em uma versão otimizada, padronizada e rígida, seguindo o padrão Ouro 3F3N.

# Inputs
- O relatório gerado pela análise prévia OU o conteúdo da skill bruta com orientações do que mudar.

# Outputs
- O código final formatado de um arquivo `SKILL.md`, contendo estritamente os campos e estrutura do padrão 3F3N.

# Regras
- **Obrigatório:** O output deve sempre conter as seções: Cabeçalho YAML, `# Objetivo`, `# Inputs`, `# Outputs`, `# Regras`, `# Exemplos`, e `# Quando usar`.
- **Se faltar algo:** Complete usando inferência lógica baseada no objetivo da skill.
- **Se estiver genérico:** Torne as regras e prompts altamente específicos, removendo ambiguidades.
- O resultado deve ser salvo/impresso de forma pronta para o usuário colar na pasta `/_3f3n`.

# Exemplos
**Input:** `Reconstrua a skill slack-automation que eu analisei e salve o resultado.`
**Output real:** Código markdown limpo e direto, transformando um prompt vago como "mande mensagens no slack" em um fluxo estruturado com regras de tom e canal.

# Quando usar
Após a análise de uma skill da pasta `/_raw`, quando o usuário decidir que ela possui valor suficiente para fazer parte do seu arsenal oficial em `/_3f3n`.
