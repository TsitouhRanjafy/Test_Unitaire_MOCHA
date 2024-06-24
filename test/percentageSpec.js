// Importation de notre objet
import Percentage from '../lib/Percentage.js'
// Importation d'assertion pour tester si un valeur est celle de bien ce qu'on attend
import { assert } from 'chai'
import { expect } from 'chai'

describe('Percentage',function(){

    // Initialisation du sous-methode évolution
    describe('#evolution',function(){

        // permet d'indiquer une fonction à executer avant de tout le lancement de tout le test en bas
        before(function(){

        })
        // test d'un evolution
        it('should give an evolution',function(){
            // On dois travailler maintenant sur notre objet 
            // test evolution
            assert.equal(Percentage.evolution(4,5.974,2),49.35);
            // utilisation de expect
            // 'on s'attent que Percentage.wait soit égal undefined'
            expect(Percentage.wait).be.equal(undefined)
            //'on s'attent que Percentage.evolution(1,1,1) soit un nombre
            expect(Percentage.evolution(1,1,1)).to.be.a('number');
            //'on s'attent que Percentage.evolution soit un fonction 
            expect(Percentage.evolution).to.be.a('function');
            // avec equal, on peut ecrire un message d'erreur
            expect(Percentage.evolution(4,2,1)).to.equal(-50,'l\'evaluation de 4 à 2 a un erreur');
        });
    })

    describe('#wait',function(){

        it ('exit',function(){
            // tester si evolution qui est dans l'objet Percentage est un fonction
            assert.isFunction(Percentage.evolution,"it's not a function");
            // tester si Percentage est un fonction
            assert.isObject(Percentage,"it's not a object");
        })
    })

    describe('#Example Test', () => {
        it('should pass', () => {
            const a = 'a'
            expect(a).to.be.a('string')
        });
      });
})
