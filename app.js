
require('dotenv').config();
const express  = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido estatico
app.use( express.static('public'));

app.get('/', (req, res)=>{
    res.render('home', {
        nombre: ' Vayron Conchas',
        titulo: 'Curso de Node '
    });
})


app.get('/generic', (req, res)=>{
    res.render('generic', {
        nombre: ' Vayron Conchas',
        titulo: 'Curso de Node '
    });
})

app.get('/elements', (req, res)=>{
    res.render('elements', {
        nombre: ' Vayron Conchas',
        titulo: 'Curso de Node '
    });
})

app.get('*', function(req, res){
    res.sendFile('/old/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})