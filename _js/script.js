import Boot from './classes/states/Boot';
import Preload from './classes/states/Preload';

let game = new Phaser.Game(600, 600, Phaser.AUTO);
game.state.add('Boot', Boot, false);
game.state.add('Preload', Preload, false);
game.state.start('Preload');