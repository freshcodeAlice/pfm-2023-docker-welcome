const http = require('http');
const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

app.use((req, res, next) => {
    res.status(200).send('Hello to you!')
})

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`App started on port ${PORT}`)
})