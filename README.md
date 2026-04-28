# Handoff: Omnitech Landing Page

## Overview
Redesign completo da landing page do projeto **Omnitech** — empresa angolana focada em desenvolvimento de software (websites, e-commerce, sistemas à medida, apps mobile) e marketing digital. A página é bilingue (PT/EN) com suporte a dark mode.

## Sobre os Ficheiros de Design
Os ficheiros neste pacote são **referências de design criadas em HTML/React** — protótipos que mostram o aspeto visual e o comportamento pretendido. A tarefa é **recriar estes designs no projeto Angular existente**, usando as bibliotecas já instaladas (PrimeNG + TailwindCSS), substituindo os ficheiros indicados abaixo.

## Fidelidade
**Alta fidelidade (hifi)** — os protótipos têm cores, tipografia, espaçamentos e interações finais. O objetivo é recriar o UI com pixel fidelity, usando os componentes PrimeNG existentes.

---

## Ficheiros a Substituir

| Ficheiro do handoff | Substituir em |
|---|---|
| `i18n.service.ts` | `src/app/services/i18n.service.ts` |
| `landing.component.ts` | `src/app/pages/landing/landing.component.ts` |
| `landing.component.html` | `src/app/pages/landing/landing.component.html` |

> **Nota:** Copiar diretamente. Os paths de imports já estão corretos.

---

## Secções / Views

### 1. Navbar (fixo, topo)
- Logo à esquerda (azul em light, branco em dark)
- Links de navegação: Início · Funcionalidades · Portfólio · Contacte-nos
- Controlos à direita: toggle dark mode, toggle PT/EN, botão CTA "Começar"
- Ao fazer scroll: `backdrop-blur`, fundo semi-transparente, border-bottom visível
- Mobile: menu hamburger com `pStyleClass`

### 2. Hero (`#home`)
- **Layout:** 2 colunas (copy | mockup), full-height
- **Esquerda:** badge, H1 com span colorido, subtítulo, pills de serviços, 2 CTAs, barra de estatísticas (120+, 8 Anos, 98%, 24h)
- **Direita:** mockup de browser + card de estatísticas
- **Background:** gradiente radial com `var(--p-primary-300)`
- **Animação:** `[@fadeSlide]="lang()"` em toda a coluna esquerda

### 3. Funcionalidades (`#features`)
- Background: `bg-surface-50 dark:bg-surface-800`
- Grid 3 colunas, 6 cards (todos Software)
- Cada card: ícone PrimeNG, título, descrição
- Hover: `hover:shadow-lg hover:-translate-y-1`

**Serviços:**
1. Websites & Landing Pages — `pi pi-globe`
2. E-commerce — `pi pi-shopping-cart`
3. Sistemas à Medida — `pi pi-code`
4. Marketing Digital & SEO — `pi pi-chart-bar`
5. Aplicações Mobile — `pi pi-mobile`
6. Segurança & Manutenção — `pi pi-shield`

### 4. Portfólio (`#portfolio`)
- Background: `bg-surface-0 dark:bg-surface-900`
- **Tabs filtrável:** Todos | Websites | Sistemas | Mobile
  - Estado em `activePortfolioTab` (signal)
  - Animação `[@fadeSlide]="activePortfolioTab()"` na grelha
- Grid 3 colunas, 6 projetos
- Cada card: header colorido com ícone, tag badge, título, descrição, link "Ver projeto"
- Ícones por tipo: `pi-globe` (Websites), `pi-server` (Sistemas), `pi-mobile` (Mobile)

**Projetos:**
| Tipo | Tag | Cor |
|---|---|---|
| Websites | E-commerce | `#3B82F6` |
| Sistemas | ERP | `#10B981` |
| Websites | Website | `#EC4899` |
| Mobile | App Mobile | `#8B5CF6` |
| Sistemas | SaaS | `#F59E0B` |
| Websites | Landing Page | `#14B8A6` |

### 5. Contacte-nos (`#contact`)
- Background: `bg-surface-50 dark:bg-surface-800`
- **Layout:** 2/5 info + 3/5 formulário
- **Info:** cards com localização, telefone, e-mail + ícones de redes sociais
- **Formulário:** nome, e-mail, assunto (select), mensagem (textarea), botão submit
  - Estados: `idle` → `sending` → `sent` (botão fica verde com ✓)
  - Integrar com EmailJS, Formspree ou API própria no método `submitContact()`

### 6. Footer
- Background: `bg-surface-900 dark:bg-surface-950`
- Logo branco + descrição, 2 colunas de links (Serviços, Empresa)
- Copyright + links legais

---

## Interações & Comportamento

| Ação | Comportamento |
|---|---|
| Scroll | Navbar muda de transparente para `backdrop-blur` com border |
| Toggle dark mode | `document.documentElement.classList.toggle('app-dark')` |
| Toggle PT/EN | `i18n.toggle()` + reset do tab do portfólio para 0 |
| Tab portfólio | Filtra `portfolioItems` por `type`, anima com `fadeSlide` |
| Submit formulário | Simula envio, muda estado para `sent`, botão fica verde |
| Hover nos cards | `translateY(-4px)` + `box-shadow` aumentado |

---

## Design Tokens

| Token | Valor |
|---|---|
| Primary | `var(--p-primary-500)` (azul PrimeNG, ~`#3B82F6`) |
| Radius cards | `rounded-2xl` (16px) |
| Radius pills | `rounded-full` |
| Shadow card | `shadow` → `shadow-lg` no hover |
| Tipografia H1 | `text-5xl lg:text-6xl font-extrabold` |
| Tipografia labels | `text-xs font-bold uppercase tracking-widest` |
| Espaçamento secções | `py-16 lg:py-24` |

---

## Assets

| Ficheiro | Localização | Uso |
|---|---|---|
| `logo_blue_transparent.png` | `src/assets/` | Logo em light mode |
| `logo_white_transparent.png` | `src/assets/` | Logo em dark mode e footer |
| `favicon_32.png` | `src/assets/` | Mockup do browser no hero |

---

## Dependências Angular Necessárias

Já instaladas no projeto:
- `primeng` — ButtonModule, RippleModule, StyleClassModule, DividerModule
- `primeicons`
- `tailwindcss`
- `@angular/animations` — `fadeSlide` trigger (definido no `.ts`)

Adicionar ao `landing.component.ts` se não existir:
```ts
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
```

---

## Ficheiro de Referência Visual
O protótipo HTML interativo completo encontra-se em:
**`Omnitech Landing Page.html`** (na raiz do projeto de design)

Abre este ficheiro num browser para ver o comportamento exato esperado, incluindo dark mode, PT/EN e filtros do portfólio.
