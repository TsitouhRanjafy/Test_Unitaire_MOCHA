// Importation de notre objet
import Percentage from '../lib/Percentage.js'
// Importation d'assertion pour tester si un valeur est celle de bien ce qu'on attend
import { assert } from 'chai'

describe('Percentage',function(){

    // Initialisation du sous-methode évolution
    describe('#evolution',function(){

        // permet d'indiquer une fonction à executer avant de tout le lancement de tout le test en bas
        before(function(){

        })

        it('should give an evolution',function(){
            // On dois travailler maintenant sur notre objet 
            // test evolution
            assert.equal(Percentage.evolution(4,5.974,2),49.35);
        });
    })
})
