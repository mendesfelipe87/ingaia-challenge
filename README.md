# ingaia-challenge

Este projeto tem como objetivo criar dois micro serviços para assim serem consumidos via API para cálculo de metro quadrado baseado no valor salvo em banco de dados

## Instalação

Use o gerenciador de pacotes [npm](https://nodejs.org/en/download/) para realizar a instalação das dependências.

```bash
npm install
```

## Uso

Para executar localmente o projeto, é necessário definir duas variáveis de ambiente, PORT e BASEURL

```bash
export PORT=3000
export BASEURL=localhost
```

Após a definição das variáveis, execute seguinte comando para iniciar os microserviços

```bash
npm start
```

## Release

Para efetuar a release do projeto, basta fazer um pull request para o master e requisitar uma revisão antes da aprovação para assim o CI/CD ser ativado ao efetuar o merge

## Arquitetura

Arquitetura seguindo o modelo de Lib Boilerplate separado por pastas onde:
  - Temos a funcionalidade principal (metrosQuadrados)
  - Os métodos a serem utilizados por essa funcionalidade (get, post, etc..)
  - E a função em si a ser usada pelo roteador (valorMetrosQuadrados, etc ...)

```folder
funcionalidade
|__metodo
    |__função
```

## License
[MIT](https://choosealicense.com/licenses/mit/)