const mongoose = require('mongoose'); // importando o mongoose, nossa lib pra criar modelos

const channelSchema = new mongoose.Schema({
    guild: String,  // Aqui estamos criando nosso modelo de objeto pra salvar na DB
    channel: String,
    msg: String
});

exports.db = mongoose.model('ID', channelSchema) // Aqui estamos salvando nosso modelo e exportando como funçao
exports.config = {                               // de nome db, para ser usar como ID.db()
    name: 'ID',
    aliases: ['ID']
}