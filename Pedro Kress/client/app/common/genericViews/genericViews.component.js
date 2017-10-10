import template from './genericViews.html';
import controller from './genericViews.controller';
import './genericViews.scss';

let genericViewsComponent = {
  restrict: 'E',
  bindings: {
  	infos:'<',
  	hide: '=',
  	tag: '<',
  },
  template,
  controller
};

export default genericViewsComponent;
