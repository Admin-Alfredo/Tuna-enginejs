(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Tuna", [], factory);
	else if(typeof exports === 'object')
		exports["Tuna"] = factory();
	else
		root["Tuna"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./Game.js":
/*!*****************!*\
  !*** ./Game.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./components/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context */ "./context.js");
/* harmony import */ var _modules_sena__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/sena */ "./modules/sena.js");
/* harmony import */ var _modules_keyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/keyboard */ "./modules/keyboard.js");
/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/load */ "./modules/load.js");
/* harmony import */ var _modules_add__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/add */ "./modules/add/index.js");
/* harmony import */ var _modules_physic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/physic */ "./modules/physic.js");
/* harmony import */ var _modules_camera__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/camera */ "./modules/camera/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./util */ "./util.js");











function Tuna (config, _gmi) 
{
	
	_context__WEBPACK_IMPORTED_MODULE_1__.default.call(this, config)
	
	const root = this;
	
	this.gmi = _gmi || {}
	 
	this.timer = null;
	 
	this.pause = false;
	 
	this.created = false;
	
	this.loading = true;
	 
	this.landscape = new _modules_sena__WEBPACK_IMPORTED_MODULE_2__.default(this)
	 
	this.keyboard = new _modules_keyboard__WEBPACK_IMPORTED_MODULE_3__.default(this)
	 
	this.load = new _modules_load__WEBPACK_IMPORTED_MODULE_4__.default(this)
	 
	this.add = new _modules_add__WEBPACK_IMPORTED_MODULE_5__.default(this)
	
	this.camera = new _modules_camera__WEBPACK_IMPORTED_MODULE_7__.default(this)
	
	this.physic = new _modules_physic__WEBPACK_IMPORTED_MODULE_6__.default(this)
	
	if(this.gmi && this.gmi instanceof Object)
	{
		window.addEventListener('load', this.init.bind(this))
	}
}

Tuna.prototype = Object.create(_context__WEBPACK_IMPORTED_MODULE_1__.default.prototype)

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tuna);

/***/ }),

/***/ "./components/entity.js":
/*!******************************!*\
  !*** ./components/entity.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _configs_uid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs/uid.js */ "./configs/uid.js");
/* harmony import */ var _configs_uid_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_configs_uid_js__WEBPACK_IMPORTED_MODULE_0__);

function Entity (vm, x=0, y=0, w=0, h=0){
	this.x = x;
	this.y = y;
	this.type = 'entity'
	this.width = w;
	this.height = h;
	this.velocity = {x: 0, y: 0}
	this.gravity = 0;
	this.aceleration = 0;
	this.alive = true;
	this._id = (0,_configs_uid_js__WEBPACK_IMPORTED_MODULE_0__.v4)();
	this._vm_ = vm
	this.name = "<sem nome>"
	this.pivot = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	}
		
}
Entity.prototype = {
	getX: function(){
		return this.x;
	},
	getY: function(){
		return this.y;
	},
	getWidth: function(){
		return this.width;
	},
	getVelocityX: function(){
		return this.velocity.x
	},
	getVelocityY: function(){
		return this.velocity.y
	},
	getAceleration: function(){
		return this.aceleration
	},
	getHeight: function(){
		return this.height;
	},
	
	getGravity: function(){
		return this.gravity
	},
	
	setX: function(x){
		this.x = x
	},
	
	setY: function(y){
		this.y = y
	},
	
	setXY: function(z){
		this.x = z[0]
		this.y = z[1]
	},
	
	setWidth: function(w){
		this.width = w;
	},

	setHeight: function(h){
		this.height = h
	},
	
	setVelocityX: function(vx){
		this.velocity.x = vx
	},
	
	setVelocityY: function(vy){
		this.velocity.y = vy
	},
	
	setVelocity: function(v){
		this.velocity['x'] = v[0]
		this.velocity['y'] = v[1]
	},
	setAceleration: function(a){
		this.aceleration = a 
	},

	setGravity: function(g){
		this.gravity = g
	},
	
	destroy: function(){
		this._vm_.world.remove(this)
	},
	kill: function(){
		this.alive = false
	},
	enablePhysics: function(){
		this.velocity.x += this.getAceleration()
		this.x += this.getVelocityX() 
		this.velocity.y += this.getGravity()
		this.y += this.getVelocityY()
	}
	
}
Entity.prototype.constructor = Entity

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Entity);




