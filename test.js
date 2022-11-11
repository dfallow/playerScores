// Your tests here
import assert from 'assert';
import getPlayerScores from "./playerScores.js";
import playersByScore from "./index.js";

describe('Players By Score Test', function() {

    it('check matches array length is not 0', async function() {
        const array = await getPlayerScores();
        assert.notEqual(array.length, 0);
    })

    it('check playersInOrder array length is not 0', function() {
        const array = playersByScore();
        assert.notEqual(array.length, 0);
    })

    it('check no names appear twice', function() {
        const array = playersByScore();
        for(let i=0; i < array.length; i++) {
            assert.notEqual(array[i], 0);
        }
    })
})

