const con = require('../database/db');

exports.save = (req, res) => {
    nombre = req.body.nombre;
    rol = req.body.rol;
    con.query('insert into users set ?', { nombre: nombre, rol: rol }, (error, results) => {
        if (error) {
            console.error(error);
        } else {
            res.redirect('/');
        }
    })
}
exports.update = (req, res) => {
    id = req.body.id;
    nombre = req.body.nombre;
    rol = req.body.rol;
    con.query('update users set ? where id=?', [{ nombre: nombre, rol: rol }, id], (error, results) => {
        if (error) {
            console.error(error);
        } else {
            res.redirect('/');
        }
    })
}