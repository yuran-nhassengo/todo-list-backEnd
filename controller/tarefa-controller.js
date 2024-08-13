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

const listarTarefasPorUsuario = asyncHandler (async (req,res) =>{

      const userId = req.user.id

      try {

        const tarefas = await Tarefa.find({usuário:userId});

      if(!tarefas){
        return res.status(404).json({ message: "Nenhuma Tarefa encontrada." });
      }

      res.status(200).json(tarefas);

      } catch (error) {
        console.error(err);
        res.status(500).json({ error: 'Erro interno do servidor.' });
      }



})

const updateTarefa = asyncHandler (async(req,res) =>{

        const {tarefaId} = req.params

        try {

            if (!mongoose.Types.ObjectId.isValid(tarefaId)) {
                return res.status(400).json({ message: "ID da Tarefa inválido." });
            }

            const tarefa = await Tarefa.findById(tarefaId);

            if (!tarefa) {
                return res.status(404).json({ message: "Tarefa não encontrado" });
            }

            const updateTarefa = { ...req.body };

            const updatedTarefa = await Tarefa.findByIdAndUpdate(tarefaId, updateTarefa, { new: true});

       
            res.status(200).json({ message: "Tarefa atualizada com sucesso!",  updateTarefa });
            
        } catch (err) {
            console.error(err);
            res.status(500).json({ err: "Erro interno do servidor." });
        }


})



module.exports ={createTarefa,listarTarefasPorUsuario,updateTarefa}