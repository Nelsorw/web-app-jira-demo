const express = require('express');
const app = express();

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Homepage!');
});

// NEW homepage route for feature/homepage branch
app.get('/home', (req, res) => {
  res.send('This is the official Homepage route!');
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

