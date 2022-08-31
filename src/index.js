const express = require('express');
const app = express();
const cors = require('cors');

// Middleware
app.use(cors()); // Evitar el CORS policy
app.use(express.json()); // Recibir y leer JSON
app.use(express.urlencoded({ extended: false })); // Recibir y leer de x-www-form-urlencoded

// Routes
app.get('/hello', (req, res) => {
  res.send({ msg: 'Hola Fares' });
});

// Server
app.listen(4000, () => {
  console.log('Server is listening on port 4000');
});
