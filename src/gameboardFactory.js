

let gameboardFactory = () => {
    let topsideSquaresArray = []
    let bottomsideSquaresArray = []

    let i = 0
    while (i < 50) {
        let topSquare = {
            isHit: false,
            ship: undefined,
            shipPart: undefined
        }
        topsideSquaresArray.push(topSquare)
        let bottomSquare = {
            isHit: false,
            ship: undefined,
            shipPart: undefined

        }
        bottomsideSquaresArray.push(bottomSquare)
        i++
    }
    
    function addShip(ship, positions, side, vertical = false) {
        
        if (side == 'top') {

            let i = 0;
            while (i<positions.length){

                this.topsideSquaresArray[positions[i]].ship = ship
                this.topsideSquaresArray[positions[i]].shipPart = i
                i++
            }
        }

        else {
            let i = 0;

            while (i<positions.length){
                this.bottomsideSquaresArray[positions[i]].ship = ship
                this.bottomsideSquaresArray[positions[i]].shipPart = i
                i++
            }
        }
    }

    function receiveAttack(square, side) {

        if (side == 'top') {

            if (topsideSquaresArray[square].ship){
            topsideSquaresArray[square].ship.hit(topsideSquaresArray[square].ship.shipPart)

            }

            else {
                topsideSquaresArray[square].isHit = true
            }
        }

    }

    return {topsideSquaresArray, bottomsideSquaresArray, addShip, receiveAttack}

}

module.exports = gameboardFactory