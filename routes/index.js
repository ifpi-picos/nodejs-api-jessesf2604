const express = require('express');
const router = express.Router();
const postagemRoutes = require ('./postagem-routes')

router.use('/', function(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/', function(req, res) {
    res.send('App está online!')
});

router.use('/postagens', postagemRoutes)

module.exports = router;