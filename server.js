const express = require('express')

//rest object
const app = express()

//route
// URL => http://localhost:8080
app.get('/', (req, res) =>{
    return res.status(200).send("<h1> bem vindo ao servidor do restaurante</h1>");
});

//PORT
const PORT = 8080

//listen
app.listen(PORT, () => {
    console.log("servidor rodando");
});
