import css from "./style.css";

let getSquareData = require('./getSquareData.js')
let shipFactory = require('./shipFactory.js')
let playerFactory = require('./playerFactory.js')
let gameboardFactory = require('./gameboardFactory.js')

console.log(`source index loaded`)


let container = document.getElementById('container')

let newGameButton = document.createElement('button')
newGameButton.innerHTML = 'New Game'
newGameButton.addEventListener('click', function () {

    newGame()
})

container.appendChild(newGameButton)
let gameboard = gameboardFactory()
let shipsArray = undefined

let topBoard = document.createElement('div')
topBoard.setAttribute('id','top-board')
  
    let i = 0;
    while  (i <gameboard.topsideSquaresArray.length) {

        let topSquareElement = document.createElement('div');
        topSquareElement.setAttribute('class','top-square')
        topSquareElement.setAttribute('id',`top-square-${i}`)
        topSquareElement.addEventListener('click', function () {
            
            if (placingShips) {
                if (shipsArray == undefined) {
                    let i = 5;
                    console.log('generating ships')
                    shipsArray = []
                    while (i > 0) {
                        
                        shipsArray.push(shipFactory(i))
                        i--
                        console.log(`ship pushed: ${shipsArray[0]}`)
                    }
                    console.log('ships:' + shipsArray.length)
                    gameboard.addShip(shipsArray[0],getSquareData(topSquareElement).squareNumber,'top')

                }
                else if (shipsArray !== undefined && shipsArray.length > 0) {


                gameboard.addShip(shipsArray[0],getSquareData(topSquareElement).squareNumber,'top')
                shipsArray.shift()
                console.log('ship added. ships to add: '+shipsArray.length )

                }
                
                else {
                    placingShips = false
                    console.log('placingShips ' +placingShips)
                }

                
            }
            gameboard.receiveAttack(getSquareData(topSquareElement).squareNumber,getSquareData(topSquareElement).squareSide)
            updateGrid()

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

            gameboard.receiveAttack(getSquareData(bottomSquareElement).squareNumber,getSquareData(bottomSquareElement).squareSide)
            updateGrid()


        });
        bottomBoard.appendChild(bottomSquareElement)
        i++
    }

container.appendChild(topBoard)
container.appendChild(bottomBoard)


let placingShips = true


function newGame() {
    let topPlayer = playerFactory('CPU')
    let bottomPlayer = playerFactory('Human')
}

function updateGrid() {

    let i = 0;
    while (i<gameboard.topsideSquaresArray.length) {

        if (gameboard.topsideSquaresArray[i].ship !== undefined && gameboard.topsideSquaresArray[i].isHit) {
            document.getElementById(`top-square-${i}`).classList.add('struck-ship')

        }
        else if ((gameboard.topsideSquaresArray[i].ship == undefined && gameboard.topsideSquaresArray[i].isHit)) {
            document.getElementById(`top-square-${i}`).classList.add('struck-empty-square')

        }
        i++
    }

    i = 0;
    while (i<gameboard.bottomsideSquaresArray.length) {

        if (gameboard.bottomsideSquaresArray[i].ship !== undefined && gameboard.bottomsideSquaresArray[i].isHit) {
            document.getElementById(`bottom-square-${i}`).classList.add('struck-ship')

        }
        else if ((gameboard.bottomsideSquaresArray[i].ship == undefined && gameboard.bottomsideSquaresArray[i].isHit)) {
            document.getElementById(`bottom-square-${i}`).classList.add('struck-empty-square')

        }
        i++
    }


}