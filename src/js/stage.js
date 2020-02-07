class Stage {
  constructor(width, height) {
    this.width = width * TILE_SIZE;
    this.height = height * TILE_SIZE;
  }

  render() {
    this.element = document.createElement('div');
    this.element.className = 'stage';
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;

    const pacman = new Pacman(1, 1, this.width, this.height);
    const wall = new Entity(0, 1, 'wall');
    const apple = new Entity(0, 2, 'apple');
    const bomb = new Entity(1, 0, 'bomb');
    const wall2 = new Entity(2, 1, 'wall');

    pacman.mount(this.element);
    wall.mount(this.element);
    apple.mount(this.element);
    bomb.mount(this.element);
    wall2.mount(this.element);

    return this.element;
  }

  mount(parent) {
    this.render();
    parent.appendChild(this.element);
  }
}