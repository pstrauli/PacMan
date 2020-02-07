let xpos = 0;
const TILE_SIZE = 85;

document.addEventListener('DOMContentLoaded', () => {
  // console.log('it works');

  const pacManElm = document.querySelector('.entity--pac');

  document.addEventListener('click', () => {
    
    pacManElm.style.backgroundPositionX = `85px`;
  })

  document.addEventListener('keydown', (event) => {

    if(event.key === 'ArrowRight') {
      pacManElm.style.left = `${TILE_SIZE + xpos}px`;
      xpos += TILE_SIZE;
      
  
    }
  
  });




});
