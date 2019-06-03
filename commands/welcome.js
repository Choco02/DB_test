const mongoose = require('mongoose');
const ID = require('./ID'); // Importamos nosso Model/Schema compilado
const db = mongoose.connection;

exports.run = (client, message, args) => {

    db.on('error', console.error.bind(console, 'connection error:'));
        ID.db.find({}, (err, data) => { // ID.db é a nossa funçao que exportamos no arquivo ID na linha 9
            if (err) console.error(err); // ID.db.find({}) encontra todos os elementos da nossa DB que foram feitas 
            console.log(data) // usando esse Schema ID.db
        })
        /***********************************/
            ID.db.find({channel: `${message.channel.id}`}, (err, canal) => { // Encontra dados que batam com canal sendo o mesmo que o comando welcome foi digitado
                if (err) console.log(err) // canal retorna nosso objeto de dados
                message.channel.send(`A mensagem do canal <#${canal.channel}> é ${canal[0].msg}`) // canal[0] pq nosso objeto é um array, e puxar a propriedade msg dele
            })
}
exports.config = {
    name: 'welcome',
    aliases: ['welcome']
}