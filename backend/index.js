
const express = require('express');
const server = express();
const mysql = require('mysql2');
const cors = require('cors');


const db = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : 'Temporal_03',
  database : 'agenda_veterinaria'
});

server.use(express.json());
server.use(cors());



//peticion post
server.post("/create", (req, res) => {
    
    const { nombre } = req.body;
    const { propietario } = req.body;
    const { email } = req.body;
    const { fecha } = req.body;
    const { sintomas } = req.body;
    

    let sql = "INSERT INTO pacientes (nombre, propietario, email, fecha, sintomas) VALUES (?,?,?,?,?)"
    db.query(sql, [nombre, propietario, email, fecha, sintomas], (err,result) =>{
        if (err) {
            console.log(err);
        }else{
            console.log(result);
        }
    })
});

server.get("/pacientes", (req, res) => {

    let sql = "SELECT * FROM pacientes";
    db.query(sql, (err,result) =>{
        if (err) {
            console.log(err);
        }else{
            res.send(result);
        }

    })
});

server.put("/edit", (req, res) => {
    const { id } = req.body;
    const { nombre } = req.body;
    const { propietario } = req.body;
    const { email } = req.body;
    const { fecha } = req.body;
    const { sintomas } = req.body;
    

    let sql = "UPDATE pacientes SET nombre = ?, propietario = ?, email = ?, fecha = ?, sintomas = ? WHERE id = ?";
    db.query(sql, [nombre, propietario, email, fecha, sintomas, id], (err,result) =>{
        if (err) {
            console.log(err);
        }else{

            res.send(result);
            console.log(sql)
        }
    })
});

server.delete("/delete/:id", (req,res) =>{
    const { id } = req.params;
    console.log(id+'id servidor')

    let sql = "DELETE FROM pacientes WHERE id = ?"
    db.query(sql, [id], (err,result) =>{err ? console.log(err) : res.send(result)})
    
})


server.listen(3001,()=>{
    console.log('Escuchando en el puerto 3001')
});

