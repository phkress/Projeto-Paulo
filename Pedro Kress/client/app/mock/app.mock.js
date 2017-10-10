import angular from 'angular';
import angularMocks from 'angular-mocks';
import appModule from '../app';
import storageService from './storage.service';
import testMock from './test/test';
import contactsMock from './contacts/contacts';
import categoriasMock from './categorias/categorias';
import turistaRioMock from './turista-rio/turista-rio';

let appMockModule = angular.module('appMock', [
  appModule,
  'ngMockE2E'
])

.service('StorageService', storageService)

.run(testMock)
.run(contactsMock)
.run(categoriasMock)
.run(turistaRioMock)

.name;

export default appMockModule;
