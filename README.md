# Projeto ceubVavagas

Este repositório contém o código-fonte para um projeto de Dashboard Administrativo desenvolvido com React e Node.js, utilizando o Firebase como banco de dados e autenticação.

## Estrutura do Repositório

O repositório está organizado nas seguintes pastas:

- `dashboardAdminCeubVagas`: Contém o código-fonte do frontend desenvolvido em React usando ViteJS.
- `SERVER`: Contém o código-fonte do backend desenvolvido em Node.js.

## dashboardAdminCeubVagas

A pasta `dashboardAdminCeubVagas` contém o código-fonte do frontend do Dashboard Administrativo. Esta aplicação foi desenvolvida usando o framework React e se conecta ao banco de dados Firebase para exibir dados e permitir a interação com o sistema.

### Configuração

Antes de executar a aplicação React, certifique-se de configurar as variáveis de ambiente necessárias. Você pode criar um arquivo `.env` na raiz da pasta `dashboardAdminCeubVagas` e fornecer as seguintes informações:
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,

### Execução

Para executar a aplicação React, você pode usar os seguintes comandos:

cd dashboardAdminCeubVagas.
npm install ou yarn add .
npm run dev ou yarn run dev.

Acesse a aplicação no seu navegador em `http://localhost:5173`.

## server

A pasta `server` contém o código-fonte do backend do Dashboard Administrativo. O backend é desenvolvido em Node.js e oferece rotas para acessar o banco de dados Firebase e fornecer APIs para a aplicação React.

### Configuração

Antes de executar o servidor Node.js, certifique-se de configurar as variáveis de ambiente necessárias. Você pode criar um arquivo `.env` na raiz da pasta `server` e fornecer as seguintes informações:
  type: process.env.TYPE,
  project_id: process.env.PROJECT_ID,
  private_key_id: process.env.PRIVATE_KEY_ID,
  private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
  client_email: process.env.CLIENT_EMAIL,
  client_id: process.env.CLIENT_ID,
  auth_uri: process.env.AUTH_URI,
  token_uri: process.env.TOKEN_URI,
  auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: process.env.CLIENT_X509_CERT_URL,
  universe_domain: process.env.UNIVERSE_DOMAIN

Acesse a aplicação no seu navegador em `http://localhost:PORT`.

### Execução

Para executar o servidor Node.js, você pode usar os seguintes comandos:

cd server
npm install ou yarn add 
npm run dev ou yarn run dev

O servidor será iniciado e estará ouvindo em `http://localhost:PORT`.

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver alguma sugestão, fique à vontade para abrir uma issue ou enviar um pull request.


