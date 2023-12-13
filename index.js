require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sanitizerR } = require('./app/middleware')
const app = express();
const router = require('./app/router');
const PORT = process.env.URL || 4000;

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.use(cors('*'))
app.use(sanitizerR)
app.use(router);

app.listen(PORT,()=>{
    console.log(`Go on : htpp://localhost:${PORT}`);
});