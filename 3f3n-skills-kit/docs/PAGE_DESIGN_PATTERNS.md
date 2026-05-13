# PAGE_DESIGN_PATTERNS.md
## Biblioteca de Padrões Visuais — 3F3N Pages

> Este documento é uma referência de padrões práticos para uso pelo `/page-create` antes da implementação.
> Consultar junto ao `DESIGN_DIRECTION.md` antes de escrever qualquer código.

---

## Regras Visuais 3F3N (não negociáveis)

1. **Clareza antes de estética** — se o usuário não entende o que é em 5 segundos, o design falhou.
2. **CTA sempre óbvio** — cor, tamanho e posição do botão nunca devem gerar dúvida.
3. **Mobile first** — layout pensado para 390px primeiro, depois escalado para desktop.
4. **Evitar cards repetitivos demais** — se há mais de 4 cards iguais, quebrar em outra hierarquia ou alternar tamanho.
5. **Alternar ritmo entre seções** — nunca duas seções consecutivas com mesma densidade e layout.
6. **Usar prova demonstrável se não houver depoimento** — print de resultado, número verificável, afirmação de mecanismo.
7. **Não inventar números** — sem "10.000 alunos", "97% de aprovação" sem fonte real.
8. **Não usar dashboard visual quando a página é de venda ou captura** — dashboard é UI de produto, não de conversão.
9. **Aparência premium sem enfeite inútil** — sem gradientes decorativos, sem ícones genéricos de banco de imagens, sem animações sem propósito.

---

## Padrões por Componente

---

### 1. Hero — Landing Page Premium

**Quando usar:**
Página de produto, serviço, empresa ou ferramenta onde o objetivo é apresentar e gerar interesse antes do CTA.

**Quando não usar:**
Página de captura (formulário deve estar mais próximo ao topo). Página de venda onde a headline de dor deve dominar.

**Estrutura visual recomendada:**
```
[ BADGE OPCIONAL — ex: "Novo" / "Acesso antecipado" ]
[ HEADLINE — grande, 2 a 3 linhas, promessa clara ]
[ SUBHEADLINE — 1 a 2 linhas, explicação direta do mecanismo ]
[ CTA PRIMÁRIO ] [ CTA SECUNDÁRIO OPCIONAL ]
[ PROVA RÁPIDA — ex: "Usado por X pessoas" ou logo clientes ]
[ VISUAL — mockup do produto, screenshot real ou ilustração ]
```

**Componentes sugeridos:**
- Tipografia display (48–72px desktop, 32–40px mobile)
- Badge com borda sutil ou background leve
- Botão primário com cor de alto contraste
- Imagem ou mockup alinhado à direita em desktop, abaixo em mobile
- Fundo: branco, quase-preto, ou gradiente muito sutil

**Erros comuns:**
- Headline genérica ("Bem-vindo ao nosso sistema")
- CTA fraco ("Saiba mais")
- Visual sem relação com o produto (foto de stock de pessoas sorrindo)
- Subheadline longa demais (mais de 3 linhas)
- Sem nenhum elemento de prova ou credibilidade no hero

**Exemplo de layout em texto:**
```
[badge: Lançamento 2026]

Headline que entrega
a promessa em até
três linhas máximo

Subheadline que explica como funciona
em uma frase direta e sem jargão.

[Botão: Começar agora →]  [Ver como funciona]

✓ Sem contrato  ✓ Resultado em X dias  ✓ Garantia de Y

                    [Mockup / Screenshot]
```

---

### 2. Hero — Página de Captura

**Quando usar:**
Geração de lead com entrega de material gratuito (checklist, ebook, aula, template). Foco total na troca de valor.

**Quando não usar:**
Quando não há lead magnet claro. Quando o produto precisa de mais contexto antes de pedir contato.

**Estrutura visual recomendada:**
```
[ HEADLINE — o que a pessoa vai ganhar, não o que você oferece ]
[ SUBHEADLINE — para quem é e o resultado esperado ]
[ FORMULÁRIO — nome + email no máximo. Botão com CTA específico ]
[ PROVA DE REDUÇÃO DE RISCO — privacidade, sem spam, gratuito ]
[ MOCKUP DO MATERIAL — capa do ebook, prévia do checklist, etc. ]
```

