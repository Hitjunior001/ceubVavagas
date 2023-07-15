# Projeto ceubVavagas

Este repositório contém o código-fonte para um projeto de Dashboard Administrativo desenvolvido com React e Node.js, utilizando o Firebase como banco de dados e autenticação.

## Controle de Versão

| Versão | Data       | Notas                           |
| ------ | ---------- | ------------------------------- |
| 1.0.0  | 14/07/2023 | Versão inicial do projeto        |


## Tecnologias Utilizadas

- React
- Node.js
- Firebase

## Estrutura do Repositório

O repositório está organizado nas seguintes pastas:

- `dashboardAdminCeubVagas`: Contém o código-fonte do frontend desenvolvido em React usando ViteJS.
- `server`: Contém o código-fonte do backend desenvolvido em Node.js.

## Configuração

Antes de executar a aplicação, certifique-se de configurar as variáveis de ambiente necessárias. Você pode criar um arquivo `.env` na raiz do projeto e fornecer as seguintes informações:

### dashboardAdminCeubVagas

API_KEY=your_api_key
AUTH_DOMAIN=your_auth_domain
PROJECT_ID=your_project_id
STORAGE_BUCKET=your_storage_bucket
MESSAGING_SENDER_ID=your_messaging_sender_id
APP_ID=your_app_id
MEASUREMENT_ID=your_measurement_id

### server

TYPE=your_type
PROJECT_ID=your_project_id
PRIVATE_KEY_ID=your_private_key_id
PRIVATE_KEY=your_private_key
CLIENT_EMAIL=your_client_email
CLIENT_ID=your_client_id
AUTH_URI=your_auth_uri
TOKEN_URI=your_token_uri
AUTH_PROVIDER_X509_CERT_URL=your_auth_provider_x509_cert_url
CLIENT_X509_CERT_URL=your_client_x509_cert_url
UNIVERSE_DOMAIN=your_universe_domain


## Execução

Para executar a aplicação, siga os passos abaixo:

### frontend

1. Acesse a pasta `dashboardAdminCeubVagas`:

```shell
cd dashboardAdminCeubVagas
Instale as dependências:

npm install ou yarn add
Inicie a aplicação:

npm run dev ou yarn run dev
Acesse a aplicação no seu navegador em http://localhost:5173.
backend
Acesse a pasta server:

cd server
Instale as dependências:

npm install ou yarn add
Inicie o servidor:

npm run dev ou yarn run dev
O servidor será iniciado e estará ouvindo em http://localhost:PORT.
## Contribuição
Contribuições são bem-vindas! Se você encontrar algum problema ou tiver alguma sugestão, fique à vontade para abrir uma issue ou enviar um pull request.

