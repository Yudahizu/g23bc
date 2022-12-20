const mongoose = require('../db/ConectionDB');

const Transacciones = mongoose.Schema({
    
    usuario: {
        clave: {
            type: String 
        },
        rol: {
            type: String 
        },
        estado: {
            type: String 
        },
        persona: {
            id: {
                type: String 
            },
            correo: {
                type: String, 
                required: true,
                unique: true
            }
        },
        producto:{
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
        }
    }
});

module.exports = mongoose.model("Transacciones", Transacciones);