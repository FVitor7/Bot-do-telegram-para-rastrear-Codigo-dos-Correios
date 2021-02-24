# Correios Telegram Bot-NodeJS
bot do telegram para rastrear encomendas com NodeJS

para instalar as dependencias através do NPM:

1° Node.js Telegram Bot API
```
npm i node-telegram-bot-api
```

2° Correios Brasil
```
npm install correios-brasil --save
```
___
Crie um bot através do botFather e configure o comando /start;
___
#Token
Especifique o token na variável de ambiente.
___
Executando o projeto:
```
node src/index.js
```
#Acessando
```
Acesse a url: http://t.me/api_correios_bot
```
___
Testando

Adicione um código de rastreio com o comando: /add 
```
/add OL360725950BR
```
___
O bot irá retornar os dados do seu código
