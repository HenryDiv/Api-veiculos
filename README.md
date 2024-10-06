# API de Gerenciamento de Veículos

 simples **API de Gerenciamento de Veículos** desenvolvida no curso técnico de desenvolvimento de sistemas do senai que permite o cadastro, visualização, edição e remoção de informações sobre veículos. Desenvolvida em Node.js com MySQL, esta API fornece um conjunto de endpoints RESTful para facilitar a interação com os dados dos veículos.

## Funcionalidades Principais

1. **Cadastro de Veículos**:
   - **Endpoint**: `POST /cadastrar`
   - Permite adicionar novos veículos ao banco de dados, fornecendo detalhes como marca, modelo, ano, proprietário e cor.

2. **Visualização de Veículos**:
   - **Endpoint**: `GET /viewall`
   - Recupera e exibe uma lista de todos os veículos cadastrados.

3. **Busca por ID**:
   - **Endpoint**: `GET /search`
   - Permite buscar um veículo específico pelo seu ID, retornando os dados correspondentes.

4. **Busca por Ano**:
   - **Endpoint**: `GET /searchYear`
   - Permite buscar veículos registrados em um ano específico.

5. **Edição de Veículos**:
   - **Endpoint**: `POST /editar`
   - Permite atualizar as informações de um veículo existente, utilizando seu ID como referência.

6. **Remoção de Veículos**:
   - **Endpoint**: `GET /remover/:id`
   - Permite a exclusão de um veículo do banco de dados com base no seu ID.

## Tecnologias Utilizadas

- **Node.js**: Para construir a API e gerenciar requisições assíncronas.
- **Express**: Para facilitar a criação de rotas e middleware.
- **MySQL** 
- **Handlebars**: Para renderização de templates HTML.

## Requisitos

- Node.js instalado.
- Banco de dados MySQL configurado com a tabela `veiculos`.
## Tabela veiculos 
 CREATE TABLE veiculos (
   <br/>   id INT AUTO_INCREMENT PRIMARY KEY,
    <br/>  marca VARCHAR(50) NOT NULL,
   <br/>   modelo VARCHAR(50) NOT NULL,
    <br/>  ano YEAR NOT NULL,
    <br/>  proprietario VARCHAR(100) NOT NULL,
   <br/>   cor VARCHAR(30) NOT NULL
);

## Exemplos de Uso

- Para cadastrar um novo veículo, envie um `POST` para `/cadastrar` com os dados do veículo no corpo da requisição.
- Para visualizar todos os veículos, faça um `GET` para `/viewall`.
- Para remover um veículo, envie um `GET` para `/remover/{id}`.

## Como Executar o Projeto

1. Clone este repositório:
    `git clone https://github.com/HenryDiv/api-veiculos.git`
2. Instale as dependências:
  `npm install`
3. Inicie o servidor:
 `node index.js`
4. Acesse a API no seu navegador ou ferramenta de teste de API (como Postman) em `http://localhost:3030`
