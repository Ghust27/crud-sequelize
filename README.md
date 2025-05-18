![Version](https://img.shields.io/badge/version-1.0.0-blue) ![License](https://img.shields.io/github/license/Ghust27/crud-sequelize) ![Issues](https://img.shields.io/github/issues/Ghust27/crud-sequelize)

# CRUD Sequelize

Uma aplicação backend para gerenciamento de usuários, construída com Node.js, Express e Sequelize, utilizando PostgreSQL como banco de dados. Implementa operações CRUD (Create, Read, Update, Delete) com autenticação básica.

---

## Índice

- [Visão Geral](#visão-geral)  
- [Funcionalidades](#funcionalidades)  
- [Tecnologias](#tecnologias)  
- [Pré-requisitos](#pré-requisitos)  
- [Configuração](#configuração)  
- [Como Executar](#como-executar)  
  - [Em Desenvolvimento](#em-desenvolvimento)  
  - [Em Produção](#em-produção)  
- [Estrutura de Pastas](#estrutura-de-pastas)  
- [Endpoints da API](#endpoints-da-api)  
- [Contribuição](#contribuição)  
- [Licença](#licença)  

---

## Visão Geral

O **CRUD Sequelize** é uma API RESTful para gerenciamento de usuários:

- **Autenticação**: Cadastro e login com validação de credenciais.  
- **Gerenciamento de Usuários**: Criação, leitura, atualização e exclusão de registros de usuários.  
- **Banco de Dados**: Integração com PostgreSQL via Sequelize ORM.  
- **Segurança**: Validação de entrada e tratamento de erros.  

---

## Funcionalidades

- 🔐 Autenticação de usuários com senha criptografada.  
- 📋 Operações CRUD completas para gerenciamento de usuários.  
- 🛡️ Validação de dados de entrada.  
- 🗄️ Integração com PostgreSQL usando Sequelize.  
- 📊 Respostas JSON padronizadas para endpoints.  

---

## Tecnologias

| Camada     | Tecnologias                                          |
| ---------- | ---------------------------------------------------- |
| **Backend**| Node.js · Express · Sequelize · PostgreSQL · bcrypt   |

---

## Pré-requisitos

- **Node.js** v14+  
- **npm** ou **yarn**  
- **PostgreSQL** (instalado localmente ou em um serviço como Render)  

---

## Configuração

1. Clone este repositório:
   ```bash
   git clone https://github.com/Ghust27/crud-sequelize.git
   cd crud-sequelize
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie o arquivo de variáveis de ambiente na raiz do projeto (.env):
   ```bash
   DATABASE_URL=postgresql://seu_usuario:sua_senha@localhost:5432/seu_banco
   PORT=5000
   ```

4. Configure o banco de dados PostgreSQL e execute as migrações:
   ```bash
   npx sequelize-cli db:migrate
   ```

---

## Como Executar

1. Inicie o servidor em modo de desenvolvimento:
   ```bash
   npm run dev
   ```

2. A API estará disponível em: `http://localhost:5000/api`

