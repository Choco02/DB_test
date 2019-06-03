const mongoose = require('mongoose');
const ID = require('./ID'); // importando nosso modelo/Schema ID
const db = mongoose.connection; // criando nossa variavel que representa conexao, ainda nao sei usar isso ainda


exports.run = (client, message, args) => {
    
    db.on('error', console.error.bind(console, 'connection error:')); // Caso dê erro na conexao no DB
        let Welcome = new ID.db ({ // Estamos organizando os dados que serao salvos usando aquele modelo/Schema ID
            guild: `${message.guild.id}`,
            channel: `${message.channel.id}`,
            msg: args.join(' ')
        })

        console.log(Welcome.guild); // Só pra debugar o ID da guild
        console.log(Welcome.channel); // channel ID
        console.log(Welcome.msg); // mensagem setada no channel
        Welcome.save((err, Welcome) => { // Aqui criamos nossa funçao salvar, com primeiro parametro err e o segundo os dados
            if (err) return console.error(err); 
            console.log(Welcome + ' saved'); // Mostra no console o objeto que foi salvo usando o nosso Schema/modelo ID
            message.channel.send(`A mensagem ${Welcome.msg} foi setada no canal <#${Welcome.channel}>`); 
        })
        /* Welcome.save().then(result => console.log(result))
        .catch(e => console.log(e)) */
    }

exports.config = {
    name: 'setwelcome',
    aliases: ['setwelcome']
}