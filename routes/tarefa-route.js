const express = require("express");

const router = express.Router();

const {createTarefa} = require('../controller/tarefa-controller')

router.post('/tarefa/create',createTarefa);





module.exports = router;