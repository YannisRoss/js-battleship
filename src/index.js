import css from "./style.css";

let getSquareData = require('./getSquareData.js')
let shipFactory = require('./shipFactory.js')
let playerFactory = require('./playerFactory.js')
let gameboardFactory = require('./gameboardFactory.js')

console.log(`source index loaded`)


let container = document.getElementById('container')


let gameboard = gameboardFactory()

let topBoard = document.createElement('div')
topBoard.setAttribute('id','top-board')
  
    let i = 0;
    while  (i <gameboard.topsideSquaresArray.length) {

        let topSquareElement = document.createElement('div');
        topSquareElement.setAttribute('class','top-square')
        topSquareElement.setAttribute('id',`top-square-${i}`)
        topSquareElement.addEventListener('click', function () {

            gameboard.receiveAttack(getSquareData(topSquareElement).squareNumber,getSquareData(topSquareElement).squareSide)

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

        });
        bottomBoard.appendChild(bottomSquareElement)
        i++
    }

container.appendChild(topBoard)
container.appendChild(bottomBoard)