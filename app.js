const express = require('express')
const app = express()
const port = 3000
const path = require('path')


const filmsRouter = require('./routes/films')
const indexRouter = require('./routes/index')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug');

app.use('/films', filmsRouter)
app.use('/', indexRouter)

app.listen(port, () => console.log(`App listening on port ${port}`))

module.exports = app;