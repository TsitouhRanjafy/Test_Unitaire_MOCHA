/* ____ INTERFACES BDD
*/
// Importation de notre objet
var Percentage = require("../lib/Percentage");
// Importation de assert pour tester un si un valeur est celle de bien ce qu'on attend
var assert = require("assert");
// Intialisation du test percentage
describe('Percentage', function () {

    // Intialisation du sous-methode évolution
    describe('#evolution', function () {

        // permet d'indiquer une fonction à executer avant de tout le lancement de tout le test en bas
        before(function(){
         
        })


        it('should give an evolution', function () {
            // On dois travailler maintenant sur notre objet (importeo le objet)
            //test d'evolution sur 100 et 200
            // on test si l'evolution est à 100
            assert.equal(Percentage.evolution(100, 200), 100);
            assert.equal(Percentage.evolution(1, 1.5), 50);
        });
        it('should handle 0 evolution', function () {
            // test s'il est infinie l'evolution de 0 à 2
            assert.equal(Percentage.evolution(0, 2), Infinity);
        });
        it('should round values', function () {
            // test avec un arroundissement à 2 d'une evolution 
            assert.equal(Percentage.evolution(30, 124, 2), 313.33);
        });
    });

    // Initialisation de sous-methode wait
    describe('#wait',function(){

        // test si la fonction wait est definie
        it.skip('should exit',function(){
            assert.notEqual(Percentage.wait,undefined);
        })
        //
        it('should wait',function(done){
            // ici, on fait attendre 1 seconde
            // une fois 1s écouler on campare le test qui un valeur retournée par le callback , qui était 18
            Percentage.wait(1000,function(test){
                assert.equal(test,18);
                // pour dire que mon test a bien fini de s'executer
                // ou pour signaler que le test est terminé et que test == 18
                done();
            })
        })
        // pour qu'il en pending
        it('should draw unicorns')
    })
});
