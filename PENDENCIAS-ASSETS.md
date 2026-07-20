# Pendências — Legitimus GreenTech

Atualizado após a rodada "Versão final dos ajustes do site" (reunião de 06/jul).
Os 17 slides de ajustes finais estão implementados, exceto os itens abaixo.

---

## 🖼️ 1. Pendente do cliente / Rafael

### 1.1 Foto do time gerada por IA (slide 2 — ajustes finais)
- **O que é:** montagem por IA (Eduardo + Elton + Ramalho + Patrícia, camisa social azul
  do logo, logo novo ao fundo) — Rafael está gerando e envia para aprovação do cliente.
- **Onde entra:** home, seção "Quem Somos" (hoje mostra o logo sobre fundo petróleo).
- **Como aplicar:** salvar como `public/team.png` e trocar o `<Image src="/logo-blue.png">`
  em `src/components/sections/about-preview.tsx`.

### 1.2 Logo Mapfre (slide 14 — ajustes finais)
- A lista de empresas certificadas da página Lixo Zero inclui a Mapfre, mas o logo
  **não veio** na pasta "Imagens Legitimus PNG-final".
- Hoje a faixa mostra as 9 certificadas com logo. Quando chegar: salvar
  `public/logos/mapfre.png` e adicionar `{ file: "mapfre", name: "Mapfre" }` em
  `certifiedClients` (`src/components/sections/lixo-zero-content.tsx`).

### 1.3 Vídeo real da plataforma (futuro — decidido em reunião)
- Quando a Evoluto estiver rodando, o cliente grava o vídeo e substituímos o
  infográfico simulado da seção "Etapas do Projeto" (home).

### 1.4 Prints do software ESG em alta (opcional)
- A galeria da página ESG usa os prints extraídos do PPTX (resolução média,
  com foto pessoal). Para trocar: sobrescrever `public/esg/*.jpg` com os mesmos nomes.

---

## ⚙️ 2. Infra (decididos em reunião — fora do código)

- **Redirecionamento do domínio antigo** ("Legitimus Ambiental" → legitimusgreentech.com.br)
  no painel da Hostinger + backup do site antigo no GitHub.
- **Verificação do domínio no Resend** (registros DNS na Hostinger) — sem isso o
  formulário de contato não entrega e-mail. Env vars já na Vercel
  (`RESEND_API_KEY`, `RESEND_FROM`).
- **Entrega de credenciais** (GitHub/Vercel/Resend) ao cliente ao final.

---

## ✅ Resolvido nesta rodada (não é mais pendência)

- Logo ILZB, Global Zero Waste em alta, Eco Box, selo Aço Inox, composteira,
  Linha Smart e Locação Verde — todos aplicados a partir da pasta
  "Imagens Legitimus PNG-final" (recortados de margens transparentes).
- 23 logos de clientes coloridos (incl. novo cliente Indústria Fox) no carrossel.
- Tabela comparativa Start ESG × ESG Performance, painel de indicadores ESG,
  infográfico do Portal do Cliente, serviços genéricos do Lixo Zero.