/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./components/entity.js");
/* harmony import */ var _rectangle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rectangle */ "./components/rectangle.js");
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sprite */ "./components/sprite.js");
/* harmony import */ var _spritesheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spritesheet */ "./components/spritesheet.js");





const Components =  {
	Entity: _entity__WEBPACK_IMPORTED_MODULE_0__.default,
	Rectangle: _rectangle__WEBPACK_IMPORTED_MODULE_1__.default,
	Sprite: _sprite__WEBPACK_IMPORTED_MODULE_2__.default,
	Spritesheet: _spritesheet__WEBPACK_IMPORTED_MODULE_3__.default
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Components);



/***/ }),

/***/ "./components/rectangle.js":
/*!*********************************!*\
  !*** ./components/rectangle.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./components/entity.js");


function Rectangle(vm, x, y, w, h, c){
	
	_entity__WEBPACK_IMPORTED_MODULE_0__.default.call(this, vm,  x, y, w, h)
	this.type = 'rectangle'
	this.backgroundColor = c;
}

Rectangle.prototype = Object.create(_entity__WEBPACK_IMPORTED_MODULE_0__.default.prototype)
Rectangle.prototype.constructor = Rectangle;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rectangle); 

/***/ }),

/***/ "./components/sprite.js":
/*!******************************!*\
  !*** ./components/sprite.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./components/entity.js");

function findObjectImage()
{
	const objectImage = this._vm_.load.getImageLoaded(this.name)
	if(objectImage)
	{
		return objectImage
	}else{
		return false
	}
}

function Sprite(vm, name, x, y, w, h){
	_entity__WEBPACK_IMPORTED_MODULE_0__.default.call(this,vm, x, y, w, h)
	this.name = name
	this.image = null
	this.type = 'sprite'
	
	const objectImage = findObjectImage.call(this)
	
	if(objectImage)
	{
		this.width = this.width ? this.width : objectImage.width
		this.height = this.height ? this.height : objectImage.height
		this.image = objectImage.img
		
	}else{
		
	}
}
Sprite.prototype = Object.create(_entity__WEBPACK_IMPORTED_MODULE_0__.default.prototype)
Sprite.prototype.setImage = function(image){
	if(image instanceof Image){
		this.image = image
	}else{
		throw new Error(`Image invalida no sprite ${this.name}`)
	}
}
Sprite.prototype.getImage =  function(){
	return this.image
}
Sprite.prototype.constructor = Sprite

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sprite);

/***/ }),

/***/ "./components/spritesheet.js":
/*!***********************************!*\
  !*** ./components/spritesheet.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ "./components/sprite.js");


function SpriteSheet(vm, name, x, y, w, h){
	
		_sprite__WEBPACK_IMPORTED_MODULE_0__.default.call(this,vm,name, x, y, 0, 0)
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
SpriteSheet.prototype = Object.create(_sprite__WEBPACK_IMPORTED_MODULE_0__.default.prototype, 
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpriteSheet);



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

/***/ }),

/***/ "./configs/module.js":
/*!***************************!*\
  !*** ./configs/module.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function Module(self) {
	this.self = self
}
Module.prototype.addParent = function(self){
	this.self = self
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Module);

/***/ }),

/***/ "./configs/uid.js":
/*!************************!*\
  !*** ./configs/uid.js ***!
  \************************/
