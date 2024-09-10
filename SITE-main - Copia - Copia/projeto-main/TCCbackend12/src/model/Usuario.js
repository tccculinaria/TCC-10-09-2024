const conectar = require("../database/conexao");

class Usuario {
  constructor({email, senha}) {
    this.email = email;
    this.senha = senha;
  }

  async cadastrar() {
    try {
      const [cadastro] = await conectar("register")
        .insert({
          email: this.email,
          senha: this.senha,
        })
        .returning("email");
      return cadastro;
    } catch (error) {
      return error;
    } finally {
      conectar.destroy;
    }
  }
}
module.exports = Usuario;
