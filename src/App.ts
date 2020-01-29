import * as Phaser from 'phaser';

export const App = () => {
  console.log('Inside App')
  // game
  const game: Phaser.Game = new MaintainableGame.Game();
}

// -------------------------------------------------------------------------


// -------------------------------------------------------------------------
window.onload = () => App();
