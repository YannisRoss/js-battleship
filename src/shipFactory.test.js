
let shipFactory = require('./shipFactory.js')

describe('Ship fully functional', () => {

    it('has the correct size', () => {
        expect(shipFactory(4).size).toBe(4)
    });

    it('starts off intact', () => {
        expect(shipFactory(3).segments.every(e => e == 'intact')).toBe(true)
    });
    it('gets hit', () => {
        let ship = shipFactory(5);
        ship.hit(4)
        expect(ship.segments[4]).toBe('hit')
    })
    it('sinks', () => {
        let ship = shipFactory(5);
        ship.hit(0)

        ship.hit(1)

        ship.hit(2)
        ship.hit(3)

        ship.hit(4)
        expect(ship.isSunk).toBe(true)
    })



  
})