**Componentes sugeridos:**
- Layout em duas colunas no desktop (texto + form / texto + mockup + form abaixo)
- Formulário com no máximo 2 campos (nome e email) acima da dobra
- Botão com verbo de ação específico ("Quero o checklist", "Enviar meu acesso")
- Miniatura visual do lead magnet (capa simples, não precisa ser perfeita)
- Nota de privacidade em texto pequeno abaixo do botão

**Erros comuns:**
- Formulário com muitos campos (telefone, empresa, cargo — reduz conversão)
- Headline falando sobre a empresa, não sobre o ganho do usuário
- Sem visual do material (o lead magnet parece abstrato)
- CTA do botão genérico ("Enviar", "Cadastrar")
- Ausência de redução de risco ("sem spam")

**Exemplo de layout em texto:**
```
Como [resultado específico]
em [tempo ou contexto]

Para [perfil do público] que quer [objetivo]
sem [objeção principal].

[ Nome          ]
[ E-mail        ]
[ Quero acesso gratuito → ]

🔒 Seus dados estão seguros. Sem spam.

        [Mockup: capa do material]
```

---

### 3. Hero — Página de Venda Low-Ticket

**Quando usar:**
Produto de entrada, infoproduto ou serviço com preço até R$500. Foco em dor, mecanismo e CTA rápido.

**Quando não usar:**
Produto premium onde o usuário precisa de mais contexto e confiança antes de ver o preço.

**Estrutura visual recomendada:**
```
[ HEADLINE DE DOR OU PROMESSA — direta, sem metáfora ]
[ SUBHEADLINE — mecanismo em uma frase ]
[ CTA — ir direto ao ponto, preço pode aparecer aqui ]
[ ELEMENTO DE URGÊNCIA OU ESCASSEZ — se real ]
[ IMAGEM DO PRODUTO — capa, mockup, screenshot ]
```

**Componentes sugeridos:**
- Headline pesada (56–72px desktop), sem subtileza
- Subheadline com mecanismo claro
- Botão com preço ou próximo passo direto ("Garantir por R$X")
- Badge de garantia próximo ao CTA
- Fundo pode ser mais expressivo (cor sólida escura, gradiente controlado)

**Erros comuns:**
- Headline que não diz nada concreto ("Transforme sua vida")
- Ausência de preço ou CTA acima da dobra
- Visual de stock sem relação com o produto
- Urgência falsa ("Últimas vagas" sem evidência)
- Texto de hero longo demais — em venda low-ticket o scroll deve vir do conteúdo da página, não do hero

**Exemplo de layout em texto:**
```
[Chega de fazer X sem resultado]

O [nome do produto] é o único método que
[mecanismo diferenciador] para [perfil do público].

[ Garantir acesso por R$XX → ]

★ Garantia de 7 dias  |  Acesso imediato  |  [Bônus se houver]

        [Capa / mockup do produto]
```

---

### 4. Bloco de Prova — Sem Depoimento

**Quando usar:**
Produto novo sem base de clientes ainda. Quando não há depoimentos reais disponíveis.

**Quando não usar:**
Quando há depoimentos reais — prefira o padrão 5.

**Estrutura visual recomendada:**
```
[ TÍTULO DA SEÇÃO — "Por que funciona" / "A base do método" ]
[ RESULTADO DEMONSTRÁVEL — print, print de resultado, dado público ]
[ MECANISMO EXPLICADO — como o resultado é gerado, sem exagero ]
[ ANALOGIA OU COMPARAÇÃO — se ajudar a entender ]
```

**Componentes sugeridos:**
- Citação de fonte externa verificável (artigo, estudo, dado público)
- Screenshot de resultado próprio (não de cliente) com contexto claro
- Diagrama simples de causa → efeito
- Ícones representando pilares do método (sem ser decorativo)

**Erros comuns:**
- Inventar números ou resultados ("98% dos usuários...")
- Usar tom de depoimento sem ser depoimento ("Todo mundo que usou amou")
- Seção vazia ou genérica demais ("Nosso método é aprovado")
- Falta de especificidade — sem mecanismo real explicado

**Exemplo de layout em texto:**
```
Por que [produto] funciona diferente

[Pilar 1]          [Pilar 2]          [Pilar 3]
Título curto       Título curto       Título curto
Explicação em      Explicação em      Explicação em
2 linhas.          2 linhas.          2 linhas.

[Dado verificável ou print com legenda clara]
```