/***/ (function(__unused_webpack_module, exports) {

!function(r,e){ true?e(exports):0}(this,(function(r){"use strict";var e,n=new Uint8Array(16);function t(){if(!e&&!(e="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return e(n)}var o=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function a(r){return"string"==typeof r&&o.test(r)}for(var i,u,f=[],s=0;s<256;++s)f.push((s+256).toString(16).substr(1));function c(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(f[r[e+0]]+f[r[e+1]]+f[r[e+2]]+f[r[e+3]]+"-"+f[r[e+4]]+f[r[e+5]]+"-"+f[r[e+6]]+f[r[e+7]]+"-"+f[r[e+8]]+f[r[e+9]]+"-"+f[r[e+10]]+f[r[e+11]]+f[r[e+12]]+f[r[e+13]]+f[r[e+14]]+f[r[e+15]]).toLowerCase();if(!a(n))throw TypeError("Stringified UUID is invalid");return n}var l=0,d=0;function v(r){if(!a(r))throw TypeError("Invalid UUID");var e,n=new Uint8Array(16);return n[0]=(e=parseInt(r.slice(0,8),16))>>>24,n[1]=e>>>16&255,n[2]=e>>>8&255,n[3]=255&e,n[4]=(e=parseInt(r.slice(9,13),16))>>>8,n[5]=255&e,n[6]=(e=parseInt(r.slice(14,18),16))>>>8,n[7]=255&e,n[8]=(e=parseInt(r.slice(19,23),16))>>>8,n[9]=255&e,n[10]=(e=parseInt(r.slice(24,36),16))/1099511627776&255,n[11]=e/4294967296&255,n[12]=e>>>24&255,n[13]=e>>>16&255,n[14]=e>>>8&255,n[15]=255&e,n}function p(r,e,n){function t(r,t,o,a){if("string"==typeof r&&(r=function(r){r=unescape(encodeURIComponent(r));for(var e=[],n=0;n<r.length;++n)e.push(r.charCodeAt(n));return e}(r)),"string"==typeof t&&(t=v(t)),16!==t.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var i=new Uint8Array(16+r.length);if(i.set(t),i.set(r,t.length),(i=n(i))[6]=15&i[6]|e,i[8]=63&i[8]|128,o){a=a||0;for(var u=0;u<16;++u)o[a+u]=i[u];return o}return c(i)}try{t.name=r}catch(r){}return t.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",t.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",t}function h(r){return 14+(r+64>>>9<<4)+1}function y(r,e){var n=(65535&r)+(65535&e);return(r>>16)+(e>>16)+(n>>16)<<16|65535&n}function g(r,e,n,t,o,a){return y((i=y(y(e,r),y(t,a)))<<(u=o)|i>>>32-u,n);var i,u}function m(r,e,n,t,o,a,i){return g(e&n|~e&t,r,e,o,a,i)}function w(r,e,n,t,o,a,i){return g(e&t|n&~t,r,e,o,a,i)}function b(r,e,n,t,o,a,i){return g(e^n^t,r,e,o,a,i)}function A(r,e,n,t,o,a,i){return g(n^(e|~t),r,e,o,a,i)}var U=p("v3",48,(function(r){if("string"==typeof r){var e=unescape(encodeURIComponent(r));r=new Uint8Array(e.length);for(var n=0;n<e.length;++n)r[n]=e.charCodeAt(n)}return function(r){for(var e=[],n=32*r.length,t="0123456789abcdef",o=0;o<n;o+=8){var a=r[o>>5]>>>o%32&255,i=parseInt(t.charAt(a>>>4&15)+t.charAt(15&a),16);e.push(i)}return e}(function(r,e){r[e>>5]|=128<<e%32,r[h(e)-1]=e;for(var n=1732584193,t=-271733879,o=-1732584194,a=271733878,i=0;i<r.length;i+=16){var u=n,f=t,s=o,c=a;n=m(n,t,o,a,r[i],7,-680876936),a=m(a,n,t,o,r[i+1],12,-389564586),o=m(o,a,n,t,r[i+2],17,606105819),t=m(t,o,a,n,r[i+3],22,-1044525330),n=m(n,t,o,a,r[i+4],7,-176418897),a=m(a,n,t,o,r[i+5],12,1200080426),o=m(o,a,n,t,r[i+6],17,-1473231341),t=m(t,o,a,n,r[i+7],22,-45705983),n=m(n,t,o,a,r[i+8],7,1770035416),a=m(a,n,t,o,r[i+9],12,-1958414417),o=m(o,a,n,t,r[i+10],17,-42063),t=m(t,o,a,n,r[i+11],22,-1990404162),n=m(n,t,o,a,r[i+12],7,1804603682),a=m(a,n,t,o,r[i+13],12,-40341101),o=m(o,a,n,t,r[i+14],17,-1502002290),n=w(n,t=m(t,o,a,n,r[i+15],22,1236535329),o,a,r[i+1],5,-165796510),a=w(a,n,t,o,r[i+6],9,-1069501632),o=w(o,a,n,t,r[i+11],14,643717713),t=w(t,o,a,n,r[i],20,-373897302),n=w(n,t,o,a,r[i+5],5,-701558691),a=w(a,n,t,o,r[i+10],9,38016083),o=w(o,a,n,t,r[i+15],14,-660478335),t=w(t,o,a,n,r[i+4],20,-405537848),n=w(n,t,o,a,r[i+9],5,568446438),a=w(a,n,t,o,r[i+14],9,-1019803690),o=w(o,a,n,t,r[i+3],14,-187363961),t=w(t,o,a,n,r[i+8],20,1163531501),n=w(n,t,o,a,r[i+13],5,-1444681467),a=w(a,n,t,o,r[i+2],9,-51403784),o=w(o,a,n,t,r[i+7],14,1735328473),n=b(n,t=w(t,o,a,n,r[i+12],20,-1926607734),o,a,r[i+5],4,-378558),a=b(a,n,t,o,r[i+8],11,-2022574463),o=b(o,a,n,t,r[i+11],16,1839030562),t=b(t,o,a,n,r[i+14],23,-35309556),n=b(n,t,o,a,r[i+1],4,-1530992060),a=b(a,n,t,o,r[i+4],11,1272893353),o=b(o,a,n,t,r[i+7],16,-155497632),t=b(t,o,a,n,r[i+10],23,-1094730640),n=b(n,t,o,a,r[i+13],4,681279174),a=b(a,n,t,o,r[i],11,-358537222),o=b(o,a,n,t,r[i+3],16,-722521979),t=b(t,o,a,n,r[i+6],23,76029189),n=b(n,t,o,a,r[i+9],4,-640364487),a=b(a,n,t,o,r[i+12],11,-421815835),o=b(o,a,n,t,r[i+15],16,530742520),n=A(n,t=b(t,o,a,n,r[i+2],23,-995338651),o,a,r[i],6,-198630844),a=A(a,n,t,o,r[i+7],10,1126891415),o=A(o,a,n,t,r[i+14],15,-1416354905),t=A(t,o,a,n,r[i+5],21,-57434055),n=A(n,t,o,a,r[i+12],6,1700485571),a=A(a,n,t,o,r[i+3],10,-1894986606),o=A(o,a,n,t,r[i+10],15,-1051523),t=A(t,o,a,n,r[i+1],21,-2054922799),n=A(n,t,o,a,r[i+8],6,1873313359),a=A(a,n,t,o,r[i+15],10,-30611744),o=A(o,a,n,t,r[i+6],15,-1560198380),t=A(t,o,a,n,r[i+13],21,1309151649),n=A(n,t,o,a,r[i+4],6,-145523070),a=A(a,n,t,o,r[i+11],10,-1120210379),o=A(o,a,n,t,r[i+2],15,718787259),t=A(t,o,a,n,r[i+9],21,-343485551),n=y(n,u),t=y(t,f),o=y(o,s),a=y(a,c)}return[n,t,o,a]}(function(r){if(0===r.length)return[];for(var e=8*r.length,n=new Uint32Array(h(e)),t=0;t<e;t+=8)n[t>>5]|=(255&r[t/8])<<t%32;return n}(r),8*r.length))}));function I(r,e,n,t){switch(r){case 0:return e&n^~e&t;case 1:return e^n^t;case 2:return e&n^e&t^n&t;case 3:return e^n^t}}function C(r,e){return r<<e|r>>>32-e}var R=p("v5",80,(function(r){var e=[1518500249,1859775393,2400959708,3395469782],n=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof r){var t=unescape(encodeURIComponent(r));r=[];for(var o=0;o<t.length;++o)r.push(t.charCodeAt(o))}else Array.isArray(r)||(r=Array.prototype.slice.call(r));r.push(128);for(var a=r.length/4+2,i=Math.ceil(a/16),u=new Array(i),f=0;f<i;++f){for(var s=new Uint32Array(16),c=0;c<16;++c)s[c]=r[64*f+4*c]<<24|r[64*f+4*c+1]<<16|r[64*f+4*c+2]<<8|r[64*f+4*c+3];u[f]=s}u[i-1][14]=8*(r.length-1)/Math.pow(2,32),u[i-1][14]=Math.floor(u[i-1][14]),u[i-1][15]=8*(r.length-1)&4294967295;for(var l=0;l<i;++l){for(var d=new Uint32Array(80),v=0;v<16;++v)d[v]=u[l][v];for(var p=16;p<80;++p)d[p]=C(d[p-3]^d[p-8]^d[p-14]^d[p-16],1);for(var h=n[0],y=n[1],g=n[2],m=n[3],w=n[4],b=0;b<80;++b){var A=Math.floor(b/20),U=C(h,5)+I(A,y,g,m)+w+e[A]+d[b]>>>0;w=m,m=g,g=C(y,30)>>>0,y=h,h=U}n[0]=n[0]+h>>>0,n[1]=n[1]+y>>>0,n[2]=n[2]+g>>>0,n[3]=n[3]+m>>>0,n[4]=n[4]+w>>>0}return[n[0]>>24&255,n[0]>>16&255,n[0]>>8&255,255&n[0],n[1]>>24&255,n[1]>>16&255,n[1]>>8&255,255&n[1],n[2]>>24&255,n[2]>>16&255,n[2]>>8&255,255&n[2],n[3]>>24&255,n[3]>>16&255,n[3]>>8&255,255&n[3],n[4]>>24&255,n[4]>>16&255,n[4]>>8&255,255&n[4]]}));r.NIL="00000000-0000-0000-0000-000000000000",r.parse=v,r.stringify=c,r.v1=function(r,e,n){var o=e&&n||0,a=e||new Array(16),f=(r=r||{}).node||i,s=void 0!==r.clockseq?r.clockseq:u;if(null==f||null==s){var v=r.random||(r.rng||t)();null==f&&(f=i=[1|v[0],v[1],v[2],v[3],v[4],v[5]]),null==s&&(s=u=16383&(v[6]<<8|v[7]))}var p=void 0!==r.msecs?r.msecs:Date.now(),h=void 0!==r.nsecs?r.nsecs:d+1,y=p-l+(h-d)/1e4;if(y<0&&void 0===r.clockseq&&(s=s+1&16383),(y<0||p>l)&&void 0===r.nsecs&&(h=0),h>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");l=p,d=h,u=s;var g=(1e4*(268435455&(p+=122192928e5))+h)%4294967296;a[o++]=g>>>24&255,a[o++]=g>>>16&255,a[o++]=g>>>8&255,a[o++]=255&g;var m=p/4294967296*1e4&268435455;a[o++]=m>>>8&255,a[o++]=255&m,a[o++]=m>>>24&15|16,a[o++]=m>>>16&255,a[o++]=s>>>8|128,a[o++]=255&s;for(var w=0;w<6;++w)a[o+w]=f[w];return e||c(a)},r.v3=U,r.v4=function(r,e,n){var o=(r=r||{}).random||(r.rng||t)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,e){n=n||0;for(var a=0;a<16;++a)e[n+a]=o[a];return e}return c(o)},r.v5=R,r.validate=a,r.version=function(r){if(!a(r))throw TypeError("Invalid UUID");return parseInt(r.substr(14,1),16)},Object.defineProperty(r,"__esModule",{value:!0})}));

/***/ }),

