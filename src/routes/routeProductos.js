const express = require('express');

const router = express.Router()
const productos= require ('../controllers/productos')

// endpoints manuales
router.get('/', productos.getAllproductos)
router.post('/', productos.createProduct)


module.exports = router