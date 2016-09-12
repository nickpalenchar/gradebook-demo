'use strict';
(function(){

class AdminComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('gradebookDemoApp')
  .component('admin', {
    templateUrl: 'app/admin/admin.html',
    controller: AdminComponent
  });

})();
