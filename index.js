require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.URL || 4000;
const router = require('./app/router');

app.use(express.urlencoded({extended: true}));
app.use(router);

app.listen(PORT,()=>{
    console.log(`Go on : htpp://localhost:${PORT}`);
});