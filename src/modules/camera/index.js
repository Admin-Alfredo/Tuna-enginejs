
import {parseCameraTypeStrategy} from '../../util'
import Strategy from './strategy'

/*
* para utilizar a camera o dev definira uma strategy 
* que sera implementada, definindo um comportamento
* continuo da camera.
*//*
*+ - - - - +			    + - - - - - - +
*|  CAMERA | - - - - -  ->  | CamStartegy |
*+ - - - - +                + - - - - - - +
*                                  |
*                                  |
*                   + - - - - - -- + -- - - - - +              
*                   |                           |
*                   |                           |
*             + - - - - - +               + - - - - - +
*             |   Square  |               |    Door   | 
*             + - - - - - +               + - - - - - +
*/
/*
* A CLASS CAMERA INSTANCIARA AS SUBCLASS [Square] ou [Door]
* DA CLASS ABSTRATA [CamStartegy] DEFININDO O COMPORTAMENTO PADRÃO 
* DA CAMERA.
* CADA UMA DAS SUBCLASS APLICARA ALGORITMO DEFERENTE.
* POR EXEMPLO:
*   ==========================STRAREGYS===========================
* - A CLASS [Square] DEFINIRA UM RECTANGULO EM VOLTA DO COMPONENTE
*   MUDANDO AS COORDENADAS (X, Y)DA CAMERA ASSIM QUE O COMPONENTE ULTRAPASSAR
*   OS LOMITES DEFINIDOS PELO RECTANGULO.
* - A CLASS [Door] DEFINIRA UMA LINHA RECTA VERTICAL OU HORIZONTAL, E 
*   AS COOREDENADAS (X, Y) DA CAMERA SERÃO ATUALIZADOS CASO O  COMPONENTE
*   SOBREPOEM OS SEU LIMITES.
*
*/

function Camera (vm, config)
{
	this.active = false
	
	this._vm_ = vm
	
	this.x = 0
	this.y = 0
	
	this.scale = 1
	
	this.width = 0
	this.height = 0
	
	this.limits = .25
	
	this.strategy = null;
	
}
Camera.prototype.constructor = Camera

Camera.prototype.create = function(_opts)
{
	this.active = true
	const opts = _opts || {}//{entity, width, height}
	
	this.width = opts.width || this._vm_.width
	this.height = opts.height || this._vm_.height
	
	if(opts.strategy == undefined){ opts.strategy  = 0}
	
	this.strategy = Strategy.create(
						parseCameraTypeStrategy(opts.strategy),
						this,
						opts.entity)
}
Camera.prototype.isCollideWithWorldRight = function ()
{	
	/*
	* ESTE METODO VERIFICA SE A COORDENADA (X) DA CAMERA[camera.x] + 
	* O COMPRIMENTO DA CAMERA [Tuna.width]
	* E MAIOR QUE O COMPRIMENTO DO MUNDO [Tuna.world.width].
	*/
	if(Math.abs(this.x) + this.width > this._vm_.world.width)
	{
		return true
	}
	return false
}
Camera.prototype.isCollideWithWorldLeft = function()
{
	/*
	* ESTE METODO VERIFICA SE A COORDENADA (X) DA CAMERA[camera.x]  
	* É MEIOR 0.
	*/
	if(this.x > 0 )
	{
		return true
	}
	return false
}
/*
*	CONSTANTE DAS STRATEGIAS
*/
Camera.SQUARE 	= 0

Camera.DOOR 	= 1


export default Camera