---

### 5. Bloco de Prova — Com Números Reais

**Quando usar:**
Quando há métricas reais verificáveis: alunos, receita gerada, tempo de resultado, NPS, etc.

**Quando não usar:**
Quando os números não são verificáveis ou foram estimados. Nunca inventar.

**Estrutura visual recomendada:**
```
[ NÚMEROS EM DESTAQUE — grandes, 3 a 4 métricas máximo ]
[ LEGENDA DE CADA NÚMERO — o que significa, de onde vem ]
[ CONTEXTO OU PROVA — como o número foi gerado ]
```

**Componentes sugeridos:**
- Grid de 3–4 colunas com número grande + legenda curta
- Asterisco e nota de rodapé se o número tiver contexto específico
- Fonte ou período de apuração em texto menor abaixo

**Erros comuns:**
- Número sem legenda ("10.000" — 10.000 o quê?)
- Mais de 5 métricas — dilui atenção
- Números redondos sem contexto ("100% de satisfação")
- Seção visualmente idêntica ao bloco de benefícios

**Exemplo de layout em texto:**
```
        [+4.200]          [R$1,2M]          [93%]
     alunos formados   em vendas geradas  concluem o curso*

* Base: alunos ativos entre jan/2024 e mar/2026.
```

---

### 6. Bloco de Benefícios em Cards

**Quando usar:**
Listar o que o produto entrega, o que o usuário ganha, ou o que está incluído.

**Quando não usar:**
Quando há menos de 3 itens (usar lista simples). Quando os benefícios são muito similares entre si (usar lista).

**Estrutura visual recomendada:**
```
[ TÍTULO DA SEÇÃO ]
[ GRADE DE CARDS — 3 colunas desktop, 1–2 mobile ]
[ Cada card: ícone + título + descrição curta ]
```

**Componentes sugeridos:**
- Cards com fundo levemente diferente do background (não glassmorphism pesado)
- Ícone SVG simples e consistente (mesmo estilo em todos)
- Título do card em 1 linha
- Descrição em 2–3 linhas máximo
- Sem borda dupla ou sombra pesada

**Erros comuns:**
- Mais de 6 cards em grade uniforme (monotonia visual)
- Ícones de estilos diferentes misturados
- Descrição de card longa demais (parece parágrafos)
- Todos os cards com exatamente o mesmo tamanho e peso — sem hierarquia
- Seção sem título de contexto (o usuário não sabe o que está lendo)

**Exemplo de layout em texto:**
```
O que você recebe

[ícone]              [ícone]              [ícone]
Benefício 1          Benefício 2          Benefício 3
Descrição curta      Descrição curta      Descrição curta
em duas linhas.      em duas linhas.      em duas linhas.

[ícone]              [ícone]              [ícone]
Benefício 4          Benefício 5          Benefício 6
Descrição curta      Descrição curta      Descrição curta
```

---

### 7. Bloco "Como Funciona"

**Quando usar:**
Sempre que o produto ou serviço tem um processo, método ou sequência de passos.

**Quando não usar:**
Quando o funcionamento é trivial e auto-explicativo (ex: "faça o download").

**Estrutura visual recomendada:**
```
[ TÍTULO — "Como funciona" / "O método" / "Em 3 passos" ]
[ PASSOS NUMERADOS — linha do tempo horizontal ou vertical ]
[ Cada passo: número + título + descrição curta ]
[ CTA OPCIONAL no final da seção ]
```

**Componentes sugeridos:**
- Linha conectando os passos (horizontal em desktop, vertical em mobile)
- Número em destaque visual (círculo, tipografia grande)
- Título do passo em 1 linha
- Descrição em 2–3 linhas
- Alternativa: layout em alternância esquerda/direita com visual do passo

**Erros comuns:**
- Mais de 6 passos (o processo parece complexo demais)
- Passos sem consequência clara entre si (parecem itens soltos)
- Ausência de progressão visual (o usuário não percebe que é uma sequência)
- Descrição técnica demais sem benefício claro

**Exemplo de layout em texto:**
```
Em 3 passos simples

  [1] ————————— [2] ————————— [3]

Passo 1           Passo 2           Passo 3
Acesse e          Configure em      Receba o
configure.        5 minutos.        resultado.

Descrição         Descrição         Descrição
em 2 linhas.      em 2 linhas.      em 2 linhas.
```

