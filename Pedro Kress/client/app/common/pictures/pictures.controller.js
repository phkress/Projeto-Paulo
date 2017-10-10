class PicturesController {
  constructor() {

  }
  name(nomeC){
  	this.teste = nomeC;
  	this.button({$event:nomeC});
  	console.log(nomeC);
  }  
  changeHide(){
  	if(this.hide){
  	this.hide = false;
  	}else{
  	this.hide = true;
  	}
  }
}
export default PicturesController;
