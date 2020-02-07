
class Pacman {
  constructor () {
    this.posX = 0;
    this.mouth = 'open';
  }

  moveRight() {
    const TILE_SIZE = 85;
    const pacManElm = document.querySelector('.entity--pac');
    
  }

  render() {
    this.element = document.createElement('div');
    this.element.className = 'entity entity--pac pacboy-active-light';

    document.addEventListener('keydown', (event) => {
      if(event.key === 'ArrowRight') {

        this.element.style.left = `${TILE_SIZE + this.posX}px`;
        this.posX += TILE_SIZE;
        console.log(this.element)

        
      }
    });

    return this.element;
  }

  mount(parent) {
    this.render();
    parent.appendChild(this.element);
  }
}