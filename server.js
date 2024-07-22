const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

// Middleware pentru a parsa corpul cererilor de tip JSON
app.use(express.json());

// Endpoint-ul POST
app.post('/save', (req, res) => {
  const data = req.body;

  // Convertim obiectul JSON în string
  const dataString = JSON.stringify(data, null, 2);

  // Salvăm datele într-un fișier text
  fs.writeFile('data.txt', dataString, (err) => {
    if (err) {
      console.error('Eroare la scrierea în fișier', err);
      res.status(500).send('A apărut o eroare la salvarea datelor.');
    } else {
      console.log('Datele au fost salvate cu succes.');
      res.send('Datele au fost salvate cu succes.');
    }
  });
});

// Serverul ascultă pe portul definit
app.listen(port, () => {
  console.log(`Serverul rulează la http://localhost:${port}`);
});