const express = require("express");

const router = express.Router();

const {createTarefa,listarTarefasPorUsuario,updateTarefa} = require('../controller/tarefa-controller')

router.post('/tarefa/create',createTarefa);

router.get('/tarefa/listar-por-usuario',listarTarefasPorUsuario);

router.put('/tarefa/update/:tarefaId',updateTarefa)




module.exports = router;