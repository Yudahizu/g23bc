const mongoose = require('mongoose');

const conexion = "mongodb+srv://root:admin@cluster0.p4yc4am.mongodb.net/g23?retryWrites=true&w=majority";

mongoose.connect(conexion)
    .then(evento => console.log("conectando a mongo"))
    .catch(error => console.log(error));

module.exports = mongoose;