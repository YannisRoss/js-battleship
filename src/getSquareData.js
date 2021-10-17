function getSquareData(square) {
    
    squareSide = square.id.slice(0,3)
    squareNumber = square.id.slice(-2)
        if (squareNumber[0] === '-') { squareNumber = squareNumber[1]} 
    console.log(`square ${squareSide} ${squareNumber} clicked`)

    return {squareSide, squareNumber}
}

module.exports = getSquareData
