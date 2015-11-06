import Main from './classes/states/Main';

let game = new Phaser.Game(600, 600, Phaser.AUTO);
game.state.add('Main', Main, false);
game.state.start('Main');