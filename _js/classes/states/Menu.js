export default class Menu extends Phaser.State{
	create(){
		this.bgGroup = this.game.add.group();
		
		this.background = this.game.add.tileSprite(0, 0, 600, 600, 'background');
		this.background.autoScroll(-100, 0);
		this.bgGroup.add(this.background);
		
		this.ground = this.game.add.tileSprite(0,495,600,110,'tile');
		this.ground.autoScroll(-150, 0);
		this.bgGroup.add(this.ground);
		
		this.car = this.game.add.sprite(this.game.width/2 -100,465,'car');
		this.game.add.text(this.game.world.centerX-160,90,"Maroon",{
			font:'100px minecraft',
			fill:'#fffff0',
			align:'center'
		});
		this.game.add.text(this.game.world.centerX-100,190,"Driver",{
			font:'100px minecraft',
			fill:'#fffff0',
			align:'center'
		});

		this.startButton = this.game.add.button(this.game.width/2,this.game.height/2+80, 'startButton', this.startClick, this);
		this.startButton.anchor.setTo(0.5,0.5);
	}
	startClick(){
		this.game.state.start('Play');
	}
}