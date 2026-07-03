# Pendências de Assets — Legitimus GreenTech

Branch: `feat/alteracoes-cliente-v3`

Todas as alterações dos briefings **Site Legitimus v2.pptx** e **Site Legitimus v3.pptx** já estão
implementadas em código. O que resta abaixo depende **apenas de assets do cliente** ou de uma
ação operacional. Nada mais precisa de desenvolvimento.

Onde falta um asset, a tela mostra um **placeholder tracejado bem visível** (texto `NÃO TEM ...`)
para não passar despercebido em produção.

---

## 🖼️ 1. Assets faltando (aparecem como placeholder na tela)

### 1.1 Logo oficial do ILZB — `NÃO TEM LOGO ILZB`
- **Onde aparece:** página `/lixo-zero`, seção final "Metodologias e credenciamentos"
- **Pedido em:** v3, slides 13 e 17
- **O que fazer:** salvar o logo em `public/lixo-zero/ilzb.png` e trocar o bloco placeholder
  por um `<Image>` em `src/components/sections/lixo-zero-content.tsx` (procurar por `NÃO TEM LOGO ILZB`)

### 1.2 Caixa Eco Box sem fundo + Selo Aço Inox — `NÃO TEM IMAGEM ECO BOX`
- **Onde aparece:** página `/maquinas-equipamentos`, produto 1 (Caixa Separadora Eco Box)
- **Pedido em:** v3, slides 4 e 5 (fonte: canva.link/panfleto-caixa-e-composteira)
- **O que fazer:** salvar a caixa sem fundo em `public/equipamentos/eco-box.png` e o selo em
  `public/equipamentos/selo-aco-inox.png`; trocar o placeholder em
  `src/components/sections/equipamentos-content.tsx` (procurar por `NÃO TEM IMAGEM ECO BOX`)

---

## 🔄 2. Upgrades (já funcionam com versão temporária)

Estes já estão na tela com uma versão provisória extraída do PPTX. Para trocar pela versão
definitiva, **basta sobrescrever o arquivo com o mesmo nome** — a página atualiza sozinha.

| Asset | Arquivo a sobrescrever | Observação da versão atual |
|---|---|---|
| Prints do software ESG | `public/esg/login.jpg` · `dashboard.jpg` · `materialidade.jpg` · `formularios.jpg` | Resolução média; têm foto pessoal e `localhost` visível |
| Logo Global Zero Waste | `public/lixo-zero/global-zero-waste.png` | Pequeno (327×133) e com leve fundo verde |
| Foto do time | `public/logo-blue.png` está sendo usado como provisório na home | Trocar pela foto real do time (ajustar `src/components/sections/about-preview.tsx`) |

---

## ⚙️ 3. Operacional (não é código)

### 3.1 Ativar o FormSubmit
- O formulário de `/contato` envia via **FormSubmit.co** para `contato@legitimusgreentech.com.br`.
- Na **primeira submissão**, o FormSubmit envia um e-mail de confirmação para essa caixa.
  **Alguém precisa abrir esse e-mail e clicar em "Activate"** — sem isso, os envios não chegam.

---

## ✅ Referência rápida — assets já entregues (do PPTX)

Estes já estão no projeto e funcionando:
- Logos dos clientes (carrossel da home) — `public/logos/` (22 empresas)
- Fotos dos equipamentos — Composteira, Linha Smart, Locação Verde — `public/equipamentos/`
- Conteúdo completo da Metodologia Global Zero Waste (SGLZ) — `/lixo-zero`
- Prints do software ESG em galeria interativa — `/esg`
