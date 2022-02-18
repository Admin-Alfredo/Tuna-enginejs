const config = {
	width: 800,
	height: 500,
	world: { width: 1440 , height: 750},
	wrapper: "#app"
}
var rect;
var sprite;
var bar1;
var bar2;

const game = new Game(config, {
	load(){
		this.load.image('assets/img-4.png', "box")
		this.load.image('assets/img-2.png', "got")
		this.load.image('assets/img-5.jpg', "sheet")
		this.load.image('assets/person.png', "pessoa")
		this.load.image('assets/h.png', "explode")
		this.load.image('assets/fundo.jpg', "fundo")
		
	},
	create(){
		this.add.sprite('fundo', 0, 0)
		rect = this.add.rectangle(0, 100, 45, 45, "#fff")
		bar1 = this.add.rectangle(20, 10, 50, 50, "#00e")
		// bar2 = this.add.rectangle(this.world.width - 100, 10, 15, this.world.height, "#00e")
		
		// this.extend.entity(this, {
		// 	name: "player",
		// 	type: new Spritesheet(),
			
		// 	init: () => {
		// 		this.entity
		// 	}
		// })
		// this.entity.player
		
		
		
		//this.context2d.translate(100, 100)
		this.camera.create({ entity: rect, strategy: 'Square'})
		
		
		
	},
	update(){
		
		const {lineLeft, lineTop, lineRight, lineBottom} = this.camera.strategy
		
		console.log( lineLeft, lineTop)
		this.context2d.beginPath()
		this.context2d.strokeStyle = 'red'
		this.context2d.strokeWidth = 5
		this.context2d.moveTo(lineLeft, lineTop)
		this.context2d.lineTo(lineRight, lineTop)
		
		this.context2d.stroke()
		this.context2d.closePath();
		this.camera.strategy.update()
		
		rect.enablePhysics()
		const cursor = this.keyboard.cursorKey()
		rect.velocity.x = 0
		rect.velocity.y = 0
		if(cursor.right && !cursor.left)
		{
			rect.velocity.x = 8
		}else if(cursor.left && !cursor.right){
			rect.velocity.x = -8
		}
		if(cursor.up && !cursor.down)
		{
			rect.velocity.y = -8
		}else if(cursor.down && !cursor.up){
			rect.velocity.y = 8
		}
		this.physic.collide(rect, bar1, function(){
			console.log(rect, bar1)
		})
		// if(rect.x < bar1.x + bar1.width)
		// {
		// 	rect.velocity.x *= -1
		// }else if(rect.x + rect.width > bar2.x){
		// 	rect.velocity.x *= -1
		// }
		
		// if(rect.y <= 0){
		// 	rect.velocity.y *= -1
		// }
		// if(rect.y + rect.height > this.world.height){
		// 	rect.velocity.y *= -1
		// }
		
	}
})




































