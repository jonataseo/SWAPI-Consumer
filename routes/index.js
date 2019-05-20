const express = require('express')
const router = express.Router()
const filmsRouter = ('/routes/films')

/* GET: rota padrão Index*/
router.get('/', function (req, res, next) {
    res.status(200).render('index', {title: 'A Simple SWAPI Consumer Using Node.js, Express.js and Pug.js', 
        message: 'It works!!(Apache fellings)', 
        values: []})
})

module.exports = router;