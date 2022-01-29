const express = require("express");
const router = express.Router();

const con = require('./database/db');



router.get('/', (req, res)=>{
   con.query('select * from users', (error, results)=>{
       if (error){
            throw (error);
       }else{
            res.render('index', { results: results });//con el instanciador render vamos a visualizar los datos en nuestra plantilla
       }
   });
})
//ruta para crear un usuario
router.get('/create', (req, res) => {
     res.render('create');
})
//RUTA PARA ELIMINAR UN USUARIO
router.get('/delete/:id', (req, res) => {
     const id = req.params.id;
     con.query('delete from users where id=?', [id], (error, results) => {
          if (error) {
               throw (error);
          } else {
               res.redirect('/');//con el instanciador render vamos a visualizar los datos en nuestra plantilla
          }
     })
})

//ruta para editar un usuario
router.get('/edit/:id', (req, res) => {
     const id = req.params.id;
     con.query('select * from users where id=?', [id], (error, results) => {
          if (error) {
               throw (error);
          } else {
               res.render('edit', { results: results[0] });//con el instanciador render vamos a visualizar los datos en nuestra plantilla
          }
     })
})
const crud = require('./controllers/crud'); // Con esto mandamos a llamar al metodo save
const { append } = require("express/lib/response");
router.post('/save', crud.save);
router.post('/update', crud.update);
module.exports = router;


