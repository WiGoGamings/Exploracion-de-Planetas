const express = require('express');
const planetas = require('./planetas');

const app = express();
const PORT = 1000;

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static('public'));

// por si la quiere ver en json
app.get('/planetas', (req, res) => {
  res.json(planetas);
});

planetas.forEach(planeta => {
  console.log(`Nome: ${planeta.nome}`);
  console.log(`Imagem: ${planeta.imagem}`);
  console.log(`Descrição: ${planeta.descricao}`);
  console.log('-----------------------------');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