/***/ "./const.js":
/*!******************!*\
  !*** ./const.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ENTITY": () => (/* binding */ ENTITY),
/* harmony export */   "RECTANGLE": () => (/* binding */ RECTANGLE),
/* harmony export */   "SPRITE": () => (/* binding */ SPRITE),
/* harmony export */   "IMAGE": () => (/* binding */ IMAGE),
/* harmony export */   "SPRITESHEET": () => (/* binding */ SPRITESHEET),
/* harmony export */   "GRAPHIC": () => (/* binding */ GRAPHIC)
/* harmony export */ });
const ENTITY = 'entity'

const RECTANGLE = 'rectangle'

const SPRITE = 'sprite'

const IMAGE = 'image'

const SPRITESHEET = 'spritesheet'

const GRAPHIC = 'graphic'







/***/ }),

/***/ "./context.js":
/*!********************!*\
  !*** ./context.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_world__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/world */ "./modules/world/index.js");


function Context(config) {
	this.config = config || {}
	const {width, height, wrapper, world} = this.config
	
	const root = this
	this.canvas = document.createElement('canvas')
	this.context2d = this.canvas.getContext('2d')
	
	//CONFIGURANDO O [world]
	let worldWidth;
	let worldHeight;
	let worldBackgroundColor;
	const worldConfig = {}
	
	if(world !== undefined)
	{
		worldWidth = world.width ? world.width : 2 * 1024
		worldHeight = world.height ? world.height : 1024
		worldBackgroundColor = world.backgroundColor ? worldBackgroundColor : '#000'
		
	}
	Object.assign(worldConfig, 
	{ 
		height:				worldHeight,
		width: 				worldWidth,
		backgroundColor: 	worldBackgroundColor
	})
	this.world = new _modules_world__WEBPACK_IMPORTED_MODULE_0__.default(this, worldConfig)
	
	//CONFIGURANDO O [canvas] E [context2d]
	this.width = width ? width : 800
	this.height = height ? height : 500

	this.wrapper =  wrapper ? document.querySelector(wrapper) : document.body

	this.canvas.width = this.width
	this.canvas.height = this.height
	
	this.wrapper.appendChild(this.canvas)

	// salvando o estado inicial do contexto
	this.context2d.save() 
	this.context2d.fillStyle = 0x000
	this.context2d.fillRect(0, 0, this.world.width, this.world.height)
}


