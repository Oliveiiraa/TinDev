const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://SEUUSUÁRIOESENHADOMONGO@cluster0-n5nhk.mongodb.net/week10?retryWrites=true&w=majority',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

// Métodos HTTP: GET, POST, PUT, DELETE
// GET = Obter
// POST = Enviar
// PUT = Alterar
// DELETE = Deletar

// Tipo de de parâmetros:

// Query Params(GET): request.query (filtros, ordernação, paginação, ...)
// Route Params(PUT or DELETE): request.params (identificar um recurso na alteração ou remoção)
// Body(POST or PUT): request.body (Dados para criação ou alteração dos registros) 

// MongoDB (Banco não-relacional)



app.listen(3333);