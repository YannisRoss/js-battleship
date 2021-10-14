

let shipFactory = (size) => {
 

    let positions = []
    let i = 0;

      while (i < size) {
        positions.push('intact')
        i++
      }
    let isHit = false;
    let isSunk = false;

    function hit(position){
        positions[position] = 'hit';
        this.isHit = true
        if (positions.every(e => e == 'hit')){
            this.isSunk = true;
        }
    }

  
       
        
    
    return { positions, size, isHit, isSunk, hit };
  };
  

  module.exports = shipFactory

