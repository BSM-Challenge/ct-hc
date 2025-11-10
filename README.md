<p align="center">
  <img 
    src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1761431079/logo-ct-hc_vy3yit.png" 
    alt="Logo CT-HC" 
    width="180"
  />
</p>

<h2 align="center">🏥 CT-HC — Centro de Treinamento do Hospital das Clínicas</h2>

<p align="center">
  Plataforma digital desenvolvida para apoiar o <strong>IMREA-HCFMUSP</strong>, com o objetivo de 
  reduzir o absenteísmo e aumentar a adesão aos atendimentos de reabilitação, oferecendo uma 
  interface acessível e interativa, especialmente voltada para pacientes com baixa afinidade tecnológica.
</p>

---

## 🛠️ Tecnologias Utilizadas

| Categoria                   | Tecnologias                                                                    |
| --------------------------- | ------------------------------------------------------------------------------ |
| **Frontend**                | React • TypeScript • Tailwind CSS • React Router DOM                           |
| **Validação e Formulários** | React Hook Form • Zod                                                          |
| **Utilitários e UI**        | React Icons • React IMask • EmailJS                                            |
| **Build & Dev Tools**       | Vite • ESLint • TypeScript ESLint                                              |
| **Backend (consumo)**       | APIs desenvolvidas em **Java**                                    |


---

## 👥 Integrantes do Projeto  

<table>
  <tr>
    <td width="130">
      <img src="https://github.com/moisesBarsoti.png" width="120" style="border-radius: 50%;"/>
    </td>
    <td>
      <b>👨‍💻 Moisés Barsoti Andrade de Oliveira</b><br/>
      🆔 <b>RM:</b> 565049 &nbsp;&nbsp;|&nbsp;&nbsp; 🏫 <b>Turma:</b> 1TDSPG - FIAP <br/>
      💼 <b>Função:</b> Desenvolvimento Fullstack / DBA / IA
    </td>
  </tr>

  <tr>
    <td width="130">
      <img src="https://github.com/sSofia-s.png" width="120" style="border-radius: 50%;"/>
    </td>
    <td>
      <b>🎨 Sofia Siqueira Fontes</b><br/>
      🆔 <b>RM:</b> 563829 &nbsp;&nbsp;|&nbsp;&nbsp; 🏫 <b>Turma:</b> 1TDSPG - FIAP <br/>
      💼 <b>Função:</b> Design UX/UI e Validações de Forms
    </td>
  </tr>

  <tr>
    <td width="130">
      <img src="https://github.com/FeKiModesto.png" width="120" style="border-radius: 50%;"/>
    </td>
    <td>
      <b>⚙️ Felipe Kirschner Modesto</b><br/>
      🆔 <b>RM:</b> 561810 &nbsp;&nbsp;|&nbsp;&nbsp; 🏫 <b>Turma:</b> 1TDSPG - FIAP <br/>
      💼 <b>Função:</b> Integração com APIs Java
    </td>
  </tr>
</table>

---

### 🏠 Tela Inicial — CT-HC

A tela inicial dá acesso rápido às funcionalidades principais do CT-HC e demonstra os recursos de acessibilidade do portal HC criado pela nossa equipe e controles pensados para usuários com baixa familiaridade digital.

<p align="center">
  <img
    src="https://res.cloudinary.com/dtbgsboo5/image/upload/v1762722894/tela_cthc_yw857v.png"
    alt="Tela inicial do CT-HC"
    width="680"
  />
  <br/>
  <em>Tela inicial do CT-HC</em>
</p>

### 🌐 Tela Inicial — Portal HC

Essa tela é o início do nosso projeto de acessibilidade no Portal do Hospital das Clínicas

<p align="center">
  <img
    src="https://res.cloudinary.com/dtbgsboo5/image/upload/v1762731661/tela_portalHC_zojydc.png"
    alt="Tela inicial do Portal HC"
    width="680"
  />
  <br/>
  <em>Tela inicial do Portal HC</em>
