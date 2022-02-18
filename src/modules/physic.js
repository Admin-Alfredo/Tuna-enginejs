import Module from './module'
class Physic extends Module {
	constructor(self){
		super(self)
	}
	collide(entA, entB, callback){
		if(typeof entA === 'object' && typeof entB === 'object'){
			if(entA.getX() < entB.getX() + entB.getWidth() &&
				entA.getX() + entA.getWidth() >= entB.getX() &&
				entA.getY() < entB.getY() + entB.getHeight() &&
				entA.getY() + entA.getHeight() >= entB.getY()){
					if(callback && typeof callback === 'function')
						callback({ entA, entB })
				}		
		}
	}
	whoMoves(entA, entB){
		
	}
}
export default Physic;