---

### 8. Bloco "Para Quem É"

**Quando usar:**
Sempre. Qualificação do público reduz fricção e aumenta identificação.

**Quando não usar:**
Nunca omitir. Se não souber o público, usar `[PUBLICO_PENDENTE]`.

**Estrutura visual recomendada:**
```
[ TÍTULO — "Para quem é" ou "Feito para você se..." ]
[ LISTA DE PERFIS com marcador visual positivo ]
[ OPCIONAL: "Para quem NÃO é" com marcador neutro ]
```

**Componentes sugeridos:**
- Ícone de check ou marcador personalizado (não emoji)
- Cada item em 1–2 linhas descrevendo situação real do público
- Fundo diferenciado da seção anterior para marcar ritmo
- Opcional: dois blocos lado a lado (para quem é / para quem não é)

**Erros comuns:**
- Público genérico ("para qualquer pessoa que queira crescer")
- Itens de lista longos demais
- Ausência desta seção — faz o usuário duvidar se o produto é para ele
- Seção "para quem não é" agressiva ou que descarta perfis sem tato

**Exemplo de layout em texto:**
```
Para quem é

✓ Você é [perfil] e quer [objetivo]
✓ Já tentou [tentativa anterior] e não teve resultado
✓ Quer [resultado] sem precisar de [obstáculo]
✓ Está começando em [contexto] e quer um ponto de partida sólido
```

---

### 9. Formulário de Captura

**Quando usar:**
Páginas de captura. Pode também aparecer no final de landing pages como CTA secundário.

**Quando não usar:**
Em meio à página de venda (interrompe o fluxo de persuasão).

**Estrutura visual recomendada:**
```
[ TÍTULO — reforça o benefício de preencher ]
[ CAMPO NOME (opcional) ]
[ CAMPO EMAIL (obrigatório) ]
[ BOTÃO CTA — verbo de ação + benefício ]
[ NOTA DE PRIVACIDADE ]
```

**Componentes sugeridos:**
- Formulário dentro de um card ou fundo diferenciado
- No máximo 2 campos (nome + email); nunca pedir telefone sem necessidade
- Botão com largura total do formulário, cor de alto contraste
- Texto do botão específico ("Quero o checklist gratuito")
- Nota de privacidade em tipografia menor, cinza

**Erros comuns:**
- Muitos campos (telefone, empresa, cargo) sem justificativa
- Botão com texto genérico ("Enviar" ou "Cadastrar")
- Formulário sem contexto visual — solto na página sem card ou contêiner
- Ausência de nota de privacidade
- Campo de confirmação de email desnecessário

**Exemplo de layout em texto:**
```
┌─────────────────────────────────┐
│  Receba agora gratuitamente     │
│                                 │
│  [ Nome                      ]  │
│  [ E-mail                    ]  │
│                                 │
│  [ Quero meu acesso grátis → ]  │
│                                 │
│  🔒 Sem spam. Cancele quando    │
│     quiser.                     │
└─────────────────────────────────┘
```

---

### 10. CTA Final

**Quando usar:**
Sempre. Toda página deve terminar com um CTA claro antes do rodapé.

**Quando não usar:**
Nunca omitir.

**Estrutura visual recomendada:**
```
[ SEÇÃO COM FUNDO DIFERENCIADO — cor sólida, gradiente suave ]
[ HEADLINE CURTA — reforço da promessa principal ]
[ SUBHEADLINE OPCIONAL — redução de risco ou urgência real ]
[ BOTÃO CTA PRIMÁRIO ]
[ GARANTIA OU NOTA DE SEGURANÇA ]
```

**Componentes sugeridos:**
- Seção com fundo em cor de destaque ou dark para quebrar ritmo
- Headline em 1–2 linhas, sem repetir o hero literalmente
- Botão grande, centralizado
- Elemento de confiança abaixo do botão (garantia, segurança, acesso imediato)

**Erros comuns:**
- CTA final idêntico ao hero (sem reforço de valor ou urgência)
- Botão pequeno ou sem destaque visual
- Ausência de elemento de confiança (o usuário hesita no momento da decisão)
- Seção de fundo igual à anterior — sem quebra visual

