---
name: skill-builder
category: workflow
version: 1.0
source: rewritten
---

# Objetivo
Criar, estruturar e iterar skills no padrão 3F3N, garantindo que cada skill seja autocontida, acionável e reutilizável sem contexto externo.

# Quando usar
- Criar uma nova skill do zero
- Converter uma skill bruta (/_raw) em versão 3F3N
- Melhorar uma skill existente que está genérica ou incompleta
- Padronizar skills importadas do registry público

# Inputs
- `request`: descrição do que a skill deve fazer
- `source`: caminho de skill existente para reescrever (opcional)
- `category`: analysis | rules | execution | workflow | integration
- `examples`: exemplos concretos de uso (pelo menos 2)

# Outputs
Arquivo `.md` no padrão 3F3N:
```json
{
  "file": "/skills/_3f3n/{category}/{name}.md",
  "sections": ["Objetivo", "Quando usar", "Inputs", "Outputs", "Regras", "Processo", "Fallbacks", "Exemplo"],
  "word_count": "800-1500",
  "status": "ready"
}
```

# Regras
- Frontmatter YAML obrigatório: name, category, version, source
- TODAS as seções são obrigatórias: Objetivo, Quando usar, Inputs, Outputs, Regras, Processo, Fallbacks, Exemplo
- Outputs DEVEM ser estruturados (JSON quando aplicável)
- Regras DEVEM ser testáveis (não usar "seja bom", "faça melhor")
- Exemplo DEVE conter Input real → Output real (não placeholder)
- Máximo 1500 palavras no corpo
- Se dependência externa: obrigatório seção Fallbacks com alternativa
- Forma imperativa (nunca segunda pessoa)
- NUNCA copiar skill original — reescrever do zero

# Processo
1. Compreender o objetivo real da skill (o que resolve?)
2. Listar inputs explícitos e implícitos
3. Definir outputs estruturados com formato JSON
4. Extrair regras testáveis (eliminar ambiguidade)
5. Descrever processo em passos sequenciais
6. Definir fallbacks para cada dependência externa
7. Criar exemplo com input → output reais
8. Validar: todas seções presentes? < 1500 palavras? outputs estruturados?

# Fallbacks
- Se categoria não definida → inferir do objetivo e confirmar com usuário
- Se sem exemplos de uso → gerar 2 exemplos hipotéticos e validar
- Se skill original muito longa → extrair apenas o core e descartar padding

# Exemplo
Input: "Crie uma skill para formatar commits no padrão conventional commits"
Output:
```markdown
---
name: conventional-commits
category: rules
version: 1.0
source: created
---
# Objetivo
Formatar mensagens de commit no padrão Conventional Commits...
# Quando usar
- Ao commitar código...
# Inputs
- mensagem de commit bruta
# Outputs
- mensagem formatada: `type(scope): description`
...
```
