const Usuario = require("../model/Usuario");

module.exports = {
  async cadastrarUsuario(request, response) {
    console.log(request.body);
    const usuario = new Usuario(request.body);
    const cadastrar = await usuario.cadastrar();
    
    return response.json(cadastrar);
  },
};
