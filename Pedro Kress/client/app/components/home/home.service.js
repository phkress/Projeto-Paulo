class HomeService {
  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
  }  
  getCategoria() {
    return this.$q( (resolve, reject) => { //retorna uma promessa para a controladora solicitante
      if (this.categorias) //verifica se a variável foi criada e a retorna
        resolve(this.categorias);
      else { //caso não tenha sido, busca os dados
        this.$http.get('/api/categorias')
          .then( (response) => resolve(response.data) );
      }
    });
  }
  selectCategoria(categoria){
    console.log(categoria)
    return this.$q( (resolve, reject) => {
      if (this.categoria) 
        resolve(this.categoria);
      else {
        this.$http.get('/api/'+categoria)
          .then( (response) => resolve(response.data) );
      }
    });
  }
}
HomeService.$inject = ['$http','$q'];
export default HomeService;