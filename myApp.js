const express = require('express');
const app = express();
const helmet = require("helmet")













































module.exports = serverless(app);
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');

const ninetyDaysInSeconds = 90*24*60*60;
app.use(helmet({
  xPoweredBy: false,
  xFrameOptions: { action: "deny" },
  xContentTypeOptions: false,
  xDownloadOptions: false,
  xXssProtection: false,
  xDnsPrefetchControl: { allow: false },
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", 'trusted-cdn.com']
    }
  },
}))
app.use('/.netlify/functions/api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
