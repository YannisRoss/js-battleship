let gameboardFactory = require('./gameboardFactory.js')
let shipFactory = require('./shipFactory')

it('receives a ship', () => {

    let gameboard = gameboardFactory();
    let ship = shipFactory(3)
    gameboard.addShip(ship,1,'top')
    gameboard.topsideSquaresArray[1].ship.hit(0)
    expect(gameboard.topsideSquaresArray[1].ship.isHit).toBe(true)

})


it('receives a missed attack', () => {

    let gameboard = gameboardFactory();
    let ship = shipFactory(3)
    gameboard.addShip(ship,1,'top')
    gameboard.receiveAttack(5, 'top')
    expect(gameboard.topsideSquaresArray[5].isHit).toBe(true)

})

it('receives an accurate attack', () => {

    let gameboard = gameboardFactory();
    let ship = shipFactory(3)
    gameboard.addShip(ship,1,'top')
    gameboard.receiveAttack(2, 'top')
    expect(gameboard.topsideSquaresArray[2].isHit && ship.isHit).toBe(true)

})

it('calculates remaining ships', () => {
    let gameboard = gameboardFactory();
    let ship = shipFactory(3)
    let ship2 = shipFactory(4)

    gameboard.addShip(ship,1,'top')
    gameboard.addShip(ship2,11,'top')

    expect(gameboard.checkRemainingShips('top')).toBe(2)

})

it('correctly logs destroyed ships', () => {

    let gameboard = gameboardFactory();
    let ship = shipFactory(3)
    let ship2 = shipFactory(4)

    gameboard.addShip(ship,1,'top')
    gameboard.addShip(ship2,11,'top')

    gameboard.receiveAttack(1, 'top')
    gameboard.receiveAttack(2, 'top')
    gameboard.receiveAttack(3, 'top')
    
    expect(ship.isSunk).toBe(true)
})