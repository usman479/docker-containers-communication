const express = require('express');
const app = express();

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from Container 02! running the node js server' });
});

const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});