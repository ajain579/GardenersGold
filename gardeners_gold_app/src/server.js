const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/submit', (req, res) => {
    const { size, userInput } = req.body;
    console.log(`Size: ${size}, User Input: ${userInput}`);
    res.send('Data received');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});