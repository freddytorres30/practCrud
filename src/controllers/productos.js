const fs = require('fs').promises;

const getAllproductos = async (req, res) => {
    try {
        const data = await fs.readFile('data.json', 'utf8');
        console.log('contenido del archivo:', data);
        res.json(JSON.parse(data));
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los datos', error: error.message });
    }
};


const createProduct = async (req, res) => { 
    const { nombre, cantidad, price, description } = req.body;

    try {
        let productos;

        try {
            const data = await fs.readFile('data.json', 'utf8');
            productos = JSON.parse(data);
            if (!Array.isArray(productos)) {
                return res.status(500).json({ message: 'Formato de datos incorrecto en data.json' });
            }

        } catch (error) {
            productos = [];
        }

        const newProducto = {
            id: (productos.length + 1).toString(),
            nombre,
            cantidad,
            price,
            description,
        };

        productos.push(newProducto);

        const jsonData = JSON.stringify(productos, null, 2);

        await fs.writeFile('data.json', jsonData);

        res.status(201).json(newProducto);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el producto', error: error.message });
    }
};



module.exports = {
    getAllproductos,
    createProduct
}