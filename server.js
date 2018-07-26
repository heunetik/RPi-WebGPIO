const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const args = process.argv.slice(2).shift();
let port = 3000;

if (args && Math.abs(args | 0) < 65536) {
    port = Math.abs(args | 0);
}


const ajax = require('./routes/ajax');

app.listen(port, () => {
    console.log(`listening on ${port}`);
});

app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', { title : 'Raspberry Web Gpio' });
});

app.post('/ajax', ajax);