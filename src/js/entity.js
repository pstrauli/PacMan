console.log('connected');

class Entity {
  constructor(x, y, type) {
    this.pos = [x * TILE_SIZE, y * TILE_SIZE];
    this.type = type;
  }

  render() {
    this.element = document.createElement('div');

    if (this.type === 'wall') {
      this.element.className = 'entity entity--wall';
    } else if (this.type === 'apple') {
      this.element.className = 'entity entity--apple';
    } else if (this.type === 'bomb') {
      this.element.className = 'entity entity--bomb';
    }

    this.element.style.left = `${this.pos[0]}px`;
    this.element.style.bottom = `${this.pos[1]}px`;

    return this.element;
  }

  unmount(parentElement) {
    parentElement.removeChild(this.element);
  }

  mount(parentElement) {
    this.render();
    parentElement.appendChild(this.element);
  }
}