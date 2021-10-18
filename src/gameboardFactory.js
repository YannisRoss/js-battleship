

let gameboardFactory = () => {
    let topsideSquaresArray = []
    let bottomsideSquaresArray = []

    let i = 0
    while (i < 100) {
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
    
    function addShip(ship, position, side, vertical = false) {

        position = parseInt(position)
        if (side == 'top') {

            let i = 0;
            while (i<ship.size){
                console.log(`adding ship to square ${position+i}`)
                topsideSquaresArray[position + i].ship = ship
                topsideSquaresArray[position +i].shipPart = i
                i++
            }
        }

        else {
            let i = 0;

            while (i<positions.size){
                this.bottomsideSquaresArray[positions[i]].ship = ship
                this.bottomsideSquaresArray[positions[i]].shipPart = i
                i++
            }
        }
    }

    function receiveAttack(square, side) {

        if (side == 'top') {

            if (topsideSquaresArray[square].ship){

                topsideSquaresArray[square].ship.hit(topsideSquaresArray[square].shipPart)
                topsideSquaresArray[square].isHit = true

            }

            else {
                topsideSquaresArray[square].isHit = true
            }
        }

        else {
            if (bottomsideSquaresArray[square].ship){

                bottomsideSquaresArray[square].ship.hit(bottomsideSquaresArray[square].shipPart)
                bottomsideSquaresArray[square].isHit = true

            }

            else {
                bottomsideSquaresArray[square].isHit = true
            }


        }

        
    }

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }


    function checkRemainingShips(side) {

        let shipsArray = []
        if (side == 'top') {
            let i = 0;
            while (i<topsideSquaresArray.length){

                if (typeof topsideSquaresArray[i].ship !== 'undefined' && !topsideSquaresArray[i].ship.isSunk){

                    shipsArray.push(topsideSquaresArray[i].ship)
                }

                i++
            }

        }


        else {
            let i = 0;
            while (i<bottomsideSquaresArray.length){

                if (!bottomsideSquaresArray[i].ship.isSunk){

                    shipsArray.push(bottomsideSquaresArray[i].ship)
                }

                i++
            }

      


        }

        if (shipsArray.length > 0) {        
            shipsArray = shipsArray.filter(onlyUnique)
            return shipsArray.length
        }

    }

    return {topsideSquaresArray, bottomsideSquaresArray, addShip, receiveAttack, checkRemainingShips}

}

module.exports = gameboardFactory