export default class Car extends Phaser.TileSprite { 
	constructor(game, x, y, width, height) {
		super(game, x, y, width, height, 'car');
		this.anchor.setTo(0.5, 0.5); 
		this.game.physics.arcade.enableBody(this);
		this.body.collideWorldBounds = true;
		this.body.bounce.y = 0.35;
	}
	jump(){
		console.log('jump');
	}
	slow(){
		console.log("slow");
	}
	fast(){
		console.log("fast");
	}
}
