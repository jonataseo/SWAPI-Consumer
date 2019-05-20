const express = require ('express')
const router = express.Router()
const api_helper = ('../routes/API_helper.js')

/* GET: /films => Retorna os dados de todos os filmes de SW */
router.get('/films', function(request, response, next)  {
    api_helper.make_API_call('https://swapi.co/api/films/')
    .then(res => {
        response.status(200).render('films', {res})
    })
    .catch(error => {
        res.status(500).send(error)
    })    
})

/* GET:/films/:id => Retorna os detalhes de um filme de SW */
router.get('/films/:id', function(request, response, next) {
    var url = `https://swapi.co/api/films/${request.params.id}`;
    api_helper.make_API_call(url)
    .then(res => {
        response.status(200).render('filmsDetail', {res})
    })    
    .catch(error => {
        response.status(500).send(error)
    })
});

module.exports = router;