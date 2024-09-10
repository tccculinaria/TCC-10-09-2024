const express = require("express");

const UsuarioController = require("./controller/UsuarioController");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.post("/gravador", UsuarioController.cadastrarUsuario);

const port = 8080;

app.listen(port, () => console.log(`Rodando na porta ${port} !!`));

module.exports = app;
