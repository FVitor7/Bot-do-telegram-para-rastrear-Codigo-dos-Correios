const { Telegraf } = require('telegraf')
const { rastrearEncomendas } = require('correios-brasil')
const express = require('express')
const expressApp = express()

const port = process.env.PORT || 3000
expressApp.get('/', (req, res) => {
  res.send('Bot criado por: Fábio Vitor!')
})
expressApp.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

const bot = new Telegraf(process.env.KEY_API)

bot.start((ctx) => ctx.reply('Olá' + ctx.chat.first_name + ' utilize da seguinte maneira:\n\n1 - Pesquisar código:\n\nExemplo: /search AB123456789BR'));

bot.command('search', async (ctx) => {

    try {

        let codRastreio = [ctx.message.text.split(" ")[1]];
        let msg_full = '';
        ctx.reply('Pesquisando pelo código informado...')
        rastrearEncomendas(codRastreio).then((response) => {
            for (var i = 0; i < response[0].length; i++) {
                var data_api = 'Data: ' + response[0][i].data;
                var hora_api = '\nHora: ' + response[0][i].hora;
                var status_api = '\nStatus: ' + response[0][i].status;
                var local_api = '\nLocal: ' + response[0][i].local;
                var origem_api = '\nOrigem: ' + response[0][i].origem;
                var destino_api = '\nDestino: ' + response[0][i].destino;

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

                var msg_init = '\n' + data_api + hora_api + status_api + local_api + origem_api + destino_api + '\n';
                msg_full = msg_full + msg_init

            }

            ctx.reply(msg_full)
        });


    } catch (error) {
        console.error(error)
    }
})


const startBot = async () => {
    try {
        await bot.launch()
        console.log('Bot Iniciado com Sucesso!')
    } catch (error) {
        console.error(error)
    }
}

startBot()
