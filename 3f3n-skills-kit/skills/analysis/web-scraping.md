---
name: web-scraping
category: analysis
version: 1.0
source: rewritten
---

# Objetivo
Extrair conteúdo estruturado de websites usando cascade architecture com fallback automático, detecção de bloqueios e scraping ético.

# Quando usar
- Extrair texto/dados de artigos, blogs, documentação
- Coletar metadados de páginas web
- Detectar paywalls, captchas e bloqueios anti-bot
- Monitorar conteúdo de páginas para mudanças

# Inputs
- `url`: URL alvo para extração
- `content_type`: "article" | "metadata" | "full_page"
- `stealth`: true/false (ativar bypass anti-bot)

# Outputs
```json
{
  "url": "https://example.com/artigo",
  "status": "success",
  "method": "trafilatura",
  "title": "Título do artigo",
  "content": "Texto extraído...",
  "content_length": 2500,
  "poison_pill": {
    "detected": false,
    "type": "none",
    "confidence": 0.0
  }
}
```

# Regras
- SEMPRE usar cascade: trafilatura (rápido) → requests+BS4 (médio) → Playwright (pesado)
- Checar robots.txt antes de scraping em escala
- Delay mínimo de 1s entre requests para o mesmo domínio
- Conteúdo < 100 caracteres = falha (tentar próximo método)
- Detectar poison pills ANTES de processar (paywall, captcha, Cloudflare, rate limit)
- Identificar-se com User-Agent descritivo quando apropriado
- Cachear respostas para evitar requests redundantes
- NUNCA scraping de dados pessoais sem consentimento

# Processo
1. Verificar robots.txt do domínio alvo
2. Tentar extração via trafilatura (mais rápido, sem JS)
3. Se falhar → tentar requests + BeautifulSoup com user-agent rotativo
4. Se falhar → tentar Playwright com stealth mode
5. Em qualquer resultado: executar detecção de poison pill
6. Se poison pill detectado → reportar tipo e confidence
7. Retornar resultado estruturado com método utilizado

# Fallbacks
- Se trafilatura não instalada → pular para requests
- Se Playwright não disponível → usar apenas requests (sem JS rendering)
- Se bloqueado (429/403) → aguardar e retry com backoff exponencial
- Se paywall detectado → reportar e não tentar bypass (ético)
- Se domínio em lista de bloqueio conhecida (NYT, WSJ, Bloomberg) → avisar antes de tentar

# Exemplo
Input: "Extraia o conteúdo do artigo em https://example.com/blog/post-1"
Output:
```json
{
  "url": "https://example.com/blog/post-1",
  "status": "success",
  "method": "trafilatura",
  "title": "Como otimizar React apps",
  "content": "React é uma biblioteca JavaScript...",
  "content_length": 3200,
  "poison_pill": {
    "detected": false,
    "type": "none",
    "confidence": 0.0
  }
}
```
