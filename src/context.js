import World from './modules/world'

function Context(config) {
	this.config = config || {}
	const {width, height, wrapper, world} = this.config
	
	const root = this
	this.canvas = document.createElement('canvas')
	this.context2d = this.canvas.getContext('2d')
	
	//CONFIGURANDO O [world]
	let worldWidth;
	let worldHeight;
	let worldBackgroundColor;
	const worldConfig = {}
	
	if(world !== undefined)
	{
		worldWidth = world.width ? world.width : 2 * 1024
		worldHeight = world.height ? world.height : 1024
		worldBackgroundColor = world.backgroundColor ? worldBackgroundColor : '#000'
		
	}
	Object.assign(worldConfig, 
	{ 
		height:				worldHeight,
		width: 				worldWidth,
		backgroundColor: 	worldBackgroundColor
	})
	this.world = new World(this, worldConfig)
	
	//CONFIGURANDO O [canvas] E [context2d]
	this.width = width ? width : 800
	this.height = height ? height : 500

	this.wrapper =  wrapper ? document.querySelector(wrapper) : document.body

	this.canvas.width = this.width
	this.canvas.height = this.height
	
	this.wrapper.appendChild(this.canvas)

	// salvando o estado inicial do contexto
	this.context2d.save() 
	this.context2d.fillStyle = 0x000
	this.context2d.fillRect(0, 0, this.world.width, this.world.height)
}


Context.prototype.getContext2d = function(){
	return this.context2d
}
Context.prototype.getCanvas = function(){
	return this.canvas
}
Context.prototype.clearContext = function(){
	this.context2d.fillStyle = this.world.backgroundColor || "#000" 
	this.context2d.fillRect(0, 0, this.world.width, this.world.height)
	
}
export default Context