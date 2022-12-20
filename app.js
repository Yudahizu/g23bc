const express = require('express');
const bodyParser = require ('body-parser');
const app = express();
const cors = require('cors');
const PersonasRouter = require('./routers/PersonasRouter');
const UsuariosRouter = require("./routers/UsuariosRouter");
const ProductosRouter = require('./routers/ProductosRouter');
const TransaccionesRouter = require('./routers/TransaccionesRouter');



app.use(cors());
app.use(bodyParser.json());

//PERSONAS
app.use("/personas", PersonasRouter);

// USUARIOS
app.use("/usuarios",UsuariosRouter)

// PRODUCTO
app.use("/productos", ProductosRouter);

//TRANSACCIONES
app.use("/transacciones", TransaccionesRouter);

app.listen(5000);
