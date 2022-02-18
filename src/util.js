import Entity from './components/entity'

export const isEntity = function(entity){
	if(entity instanceof Entity)
		return true
	else
		return false
}

export const FactoryImage = function  (image)
{
	
	this.img = image || null
	
	this.name = image._name_
	
	this.width = image.width
	
	this.height = image.height
	
	this.frame = {
		width: image.frameWidth || 0,
		height: image.frameHeight || 0
	}
	
}
export const parseCameraTypeStrategy = function(type)
{
	if(typeof type === 'string')
	{
		switch (type.trim().toLowerCase()){
			case 'square'	:
				return 0
				break;
			case 'door'		:
				return 1
				break;
		}
	}else if(typeof type === 'number')
	{
		return  type
	}else {
		return 0
	}
}
Array.prototype.pushFirst = function(any){
   if(this.length === 0) this.push(any); return this;
   
	this.length = this.length + 1
	
	for(let i = this.length-1; i>=0 ;i--)
	{
		if(i === 0){ this[i] = any; break;}
		this[i] = this[i-1]
	}
   return this;
}