</p>


---

## 📁 Estrutura de Pastas do Projeto

```bash
📦 ct-hc/
 ┣ 📂 public
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📂 CT-HC
 ┃ ┃ ┃ ┣ 📂 Card
 ┃ ┃ ┃ ┣ 📂 Footer
 ┃ ┃ ┃ ┣ 📂 Header
 ┃ ┃ ┃ ┣ 📂 Menu
 ┃ ┃ ┃ ┣ 📂 Section-Pitch
 ┃ ┃ ┃ ┣ 📂 Section-Sobre
 ┃ ┃ ┃ ┗ 📂 Section-Welcome
 ┃ ┃ ┣ 📂 HC
 ┃ ┃ ┃ ┣ 📂 ButtonAzul
 ┃ ┃ ┃ ┣ 📂 ButtonAzulAcao
 ┃ ┃ ┃ ┣ 📂 ButtonCinza
 ┃ ┃ ┃ ┣ 📂 Card-Acessibilidade
 ┃ ┃ ┃ ┣ 📂 Card-Treinamento
 ┃ ┃ ┃ ┣ 📂 CardExperiencia
 ┃ ┃ ┃ ┣ 📂 CardMaisRecursos
 ┃ ┃ ┃ ┣ 📂 ConteudoDinamico
 ┃ ┃ ┃ ┣ 📂 HeaderHC
 ┃ ┃ ┃ ┣ 📂 ModalAvaliacao
 ┃ ┃ ┃ ┣ 📂 ModalBase
 ┃ ┃ ┃ ┣ 📂 ModalTreinamentoFinalizado
 ┃ ┃ ┃ ┣ 📂 TitleHC
 ┃ ┃ ┃ ┗ 📂 TutorialHC
 ┃ ┣ 📂 context
 ┃ ┃ ┗ 📄 ContrasteContext.tsx
 ┃ ┣ 📂 data
 ┃ ┃ ┣ 📂 CT-HC
 ┃ ┃ ┃ ┗ 📄 faqData.ts
 ┃ ┃ ┣ 📂 HC
 ┃ ┃ ┃ ┣ 📄 avaliacoes.tsx
 ┃ ┃ ┃ ┣ 📄 iconsTreinamento.ts
 ┃ ┃ ┃ ┣ 📄 menuItem.tsx
 ┃ ┃ ┃ ┣ 📄 pdfs.ts
 ┃ ┃ ┃ ┗ 📄 perguntas.ts
 ┃ ┣ 📂 hooks
 ┃ ┃ ┗ 📄 useAuth.ts
 ┃ ┣ 📂 routes
 ┃ ┃ ┣ 📂 CT-HC
 ┃ ┃ ┃ ┣ 📂 Contato
 ┃ ┃ ┃ ┣ 📂 Error
 ┃ ┃ ┃ ┣ 📂 FAQ
 ┃ ┃ ┃ ┣ 📂 Home
 ┃ ┃ ┃ ┗ 📂 Integrantes
 ┃ ┃ ┣ 📂 HC
 ┃ ┃ ┃ ┣ 📂 Ajuda
 ┃ ┃ ┃ ┣ 📂 Apresentacao
 ┃ ┃ ┃ ┣ 📂 AvisosMobile
 ┃ ┃ ┃ ┣ 📂 CentroDeTreinamento
 ┃ ┃ ┃ ┣ 📂 CriarConta
 ┃ ┃ ┃ ┣ 📂 Documentos
 ┃ ┃ ┃ ┣ 📂 EntrarConta
 ┃ ┃ ┃ ┣ 📂 ErrorHC
 ┃ ┃ ┃ ┣ 📂 HomeHC
 ┃ ┃ ┃ ┣ 📂 MaisRecursos
 ┃ ┃ ┃ ┣ 📂 ManuaisPortal
 ┃ ┃ ┃ ┣ 📂 MenuMobile
 ┃ ┃ ┃ ┣ 📂 MeusResultados
 ┃ ┃ ┃ ┣ 📂 MinhasAgendas
 ┃ ┃ ┃ ┣ 📂 MinhasReceitas
 ┃ ┃ ┃ ┣ 📂 SolicitacaoExames
 ┃ ┃ ┃ ┗ 📂 Teleconsulta
 ┃ ┣ 📂 services
 ┃ ┃ ┗ 📄 api-java.ts
 ┃ ┣ 📂 types
 ┃ ┃ ┣ 📂 CT-HC
 ┃ ┃ ┃ ┣ 📄 faq.ts
 ┃ ┃ ┃ ┗ 📄 integrante.ts
 ┃ ┃ ┣ 📂 HC
 ┃ ┃ ┃ ┣ 📄 buttonAzul.ts
 ┃ ┃ ┃ ┣ 📄 buttonCinza.ts
 ┃ ┃ ┃ ┣ 📄 card-acessibilidade.ts
 ┃ ┃ ┃ ┣ 📄 cardMaisRecursos.ts
 ┃ ┃ ┃ ┣ 📄 conteudoDinamico.ts
 ┃ ┃ ┃ ┣ 📄 iconTreinamento.ts
 ┃ ┃ ┃ ┣ 📄 modalBase.ts
 ┃ ┃ ┃ ┣ 📄 pdfs.ts
 ┃ ┃ ┃ ┣ 📄 perguntas.ts
 ┃ ┃ ┃ ┗ 📄 title.ts
 ┃ ┣ 📄 App.tsx
 ┃ ┣ 📄 AppHC.tsx
 ┃ ┣ 📄 env.d.ts
 ┃ ┣ 📄 globals.css
 ┃ ┣ 📄 main.tsx
 ┣ 📄 .env
 ┣ 📄 .gitignore
 ┣ 📄 eslint.config.js
 ┣ 📄 index.html
 ┣ 📄 package-lock.json
 ┣ 📄 package.json
 ┣ 📄 README.md
 ┣ 📄 tsconfig.app.json
 ┣ 📄 tsconfig.json
 ┣ 📄 tsconfig.node.json
 ┗ 📄 vite.config.ts

```
---

