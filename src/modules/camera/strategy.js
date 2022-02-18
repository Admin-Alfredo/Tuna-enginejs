//NOTA: 
/*
* A _vm_ Tuna não precisa conhecer as strategy
* e sues atributos.
*/

import {isEntity} from '../../util'
function CameraStrategy (camera, entity)
{
	this.entity = entity
	
}

function Square(camera, entity)
{
	const {_vm_} = camera
	
	this.lineLeft 	= 0
	this.lineRight 	= 0
	this.lineTop 	= 0
	this.lineBottom	= 0
	
	this.entity = null
	
	if(isEntity(entity)) { this.entity = entity }
	
	this.update = function ()
	{	
		this.lineLeft 	= camera.x + (camera.width * camera.limits)
		this.lineRight 	= camera.x + (camera.width * (1 - camera.limits))
		this.lineTop 	= camera.y + (camera.height * camera.limits)
		this.lineBottom	= camera.y + (camera.height * (1 - camera.limits))
		
		
		
		if(this.entity)
		{
			
			if(entity.x < this.lineLeft && camera.isCollideWithWorldLeft()){
				
				camera.x = entity.x - (camera.width * camera.limits)
			}
			
			if(entity.x + entity.width > this.lineRight && !camera.isCollideWithWorldRight()){
				camera.x = (entity.x + entity.width) - (camera.width * (1 - camera.limits))
			}
			
			if(entity.y < this.lineTop){
				
				camera.y = entity.y - (camera.height * camera.limits)
			}
			
			if(entity.y + entity.height > this.lineBottom){
				camera.y = (entity.y + entity.height) - (camera.height * (1 - camera.limits))
			}		
		}
	}
	
	this.setEntity = function (entity)
	{
		this.entity = entity
	}
}
function Door()
{
	this.frontLeft 	= 0
	this.frontRight	= 0
	
	this.update = function ()
	{
		
	}
}

function Strategy ()
{
	this.create = function(type, camera, entity)
	{
		switch (type){
			case 0:
				return new Square(camera, entity)
				break;
			case 1:
				return new Door(camera, entity)
				break;
		}
	}
}

export default new Strategy()
