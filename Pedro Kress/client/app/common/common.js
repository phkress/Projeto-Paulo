import './common.scss'; //css comum a todas as views
import angular from 'angular';
import navbarModule from './navbar/navbar';
import footerModule from './footer/footer';
import picturesModule from './pictures/pictures';
import genericViewsModule from './genericViews/genericViews';


let commonModule = angular.module('app.common', [
  navbarModule,
  footerModule,
  picturesModule,
  genericViewsModule,
])

.name;

export default commonModule;

