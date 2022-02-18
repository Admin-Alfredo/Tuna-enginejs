import {
	renderImage,
	renderSprite,
	renderSpritesheet,
	renderRectangle,
	renderGraphic
} from './render'
import { 
	SPRITE,
	SPRITESHEET,
	RECTANGLE,
	GRAPHIC	
} from '../../const.js'

import '../../util'//pushFirst(any)

import {isEntity} from '../../util'

function World(vm, config){
	this._vm_ = vm
	
	
	/**@propriedade{width} 
		comprimento do canvas
	*/
	this.width = config.width
	
	
	/**@propriedade{height} 
		haltura do canvas
	*/
	this.height = config.height
	
	/**@propriedade{backgroundColor} 
		cor padão do fundo
	*/
	this.backgroundColor = config.backgroundColor
	
	
	/**@propriedade{componentList} 
		listas dos componentes a serem renderizados
	*/
	this.components = []
	
	
	/**@propriedade{reverse} 
		ordem de renderização dos componenetes
	*/
	this.reverse = false
}

World.prototype = {
	/**@metodo{centerX}
		retorna o centro horizontal do canvas
	*/
	centerX: function ()
	{
		
		return this.width / 2
	},
	/**@metodo{centerY}
		retorna o centro vertical do canvas 
	*/
	centerY: function ()
	{
		
		return this.height / 2
	},
	
	/**@metodo{add}
		adiciona um novo componenete no contexto,
		por padrão tem que enserir no inicio da lista.
	*/
	add: function(entity)
	{
		if(isEntity(entity))
		{
			this.components.push(entity)
		}else{
			throw new Error('[Tuna Erro] entity ivalida.')
		}
	},
	/**@metodo{remove}
		remove um component da lista.
	*/
	remove: function(entity)
	{
		if(isEntity(entity))
		{
			this.componentList = this.componentList.filter(comp => comp._id !== entity._id)
		}else{
			throw new Error('[Tuna Erro] entity ivalida.')
		}
	},
	
	/**@metodo{clearAll}
		remove todos os component da lista.
	*/
	clearAll: function(){
		this.componentList = []
	},
	
	/**@metodo{rendererComponent}
		renderiza todos os comonentes da lista no contexto2d.
	*/
	rendererComponent: function()
	{
		this._vm_.context2d.save()
		if(this._vm_.camera.active)
			this._vm_.context2d.translate(-this._vm_.camera.x, -this._vm_.camera.y)
		
		
		for(let i=0; i<this.components.length;i++)
		{
			const entity = this.components[i]
			
			if(isEntity(entity))
			{
				switch(entity.type){
					case RECTANGLE:
						renderRectangle(this._vm_, entity)
						break;
					case SPRITE:
						renderSprite(this._vm_, entity)
						break;
					case SPRITESHEET:
						renderSpritesheet(this._vm_, entity)
						break;
					case GRAPHIC: 
						renderGraphic(this._vm_, entity)
						break;
				}
			}else{ continue; }
			
		}
		this._vm_.context2d.restore()
	},
	
	/**@metodo{reverseOrderRendirizing}
		inverte a ordem de renderiação.
	*/
	reverseOrderRendirizing()
	{
		this.componentList.reverse() 
	}
}



World.prototype.constructor = World

export default World

