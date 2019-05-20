const express = require ('express')
const router = express.Router()
const api_helper = require('../routes/API_helper')

/* GET: /vehicles/:id => Retorna os dados do veículo de id :id */
router.get('/:id', function(req, res) {
    var url = `http://swapi.co/api/vehicles/${req.params.id}`
    api_helper.make_API_call(url)
    .then(response => {
        ///TO DO
    })
    .catch(error => {
        res.status(500).send(error)
    })
})