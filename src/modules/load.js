import Module from '../configs/module'
import {FactoryImage} from '../util'

function handlerLoadImage (e)
{
	const objectImage = new FactoryImage(e.target)
	if(this.setImageLoaded(objectImage))
		this.loaded++;	
	else
		throw new Error('[Tuna Error] falha ao carregar image.')
	
}
function Load (vm){
	this._vm_ = vm

	this.imagensLoaded = []
	
	this.forLoad = 0
	
	this.loaded = 0

}
Load.prototype = {
	image: function(src, name)
	{
		if(src && src.trim() !== ""){
			const image = new Image()
			image.src = src
			image._name_ = name
			
			image.addEventListener('load', handlerLoadImage.bind(this))
			this.forLoad++;
		}
	},
	
	getImageLoaded: function(name)
	{
		return this.imagensLoaded.filter(item => item.name === name)[0]
	},
	
	setImageLoaded: function (objectImage)
	{
		if(objectImage && objectImage instanceof FactoryImage && objectImage.name.trim() !== "")
		{
			if(!this.getImageLoaded(objectImage.name))
			{
				this.imagensLoaded.push(objectImage)
				return true
			}else { 
				console.warn("[Tuna Wornning] Já existe uma imagens com o este nome");
				return false
			}
		}else{
			console.warn(`[Tuna Wornning] objectImage invalido!`);
			return false
		}
	}
}


export default Load;