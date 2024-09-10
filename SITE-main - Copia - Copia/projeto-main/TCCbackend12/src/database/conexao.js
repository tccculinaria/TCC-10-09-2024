const knex = require('knex');
const configuracao = require('../../knex');

const conexao = knex(configuracao);

module.exports = conexao;