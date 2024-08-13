const express = require("express");

const router = express.Router();

const {createTarefa,listarTarefasPorUsuario} = require('../controller/tarefa-controller')

router.post('/tarefa/create',createTarefa);

router.get('/tarefa/listar-por-usuario',listarTarefasPorUsuario);




module.exports = router;