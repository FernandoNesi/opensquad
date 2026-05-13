---
name: prompt-optimizer
category: pre-input
version: 1.0
source: rewritten
---

# Objetivo
Atuar como a camada de entrada (pre-input) do sistema 3F3N, garantindo que nenhum prompt fraco, vago ou desestruturado chegue ao orquestrador ou às skills de execução. Otimizar as ideias do usuário e convertê-las em inputs de alta qualidade ou extrair o contexto faltante de forma estruturada.

# Quando usar
- Como etapa inicial e obrigatória (interceptador) se o input do usuário for vago.
- Quando o input original carece de contexto, objetivo ou regras.
- Quando o usuário expressa apenas uma "ideia" e precisa de ajuda para transformá-la em um comando acionável.

# Inputs
- `raw_input`: O texto livre ou ideia bruta enviada pelo usuário.

# Outputs
A skill deve retornar **APENAS UMA** das duas opções:

Opção 1 (Se o input tem contexto básico mas é vago):
```json
{
  "optimized_prompt": "Prompt estruturado com objetivo, contexto e regras de saída...",
  "status": "optimized"
}
```

Opção 2 (Se faltar muito contexto - Questionário Estruturado):
```json
{
  "objective": ["gerar landing", "analisar", "resumir", "outro"],
  "publico": ["iniciante", "avançado", "empresa", "outro"],
  "nivel_detalhe": ["baixo", "médio", "alto"]
}
```

# Regras
- SEMPRE retornar um prompt otimizado OU o questionário estruturado em JSON.
- NUNCA repassar o input original vago adiante no pipeline.
- Não assumir informações vitais sem perguntar (se faltar muito contexto, forçar o questionário).
- Se o input já for bom, refinar silenciosamente e retornar `optimized_prompt`.

# Processo
1. Analisar o `raw_input` fornecido pelo usuário.
2. Avaliar se o input possui intenção clara e contexto suficiente.
3. Se o input for puramente vago (ex: "faz um site"), gerar o questionário de múltipla escolha no formato JSON.
4. Se o input for fraco mas tiver uma direção clara (ex: "analise a página X e me dê os pontos ruins"), gerar a versão otimizada automaticamente, estruturando o prompt final de acordo com as boas práticas.
5. Retornar a saída JSON escolhida.

# Fallbacks
- Se o usuário não souber responder ao questionário → assumir opções padrão de maior abrangência (ex: nível_detalhe: "médio") e gerar um prompt sugerido com aviso.

# Exemplo
Input: "Resume esse texto aí pra mim."
Output:
```json
{
  "optimized_prompt": "Extraia os pontos principais do texto fornecido, criando um resumo estruturado em bullet points, focando apenas nos insights acionáveis e ignorando introduções prolixas. Formate a saída final em Markdown.",
  "status": "optimized"
}
```