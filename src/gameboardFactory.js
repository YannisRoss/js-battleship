

let gameboardFactory = () => {
    let topsideSquaresArray = []
    let bottomsideSquaresArray = []

    let i = 0
    while (i < 50) {
        let square = {
            isHit: false,
            ship: undefined,
            shipPart: undefined
        }
        topsideSquaresArray.push(square)
        square = {
            isHit: false,
            ship: undefined
        }
        bottomsideSquaresArray.push(square)
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
    }

    return {topsideSquaresArray, bottomsideSquaresArray, addShip}



}

module.exports = gameboardFactory