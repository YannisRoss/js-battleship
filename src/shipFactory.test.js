
let shipFactory = require('./shipFactory.js')

describe('Ship fully functional', () => {

    it('has the correct size', () => {
        expect(shipFactory(4).size).toBe(4)
    });

    it('starts off intact', () => {
        expect(shipFactory(3).positions.every(e => e == 'intact'))
    })



    let positions = []
      while (i < size) {
        positions.push('intact')
        i++
      }
    let isHit = false;
    let isSunk = false;

    let hit = (position) => console.log('ship hit');
})