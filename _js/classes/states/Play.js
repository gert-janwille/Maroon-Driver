import Ground from '../objects/Ground';

export default class Play extends Phaser.State{
	create(){
		console.log('hello play world');
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.physics.arcade.gravity.y = 500;

		this.background = this.game.add.sprite(0,0,'background');

		this.ground = new Ground(this.game,0,495,600,110);
		this.game.add.existing(this.ground);
	}
}