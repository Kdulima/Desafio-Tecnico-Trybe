const bodyParser = require('body-parser');
const express = require('express');

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));

const port = 3003;

server.listen(port, () => {
  console.log(`Backend is running on port ${port}.`);
});

module.exports = server;
