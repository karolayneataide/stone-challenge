# stone-challenge

Este é um projeto criado como parte de um desafio técnico para a empresa Stone Ton.

O objetivo deste projeto é desenvolver um protótipo em React Native, nele foi utilizada a paleta de cores da Stone Ton como inspiração, ainda, foram desenvolvidas as funcionalidades de listagem de produtos selecionado, adicionar e remover um produto no carrinho, e também navegar entre a tela de produtos e meus produtos, também foi acrescentada a tela de erros. uma tela agradável e funcional, conforme mostrado na foto abaixo:



# Instruções
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
