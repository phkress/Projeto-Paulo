import angular from 'angular';
import _categorias from './categorias-data';

function categoriasMock($httpBackend, $log, storage) {
  let categorias = angular.copy(storage.load('categorias', _categorias));
  let _id = storage.load('categorias-index', _categorias.length+1);
  
  $httpBackend.whenGET('/api/categorias').respond( (method, url, data, headers) => {
    $log.log('Dados recebidos:', method, url, data, headers);
    return [200, categorias, {}];
  });

  $httpBackend.whenPOST('/api/categorias').respond( (method, url, data, headers) => {
    $log.log('Dados recebidos:', method, url, data, headers);
    
    
    let _data = JSON.parse(data);
    
    //controle da "chave primária"
    _data.id = _id++;
    
    //colocando na coleção
    categorias.push(_data);
    
    
    //salvando dados no localstorage
    storage.save('categorias', categorias);
    storage.save('categorias-index', _id);
    
    return [200, categorias, {}];
  });

  $httpBackend.whenDELETE('/api/categorias').respond(function (method, url, data) {
    
          data = angular.fromJson(data);

          let index = categorias.findIndex(obj => obj.id == data.id);
          
          categorias.splice(index, 1);
    
    
          //atualizando dados no localstorage
          storage.save('categorias', categorias);
    
          return [200, categorias];
  });

  $httpBackend.whenPUT(/^\/api\/categorias.*$/).respond( (method, url, data, headers) => {
    $log.log('Dados recebidos:', method, url, data, headers);
    let _data = JSON.parse(data);
    if (url === '/api/categorias') {// atualiza toda a coleção
      categorias = _data;
    } else { //atualiza um item da coleção
      let id = url.substring(14);
      for(let i=0; i<categorias.length; i++) {
        if(categorias[i].id == id){
          categorias[i].nome = _data.nome;
          categorias[i].categoria = _data.categoria;
          break;
        }
      }
    }
    storage.save('categorias', categorias);
    return [200, categorias, {}];
  });
}

categoriasMock.$inject = ['$httpBackend','$log','StorageService'];

export default categoriasMock;
