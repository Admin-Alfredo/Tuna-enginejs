import "./components"
import Context from './context'
import Landscape from './modules/sena'
import Keyboard from './modules/keyboard'
import Load from './modules/load'
import Add from './modules/add'
import Physic from './modules/physic'
import Camera from './modules/camera'

import { isEntity } from './util'

function Tuna (config, _gmi) 
{
	
	Context.call(this, config)
	
	const root = this;
	
	this.gmi = _gmi || {}
	 
	this.timer = null;
	 
	this.pause = false;
	 
	this.created = false;
	
	this.loading = true;
	 
	this.landscape = new Landscape(this)
	 
	this.keyboard = new Keyboard(this)
	 
	this.load = new Load(this)
	 
	this.add = new Add(this)
	
	this.camera = new Camera(this)
	
	this.physic = new Physic(this)
	
	if(this.gmi && this.gmi instanceof Object)
	{
		window.addEventListener('load', this.init.bind(this))
	}
}

Tuna.prototype = Object.create(Context.prototype)

Tuna.prototype.init = function()
{
	if(this.gmi && this.gmi.load instanceof Function)
	{
		this.gmi.load.call(this)
	}
	
	this.runnable()
}

Tuna.prototype.runnable = function()
{
	this.timer = window.requestAnimationFrame(this.runnable.bind(this))
	
	this.clearContext()
	
	if(this.load.forLoad === this.load.loaded)
	{
		//criando os componentes do jogo
		if(this.gmi.create && this.gmi.create instanceof Function && !this.created)
		{
			this.gmi.create.call(this)
			
			this.created = true
		}
		//atualindo o contexto2d
		if(this.gmi.update && this.gmi.update instanceof Function && !this.pause)
		{
			this.gmi.update.call(this)
		}
		
		//desenhando os componentes no context2d
		if(this.world.components.length !== 0)
		{	
			this.world.rendererComponent()
		}
	}else { this.loading = false; }
}
Tuna.prototype.setGmi = function(gmi){
	this.gmi = gmi;
}

Tuna.prototype.getWidth = function (){
	return this.getCanvas().width
}

Tuna.prototype.getHeight = function(){
	return this.getCanvas().height
}

Tuna.prototype.setBackground = function(color){
	let ctx = this.getContext2d()
	ctx.fillStyle = color;
	ctx.fillRect(0,0,this.getWidth(), this.getHeight())
}
Tuna.prototype.stop = function(){
	window.cancelAnimationFrame(this.timer)
}
export default Tuna