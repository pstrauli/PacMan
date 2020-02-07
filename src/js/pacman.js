
class Pacman {
  constructor(x, y, maxX, maxY, stage) {
    this.pos = [TILE_SIZE * x, TILE_SIZE * y];
    this.mouth = 'open';
    this.maxX = maxX - TILE_SIZE;
    this.maxY = maxY - TILE_SIZE;
    this.stage = stage;
  }

  move(direction) {

    if (direction === 'right' && this.pos[0] < this.maxX) {

      let collisionItem = this.stage.collisionDetection(this.pos[0] + TILE_SIZE, this.pos[1]);

      if (collisionItem !== null && collisionItem.type === 'wall') {
        return;
      }

      this.element.style.left = `${this.pos[0] + TILE_SIZE}px`;
      this.pos[0] += TILE_SIZE;
      this.element.style.backgroundPositionY = '0px';

    } else if (direction === 'left' && this.pos[0] > 0) {

      let collisionItem = this.stage.collisionDetection(this.pos[0] - TILE_SIZE, this.pos[1]);

      if (collisionItem !== null && collisionItem.type === 'wall') {
        return;
      }

      this.element.style.left = `${this.pos[0] - TILE_SIZE}px`;
      this.pos[0] -= TILE_SIZE;
      this.element.style.backgroundPositionY = '-85px';

    } else if (direction === 'down' && this.pos[1] > 0) {

      let collisionItem = this.stage.collisionDetection(this.pos[0], this.pos[1] - TILE_SIZE);

      if (collisionItem !== null && collisionItem.type === 'wall') {
        return;
      }

      this.element.style.bottom = `${this.pos[1] - TILE_SIZE}px`;
      this.pos[1] -= TILE_SIZE;
      this.element.style.backgroundPositionY = '-170px';

    } else if (direction === 'up' && this.pos[1] < this.maxY) {

      let collisionItem = this.stage.collisionDetection(this.pos[0], this.pos[1] + TILE_SIZE);

      if (collisionItem !== null && collisionItem.type === 'wall') {
        return;
      }

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
      if (event.key === 'ArrowRight') {
        this.move('right');
      } else if (event.key === 'ArrowLeft') {
        this.move('left');
      } else if (event.key === 'ArrowDown') {
        this.move('down');
      } else if (event.key === 'ArrowUp') {
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