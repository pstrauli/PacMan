
class Pacman {
  constructor (x, y) {
    this.pos = [TILE_SIZE * x, TILE_SIZE * y];
    this.mouth = 'open';
  }

  move(direction) {
    // const TILE_SIZE = 85;
    if (direction === 'right') {
      this.element.style.left = `${this.pos[0] + TILE_SIZE}px`;
      this.pos[0] += TILE_SIZE;
      this.element.style.backgroundPositionY = '0px';

    } else if (direction === 'left') {
      this.element.style.left = `${this.pos[0] - TILE_SIZE}px`;
      this.pos[0] -= TILE_SIZE;
      this.element.style.backgroundPositionY = '-85px';

    } else if (direction === 'down') {
      this.element.style.bottom = `${this.pos[1] - TILE_SIZE}px`;
      this.pos[1] -= TILE_SIZE;
      this.element.style.backgroundPositionY = '-170px';

    } else if (direction === 'up') {
      this.element.style.bottom = `${this.pos[1] + TILE_SIZE}px`;
      this.pos[1] += TILE_SIZE;
      this.element.style.backgroundPositionY = '-255px';
    }  
  }


  render() {
    this.element = document.createElement('div');
    this.element.className = 'entity entity--pac pacboy-active-light';
    this.element.style.left = `${this.pos[0]}px`;
    this.element.style.bottom = `${this.pos[1]}px`;
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