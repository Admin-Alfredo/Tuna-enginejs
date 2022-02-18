function Module(self) {
	this.self = self
}
Module.prototype.addParent = function(self){
	this.self = self
}
export default Module