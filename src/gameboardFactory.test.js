let gameboardFactory = require('./gameboardFactory.js')
let shipFactory = require('./shipFactory')

it('receives a ship', () => {

    let gameboard = gameboardFactory();
    let ship = shipFactory(3,['a5','a6','a7'])
    gameboard.addShip(ship,[1,2,3],'top')
    gameboard.topsideSquaresArray[1].ship.hit(0)
    expect(gameboard.topsideSquaresArray[1].ship.isHit).toBe('true')
})