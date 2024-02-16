
function Shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    let displayP = ''
  
    while (currentIndex > 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    for(let i=0; i<array.length; i++){
      displayP += array[i]
    }
  
    return displayP
  }

export default Shuffle