const express = require('express');
const app = express();

// Routes
app.get('/hello', (req, res) => {
  res.send({ msg: 'Hola Fares' });
});

// Server
app.listen(4000, () => {
  console.log('Server is listening on port 4000');
});
