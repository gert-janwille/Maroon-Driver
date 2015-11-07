import Lamp from './Lamp';
export default class LampGroup extends Phaser.Group { 
	constructor(game, parent) {
		super(game, parent);
		this.lamp = new Lamp(this.game, 0, 440);
		this.add(this.lamp);
		
		this.lamp.body.velocity.x = -200;  
	}
	reset(x,y){
		this.lamp.reset(0,440);
		this.x = x; 
		this.y = y;
		this.setAll('body.velocity.x', -200);
		this.hasScored = false;
		this.exists = true;
	}
	update(){
		if(!this.lamp.inWorld) { 
			this.exists = false;
		}
	}
}