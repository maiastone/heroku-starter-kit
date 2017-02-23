const express = require('express')
const app = express();
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const environment = process.env.NODE_ENV || 'development';
const port =  process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, '..', 'public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.locals.things = [{id: 1, title: 'title1'}, {id: 2, title: 'title2'}];

app.get('/', (req, res) => {
  // res.json({message: 'hurray!'})
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});

app.get('/api/things', (req, res) => {
  console.log(res);
  const things = app.locals.things;
  res.json(things);
});

app.post('/api/things', (req, res) => {
  const newThing = {
    id: Date.now(),
    title: req.body.title
  };
  if (!req.body.title) {
    return res.status(422).send({
      error: 'No new thing provided'
    });
  }
  app.locals.things.push(newThing);
  res.status(201).json(app.locals.things)
});

const server = http.createServer(app)
.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
