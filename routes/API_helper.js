const request = require('request')

module.exports = {
    make_API_call : function(url){
        return new Promise((resolve, reject) => {
            request(url, { json: true}, (error, response, body) => {
                if (error) reject(error)
                resolve(body)
            });
        })
    },

    get_film_details : function(filmsDetail, result) {
        

        ///TO DO

        // Obtendo todas as rotas para dados do filme X
        const species = Object.values(filmsDetail.species)
        const starships = Object.values(filmsDetail.starships)
        const vehicles = Object.values(filmsDetail.vehicles)
        const characters = Object.values(filmsDetail.characters)
        const planets = Object.values(filmsDetail.planets)
        
        //Dados das espécies
        for(var specie of species)
        {
            request.get(specie, (error, response, body) => {
                if(error){
                    console.dir(error)
                }
                let json = JSON.parse(body)
                let a = json.name
                result.push(a)
            })
        } 
        //Dados das Naves Espaciais
        for(var starship of starships)
        {
            request.get(starship, (error, response, body) => {
                if(error){
                    console.dir(error)
                }
                //result.starship = JSON.parse(body)
            })
        }   

        //Dados dos Veículos
        for(var vehicle of vehicles)
        {
            request.get(vehicle, (error, response, body) => {
                if(error){
                    console.dir(error)
                }
                //result.vehicle = JSON.parse(body)
            })
        }   

        //Dados dos personagens
        for(var character of characters)
        {
            request.get(character, (error, response, body) => {
                if(error){
                    console.dir(error)
                }
                //result.character = JSON.parse(body)
            })
        }
        
        //Dados dos planetas
        for(var planet of planets)
        {
            request.get(specie, (error, response, body) => {
                if(error){
                    console.dir(error)
                }
                //result.planet = JSON.parse(body)
            })
        }         
    }
}
