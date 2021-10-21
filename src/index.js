import css from "./style.css";

let getSquareData = require('./getSquareData.js')
let shipFactory = require('./shipFactory.js')
let playerFactory = require('./playerFactory.js')
let gameboardFactory = require('./gameboardFactory.js')

console.log(`source index loaded`)


let container = document.getElementById('container')

let newGameButtonsDiv = document.createElement('div')
newGameButtonsDiv.setAttribute('id', 'new-game-btns-div')
    let newCPUGameButton = document.createElement('button')
    newCPUGameButton.setAttribute('class', 'new-game-btn')
    newCPUGameButton.innerHTML = 'Play vs CPU'
    newCPUGameButton.addEventListener('click', function () {

        newGame('cpu')
    })
    let newLocalGameButton = document.createElement('button')
    newLocalGameButton.setAttribute('class', 'new-game-btn')
    newLocalGameButton.innerHTML = 'Play local'
    newLocalGameButton.addEventListener('click', function () {

        newGame('local')
    })

    newGameButtonsDiv.appendChild(newCPUGameButton)
    newGameButtonsDiv.appendChild(newLocalGameButton)

container.appendChild(newGameButtonsDiv)


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
                if (bottomTurn) {return}
               


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
                        changeTurn()
                    }
                    else {alert('ships cannot overlap')}

                    


                }
                else {
                    if (bottomTurn) {return}
                    
                    if (gameboard.topsideSquaresArray[getSquareData(topSquareElement).squareNumber].ship == undefined){
                        gameboard.addShip(topShipsArray[0],getSquareData(topSquareElement).squareNumber,'top')
                        topShipsArray.shift()
                        console.log('ship added. ships to add: '+topShipsArray.length )
                        changeTurn()
                    }
                    else {alert('ships cannot overlap')}

                    if (topShipsArray.length == 0) { topPlacingShips = false }
                }
                


                
            }
            else {
                if (topTurn) {return}
                changeTurn()
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
                if (topTurn) {return}
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
                    changeTurn()


                }
                else {
                    if (topTurn) {return}
                    
                    if (gameboard.bottomsideSquaresArray[getSquareData(bottomSquareElement).squareNumber].ship == undefined){

                        gameboard.addShip(bottomShipsArray[0],getSquareData(bottomSquareElement).squareNumber,'bottom')
                        bottomShipsArray.shift()
                        console.log('ship added. ships to add: '+bottomShipsArray.length )
                        changeTurn()
                    }
                    else {alert('ships cannot overlap')}


                            if (bottomShipsArray.length == 0) { bottomPlacingShips = false }
                        }
                        


                
            }
            else {
                if (bottomTurn) {return}
                changeTurn()
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

let topTurn = true
let bottomTurn = false

let moveAnnouncer = document.createElement('div')
    moveAnnouncer.setAttribute('id','move-announcer')
    moveAnnouncer.innerHTML = `Let's begin! Top player, place your first ship.`// Ships left to place: ${topShipsArray.length} and ${bottomShipsArray.length}`
    container.appendChild(moveAnnouncer)

function newGame(mode) {
    if (mode =='cpu') {
        let topPlayer = playerFactory('CPU')
        let bottomPlayer = playerFactory('Human')
    }
    else {
        let topPlayer = playerFactory('TopPlayer')
        let bottomPlayer = playerFactory('BottomPlayer')
    }
    

}

function changeTurn() {
    topTurn = !topTurn
    bottomTurn = !bottomTurn
    console.log(`top playing: ${topTurn}`)

    if (topPlacingShips || bottomPlacingShips) {

        if (topTurn) {
            moveAnnouncer.innerHTML = 'Top player placing ship'
        }
        else {
            moveAnnouncer.innerHTML = 'Bottom player placing ship.'
    
        }
    }
    
    if (!topPlacingShips && !bottomPlacingShips){
        if (topTurn) {
            moveAnnouncer.innerHTML = 'Top player, sink the enemy ships!'
        }
        else {
            moveAnnouncer.innerHTML = 'Bottom player, sink the enemy ships!'
    
        }
    }
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

 


}