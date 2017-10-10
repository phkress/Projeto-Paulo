import template from './pictures.html';// !text é um artifício do systemjs no plunker para carregar html
import controller from './pictures.controller';
import './pictures.scss'; // !css é um artifício do systemjs no plunker para carregar arquivos css ou scss ou sass

let picturesComponent = {
  restrict: 'E',
  bindings: {
  	infos:'<',
  	hide:'=',
  	button: '&',
  },
  template,
  controller
};

export default picturesComponent;
