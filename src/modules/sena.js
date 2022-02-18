import Module from './module'
class Sena extends Module{
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
export default Sena;