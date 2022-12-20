const express = require('express');
const Transacciones = require('../models/Transacciones');
const TransaccionesRouter = express.Router();

//Listar Personas
TransaccionesRouter.get("/", (req, res)=>{
    Transacciones.find()
        .then(datos=> res.json({transacciones: datos}))
        .catch(error => res.json({mensaje: error}));
});

// Guardar nueva persona
TransaccionesRouter.post("/", (req, res)=>{
    const transaccion = new Transacciones(req.body);
    transaccion.save()
        .then(datos=> res.json(datos))
        .catch(error => res.json ({mensaje: error}));
});

//Actualizar
TransaccionesRouter.patch("/", (req, res)=>{
    const transaccion = new Transacciones (req.body);
    Transacciones.updateOne ({_id:transaccion._id},transaccion)
        .then(datos=> res.json(datos))
        .catch(error => res.json ({mensaje: error}));
});

//Eliminar
TransaccionesRouter.delete("/", (req, res)=>{
    Transacciones.deleteOne({_id:req.params.id})
        .then(datos=> res.json(datos))
        .catch(error => res.json ({mensaje: error}));
});



module.exports = TransaccionesRouter;