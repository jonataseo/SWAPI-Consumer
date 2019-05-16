const request = require('request')

module.exports = {
    make_API_call : function(url){
        return new Promise((resolve, reject) => {
            request(url, { json: true}, (error, response, body) => {
                if (error) reject(error)
                resolve(body)
            });
        })
    }
}