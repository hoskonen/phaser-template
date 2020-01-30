import Phaser from "phaser";

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  preload() {
  }

  create() {
    console.log(`You're inside TitleScene!`)
  }
};
