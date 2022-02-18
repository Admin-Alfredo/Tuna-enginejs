
export const renderRectangle = function (_vm_, entity)
{
	const context = _vm_.getContext2d()
	context.fillStyle = entity.backgroundColor || 0x000
	context.fillRect(entity.x, entity.y, entity.width, entity.height)
}

export const renderGraphic = function (_vm_, entity)
{
	
}

export const renderImage = function (_vm_, entity)
{
	
}


export const renderSprite = function (_vm_, entity)
{
	const context = _vm_.getContext2d()
	context.drawImage(entity.getImage(), 0, 0, entity.width, entity.height, entity.x, entity.y, entity.width, entity.height)
}


export const renderSpritesheet = function (_vm_, entity)
{
	
}


