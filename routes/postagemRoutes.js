const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('lista de postagem');
});

router.post('/', (req, res) => {
    res.send('postagem salva');
});

module.exports = router;