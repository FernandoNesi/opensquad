---
name: frontend-design
category: rules
version: 1.0
source: rewritten
---

# Objetivo
Garantir que toda interface frontend gerada tenha identidade visual distinta, evitando estética genérica de IA. Forçar escolhas criativas intencionais em tipografia, cor, layout e motion.

# Quando usar
- Criar componentes, páginas ou aplicações web
- Estilizar ou "embelezar" qualquer interface
- Landing pages, dashboards, formulários
- Sempre que o output visual precise parecer "feito por designer humano"

# Inputs
- Requisitos de frontend (componente, página, app)
- Propósito e audiência (opcional mas recomendado)
- Framework: HTML/CSS/JS | React | Vue | Svelte

# Outputs
- Código funcional e production-grade
- Interface com identidade visual clara e memorável
- CSS variables definidas para consistência

# Regras

**PROIBIDO (AI slop):**
- Fontes: Inter, Roboto, Arial, system-ui, sans-serif genérico
- Cores: purple gradient on white, blue-to-purple, gradients genéricos
- Layout: cards centralizados simétricos, hero sections previsíveis
- Repetir a mesma escolha estética entre projetos

**OBRIGATÓRIO:**
- Tipografia: escolher 2 fontes (display + body) de Google Fonts. Sugestões por estilo:
  - Minimal: Instrument Serif + DM Sans
  - Brutalist: Bebas Neue + IBM Plex Mono
  - Luxury: Cormorant Garamond + Montserrat
  - Playful: Fredoka + Nunito
  - Editorial: Playfair Display + Source Serif Pro
  - Tech: JetBrains Mono + Outfit
- Cores: paleta com dominante + acento forte. Usar CSS custom properties.
- Motion: focar em 1-2 momentos de impacto (page load, hover). CSS transitions primeiro.
- Layout: ao menos 1 elemento de quebra (assimetria, overlap, diagonal, grid-break)
- Backgrounds: nunca solid color puro — adicionar ao menos 1 textura (noise, grain, gradient mesh)
- Acessibilidade: contraste mínimo 4.5:1 (AA), fontes body ≥ 16px

# Processo
1. Identificar propósito e audiência
2. Escolher direção estética (minimal, brutalist, luxury, playful, editorial, tech)
3. Selecionar par de fontes adequado
4. Definir paleta de cores com CSS variables
5. Implementar layout com ao menos 1 elemento de quebra
6. Adicionar motion em momentos-chave
7. Verificar acessibilidade (contraste, tamanhos)

# Fallbacks
- Se propósito não especificado → usar estilo "editorial" como padrão
- Se framework não definido → HTML/CSS/JS puro
- Se acessibilidade conflita com estética → priorizar acessibilidade

# Exemplo
Input: "Crie uma landing page para uma ferramenta de produtividade"
Output: direção "tech minimal"
- Fontes: JetBrains Mono (display) + Outfit (body)
- Paleta: `--bg: #0a0a0a; --text: #e8e8e8; --accent: #00ff88; --muted: #333;`
- Layout: hero assimétrico com texto à esquerda e terminal animado à direita
- Motion: staggered reveal no page load com `animation-delay`
- Background: grid sutil com `linear-gradient` + noise overlay via SVG filter
