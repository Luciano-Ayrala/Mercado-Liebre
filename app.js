// Requerir las dependencias
const  express = require('express');
const app = express();
const path = require('path');

// Poner a disposicion el contenido de la carpeta  'public' desde cualquier archivo / ruta
// app.use(express.static(path.resolve(__dirname, './public')));
app.use(express.static('public'));

const PORT = 3000;

app.listen( PORT, () => console.log(`Server up:  PORT:${PORT}`) );

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})

app.get('/product', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/product.html'))
})