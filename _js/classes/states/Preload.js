export default class Preload extends Phaser.State{
	preload() { 
		this.asset = this.add.sprite(this.game.width/2,this.game.height/2, 'preloader');
		this.asset.anchor.setTo(0.5, 0.5); 

		this.load.image('car', 'assets/car.png');
		this.load.image('gameover', 'assets/gameover.png');
		this.load.image('get-ready', 'assets/get-ready.png');
		this.load.image('start-button', 'assets/start-button.png');
		this.load.image('tile', 'assets/tile.png');
	}

}