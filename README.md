# ceubVavagas

# Projeto Dashboard Administrativo

Este repositório contém o código-fonte para um projeto de Dashboard Administrativo desenvolvido com React e Node.js, utilizando o Firebase como banco de dados e autenticação.

## Estrutura do Repositório

O repositório está organizado nas seguintes pastas:

- `dashboardAdminCeubVagas`: Contém o código-fonte do frontend desenvolvido em React usando ViteJS.
- `SERVER`: Contém o código-fonte do backend desenvolvido em Node.js.

## dashboardAdminCeubVagas

A pasta `dashboardAdminCeubVagas` contém o código-fonte do frontend do Dashboard Administrativo. Esta aplicação foi desenvolvida usando o framework React e se conecta ao banco de dados Firebase para exibir dados e permitir a interação com o sistema.

### Configuração

Antes de executar a aplicação React, certifique-se de configurar as variáveis de ambiente necessárias. Você pode criar um arquivo `.env` na raiz da pasta `dashboardAdminCeubVagas` e fornecer as seguintes informações:

### Execução

Para executar a aplicação React, você pode usar os seguintes comandos:

cd dashboardAdminCeubVagas
npm install ou yarn add 
npm run dev ou yarn run dev

Acesse a aplicação no seu navegador em `http://localhost:PORT`.

## server

A pasta `server` contém o código-fonte do backend do Dashboard Administrativo. O backend é desenvolvido em Node.js e oferece rotas para acessar o banco de dados Firebase e fornecer APIs para a aplicação React.

### Configuração

Antes de executar o servidor Node.js, certifique-se de configurar as variáveis de ambiente necessárias. Você pode criar um arquivo `.env` na raiz da pasta `NodeJS` e fornecer as seguintes informações:

FIREBASE_API_KEY=<sua_chave_api>
FIREBASE_AUTH_DOMAIN=<seu_auth_domain>
FIREBASE_DATABASE_URL=<sua_url_do_banco_de_dados>
FIREBASE_PROJECT_ID=<seu_project_id>
FIREBASE_STORAGE_BUCKET=<seu_storage_bucket>
FIREBASE_MESSAGING_SENDER_ID=<seu_messaging_sender_id>
FIREBASE_APP_ID=<seu_app_id>

### Execução

Para executar o servidor Node.js, você pode usar os seguintes comandos:

cd server
npm install ou yarn add 
npm run dev ou yarn run dev

O servidor será iniciado e estará ouvindo em `http://localhost:PORT`.

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver alguma sugestão, fique à vontade para abrir uma issue ou enviar um pull request.


