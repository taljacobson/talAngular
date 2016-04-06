import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './heblishWrapper.html';

class heblishWrapper {
  constructor() {
    console.log("hello");
  }
}

export default angular.module('heblishWrapper', [
  angularMeteor
])
  .component('heblishWrapper', {
    templateUrl: 'imports/components/heblishWrapper/heblishWrapper.html',
    controller: heblishWrapper
  });
