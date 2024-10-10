const express = require('express')
const cors= require('cors')
const app = express()
const fs = require("fs")
const path = require("path")
const productosRoute = require("./src/routes/routeProductos")


const PORT = process.env.PORT || 3000

const productos = require('./src/routes/routeProductos')
app.use('/api/productos', productos)
// habilitar CORS para todas las rutas 
app.use(cors())

//middlewares el npm de ezpress que realizamos
app.use(express.json())

//rutas, aqui se pueden agregar las demas rutas que iremos creando
app.use('/api/productos',productosRoute)

//servidor
app.listen(PORT, () => {
    console.log(`servidor corriendo en http://localhost:${PORT}`)
})