const express = require('express')
const api_helper = require('./API_helper')
const app = express()
const port = 3000

app.set('view engine', 'pug');

app.get('/', function (req, res, next) {
    res.send('APP running');
})

app.get('/films', function(req, res, next)  {
    api_helper.make_API_call('https://swapi.co/api/films/')
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.send(error)
    })
})


app.listen(port, () => console.log(`App listening on port ${port}`))
