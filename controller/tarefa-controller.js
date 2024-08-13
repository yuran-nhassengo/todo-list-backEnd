const asyncHandler = require('express-async-handler');

const Tarefa = require('../model/tarefa-model');
const Usuario = require('../model/user-model');

const jwt = require('jsonwebtoken');

const {default:mongoose} = require("mongoose");



const createTarefa = asyncHandler(async (req,res) => {
    
    const userId =  req.user.id; 

    const {título,descrição,dataDeVencimento,status} = req.body;

    if(!título || !descrição || !dataDeVencimento){

        return res.status(400).json({message:"Todos os campos sao Obrigatorios."})
    }

    try {

        

        const tarefa = await Tarefa.create({
            título,
            descrição,
            dataDeVencimento,
            status,
            usuário:userId
        });

        res.status(201).json({ message: 'Tarefa criada com sucesso!', tarefa });
        
    } catch (error) {

        console.log("error",error);
        res.status(500).json({ error: 'Erro interno do servidor.' });
    }
})  



module.exports ={createTarefa}