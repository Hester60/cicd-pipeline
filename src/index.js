import express from 'express';

const app = express();
const port = 3000;

// Middleware pour analyser les corps de requêtes JSON
app.use(express.json());

// Route de base
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Route pour additionner deux nombres
app.post('/sum', (req, res) => {
  const { a, b } = req.body;
  if (typeof a === 'number' && typeof b === 'number') {
    const result = sum(a, b);
    res.json({ result });
  } else {
    res.status(400).json({ error: 'Invalid input' });
  }
});

// Fonction pour additionner deux nombres
const sum = (a, b) => a + b;

let server;
if (process.env.NODE_ENV !== 'test') {
  server = app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });
}

export { app, server, sum };