**Exemplo de layout em texto:**
```
╔═════════════════════════════════════╗
║                                     ║
║   Pronto para [resultado principal]?║
║                                     ║
║   Comece hoje. Sem compromisso.     ║
║                                     ║
║   [ Garantir meu acesso → ]         ║
║                                     ║
║   ★ Garantia de 7 dias  |           ║
║     Acesso imediato                 ║
║                                     ║
╚═════════════════════════════════════╝
```

---

### 11. FAQ

**Quando usar:**
Sempre. FAQ resolve objeções sem precisar de argumento direto de venda.

**Quando não usar:**
Nunca omitir. Em páginas de captura, pode ser mais curto (3–4 perguntas).

**Estrutura visual recomendada:**
```
[ TÍTULO — "Perguntas frequentes" / "Ainda com dúvidas?" ]
[ ACORDEÃO ou LISTA de perguntas e respostas ]
[ CTA OPCIONAL AO FINAL DO FAQ ]
```

**Componentes sugeridos:**
- Acordeão (expand/collapse) para FAQs com mais de 5 perguntas
- Lista estática para FAQs com até 4 perguntas
- Perguntas em linguagem do público, não da empresa
- Respostas diretas, sem rodeios

**Perguntas obrigatórias para sales_page_low_ticket:**
- Como funciona o acesso?
- Qual é a garantia?
- Para quem é indicado?
- Em quanto tempo vejo resultado?
- Como é a forma de pagamento?

**Erros comuns:**
- Perguntas que ninguém faria ("O que é o [nome do produto]?" — isso deve estar na página)
- Respostas evasivas que não resolvem a objeção
- FAQ sem CTA depois (é um dos últimos pontos de conversão antes do rodapé)
- Mais de 10 perguntas — dilui atenção, mover extras para central de ajuda

**Exemplo de layout em texto:**
```
Perguntas frequentes

▼ Como funciona o acesso?
  Assim que o pagamento é confirmado, você recebe
  o link no e-mail em até [tempo].

▼ Tem garantia?
  Sim. [X] dias de garantia incondicional.
  Peça reembolso sem burocracia.

▼ [Próxima pergunta]
  [Resposta direta]
```

---

### 12. Rodapé

**Quando usar:**
Sempre. Mesmo em landing pages de captura, o rodapé mínimo é obrigatório.

**Quando não usar:**
Nunca omitir o rodapé mínimo (CNPJ, privacidade, copyright).

**Estrutura visual recomendada:**

**Rodapé mínimo (capture_page):**
```
[ Logo ou nome ] — [ Política de privacidade ] — [ © Ano ]
```

**Rodapé padrão (landing_page / sales_page):**
```
[ Logo ]  [ Links: Sobre, Contato, Termos, Privacidade ]
[ CNPJ / razão social ]  [ © Ano — Todos os direitos reservados ]
```

**Componentes sugeridos:**
- Fundo dark ou cinza neutro para contraste com o corpo da página
- Tipografia pequena (12–14px), sem destaque
- Links mínimos obrigatórios: Política de Privacidade e Termos de Uso
- CNPJ se o produto for vendido para consumidor final (obrigatório legalmente)

**Erros comuns:**
- Rodapé sem informações legais (CNPJ, política de privacidade)
- Rodapé com muitos links que distraem do CTA da página
- Rodapé com mesmo peso visual do restante da página
- Ausência de copyright

**Exemplo de layout em texto:**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[Logo]         Sobre  Contato  Privacidade  Termos

CNPJ: XX.XXX.XXX/XXXX-XX — Razão Social Ltda.
© 2026 — Todos os direitos reservados.
```

---

## Referência Rápida — Erros que nunca devem aparecer

| Erro | Motivo |
|---|---|
| Estatística inventada | Quebra confiança se descoberta |
| Depoimento fictício | Proibido e antiético |
| Dashboard em página de venda | Confunde o visitante |
| CTA genérico ("Saiba mais") | Não gera ação |
| Headline sem promessa | Não qualifica nem converte |
| Cards todos iguais sem hierarquia | Monotonia, nada se destaca |
| Seções sem ritmo alternado | Página parece lista, não produto |
| Formulário com muitos campos | Reduz conversão significativamente |
| Rodapé sem dados legais | Risco jurídico e de credibilidade |
| Animações pesadas | Penaliza performance e UX mobile |

---

*Versão: 1.0 — 2026-05-06*
*Uso interno 3F3N — referência para /page-create*
