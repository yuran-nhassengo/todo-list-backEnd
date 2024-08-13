const express = require('express');

const dotenv = require("dotenv").config();

const connectDB = require("./connect/database");

connectDB();

port = process.env.PORT;

const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

app.use(express.urlencoded({extended: false}));

app.use((req, res, next) => {
    req.user = { id: '1234567890' }; 
    next();
  });

  app.use('/api',require('./routes/tarefa-route'));


app.listen(port,() => console.log(`Listening on http://localhost:${port}`));

