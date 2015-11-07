

let game = new Phaser.Game(600, 600, Phaser.AUTO);
game.state.add('Boot', Boot, false);
game.state.start('Boot');