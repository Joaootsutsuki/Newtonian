const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;
const title = 'Newtonian';
const urlGraficos = '/';
const urlEquacoes = '/equacoes';
const urlSobre = '/sobre';

app.use(express.static('public'));
app.use('/images', express.static(__dirname + '/public/images'));
app.use('/style', express.static(__dirname + '/public/css'));
app.use('/scripts', express.static(__dirname + '/public/scripts'));

app.use(expressLayouts);
app.set('view engine', 'ejs');

app.get(urlGraficos, (req, res) => {
    res.render('content-graficos', { title });
});

app.get(urlSobre, (req, res) => {
    res.render('content-about', { title });
});

app.get(urlEquacoes, (req, res) => {
    res.render('content-equacoes', { title });
});

app.listen(port, () => console.info(`Executando na porta ${port}.`));
module.exports = { urlGraficos, urlEquacoes, urlSobre };
