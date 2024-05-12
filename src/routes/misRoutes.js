const express = require("express");
const router = express.Router();

const misRoutesController = require('../controller/misRoutesController');
const loginController = require('../controller/loginRoute')
router
  //
  .get('/', misRoutesController.getIndex)
  .get('/sign-up.ejs', misRoutesController.getSignUp)
  .get('/log-in.ejs', misRoutesController.getLogIn)
  .get('/content-list.ejs', misRoutesController.getList)
  .get('/content-detail.ejs', misRoutesController.getDetail)
  //login
  .get('/login', loginController.login)
  //borrar logout
  .get('/logout', loginController.logout)
  .get('/', loginController.getIndex)
  .get('/dashboard', loginController.getDashboard)
  .post('/login', loginController.postLogin)
  .post('/register', loginController.postRegister)
  .get('/registro', loginController.getRegistro)
  .get('/comentarios', loginController.getComentarios)
  //.get('/publicaciones',loginController.getpublicaciones)
  .get('/perfil', loginController.getPerfil)
  .get('/error', loginController.getError)

module.exports = router;