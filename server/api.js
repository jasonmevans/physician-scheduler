const express = require('express');
const app = express();
const port = 3002;

app.use((req, res, next) => {
  console.log("Incoming request for", req.url);
  res.set('Access-Control-Allow-Origin', '*');
  next();
})

app.listen(port, () => console.log(`Listening on ${port}`));
