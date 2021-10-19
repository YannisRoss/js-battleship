import css from "./style.css";

let getSquareData = require('./getSquareData.js')
let shipFactory = require('./shipFactory.js')
let playerFactory = require('./playerFactory.js')
let gameboardFactory = require('./gameboardFactory.js')

console.log(`source index loaded`)


let container = document.getElementById('container')

let newGameButton = document.createElement('button')
newGameButton.setAttribute('id', 'new-game-btn')
newGameButton.innerHTML = 'New Game'
newGameButton.addEventListener('click', function () {

    newGame()
})

container.appendChild(newGameButton)
let gameboard = gameboardFactory()
let topShipsArray = undefined
let bottomShipsArray = undefined

let boardsDiv = document.createElement('div')
boardsDiv.setAttribute('id','boards-div')
container.appendChild(boardsDiv)

let topBoard = document.createElement('div')
topBoard.setAttribute('id','top-board')
  
    let i = 0;
    while  (i <gameboard.topsideSquaresArray.length) {

        let topSquareElement = document.createElement('div');
        topSquareElement.setAttribute('class','top-square')
        topSquareElement.setAttribute('id',`top-square-${i}`)
        topSquareElement.addEventListener('click', function () {
            
            if (topPlacingShips) {


                if (topShipsArray == undefined) {
                    let i = 5;
                    console.log('generating ships')
                    topShipsArray = []
                    while (i > 0) {
                        
                        topShipsArray.push(shipFactory(i))
                        i--
                        console.log(`ship pushed: ${topShipsArray[0]}`)
                    }
                    console.log('ships:' + topShipsArray.length)


        
                    if (gameboard.topsideSquaresArray[getSquareData(topSquareElement).squareNumber].ship == undefined){
                        gameboard.addShip(topShipsArray[0],getSquareData(topSquareElement).squareNumber,'top')
                        topShipsArray.shift()
                        console.log('ship added. ships to add: '+topShipsArray.length )

                    }
                    else {alert('ships cannot overlap')}

                    


                }
                else {

                    if (gameboard.topsideSquaresArray[getSquareData(topSquareElement).squareNumber].ship == undefined){
                        gameboard.addShip(topShipsArray[0],getSquareData(topSquareElement).squareNumber,'top')
                        topShipsArray.shift()
                        console.log('ship added. ships to add: '+topShipsArray.length )

                    }
                    else {alert('ships cannot overlap')}

                    if (topShipsArray.length == 0) { topPlacingShips = false }
                }
                


                
            }
            else {
            gameboard.receiveAttack(getSquareData(topSquareElement).squareNumber,getSquareData(topSquareElement).squareSide)
            updateGrid()
            }
            

        });
        topBoard.appendChild(topSquareElement)
        i++
    }

let bottomBoard = document.createElement('div')
bottomBoard.setAttribute('id','bottom-board')

    i = 0;
    while  (i <gameboard.bottomsideSquaresArray.length) {

        let bottomSquareElement = document.createElement('div');
        bottomSquareElement.setAttribute('class','bottom-square')
        bottomSquareElement.setAttribute('id',`bottom-square-${i}`)
        bottomSquareElement.addEventListener('click', function () {

            if (bottomPlacingShips) {
                if (bottomShipsArray == undefined) {
                    let i = 5;
                    console.log('generating ships')
                    bottomShipsArray = []
                    while (i > 0) {
                        
                        bottomShipsArray.push(shipFactory(i))
                        i--
                        console.log(`ship pushed: ${bottomShipsArray[0]}`)
                    }
                    console.log('ships:' + bottomShipsArray.length)

                    
                    gameboard.addShip(bottomShipsArray[0],getSquareData(bottomSquareElement).squareNumber,'bottom')
                    bottomShipsArray.shift()

                }
                else {

                    if (gameboard.bottomsideSquaresArray[getSquareData(bottomSquareElement).squareNumber].ship == undefined){

                gameboard.addShip(bottomShipsArray[0],getSquareData(bottomSquareElement).squareNumber,'bottom')
                bottomShipsArray.shift()
                console.log('ship added. ships to add: '+bottomShipsArray.length )
                    }
                    else {alert('ships cannot overlap')}


                            if (bottomShipsArray.length == 0) { bottomPlacingShips = false }
                        }
                        


                
            }
            else {
            gameboard.receiveAttack(getSquareData(bottomSquareElement).squareNumber,getSquareData(bottomSquareElement).squareSide)
            updateGrid()
            }


        });
        bottomBoard.appendChild(bottomSquareElement)
        i++
    }

boardsDiv.appendChild(topBoard)
boardsDiv.appendChild(bottomBoard)


let topPlacingShips = true
let bottomPlacingShips = true


let moveAnnouncer = document.createElement('div')
    moveAnnouncer.setAttribute('id','move-announcer')
    moveAnnouncer.innerHTML = `Place ships.`// Ships left to place: ${topShipsArray.length} and ${bottomShipsArray.length}`
    container.appendChild(moveAnnouncer)

function newGame() {
    let topPlayer = playerFactory('CPU')
    let bottomPlayer = playerFactory('Human')
}

function updateGrid() {

    let i = 0;
    while (i<gameboard.topsideSquaresArray.length) {

        if (gameboard.topsideSquaresArray[i].ship !== undefined && gameboard.topsideSquaresArray[i].isHit) {
            document.getElementById(`top-square-${i}`).classList.add('struck-ship')
            console.log('grid ship struck')

        }
        else if ((gameboard.topsideSquaresArray[i].ship == undefined && gameboard.topsideSquaresArray[i].isHit)) {
            document.getElementById(`top-square-${i}`).classList.add('struck-empty-square')

        }
        i++
    }

    i = 0;
    while (i<gameboard.bottomsideSquaresArray.length) {
        console.log(gameboard.bottomsideSquaresArray[i].ship)
        if (gameboard.bottomsideSquaresArray[i].ship !== undefined && gameboard.bottomsideSquaresArray[i].isHit) {
            document.getElementById(`bottom-square-${i}`).classList.add('struck-ship')
            console.log('grid ship struck')
        }   
        else if ((gameboard.bottomsideSquaresArray[i].ship == undefined && gameboard.bottomsideSquaresArray[i].isHit)) {
            document.getElementById(`bottom-square-${i}`).classList.add('struck-empty-square')

        }
        i++
    }

    if (!topPlacingShips && !bottomPlacingShips){
        moveAnnouncer.innerHTML = 'Sink enemy ships!'
    }


}