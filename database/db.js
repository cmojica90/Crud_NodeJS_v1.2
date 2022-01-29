const mysql = require('mysql');
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    passwowrd: '',
    database: 'test'
});

con.connect((error)=>{
    if(error){
        console.error("Error de conexión: "+error);
        return
    }else{
        console.log("Conecatado a la base de datos");
    }
});

module.exports = con;