Context.prototype.getContext2d = function(){
	return this.context2d
}
Context.prototype.getCanvas = function(){
	return this.canvas
}
Context.prototype.clearContext = function(){
	this.context2d.fillStyle = this.world.backgroundColor || "#000" 
	this.context2d.fillRect(0, 0, this.world.width, this.world.height)
	
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Context);

/***/ }),

/***/ "./modules/add/index.js":
/*!******************************!*\
  !*** ./modules/add/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../module */ "./modules/module.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components */ "./components/index.js");




function Add (vm){
	this._vm_ = vm
}
Add.prototype.rectangle = function(x, y, w, h, c){
	const rectangle = new _components__WEBPACK_IMPORTED_MODULE_1__.default.Rectangle(this._vm_, x, y, w, h, c)
	this._vm_.world.add(rectangle)
	return rectangle
}

Add.prototype.sprite = function(name, x, y)
{	
	const sprite = new _components__WEBPACK_IMPORTED_MODULE_1__.default.Sprite(this._vm_, name, x, y)
	this._vm_.world.add(sprite)
	return sprite	
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Add);



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

/***/ }),

/***/ "./modules/camera/index.js":
/*!*********************************!*\
  !*** ./modules/camera/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util */ "./util.js");
/* harmony import */ var _strategy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./strategy */ "./modules/camera/strategy.js");




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
	
	this.strategy = _strategy__WEBPACK_IMPORTED_MODULE_1__.default.create(
						(0,_util__WEBPACK_IMPORTED_MODULE_0__.parseCameraTypeStrategy)(opts.strategy),
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Camera);