# ▶️ Como Executar o Projeto

Siga os passos abaixo para executar o projeto em sua máquina local:

### ⚠️ Pré-requisitos

- Navegador atualizado (Google Chrome, Firefox, Edge, etc.);
- Editor de código (opcional, ex: VS Code);

### ✅ Passos para execução

1. **Clone o repositório**  
   Se ainda não tiver o repositório localmente, execute:

   ```bash
   git clone https://github.com/BSM-Challenge/ct-hc.git
   ```
   Após clonar, entre na parta do projeto:
   ```bash
   cd ct-hc
   ```
   Abra a pasta em seu editor de código.
<br/>

2. **Instale os pacotes necessários**  
   No terminal, execute o comando:

   ```bash
   npm install ou npm i
   ```
<br/>

3. **Visualize o projeto**  
   Para visualizar o projeto no seu navegador, execute o comando no terminal:

   ```bash
   npm run dev
   ```
   Para a visualização em dispositivos móveis, execute o seguinte comando no terminal:

   ```bash
   npm run dev -- --host
   ```
   Digite o link no navegador do seu celular, tablet, etc.

---

## 🌐 Acesse o Projeto Online

Você pode visualizar o projeto acessando o link abaixo:

🔗 [Clique aqui para acessar o projeto no GitHub!](https://github.com/BSM-Challenge/ct-hc)

---

## 🎥 Veja um vídeo curto sobre o projeto:

Assista ao nosso vídeo no youtube acessando o link abaixo:

🔗 [Clique aqui para visualizar nosso vídeo no Youtube!](https://www.youtube.com/watch?v=4v42aD2maU0)

---
