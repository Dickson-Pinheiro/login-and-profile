# Projeto de Sistema de Login e Perfil de Usuário

Este projeto foi desenvolvido como parte de um processo seletivo, seguindo as histórias e layout disponibilizados. Ele consiste em uma aplicação web simples que inclui uma página de login e uma página de informações do perfil do usuário. A aplicação foi construída utilizando ReactJs, com Vite, typescript, taiwindcss, entre outras bibliotecas.

O deploy da aplicação foi feito [aqui](https://login-and-profile.vercel.app/ ).

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
    git clone https://github.com/Dickson-Pinheiro/login-and-profile.git
    cd login-and-profile
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
    npm run dev
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
```

## Testes e2e

Os testes end-to-end foram criados utilizando o Cypress, e, para gerar dados aleatórios, utilizamos a biblioteca faker, para evitar dados tendenciosos. Esta seção descreve como configurar e executar testes utilizando Cypress, incluindo a definição de variáveis de ambiente e a descrição detalhada de cada caso de teste.

### 1. Definir Variáveis de Ambiente

Com os passos anteriores já realizados, crie um arquivo `cypress.env.json` no diretório raiz do projeto com o seguinte conteúdo:

```json
  {
    "base_url": "http://localhost:5173",
    "valid_email": "cliente@youdrive.com",
    "valid_password": "password",
    "valid_profile_name": "Cliente",
    "valid_profile_email": "cliente@youdrive.com"
  }

```

Existe um arquivo chamado `cypress.env.example.json` contendo todas as variáveis de ambiente necessárias. Basta duplicar o arquivo e renomeá-lo para `cypress.env.example.json`. Como se trata de um teste, as variáveis de ambiente estão públicas no repositório.

### 2. Executando os testes

Para executar os testes, basta iniciá-lo com o seguinte comando no terminal:

 ```bash
    npx cypress run
  ```

Ou, caso prefira visualizar na interface gráfica do cypress:

```bash
    npx cypress open
```

Lembre-se que, para que os testes sejam executados com sucesso, a aplicação também deve ter sido executada. Portanto, abra dois terminais e execute o projeto em um deles, e o teste no outro.

### 3. Descrição dos Casos de Teste

#### login.spec.cy.ts
```
1. **The page should load correctly**  
   Verifica se a página inicial carrega corretamente.

2. **should change to the authenticated route when the credentials are valid**  
   Testa se a rota muda para a rota autenticada quando as credenciais são válidas.

3. **It should return status code 200 when the credentials are valid**  
   Verifica se a resposta da requisição de login retorna status 200 quando as credenciais são válidas.

4. **It should include the access tokens in localStorage when the credentials are valid**  
   Verifica se os tokens de acesso são incluídos no localStorage após o login com credenciais válidas.

5. **It should remain on the same page if the e-mail is incorrect**  
   Verifica se a página permanece na mesma rota se o e-mail estiver incorreto.

6. **It should remain on the same page if the password is incorrect**  
   Verifica se a página permanece na mesma página se a senha estiver incorreta.
```

#### profile.spec.cy.ts


#### Authenticated access to the profile route

```

1. **It should be on the authenticated route.**  
   Verifica se a rota acessada é autenticada após o login.

2. **It should succeed when making the request to fetch user information.**  
   Verifica se a requisição para obter informações do usuário retorna status 200.

3. **It should succeed when making the request to fetch user information.**  
   Verifica se a requisição para obter informações do usuário retorna status 200.

4. **It should correctly display the user's name when accessing the profile page.**  
   Verifica se o nome do usuário é exibido corretamente na página de perfil.

5. **It should correctly display the user's e-mail when accessing the profile page.**  
   Verifica se o e-mail do usuário é exibido corretamente na página de perfil.
```

#### Unauthenticated access to the profile route
```
1. **It should be redirected to the unauthenticated page when there are no valid tokens.**  
   Verifica se é redirecionado para a página não autenticada quando não existem tokens válidos.

```
## Conclusão

Este projeto representa um esforço abrangente para garantir a qualidade e a confiabilidade de um sistema de autenticação de usuário, desde a implementação do front-end até a integração com a API e a criação de testes automatizados. Ao integrar o front-end com a API, conseguimos criar uma experiência fluida e consistente para os usuários, garantindo que as interações sejam tratadas de maneira adequada nos bastidores.

A criação dos testes automatizados utilizando o framework Cypress desempenha um papel fundamental neste processo, permitindo validar o comportamento esperado do sistema em diferentes cenários. Os testes abrangem desde a carga inicial da página de login até a verificação de acesso autenticado à rota de perfil, garantindo que todas as funcionalidades principais estejam funcionando conforme o esperado.