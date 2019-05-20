const express = require('express')
const app = express()
const port = 3000
const path = require('path')

const filmsRouter = require('./routes/films')
const indexRouter = require('./routes/index')

/* Carregando a view engine utilizada (Pug.js) */
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug');

/* Rotas usadas pelo app*/
app.use('/films', filmsRouter)
app.use('/', indexRouter)

/* Escutando na porta 3000 */
app.listen(port, () => console.log(`App listening on port ${port}`))

module.exports = app;