let playerFactory = (name) => {

    this.name = name;
    isCurrentPlayer = false;
   
    


    return {name, isCurrentPlayer}
}

module.exports = playerFactory
