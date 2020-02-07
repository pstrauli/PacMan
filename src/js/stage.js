class Stage {
  constructor (width,height) {
    this.width = width * TILE_SIZE;
    this.height = height * TILE_SIZE;
  }

  render() {
    this.element = document.createElement('div');
    this.element.className = 'stage';
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;

    const pacman = new Pacman(1,1);

    pacman.mount(this.element);

    return this.element;
  }

  mount(parent) {
    this.render();
    parent.appendChild(this.element);
  }
}