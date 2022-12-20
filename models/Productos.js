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
        type: Int32Array 
    },
    precioVenta: {
        type: Int32Array
    },
    precioCompra: {
        type: Int32Array 
    },
    stockMinimo: {
        type: Int32Array 
    },
    descripcion: {
        type: String, 
        
    },
    unidadMedida: {
        type: String 
    }
},{
    colection:"Personas",
    versionKey: false

});

module.exports = mongoose.model("Productos", Productos);