const express = require('express');
const bodyParser = require('body-parser');
const routers = require('./routes/');

const app = express();
app.use(bodyParser.jason());
app.use('/', routers);

app.listen(3000, () => console.log('App Online...'));