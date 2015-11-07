export default class Lamp extends Phaser.Sprite { 
	constructor(game, x, y, frame) {
		super(game, x, y, 'lamp', frame);
		this.anchor.setTo(0.5, 0.5);
  		this.game.physics.arcade.enableBody(this);
		this.body.allowGravity = false;
		this.body.immovable = true;
	}
}