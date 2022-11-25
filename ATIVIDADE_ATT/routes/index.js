const { Router } = require('express');
const Home = require('../controllers/HomeController');
const Session = require('../controllers/SessionController');
const auth = require('../middleware/auth');
const Usuario = require('../controllers/UsuarioController');
const Produto = require('../controllers/ProdutoController');
const Variacao = require('../controllers/VariacaoController');

const routes = new Router();

routes.get('/home', auth, Home.index);

routes.get('/login', Session.index);
routes.post('/logar', Session.logar);
routes.get('/logout', Session.logout);
//Usuários
routes.get('/usuarios', Usuario.index);

routes.get('/cadastrar', Usuario.save);
routes.post('/addUsuario', Usuario.store);

routes.get('/editar/:email', Usuario.edit);
routes.post('/update/:email', Usuario.update);

routes.get('/deletar/:email', Usuario.deletar);
routes.post('/destroy', Usuario.destroy);
//Produtos
routes.get('/produtos', Produto.index);
routes.get('/produtos/cadastrar', Produto.save);
routes.post('/addProduto', Produto.store);

routes.get('/produtos/editar/:id', Produto.edit);
routes.post('/produtos/update/:id', Produto.update);

routes.get('produtos/deletar/:id', Produto.deletar);
routes.post('/produtos/destroy', Produto.destroy);

//Variação
routes.get('/variacoes', Variacao.index);
routes.get('/variacoes/cadastrar', Variacao.save);
routes.post('/addVariacao', Variacao.store);

routes.get('/', Session.index);

module.exports = routes;