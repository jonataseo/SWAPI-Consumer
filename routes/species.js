const express = require ('express')
const router = express.Router()
const api_helper = require('../routes/API_helper')

/* GET: /species/:id => Retorna os dados da espécie de id :id */
router.get('/:id', function(req, res) {
    var url = `http://swapi.co/api/species/${req.params.id}`
    api_helper.make_API_call(url)
    .then(response => {
        ///TO DO
    })
    .catch(error => {
        res.status(500).send(error)
    })
})

module.exports = router;