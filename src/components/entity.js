import { v4 as uid } from '../configs/uid.js'
function Entity (vm, x=0, y=0, w=0, h=0){
	this.x = x;
	this.y = y;
	this.type = 'entity'
	this.width = w;
	this.height = h;
	this.velocity = {x: 0, y: 0}
	this.gravity = 0;
	this.aceleration = 0;
	this.alive = true;
	this._id = uid();
	this._vm_ = vm
	this.name = "<sem nome>"
	this.pivot = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	}
		
}
Entity.prototype = {
	getX: function(){
		return this.x;
	},
	getY: function(){
		return this.y;
	},
	getWidth: function(){
		return this.width;
	},
	getVelocityX: function(){
		return this.velocity.x
	},
	getVelocityY: function(){
		return this.velocity.y
	},
	getAceleration: function(){
		return this.aceleration
	},
	getHeight: function(){
		return this.height;
	},
	
	getGravity: function(){
		return this.gravity
	},
	
	setX: function(x){
		this.x = x
	},
	
	setY: function(y){
		this.y = y
	},
	
	setXY: function(z){
		this.x = z[0]
		this.y = z[1]
	},
	
	setWidth: function(w){
		this.width = w;
	},

	setHeight: function(h){
		this.height = h
	},
	
	setVelocityX: function(vx){
		this.velocity.x = vx
	},
	
	setVelocityY: function(vy){
		this.velocity.y = vy
	},
	
	setVelocity: function(v){
		this.velocity['x'] = v[0]
		this.velocity['y'] = v[1]
	},
	setAceleration: function(a){
		this.aceleration = a 
	},

	setGravity: function(g){
		this.gravity = g
	},
	
	destroy: function(){
		this._vm_.world.remove(this)
	},
	kill: function(){
		this.alive = false
	},
	enablePhysics: function(){
		this.velocity.x += this.getAceleration()
		this.x += this.getVelocityX() 
		this.velocity.y += this.getGravity()
		this.y += this.getVelocityY()
	}
	
}
Entity.prototype.constructor = Entity

export default Entity


