const mongoose = require('../db/ConectionDB');

const Usuarios = mongoose.Schema({
    usuario: {
        type: String, 
        unique: true,
        required:true
    },
    clave: {
        type: String 
    },
    rol: {
        type: String,
        unique: true, 
    },
    estado: {
        type: String,
        unique: true 
    },
    persona: {
        _id: {
            type: String, 
        },
        correo: {
            type: String, 
            unique: true,
            required:true  
        }
    },
},{
        colection:"Usuarios",
        versionKey: false

});

module.exports = mongoose.model("Usuarios", Usuarios);