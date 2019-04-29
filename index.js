const Gun = require('gun');
const express = require('express');

const app = express();
app.use(Gun.serve);
app.use(express.static(__dirname));

const server = app.listen(process.env.PORT || 5000);
const gun = Gun({
  file: 'data',
  web: server,
});

app.get('/test', (req, res) => {
  res.send('Yay!');
});
