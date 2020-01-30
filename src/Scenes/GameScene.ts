import Phaser from "phaser";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
    // load images
    this.load.image('logo', 'src/assets/logo.png');
  }

  create() {
    console.log(`You're inside GameScene!`)
    this.add.image(400, 300, 'logo');
    this.scene.start('Preloader');
  }
};
