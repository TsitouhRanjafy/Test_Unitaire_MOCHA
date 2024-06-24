// importation de request
import request from 'request'

const social = {
    test : "test1",
    // url de l'API
    twitter_url: "http://192.168.1.1/html/home.html",
    facebook_url: "http://graph.facebook.com",
    local_url:"http://192.168.1.1/html/home.html",
    // UN FONCTION QUI RETOURNE UN RPOMISE
    getTwitterCount : function(url){
        return new Promise((resolve,reject) =>{
            this.callAPI(this.local_url).then(function(result){
                resolve(result);
            })
        })
    },
    // un fonction qui retourne un promise
    callAPI: function(url){
        return new Promise(function(resolve,reject){
            request(url,(error,response,body) => {
                // Vérifiez s'il n'y a pas d'erreur 
                //et si le code de statut de la réponse est égal à 200 (ce qui signifie que la requête HTTP a réussi).
                if (!error && response.statusCode == 200){
                    // resolve  pour indiquer que la promesse a réussi
                    resolve(body)
                }else{
                    // reject pour indiquer qu'il y a eu une erreur
                    reject(error)
                }
            })
        })
    }
}

export default social