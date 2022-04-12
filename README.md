# Api de Produtos e Usuários

## Sobre

Este é um projeto exemplo de uma API em NodeJs ao qual é possível a criação de usuários, login, CRUD de produtos e alguns filtros

## Instalando

Obs.: É necessário antes de instalar este projeto, ter instalado o MySql e o NodeJs:

- MySql (https://www.mysql.com/downloads/)
- NodeJs (https://nodejs.org/en/)

Para instalá-lo em sua máquina faça os comandos a seguir:

```bash
  git clone https://github.com/danielguirra/eva
  cd eva
  npm install
  npm build
  npm migrations
  npm start
```

#### Atenção

É necessário criar um arquivo .env para configurar suas variáveis de ambiente para rodar a API.

Se não quiser criar ele a api usuára o padrão já selecionado.

E depois acesse no seu navegador o endereço: http://localhost:3000

## Rotas

### /login

- POST de usuários

### /registro

- POST de usuários para cadastro de produtos e categorias

### /produto

- GET retorna os produtos criados pelo usuário logado
- POST rota para criação de produtos com até 5 imagens
- DELETE para deletar produto após /produto/iddoproduto exemplo "/produto/2"

### /categoria

- GET retorna os produtos apenas da categoria passada no body da requisição
- POST rota para criação de categoria

### /preco

- GET retorna os produtos por ordem de preço

## Autor

Daniel Guirra
Email: <daniel.guirra777@gmail.com>
