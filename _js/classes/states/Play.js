import Ground from '../objects/Ground';
import Car from '../objects/Car';

export default class Play extends Phaser.State{
	create(){
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.physics.arcade.gravity.y = 500;
		this.cursors = this.game.input.keyboard.createCursorKeys();

		this.background = this.game.add.sprite(0,0,'background');

		this.car = new Car(this.game, this.game.width/2,400,85,35);
		this.game.add.existing(this.car);

		this.ground = new Ground(this.game,0,495,600,110);
		this.game.add.existing(this.ground);
	}
	update(){
		this.game.physics.arcade.collide(this.car,this.ground);
		if(this.cursors.left.isDown){
			this.car.slow();
		}
		if(this.cursors.right.isDown){
			this.car.fast();
		}
		if(this.cursors.left.isDown){
			this.car.slow();
		}
	}
}