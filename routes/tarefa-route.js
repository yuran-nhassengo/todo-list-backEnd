const express = require("express");

const router = express.Router();

const {createTarefa,listarTarefasPorUsuario,updateTarefa,deleteTarefa} = require('../controller/tarefa-controller')

router.post('/tarefa/create',createTarefa);

router.get('/tarefa/listar-por-usuario',listarTarefasPorUsuario);

router.put('/tarefa/update/:tarefaId',updateTarefa)

router.delete('/tarefa/delete/:tarefaId',deleteTarefa)




module.exports = router;