const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const cors = require('cors');

const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', routes)

app.listen(port, () => {
    console.log('Listening on port ', port);
})