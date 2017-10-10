import angular from 'angular';
import genericViewsComponent from './genericViews.component';

let genericViewsModule = angular.module('genericViews', [])
.component('genericViews', genericViewsComponent)  
.name;

export default genericViewsModule;