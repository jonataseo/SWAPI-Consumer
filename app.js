const express = require('express')
const api_helper = require('./API_helper')
const app = express()
const port = 3000
const path = require('path')


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug');

app.get('/', function (req, res, next) {
    res.render('index', {title: 'A Simple SWAPI Consumer Using Node.js, Express.js and Pug.js', 
        message: 'It works!!(Apache fellings)', 
        values: []})
})



app.get('/films', function(req, res, next)  {
    api_helper.make_API_call('https://swapi.co/api/films/')
    .then(response => {
        res.render('films', {response})
    })
    .catch(error => {
        res.send(error)
    })    
})

app.get('/films/:id', function(req, res, next) {
    var url = `https://swapi.co/api/films/${req.params.id}`;
    api_helper.make_API_call(url)
    .then(response => {
        res.render('filmsDetail', {response})
    })
    .catch(error => {
        res.send(error)
    })
})


app.listen(port, () => console.log(`App listening on port ${port}`))
