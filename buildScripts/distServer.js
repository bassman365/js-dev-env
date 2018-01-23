import express from 'express';
import path from 'path';
import open from 'open';
import commpression from 'compression';

const port = 3000;
const app = express();

app.use(commpression());
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err); //eslint-disable-line no-console
  } else {
    open('http://localhost:' +  port);
  }
});
