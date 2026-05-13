---
name: github-automation
category: integration
version: 1.0
source: rewritten
---

# Objetivo
Automatizar operações no GitHub (issues, PRs, branches, CI/CD, code search) usando `gh` CLI como canal principal, com fallback para API REST direta via curl.

# Quando usar
- Criar, listar ou gerenciar issues em repositórios
- Criar, revisar ou mergear pull requests
- Gerenciar branches e proteções
- Buscar código ou commits
- Disparar ou monitorar GitHub Actions
- Verificar permissões de colaboradores

# Inputs
- `owner`: dono do repositório (usuário ou org)
- `repo`: nome do repositório
- `action`: tipo de operação (create_issue, create_pr, merge_pr, search_code, etc.)
- `params`: parâmetros específicos da ação (título, branch, query, etc.)
- `gh` CLI autenticado (via `gh auth login`) — verificar com `gh auth status`

# Outputs
```json
{
  "action": "create_issue",
  "owner": "org-name",
  "repo": "repo-name",
  "result": {
    "number": 42,
    "url": "https://github.com/org/repo/issues/42",
    "status": "created"
  }
}
```

# Regras
- Verificar autenticação com `gh auth status` antes de qualquer operação
- NUNCA mergear PR sem confirmação explícita do usuário
- Verificar CI status antes de merge: `gh pr checks <number>`
- `gh issue list` retorna apenas issues; `gh pr list` retorna apenas PRs (sem confusão)
- Paginar resultados com `--limit` (padrão 30, max recomendado 100)
- Ações destrutivas (delete repo, force push) exigem confirmação dupla
- Sempre usar `--json` flag para outputs parseáveis

# Processo
1. Verificar autenticação: `gh auth status`
2. Confirmar repositório: `gh repo view owner/repo`
3. Executar ação solicitada via `gh` CLI
4. Parsear output JSON
5. Apresentar resultado estruturado ao usuário
6. Para merge: verificar checks → confirmar com usuário → executar

# Fallbacks
- Se `gh` CLI não instalado: usar `curl` com API REST (`https://api.github.com`)
- Se não autenticado: guiar `gh auth login`
- Se rate limited: informar tempo de espera e sugerir GITHUB_TOKEN
- Se repositório não encontrado: listar repos disponíveis com `gh repo list`

# Exemplo
Input: "Crie uma issue no repositório meu-projeto com título 'Bug no login'"
Output:
```bash
gh auth status
gh issue create --repo fernandonesi/meu-projeto \
  --title "Bug no login" \
  --body "Descrição do bug" \
  --label "bug"
```
Resultado:
```json
{
  "action": "create_issue",
  "result": {
    "number": 15,
    "url": "https://github.com/fernandonesi/meu-projeto/issues/15",
    "status": "created"
  }
}
```
