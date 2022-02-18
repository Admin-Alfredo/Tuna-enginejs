import Module from '../configs/module'
function Keyboard(self){
		this.self = self
		this.keyboardArrows = {
			left: false,
			right: false,
			up: false,
			down: false
		}
		this.keys = { ENTER: false }
		
		initEventListener.call(this);
	
	function initEventListener(){
		window.addEventListener('keydown', onKeydown.bind(this))
		window.addEventListener('keyup', onKeyup.bind(this))
	}
}
Keyboard.prototype =  
{
	cursorKey: function(){
		return this.keyboardArrows;
	}
}

function onKeydown(e){
	switch(e.keyCode){
		case 38:
			this.keyboardArrows.up = true;
			break;
		case 40:
			this.keyboardArrows.down = true;
			break;
		case 37:
			this.keyboardArrows.left = true;
			break;
		case 39:
			this.keyboardArrows.right = true;
			break;
		case 13: 
			this.keys.ENTER = true
			break;
	}
	return;
}
function onKeyup(e){
	switch(e.keyCode){
		case 38:
			this.keyboardArrows.up = false;
			break;
		case 40:
			this.keyboardArrows.down = false;
			break;
		case 37:
			this.keyboardArrows.left = false;
			break;
		case 39:
			this.keyboardArrows.right = false;
			break;
		case 13: 
			this.keys.ENTER = false;
			break;
	}
	return;
}

export default Keyboard;