/***/ }),

/***/ "./modules/camera/strategy.js":
/*!************************************!*\
  !*** ./modules/camera/strategy.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util */ "./util.js");
//NOTA: 
/*
* A _vm_ Tuna não precisa conhecer as strategy
* e sues atributos.
*/


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
	
	if((0,_util__WEBPACK_IMPORTED_MODULE_0__.isEntity)(entity)) { this.entity = entity }
	
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Strategy());


/***/ }),

/***/ "./modules/keyboard.js":
/*!*****************************!*\
  !*** ./modules/keyboard.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _configs_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs/module */ "./configs/module.js");

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Keyboard);

/***/ }),

/***/ "./modules/load.js":
/*!*************************!*\
  !*** ./modules/load.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _configs_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs/module */ "./configs/module.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./util.js");



function handlerLoadImage (e)
{
	const objectImage = new _util__WEBPACK_IMPORTED_MODULE_1__.FactoryImage(e.target)
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
		if(objectImage && objectImage instanceof _util__WEBPACK_IMPORTED_MODULE_1__.FactoryImage && objectImage.name.trim() !== "")
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Load);

/***/ }),

/***/ "./modules/module.js":
/*!***************************!*\
  !*** ./modules/module.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Module {
	constructor(self){
		this.self = self
	}
	addSelf(self){
		this.self = self
	}
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Module);

/***/ }),

/***/ "./modules/physic.js":
/*!***************************!*\
  !*** ./modules/physic.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ "./modules/module.js");

class Physic extends _module__WEBPACK_IMPORTED_MODULE_0__.default {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Physic);

/***/ }),

/***/ "./modules/sena.js":
/*!*************************!*\
  !*** ./modules/sena.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ "./modules/module.js");

class Sena extends _module__WEBPACK_IMPORTED_MODULE_0__.default{
	constructor(self){
		super(self)
		this.list = []
	}
	add(name, gmi){
		if(name !== '' && typeof gmi === 'object'){
			if(!this.get(name)){
				this.list.push({ name, ...gmi})
			}else{ console.warn(' Já tem uma sena com este nome!')}
		}else{ console.warn('Params não definido!')}
	}
	start(name){
		const gmi = this.get(name)
		if(gmi){
			this.classParent.setGmi(gmi)
		}
	}
	get(name){return this.list.filter(_ => _.name === name.trim())[0]}
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sena);

/***/ }),

