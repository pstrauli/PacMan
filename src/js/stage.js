class Stage {
  constructor(width, height) {
    this.width = width * TILE_SIZE;
    this.height = height * TILE_SIZE;
    this.entities = [];
  }

  collisionDetection(x, y) {

    /*  x = x * TILE_SIZE;
     y = y * TILE_SIZE; */
    let isFound = false;
    let foundEntity = '';

    this.entities.forEach((entity, index) => {
      if (entity.pos[0] === x && entity.pos[1] === y) {
        isFound = true;
        foundEntity = entity;
      }
    });

    if (isFound === true) {
      console.log(foundEntity);
      return foundEntity;
    } else {
      console.log('null');
      return null;
    }
  }

  render() {
    this.element = document.createElement('div');
    this.element.className = 'stage';
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;

    const pacman = new Pacman(1, 1, this.width, this.height, this);
    const wall = new Entity(0, 1, 'wall');
    const apple = new Entity(1, 2, 'apple');
    const bomb = new Entity(1, 0, 'bomb');
    const wall2 = new Entity(2, 1, 'apple');

    pacman.mount(this.element);
    wall.mount(this.element);
    apple.mount(this.element);
    bomb.mount(this.element);
    wall2.mount(this.element);

    this.entities.push(wall);
    this.entities.push(apple);
    this.entities.push(bomb);
    this.entities.push(wall2);

    console.log(pacman);



    return this.element;
  }

  mount(parent) {
    this.render();
    parent.appendChild(this.element);
  }
}