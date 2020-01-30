import Phaser from "phaser";

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('logo', '../assets/logo.png')
  }

  create() {
    console.log(`You're inside BootScene!`)
    this.scene.start('Preloader')
  }
};
