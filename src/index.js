const TelegramBot = require('node-telegram-bot-api');
const { rastrearEncomendas } = require('correios-brasil')

const token = '1496309082:AAHUsNKoPDSzIPaQxMykIh-GIvmbYxQ25pc';

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg) => {
	bot.sendMessage(msg.chat.id, 'Olá ' + msg.chat.first_name + ' utilize da seguinte maneira:\n\n1 - Cadastrar código:\n\nExemplo: /add AB123456789BR');
		
	});

	
bot.onText(/\/add (.+)/, (msg, match) => {
  
	const chatId = msg.chat.id;
	const resp = match[1]; // the captured "whatever"
	let  codRastreio = [resp] // array de códigos de rastreios
	let teste = '';

	bot.sendMessage(chatId, 'Pesquisando pelo código informado...');

	rastrearEncomendas(codRastreio).then((response) => {
		for (var i =0; i< response[0].length ;i++) {
			var data_api = 'Data: ' + response[0][i].data;
			var hora_api = '\nHora: ' + response[0][i].hora;
			var status_api = '\nStatus: '+response[0][i].status;
			var local_api = '\nLocal: ' + response[0][i].local;
			var origem_api = '\nOrigem: ' + response[0][i].origem;
			var destino_api = '\nDestino: '+response[0][i].destino;
			
			if (typeof response[0][i].data === 'undefined') {
			data_api = '';
			}
			
			if (typeof response[0][i].hora === 'undefined') {
			  hora_api = '';
			}
			
			if (typeof response[0][i].status === 'undefined') {
			  status_api = '';
			}
			
			if (typeof response[0][i].local === 'undefined') {
			  local_api = '';
			}
			
			if (typeof response[0][i].origem === 'undefined') {
			  origem_api = '';
			}
			
			if (typeof response[0][i].destino === 'undefined') {
			destino_api = '';
			}

			var msg_full = '\n'+data_api + hora_api + status_api + local_api + origem_api + destino_api + '\n';
			teste = teste + msg_full
			
		  }

		  console.log(teste)
		  bot.sendMessage(chatId, teste);
	});
	
});

/*
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Olá ' + msg.chat.first_name + ' utilize da seguinte maneira:\n\n1 - Cadastrar código:\n\nExemplo: /add AB123456789BR');
});

*/
