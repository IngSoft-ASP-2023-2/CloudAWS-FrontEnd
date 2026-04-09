const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const API_URL = process.env.API_URL || 'http://localhost:3001';

app.get('/config.js', (req, res) => {
    res.type('application/javascript');
    res.send(`window.API_URL = "${API_URL}";`);
});

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Frontend app running at http://localhost:${port}`);
    console.log(`API URL configured: ${API_URL}`);
});
