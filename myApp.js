const express = require('express');
const app = express();
const helmet = require("helmet")
const serverless = require('serverless-http');














































module.exports = serverless(app);
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use(helmet())
app.use('/.netlify/functions/api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
