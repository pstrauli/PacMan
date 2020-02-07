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
    const apple2 = new Entity(1, 4, 'apple');
    const apple3 = new Entity(5, 5, 'apple');
    const apple4 = new Entity(4, 0, 'apple');
    const apple5 = new Entity(6, 3, 'apple');
    const bomb = new Entity(1, 0, 'bomb');
    const wall2 = new Entity(2, 1, 'wall');
    const wall3 = new Entity(3, 2, 'wall');
    const wall4 = new Entity(3, 3, 'wall');
    const wall5 = new Entity(3, 4, 'wall');
    const wall6 = new Entity(3, 5, 'wall');
    const wall7 = new Entity(3, 1, 'wall');
    const wall8 = new Entity(2, 1, 'wall');
    const wall9 = new Entity(2, 2, 'wall');
    const wall10 = new Entity(2, 5, 'wall');
    const wall11 = new Entity(0, 1, 'wall');
    const wall12 = new Entity(0, 2, 'wall');

    pacman.mount(this.element);
    wall.mount(this.element);
    apple.mount(this.element);
    apple2.mount(this.element);
    apple3.mount(this.element);
    apple4.mount(this.element);
    apple5.mount(this.element);
    bomb.mount(this.element);
    wall2.mount(this.element);
    wall3.mount(this.element);
    wall4.mount(this.element);
    wall5.mount(this.element);
    wall6.mount(this.element);
    wall7.mount(this.element);
    wall8.mount(this.element);
    wall9.mount(this.element);
    wall10.mount(this.element);
    wall11.mount(this.element);
    wall12.mount(this.element);

    this.entities.push(wall);
    this.entities.push(apple);
    this.entities.push(bomb);
    this.entities.push(wall2);
    this.entities.push(wall3);
    this.entities.push(wall4);
    this.entities.push(wall5);
    this.entities.push(wall6);
    this.entities.push(wall7);
    this.entities.push(wall8);
    this.entities.push(wall9);
    this.entities.push(wall10);
    this.entities.push(wall11);
    this.entities.push(wall12);
    this.entities.push(apple2);
    this.entities.push(apple3);
    this.entities.push(apple4);
    this.entities.push(apple5);

    console.log(pacman);

    return this.element;
  }

  removeEntity(entity) {
    entity.unmount(this.element);
    let index = this.entities.indexOf(entity);
    this.entities.splice(index, 1);

    let scoreEl = document.querySelector('#score');
    scoreEl.textContent = Number(scoreEl.textContent) + 1;

  }

  mount(parent) {
    this.render();
    parent.appendChild(this.element);
  }
}