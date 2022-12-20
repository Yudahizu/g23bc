const express = require('express');
const Productos = require('../models/Productos');
const ProductosRouter = express.Router();

//Listar Personas
ProductosRouter.get("/", (req, res)=>{
    Productos.find()
        .then(datos=> res.json({productos: datos}))
        .catch(error => res.json({mensaje: error}));
});

// Guardar nueva persona
ProductosRouter.post("/", (req, res)=>{
    const producto = new Productos(req.body);
    producto.save()
        .then(datos=> res.json(datos))
        .catch(error => res.json ({mensaje: error}));
});

//Actualizar
ProductosRouter.patch("/", (req, res)=>{
    const producto = new Productos (req.body);
    Productos.updateOne ({_id:producto._id},producto)
        .then(datos=> res.json(datos))
        .catch(error => res.json ({mensaje: error}));
});

//Eliminar
ProductosRouter.delete("/", (req, res)=>{
    Productos.deleteOne({_id:req.params.id})
        .then(datos=> res.json(datos))
        .catch(error => res.json ({mensaje: error}));
});



module.exports = ProductosRouter;