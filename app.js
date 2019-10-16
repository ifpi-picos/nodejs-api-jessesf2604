const express = require('express');
const bodyParser = require('body-parser');
const routers = require('./routes/');
const conectaMongoDB = require('./config/mongodb');

const app = express();
app.use(bodyParser.json());
app.use('/', routers);
conectaMongoDB();

app.listen(3000, () => console.log('App Online...'));