import Entity from './entity'

function Rectangle(vm, x, y, w, h, c){
	
	Entity.call(this, vm,  x, y, w, h)
	this.type = 'rectangle'
	this.backgroundColor = c;
}

Rectangle.prototype = Object.create(Entity.prototype)
Rectangle.prototype.constructor = Rectangle;

export default Rectangle 