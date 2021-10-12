console.log(`source index loaded`)


const shipFactory = (size) => {
    let isHit = false;
    let isSunk = false;

    let hit = () => console.log('ship hit');
    return { size, isHit, isSunk, hit };
  };
  
