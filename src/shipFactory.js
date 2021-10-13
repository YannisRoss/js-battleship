export let shipFactory;


shipFactory = (size) => {
    console.log('shipFactory initialized')
 

    let i = 0;
    let positions = []
      while (i < size) {
        positions.push('intact')
        i++
      }
    let isHit = false;
    let isSunk = false;

    let hit = (position) => console.log('ship hit');
    return { positions, size, isHit, isSunk, hit };
  };
  

  module.exports = shipFactory