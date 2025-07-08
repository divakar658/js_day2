const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(8000, '0.0.0.0', () => {
  console.log('Server is running on http://192.168.1.5:8000');
});
