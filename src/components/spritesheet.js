import Sprite from './sprite'

function SpriteSheet(vm, name, x, y, w, h){
	
		Sprite.call(this,vm,name, x, y, 0, 0)
		this.type = 'spritesheet'
		this.frame = {
			x: 0,
			y: 0,
			width: w,
			height: h
		}
		this.stepAnimateHorizontal = 0
		this.stepAnimateVertical = 0
		this.velocityAnimationHorizontal = 0
		this.velocityAnimationVertical = 0
}
SpriteSheet.prototype = Object.create(Sprite.prototype, 
{
	setFrameX: function(fx){
		if(fx < this.getFrameHorizontal() && fx >= 0){
			this.frame.x = fx
		}
	},
	
	setFrameY: function(fy){
		if(fy < this.getFrameVertical() && fy >= 0){
			this.frame.y = fy
		}
	},
	
	setFrame: function(f){
		const _frameXY = Array.isArray(f) ? f : [this.frame.x, this.frame.y]
		if(fx < this.getFrameHorizontal() && _frameXY[0] !== undefined)
			this.frame.x = _frameXY[0]
		if(fx < this.getFrameVertical() && _frameXY[1] !== undefined)
			this.frame.x = _frameXY[1]
	},
	
	getFrameHorizontal: function(){
		return (this.getWidth() / this.frame.width) - 1
	},
	
	getFrameVertical: function(){
		return (this.getHeight() / this.frame.height) - 1
	},
	
	getTotalFrame: function(){
		return this.getFrameHorizontal() * this.getFrameVertical()
	},
	
	nextFrameHorizontal: function(){
		this.frame.x += 1
	},
	
	nextFrameVertical: function(){
		this.frame.y += 1
	},
	
	previewFrameHorizontal: function(){
		this.frame.x -= 1
	},
	
	previewFrameVertical: function(){
		this.frame.y -= 1
	},
	
	fastFrameHorizontal: function(){
		this.frame.x = 0
	},
	
	lastFrameHorizontal: function(){
		this.frame.x = this.getFrameHorizontal()
	},
	
	fastFrameVertical: function(){
		this.frame.y = 0
	},
	
	lastFrameVertical: function(){
		this.frame.y = this.getFrameVertical()
	},
	
	animateHorizontal: function(aniVelocity=0, infinity=false){
		// aniVelocity = 10
		if(this.velocityAnimationHorizontal === aniVelocity){
			if(this.stepAnimateHorizontal < this.getFrameHorizontal()){
				this.nextFrameHorizontal();
				
				this.stepAnimateHorizontal++;
			}else{
				if(infinity){
					this.fastFrameHorizontal();
					this.stepAnimateHorizontal = 0
				}else{
					this.lastFrameHorizontal();
					
				}
			} 
			this.velocityAnimationHorizontal = 0;
		}
		this.velocityAnimationHorizontal++;	
	},
	
	animateVertical: function(aniVelocity=0, infinity=false){
		// aniVelocity = 10
		if(this.velocityAnimationVertical === aniVelocity){
			if(this.stepAnimateVertical < this.getFrameVertical()){
				this.nextFrameVertical();
				
				this.stepAnimateVertical++;
			}else{
				if(infinity){
					this.fastFrameVertical();
					this.stepAnimateVertical = 0
				}else{
					this.lastFrameVertical();
					
				}
			} 
			this.velocityAnimationVertical = 0;
		}
		this.velocityAnimationVertical++;	
	}
	
})

SpriteSheet.prototype.constructor = SpriteSheet

export default SpriteSheet



/*
this.isRenderer(function(){
			context.drawImage(this.getImage(), 
								this.frame.width * this.frame.x,
								this.frame.height * this.frame.y,
								this.frame.width, this.frame.height,
								this.getX(), this.getY(),
								this.frame.width, this.frame.height)
		})
*/