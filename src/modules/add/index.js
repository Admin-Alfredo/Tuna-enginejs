import Module from '../module'
import Components from '../../components'


function Add (vm){
	this._vm_ = vm
}
Add.prototype.rectangle = function(x, y, w, h, c){
	const rectangle = new Components.Rectangle(this._vm_, x, y, w, h, c)
	this._vm_.world.add(rectangle)
	return rectangle
}

Add.prototype.sprite = function(name, x, y)
{	
	const sprite = new Components.Sprite(this._vm_, name, x, y)
	this._vm_.world.add(sprite)
	return sprite	
}

export default Add



/**class Add extends Module{
	#fastRenderSprite
	constructor(self){
		super(self)
		this.#fastRenderSprite = true;
		this.baseSprite = null
	}
	sprite(spr){ 
		//if(this.#fastRenderSprite){
			const baseSprite = this.classParent.load.get(spr.name)
		//}
			
		//if(this.baseSprite && this.#fastRenderSprite){
			spr.name = baseSprite.name
			spr.setImage(baseSprite.image)
			spr.setWidth(!spr.width ? baseSprite.width : spr.getWidth())
			spr.setHeight(!spr.height ? baseSprite.height : spr.getHeight())
			//this.#fastRenderSprite = false;
		//}else if(!this.baseSprite && this.#fastRenderSprite){ 
		//	console.warn('Não foi encontrado uma imagen com este nome: ', spr.name);
		//	this.classParent.stop()	
		//	return;
		//}else if(this.baseSprite  && !this.#fastRenderSprite){
			spr.render(this.classParent.getContext2d(), baseSprite)
		//}			
	}
	spriteSheet(spr){
		const baseSprite = this.classParent.load.get(spr.name)
		
		spr.name = baseSprite.name
		spr.setImage(baseSprite.image)
		spr.setWidth(baseSprite.width)
		spr.setHeight(baseSprite.height)
		
		spr.render(this.classParent.getContext2d(), baseSprite)
	}
	rectangle(rect){ rect.render(this.classParent.getContext2d())}
}
export default Add*/