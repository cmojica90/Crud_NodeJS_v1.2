const express = require("express");

const app = express();

//VAMOS A DEFINIR UN MOTOR DE PLANTILLA EN ESTE CASO VAMOS A TRABAJAR EL MOTOR DE PLANTILLA
app.set('view engine', 'ejs');
//VAMOS A DEFINIR UN MOTOR DE PLANTILLA EN ESTE CASO VAMOS A TRABAJAR EL MOTOR DE PLANTILLA
//traemos el enrutador del archivo router.js
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', require('./router'));

/* app.get("/", (req, res) =>{
    res.json({
        saludo: "Hola Mundo"
    });
}) */


app.listen(3000, ()=>{
    console.log("Servidor Corriendo en http://localhost:3000")
})
