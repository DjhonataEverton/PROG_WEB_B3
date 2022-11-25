//Removido
const session = require('../models/session');
//Inserido
const { PrismaClient } = require('@prisma/client');

class SessionController {
  //Inserido
  prisma = new PrismaClient();

  async index(req, res) {
    res.render('pages/login', { erro: "" });
  }

  async logar(req, res) {
    //let user = {
    //email: "chico@gmail.com",
    //senha: "123456",
    //}
    /*const prisma = new PrismaClient()*/
    const { email, senha } = req.body;
    //Removido
    const logado = await session.login(email, senha);
    //Inserido
    //const logado = await prisma.usuarios.findFirst({ where: { email, senha } });
    //Testar se usuário existe
    if (!logado) {
      return res.render('pages/login', { erro: "Usuário inexistente" })
    }
    //Testar se senha corresponde ao email
    //if (!(email === user.email && senha === user.senha)) {
    //return res.render('pages/login', { erro: "Senha inválida" });
    //}

    req.session.logado = logado;
    return res.redirect('/home');
  }
  logout(req, res) {
    req.session.logado = false;
    return res.redirect('/login')
  }

}

module.exports = new SessionController();