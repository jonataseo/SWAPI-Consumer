const express = require ('express')
const router = express.Router()
const api_helper = require('../routes/API_helper')


/* GET: /films => Retorna os dados de todos os filmes de SW */
router.get('/', function(req, res)  {    
    api_helper.make_API_call('https://swapi.co/api/films/')
    .then(response => {
        res.render('films', {response})
    })
    .catch(error => {
        res .status(500).send(error)
    })
})

/* GET:/films/:id => Retorna os detalhes de um filme de SW */
router.get('/:id', function(req, res) {
    var url = `https://swapi.co/api/films/${req.params.id}`;
    api_helper.make_API_call(url)
    .then(response => {
        res.status(200).render('filmsDetail', {response})
    })    
    .catch(error => {
        res.status(500).send(error)
    })
});

module.exports = router;