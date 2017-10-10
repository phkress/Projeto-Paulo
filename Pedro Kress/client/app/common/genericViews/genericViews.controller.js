class GenericViewsController {
  constructor() {}
  
  select(index){
  	this.selected = index;
  }
  hideModal(){
  	this.selected = null;
  }
  changeHide(){
  	if(this.hide){
  	this.hide = false;
  	}else{
  	this.hide = true;
  	}    
  } 
  maps(lat,long){
    var url = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyD0f2E-Vqva9YIWHPh3elwprcldigWAXJg&q='+lat+','+long+'&zoom=15&maptype=roadmap'
    return url;
  }
  // initialize(nlat,nlng){    
  //   var maps = new google.maps.Map(document.querySelector('.map'), {          
  //         center: {lat: nlat, lng: nlng},          
  //         zoom: 17
  //       });
  //   console.log(nlat,nlng);
  //   // var marker = new google.maps.Marker({
  //   //       position: {lat: -22.98696, lng: -43.221073},
  //   //       map: map
  //   //     });
  // }
}
export default GenericViewsController;