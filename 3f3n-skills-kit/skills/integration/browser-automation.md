---
name: browser-automation
category: integration
version: 1.0
source: rewritten
---

# Objetivo
Automatizar interações com navegadores para testes E2E, scraping e controle por agentes de IA, usando Playwright como framework principal.

# Quando usar
- Testar fluxos de aplicações web (login, checkout, formulários)
- Extrair dados de páginas que requerem JavaScript
- Capturar screenshots e vídeos para QA
- Interceptar ou mockar requisições de rede
- Automatizar interações em sites com anti-bot protection

# Inputs
- `url`: URL alvo
- `task_type`: "test" | "scrape" | "interact"
- `selectors`: elementos alvo (preferir getByRole, getByText)
- `stealth`: true/false (ativar bypass anti-bot)

# Outputs
```json
{
  "task": "scrape",
  "url": "https://example.com",
  "status": "success",
  "data": {},
  "screenshots": ["screenshot_001.png"],
  "method": "playwright"
}
```

# Regras
- SEMPRE usar locators user-facing nesta prioridade:
  1. `getByRole` (melhor — acessibilidade)
  2. `getByText` (conteúdo visível)
  3. `getByLabel` (formulários)
  4. `getByTestId` (contrato explícito)
  5. CSS/XPath (último recurso, evitar)
- NUNCA usar `waitForTimeout` — Playwright auto-wait resolve
- Cada teste/task deve ter contexto isolado (fresh cookies, storage)
- Screenshots automáticos em caso de falha
- Headless para CI, headed para debug
- Rate limit em scraping paralelo: máximo 5 contextos simultâneos

# Processo
1. Iniciar browser: `const browser = await chromium.launch()`
2. Criar contexto isolado: `const context = await browser.newContext()`
3. Se stealth: aplicar plugin stealth antes de navegar
4. Navegar para URL: `await page.goto(url)`
5. Executar ações usando locators user-facing
6. Capturar resultado (dados, screenshots, traces)
7. Fechar contexto: `await context.close()`

# Fallbacks
- Se Playwright não instalado → `npx playwright install`
- Se Chromium não disponível → tentar Firefox: `firefox.launch()`
- Se bloqueado por anti-bot → ativar stealth mode com puppeteer-extra-plugin-stealth
- Se timeout em networkidle → usar `domcontentloaded` como fallback

# Exemplo
Input: "Extraia o título da página example.com"
Output:
```typescript
import { chromium } from 'playwright';

const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();

await page.goto('https://example.com');
const title = await page.title();

await context.close();
await browser.close();
// { "task": "scrape", "url": "https://example.com", "status": "success", "data": { "title": "Example Domain" } }
```
