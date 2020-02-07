let xpos = 0;
const TILE_SIZE = 85;

document.addEventListener('DOMContentLoaded', () => {
  // console.log('it works');

  const pacman = new Pacman ();
  const app = document.querySelector('#app');
  pacman.mount(app);
});
