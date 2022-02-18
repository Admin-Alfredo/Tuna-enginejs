import Entity from './entity'
function findObjectImage()
{
	const objectImage = this._vm_.load.getImageLoaded(this.name)
	if(objectImage)
	{
		return objectImage
	}else{
		return false
	}
}

function Sprite(vm, name, x, y, w, h){
	Entity.call(this,vm, x, y, w, h)
	this.name = name
	this.image = null
	this.type = 'sprite'
	
	const objectImage = findObjectImage.call(this)
	
	if(objectImage)
	{
		this.width = this.width ? this.width : objectImage.width
		this.height = this.height ? this.height : objectImage.height
		this.image = objectImage.img
		
	}else{
		
	}
}
Sprite.prototype = Object.create(Entity.prototype)
Sprite.prototype.setImage = function(image){
	if(image instanceof Image){
		this.image = image
	}else{
		throw new Error(`Image invalida no sprite ${this.name}`)
	}
}
Sprite.prototype.getImage =  function(){
	return this.image
}
Sprite.prototype.constructor = Sprite

export default Sprite