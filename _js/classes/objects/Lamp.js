export default class Lamp extends Phaser.TileSprite{
	constructor(game, x, y, frame){
		super(game, x, y, 'lamp', frame);
		this.anchor.set(0.5,0.5);
		this.game.physics.arcade.enableBody(this);
		this.body.allowGravity = false;
		this.body.immovable = true;
	}
}