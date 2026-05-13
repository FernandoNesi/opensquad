# Estrutura de Skills 3F3N 🧠⚙️

Este documento explica como as skills estão organizadas no repositório e como a camada operacional é gerenciada.

---

## 🏗 Camadas de Arquivos

### 1. `/skills` (Fonte Oficial)
Esta é a **SSOT (Single Source of Truth)** do projeto.
- As skills estão organizadas por categorias funcionais (`analysis`, `execution`, `workflow`, etc.).
- Algumas skills podem ser apenas um arquivo `.md`, enquanto outras podem ser uma pasta contendo um `SKILL.md` e ativos adicionais.
- **Regra:** Nunca altere as skills nas pastas operacionais. Sempre altere aqui.

### 2. `.agents/skills` (Camada Operacional Multiagente)
Camada otimizada para uso por diferentes agentes de IA (Antigravity, Codex, etc.).
- Contém apenas arquivos `.md` individuais nomeados conforme o registro.
- Facilitar a leitura rápida e o carregamento de contexto.

### 3. `.claude/skills` (Camada Operacional Claude Code)
Camada específica para integração nativa com o **Claude Code**.
- Permite que o Claude Code reconheça as skills como ferramentas de contexto.

### 4. `registry/` (O Índice)
Contém o `skills.registry.json`, que é o mapa de todo o ecossistema.
- Define versão, status (production/wip) e localização original de cada skill.

---

## 🔁 Sincronização

Para garantir que a camada operacional esteja sempre atualizada com a fonte oficial, utilizamos um script de sincronização.

### Comando:
```bash
npm run skills:sync
```

### O que o script faz:
1. Lê o `registry/skills.registry.json`.
2. Filtra apenas as skills com status `production`.
3. Copia a fonte original para as pastas `.agents/skills/` e `.claude/skills/`.
4. Renomeia o arquivo destino para `[nome-da-skill].md`.
5. **Ignora** qualquer skill marcada como `wip`.

---

## ⚠️ Regras de Contribuição

1. **Desenvolvimento:** Novas skills devem ser criadas em `/skills/wip/` e registradas no JSON com `status: "wip"`.
2. **Promoção:** Quando uma skill for validada, mova para a categoria correta e mude o status para `production`.
3. **Deploy:** Após a promoção, rode `npm run skills:sync` para disponibilizar a skill para os agentes.
