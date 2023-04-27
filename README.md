# Stone Challenge

Este é um projeto criado como parte de um desafio técnico para a empresa Stone Ton.

O objetivo deste projeto é desenvolver um protótipo em React Native, nele foi utilizada a paleta de cores da Stone Ton como inspiração, ainda, foram desenvolvidas as funcionalidades de listagem de produtos selecionado, adicionar e remover um produto no carrinho, e também navegar entre a tela de produtos e meus produtos, também foi acrescentada a tela de erros. uma tela agradável e funcional, conforme mostrado na foto abaixo:

## Listagem de Produtos
<div style="display: flex; flex-direction: row">
   <img src="https://user-images.githubusercontent.com/80495195/234759581-1c930e3f-fc00-4d58-891e-2efe1f68e3d6.jpeg" alt="produtos" style="width: 24%;">
   <img src="https://user-images.githubusercontent.com/80495195/234760098-cc187089-5ed3-478a-8566-f4a49ef309ea.jpeg" alt="loading" style="width: 24%;">
   <img src="https://user-images.githubusercontent.com/80495195/234769342-cd94cd3e-aa34-4b5d-931e-53e9f7765690.jpeg" alt="product empty" style="width: 24%;">
   <img src="https://user-images.githubusercontent.com/80495195/234769454-829f4526-6320-4f80-8396-dd97d0c2ef57.jpeg" alt="product error" style="width: 24%;">
</div>

## Meu Carrinho
<div style="display: flex; flex-direction: row">
   <img src="https://user-images.githubusercontent.com/80495195/234759685-6635102c-ea9a-4f29-bbcd-cf15d896aa81.jpeg" alt="produtos" style="width: 24%;">
   <img src="https://user-images.githubusercontent.com/80495195/234769592-04392fb5-25e9-4bcf-b9ea-5a83ce8572c1.jpeg" alt="loading" style="width: 24%;">
</div>

## Instruções

Reproduza o wireframe abaixo e utilize typescript. Não precisa se preocupar com a UI, não
estamos avaliando isso no momento - mas vamos avaliar a UX. A lista de produtos deve ser
carregada de um servidor - de preferência de um site/API público.

![image](https://user-images.githubusercontent.com/80495195/234720804-b8a415e5-e345-4c79-abbf-bad44a1adfb5.png)

Sua Tarefa:

1. Criar uma tela de lista de produtos, com a possibilidade de adicionar e remover do
   carrinho;
2. Ao clicar no ícone do carrinho no header o usuário deve ser direcionado para a tela de
   carrinho onde vai listar os produtos dele, tendo a opção de excluir um produto do carrinho;
3. Escrever testes para sua aplicação;
4. Fique à vontade para estender as funcionalidades para demonstrar seu conhecimento;

O que iremos avaliar:

1. Organização do projeto;
2. Gerenciamento de estado;
3. Arquitetura implementada;
4. Versionamento do projeto;
5. Gerenciamento das exceções;
6. Qualidade das documentações;
7. Afinidade com o framework;
8. Testes unitários;

Bônus:

1. Documentação dos componentes utilizando o storybook;
2. Utilização consistente do typescript;
3. Testes de integração;
4. Utilização;

Dicas:

● Use versionamento (aqui no Ton seguimos essa convenção:
https://www.conventionalcommits.org/en/v1.0.0/#summary)
● Mande o link do repositório ou um .zip caso você prefira (se conseguir entregar
prints e/ou APK seria ótimo para avaliarmos a solução final)
● Seguimos o clean code, e gostaríamos de ver isso também:
https://github.com/ryanmcdermott/clean-code-javascript
● Se seu PC não roda o emulador legal, sugerimos usar o Expo (https://expo.io).
● Você pode criar um gist e carregar a lista de produtos de lá ou usar uma API como a
https://restcountries.eu para carregar uma lista.

## Organização de pastas

● Type: Estão situados os tipos globais da aplicação.

● Components: A estrutura utilizada para a organização deles foi o desing atômico, separando os componentes em íons, átomos, moléculas e organismos.
Os íons são os componentes menores, como container e typography, enquanto os átomos são os componentes que possuem íons, como o button. Já as moleculas estão o cartRow e o productCard. E em moléculas está a productList, aqui utilizei o FlatList porque é mais performático.

● Hooks: É onde são feitas as interações com as informações de cada entidade, cart e produto.

● Provider: É o provedor dos dados e ações sobre o carrinho, permitindo adicionar e remover itens para deixar os dados de forma global. Aqui, foi utilizada a Context API em vez do Redux, pois esta já vem pronta no React e o Redux exigiria instalação, aumentando a complexidade desta aplicação simples.

● Routes: Estão as telas da aplicação. Foi utilizada a biblioteca React Navigation, pois ela é completa, fornecendo desde o "header" até as rotas e abas.

● Screens: Estão as telas desenvolvidas para o carrinho (pasta Cart) e para os produtos (pasta Product).

● Services: Está o Axios, utilizado para passar o domínio inicial do projeto e o código JavaScript, incluindo a função currency que desenvolvi para transformar o preço das hortaliças em moeda.

● Theme: Foi criado para padronizar os estilos utilizados, incluindo a paleta de cores, os tipos de formatação das palavras e os espaços. Vale ressaltar que, neste projeto, utilizei o styled components, pela facilidade em criar temas para padronizar estilos, trazer mais legibilidade ao código com a extensão que já tem no VS Code e trazer mais flexibilidade para usar código JS.

● Utils: Foi criado para guardar código que não será utilizado em produção e não se encaixa em services, como os testes.

## Como executar o projeto

Para executar o projeto, você deve primeiro clonar este repositório em sua máquina local. Em seguida, abra um terminal na pasta do projeto e execute os seguintes comandos:

1. Instale o ngrok com o comando `npm install -g ngrok`
2. Instale as bibliotecas do projeto com o comando `yarn install`
3. Crie uma conta no ngrok
4. Rode o comando `ngrok authtoken SEU_TOKEN_AQUI`
5. Copie o arquivo `.env.example` para `.env` com o comando `cp .env.example .env`
6. Suba a API com o comando `yarn api`
7. Copie o endereço gerado pelo ngrok com https e substitua o valor de API_URL no arquivo `.env`
8. Suba o aplicação com o comando `npx expo start --tunnel`

Isso iniciará o projeto em seu terminal. Para executar o projeto em um dispositivo móvel, é necessário baixar o aplicativo Expo Go e seguir as instruções do ambiente de desenvolvimento utilizado.

## Tecnologias utilizadas

- [React Native](https://reactnative.dev)
- [Expo](https://expo.dev)
- [Typescript](https://www.typescriptlang.org)
- [Eslint](https://eslint.org)
- [Prettier](https://prettier.io)
- [React Navigation](https://reactnavigation.org)
- [React Context](https://legacy.reactjs.org/docs/context.html)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [Jest](https://jestjs.io/pt-BR/)
- [Testing-library](https://testing-library.com/)
