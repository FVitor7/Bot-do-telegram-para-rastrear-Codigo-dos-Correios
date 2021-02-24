
# NodeJS-Bot Correios Telegram
bot do telegram para rastrear encomendas com NodeJS

para instalar as dependencias através do NPM:

1° # telegraf.js
```
npm install telegraf
```

2° Correios Brasil
```
npm install correios-brasil --save
```
___
# Crie um bot através do botFather e configure o comando /start;
___
# Token
Especifique o token na variável de ambiente: KEY_API.
___
Executando o projeto:
```
node src/index.js
```
# Acessando
```
Acesse a url: http://t.me/api_correios_bot
```
___
# Testando

Pesquisando por um código de rastreio com o comando: /search
```
/search OL360725950BR
```
___
O bot irá retornar os dados do seu código de rastreio
