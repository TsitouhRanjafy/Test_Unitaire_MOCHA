/* ____ INTERFACES BDD
*  ____ REPORTER SPEC
*/
// Importation de notre objet
var Percentage = require("../lib/Percentage");
// Importation de assert pour tester un si un valeur est celle de bien ce qu'on attend
var assert = require("assert");
// Intialisation du test percentage
describe('Percentage', function () {
    // Intialisation du sous-methode évolution
    describe('#evolution', function () {
        it('should give an evolution', function () {
            // On dois travailler maintenant sur notre objet (importeo le objet)
            //test d'evolution sur 100 et 200
            // on test si l'evolution est à 100
            assert.default.equal(Percentage.evolution(100, 200), 100);
            assert.default.equal(Percentage.evolution(1, 1.5), 0);
        });
        it.only('should handle 0 evolution', function () {
            // test s'il est infinie l'evolution de 0 à 2
            assert.equal(Percentage.evolution(0, 2), Infinity);
        });
        it('should round values', function () {
            // test avec un arroundissement à 2 d'un evolution 
            assert.equal(Percentage.evolution(30, 124, 2), 313.33);
        });
    });
});
