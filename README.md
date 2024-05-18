# Projeto de Sistema de Autenticação e Perfil de Usuário

Este projeto foi desenvolvido como parte de um processo seletivo. Ele consiste em uma aplicação web simples que inclui uma página de login e uma página de informações do perfil do usuário. A aplicação foi construída utilizando ReactJs, com Vite, typescript, taiwindcss, entre outras bibliotecas.

## Funcionalidades

- **Página de Login**: Permite que os usuários se autentiquem utilizando e-mail e senha.
- **Página de Perfil do Usuário**: Exibe informações do perfil do usuário autenticado: nome, email e foto do perfil.

## Tecnologias Utilizadas

- **Frontend**:
  - ReactJs + Vite
  - Typescript
  - Taiwindcss
  - React-Query / tanStack Query
  - Cypress

- **Autenticação**:
  - JWT (JSON Web Token) para autenticação baseada em tokens, com a estratégia de refresh token.

## Requisitos

- Node.js (versão 20.X.X ou superior)

## Instalação

1. Clone o repositório para sua máquina local:
    ```bash
    git clone https://github.com/seu-usuario/nome-do-repositorio.git
    cd nome-do-repositorio
    ```
## Execução

1. Instale as dependências do projeto:
    ```bash
    npm install
    ```

2. Configure as variáveis de ambiente:
    - Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:
      ```plaintext
      VITE_BASE_URL=https://api.homologation.cliqdrive.com.br
      ```

3. Inicie o servidor:
    ```bash
    npm start
    ```

6. Acesse a aplicação em `http://localhost:5173/` (ou a porta configurada).

## Estrutura do Projeto

```plaintext
/
├── cypress/                 # Arquivos referentes aos testes e2e
├── public/                  # Arquivos públicos
├── src/                     # Raiz do projeto
│   ├── assets/              # Assets da aplicação
│   ├── components/          # Componentes React
│      ├── common/           # Componentes em comum entre outras páginas
│      ├── layout/           # Componentes com layouts que envolvem outros componentes
│      ├── login/            # Componentes utilizados exclusivamente na página login 
│      ├── profile/          # Componentes utilizados exclusivamente na página profile
│      ├── ui/               # Componentes básicos estilizados
│   ├── hooks/               # hooks customizados
│   ├── pages/               # Componentes utilizados nas rotas
│   ├── schemas/             # Schemas yup para validações 
│   ├── services/            # Chamadas para API externa
│   ├── types/               # Definir interfaces e tipos reaproveitáveis
│   ├── utils/               # Utilitários gerais
├── App.tsx                  # Componente principal
├── axiosInstanse.ts         # Instancia do axios
├── index.css                # Folha de estilo que importa estilos do taiwindss
├── main.tsx                 # Arquivo raiz da aplicação
├── ruter.tsx                # Roteamento da aplicação
├── vite-env.d.ts            # Tipagem das variáveis de ambiente do vite
├── .env                     # Arquivo de configuração de variáveis de ambiente
├── .env.example             # Referência para variáveis de ambiente
├── .eslintrc.cjs            # Configuração do eslint
├── .gitignore               # Arquivos e diretórios ignorados pelo Git
├── cypress.config.ts        # Arquivo de configuração do cypress
├── cypress.env.example.json # Referências para variáveis de ambiente do cypress
├── cypress.env.json         # Variáveis de ambiente do cypress
├── index.html               # HTML raiz do projeto
├── package-lock.json        # Resolução de dependências
├── package.json             # Dependências principais, informações e scripts
├── postcss.config.js        # Configurações d postcss para o taiwindcss
├── README.md                # Documentação do projeto
├── tsconfig.json            # Configuração do typescript para aplicação
├── tsconfig.node.json       # Configuração do typescript para o node
└── vite.config.ts           # Documentação do projeto



---

Desenvolvido com ❤️ por [Seu Nome].

---
