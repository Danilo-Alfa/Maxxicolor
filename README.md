# Maxxi Color — Landing Page

Landing page de alta conversão para a Maxxi Color Tintas. Todos os CTAs
direcionam para o WhatsApp com mensagem pré-preenchida.

## Stack

- Next.js (App Router) com `output: export` — gera site 100% estático
- React 19 + TypeScript
- Tailwind CSS 4
- Fontes self-hosted via `next/font` (Sora + Instrument Sans)
- Animações em CSS puro + IntersectionObserver (sem bibliotecas)

## Desenvolvimento

```bash
npm install
npm run dev        # http://localhost:3000
```

## Publicação na Hostinger

```bash
npm run build
```

O build gera a pasta `out/` com todos os arquivos estáticos (incluindo o
`.htaccess` com cache e compressão). Basta enviar **o conteúdo** da pasta
`out/` para a pasta `public_html/` da Hostinger (via FTP ou Gerenciador de
Arquivos).

## Onde editar o conteúdo

| O quê | Arquivo |
|---|---|
| Telefone, WhatsApp, endereço, horários, redes sociais | `src/config/site.ts` |
| Produtos em destaque (e fotos reais) | `src/data/products.ts` |
| Categorias | `src/data/categories.ts` |
| Diferenciais | `src/data/features.ts` |
| Números da empresa | `src/data/stats.ts` |
| Depoimentos | `src/data/testimonials.ts` |
| Perguntas frequentes | `src/data/faq.ts` |

### Fotos reais dos produtos

1. Coloque a foto em `public/produtos/` (ideal: WebP, ~800×600, < 100 KB).
2. Em `src/data/products.ts`, preencha o campo `image` do produto:
   `image: "/produtos/nome-do-arquivo.webp"`.

## Pendências antes de publicar (TODOs)

Busque por `TODO` no código. Principais:

- Confirmar domínio definitivo em `src/config/site.ts` (afeta SEO/sitemap)
- Endereço real da loja, e-mail e horários
- Números reais da empresa (`src/data/stats.ts`)
- Depoimentos reais de clientes
- Perfis reais de redes sociais
