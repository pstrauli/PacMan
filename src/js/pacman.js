
class Pacman {
  constructor () {
    this.posX = 0;
    this.posY = 0;
    this.mouth = 'open';
  }

  move(direction) {
    const TILE_SIZE = 85;
    if (direction === 'right') {
      this.element.style.left = `${TILE_SIZE + this.posX}px`;
      this.posX += TILE_SIZE;
    } else if (direction === 'left') {
      this.element.style.right = `${TILE_SIZE + this.posX}px`;
      this.posX += TILE_SIZE;
    } else if (direction === 'down') {
      this.element.style.top = `${TILE_SIZE + this.posY}px`;
      this.posY += TILE_SIZE;
    } else if (direction === 'up') {
      this.element.style.bottom = `${TILE_SIZE + this.posY}px`;
      this.posY += TILE_SIZE;
    }  
  }


  render() {
    this.element = document.createElement('div');
    this.element.className = 'entity entity--pac pacboy-active-light';

    document.addEventListener('keydown', (event) => {
      if(event.key === 'ArrowRight') {
        this.move('right');
      }else if (event.key === 'ArrowLeft'){
        this.move('left');
      }else if (event.key === 'ArrowDown'){
        this.move('down');
      }else if (event.key === 'ArrowUp'){
        this.move('up');
      }
    });

    return this.element;
  }



  mount(parent) {
    this.render();
    parent.appendChild(this.element);
  }
}