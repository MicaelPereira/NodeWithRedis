const config = require('./config/config');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const userApplication = require('./application/userApplication');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

app.get('/', function (req, res) {
    res.send('Hello World')
});

app.post('/cacheUser', userApplication.generateCache);
app.get('/getUser/:p1', userApplication.getUser)

app.listen(config.PORT, () => console.log('Estou ouvindo na porta ' + config.PORT));