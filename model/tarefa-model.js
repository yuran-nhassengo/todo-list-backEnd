const mongoose = require('mongoose');



const tarefaSchema =  mongoose.Schema({
  título: {
    type: String,
    required: true,
    trim: true
  },
  descrição: {
    type: String,
    trim: true
  },
  dataDeVencimento: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['pendente', 'em progresso', 'concluída'],
    default: 'pendente'
  },
 
  usuário: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  }
}, { timestamps: true });

const Tarefa = mongoose.model('Tarefa', tarefaSchema);

module.exports = Tarefa;
