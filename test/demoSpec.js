// importation de assert pour tester une valeur qu'il est bien celle que l'on attend
var assert = require('assert');


// Pour créer un test,il faut commencer par lui donner un nom 
// ici nom est 'Test de text' , et second paramètre un callback qui feront ensuit de different
describe('Test de text',function () {

    it('should do something',function (){
        var a = 3;
        assert.equal(a*2,6,'La multiplication n\'a pas foctionné');
    })
})