/***/ "./modules/world/index.js":
/*!********************************!*\
  !*** ./modules/world/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./modules/world/render.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../const.js */ "./const.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util */ "./util.js");



//pushFirst(any)



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
		if((0,_util__WEBPACK_IMPORTED_MODULE_2__.isEntity)(entity))
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
		if((0,_util__WEBPACK_IMPORTED_MODULE_2__.isEntity)(entity))
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
			
			if((0,_util__WEBPACK_IMPORTED_MODULE_2__.isEntity)(entity))
			{
				switch(entity.type){
					case _const_js__WEBPACK_IMPORTED_MODULE_1__.RECTANGLE:
						(0,_render__WEBPACK_IMPORTED_MODULE_0__.renderRectangle)(this._vm_, entity)
						break;
					case _const_js__WEBPACK_IMPORTED_MODULE_1__.SPRITE:
						(0,_render__WEBPACK_IMPORTED_MODULE_0__.renderSprite)(this._vm_, entity)
						break;
					case _const_js__WEBPACK_IMPORTED_MODULE_1__.SPRITESHEET:
						(0,_render__WEBPACK_IMPORTED_MODULE_0__.renderSpritesheet)(this._vm_, entity)
						break;
					case _const_js__WEBPACK_IMPORTED_MODULE_1__.GRAPHIC: 
						(0,_render__WEBPACK_IMPORTED_MODULE_0__.renderGraphic)(this._vm_, entity)
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (World);



/***/ }),

/***/ "./modules/world/render.js":
/*!*********************************!*\
  !*** ./modules/world/render.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderRectangle": () => (/* binding */ renderRectangle),
/* harmony export */   "renderGraphic": () => (/* binding */ renderGraphic),
/* harmony export */   "renderImage": () => (/* binding */ renderImage),
/* harmony export */   "renderSprite": () => (/* binding */ renderSprite),
/* harmony export */   "renderSpritesheet": () => (/* binding */ renderSpritesheet)
/* harmony export */ });

const renderRectangle = function (_vm_, entity)
{
	const context = _vm_.getContext2d()
	context.fillStyle = entity.backgroundColor || 0x000
	context.fillRect(entity.x, entity.y, entity.width, entity.height)
}

const renderGraphic = function (_vm_, entity)
{
	
}

const renderImage = function (_vm_, entity)
{
	
}


const renderSprite = function (_vm_, entity)
{
	const context = _vm_.getContext2d()
	context.drawImage(entity.getImage(), 0, 0, entity.width, entity.height, entity.x, entity.y, entity.width, entity.height)
}


const renderSpritesheet = function (_vm_, entity)
{
	
}




/***/ }),

/***/ "./util.js":
/*!*****************!*\
  !*** ./util.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isEntity": () => (/* binding */ isEntity),
/* harmony export */   "FactoryImage": () => (/* binding */ FactoryImage),
/* harmony export */   "parseCameraTypeStrategy": () => (/* binding */ parseCameraTypeStrategy)
/* harmony export */ });
/* harmony import */ var _components_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/entity */ "./components/entity.js");


const isEntity = function(entity){
	if(entity instanceof _components_entity__WEBPACK_IMPORTED_MODULE_0__.default)
		return true
	else
		return false
}

const FactoryImage = function  (image)
{
	
	this.img = image || null
	
	this.name = image._name_
	
	this.width = image.width
	
	this.height = image.height
	
	this.frame = {
		width: image.frameWidth || 0,
		height: image.frameHeight || 0
	}
	
}
const parseCameraTypeStrategy = function(type)
{
	if(typeof type === 'string')
	{
		switch (type.trim().toLowerCase()){
			case 'square'	:
				return 0
				break;
			case 'door'		:
				return 1
				break;
		}
	}else if(typeof type === 'number')
	{
		return  type
	}else {
		return 0
	}
}
Array.prototype.pushFirst = function(any){
   if(this.length === 0) this.push(any); return this;
   
	this.length = this.length + 1
	
	for(let i = this.length-1; i>=0 ;i--)
	{
		if(i === 0){ this[i] = any; break;}
		this[i] = this[i-1]
	}
   return this;
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************!*\
  !*** ./core.js ***!
  \*****************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ "./Game.js");
/**@{core}**/


__webpack_require__.g.Game = _Game__WEBPACK_IMPORTED_MODULE_0__.default






})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=tuna.dev.js.map