const mongoose = require('../db/ConectionDB');

const Productos = mongoose.Schema({
    nombre: {
        type: String 
    },
    codigo: {
        type: String,
        required: true,
        unique: true
    },
    cantidad: {
        type: Number
    },
    precioVenta: {
        type: Number
    },
    precioCompra: {
        type: Number 
    },
    stockMinimo: {
        type: Number 
    },
    descripcion: {
        type: String
    },
    unidadMedida: {
        type: String 
    }
},{
    colection:"Personas",
    versionKey: false

});

module.exports = mongoose.model("Productos", Productos);