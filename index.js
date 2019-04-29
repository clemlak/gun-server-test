const Gun = require('gun');
const express = require('express');

const app = express();
app.use(Gun.serve);
app.use(express.static(__dirname));

const server = app.listen(3000);
const gun = Gun({
  file: 'data',
  web: server,
});

app.get('/test', (res, req) => {
  res.send('Yay!');
});
