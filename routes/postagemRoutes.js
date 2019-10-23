const express = require('express');
const router = express.Router();
const PostagensController = require('../controllers/postagens');
const PostagemModel = require('../models/postagem');

const postagensController = new PostagensController(PostagemModel);

router.get('/-', async (req, res) => {
    //busca postagens no banco de dados
    const postagens = await postagensController.consultarTodos();
    res.send(postagens);
});

router.post('/', async (req, res) => {
    //salva postagem no banco de dados
    const novaPostagem = req.body;
    const retorno = await postagensController.adicionar(novaPostagem);
    res.send(retorno);
});

router.put('./:id', async (req, res) => {
    const id = req.params.id;
    const postagemDTO = req.body;
    await postagensController.alterarPorId(id, postagemDTO);
    res.send('alterado com sucesso');

})

router.get('./:id', async (req, res) => {
    const id = req.params.id;
    const postagem = await postagensController.consultarPorId(id)
    if(postagem){
        res.send(postagem);
    }else{
        res.sendStatus(404);
    }

});

router.delete('/:id', async(req, res) => {
    const id = req.params.id;
    await postagensController.deletePorId(id);
    res.send('deletado com sucesso')
})

module.exports = router;