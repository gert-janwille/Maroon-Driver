export default class Preload extends Phaser.State{
	preload() { 
		this.preloader = this.add.sprite(this.game.width/2,this.game.height/2, 'preloader');
		this.preloader.anchor.setTo(0.5, 0.5); 

		this.load.image('background', 'assets/background.jpg');
		this.load.image('car', 'assets/car.png');
		this.load.image('gameover', 'assets/gameover.png');
		this.load.image('get-ready', 'assets/get-ready.png');
		this.load.image('startButton', 'assets/start-button.png');
		this.load.image('tile', 'assets/tile.png');

		this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
	}
	onLoadComplete(){
		//this.game.state.start('Play');
		this.game.state.start('Menu');
	}

}