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
        type: String
    },
    precioVenta: {
        type: String
    },
    precioCompra: {
        type: String 
    },
    stockMinimo: {
        type: String 
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