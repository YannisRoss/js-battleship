

let shipFactory = (size) => {
 
    let segments = []
    let i = 0;

      while (i < size) {
        segments.push('intact')
        i++
      }
    let isHit = false;
    let isSunk = false;

    function hit(position){
        segments[position] = 'hit';
        this.isHit = true
        if (segments.every(e => e == 'hit')){
            this.isSunk = true;
        }
    }

  
       
        
    
    return { segments, size, isHit, isSunk, hit };
  };
  

  module.exports = shipFactory

