const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./src/routes/api');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', apiRouter);

app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});
