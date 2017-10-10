class HomeController {
  constructor(HomeService) {
    this.name = 'home';
    this.display = true;
    this.HomeService = HomeService;
    this.listarCategoria();
  }
  listarCategoria(){    
    this.HomeService.getCategoria()
      .then(imgList => this.imgList = imgList);    
  }
  selectCategoria(categoria){
    this.cat = categoria;
    this.HomeService.selectCategoria(categoria)
      .then(catList => this.catList = catList);
  }
}

HomeController.$inject = ['HomeService'];

export default HomeController;
