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
        }
    }
});

module.exports = mongoose.model("Transacciones", Transacciones);