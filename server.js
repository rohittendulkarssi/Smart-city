// server.js
const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = 3001; // You can change the port as needed

app.use(express.json());

app.get('/fetch-content', async (req, res) => {
  try {
    const response = await fetch('https://mos.raseel.city:8082/index.html');
    const htmlContent = await response.text();
    console.log(htmlContent); // Log the fetched content
    res.send(htmlContent);
  } catch (error) {
    console.error('Error fetching content:', error);
    res.status(500).send('Error fetching content');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
