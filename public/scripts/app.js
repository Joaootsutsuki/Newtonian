const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;
const title = 'Newtonian';

app.use(express.static('public'));
app.use('/images', express.static(__dirname + '/public/images'));
app.use('/style', express.static(__dirname + '/public/css'));
app.use('/scripts', express.static(__dirname + '/public/scripts'));

app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('layout', 'index');
app.get('/graficos', (req, res) => {
    res.render('index', { title });
});

app.listen(port, () => console.info(`Executando na porta ${port}.`));
