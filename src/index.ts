import Phaser from "phaser";
import Config from '@config/Config';
import GameScene from '@scenes/GameScene';
import BootScene from '@scenes/BootScene'
import PreloaderScene from '@scenes/PreloaderScene'
import TitleScene from '@scenes/TitleScene'
import OptionsScene from '@scenes/OptionsScene'
import CreditsScene from '@scenes/CreditsScene'

class Game extends Phaser.Game {
  constructor() {
    super(Config);
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Game', GameScene);
    this.scene.start('Game');
  }
}

window.game = new Game();
