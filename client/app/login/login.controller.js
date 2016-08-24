'use strict';
(function(){

class LoginComponent {
  constructor($http) {
    this.message = 'Hello';
    this.$http = $http;
  }

  submitLogin(info) {
    this.$http.post('/api/login', info)
  }

}

angular.module('gradebookDemoApp')
  .component('login', {
    templateUrl: 'app/login/login.html',
    controller: LoginComponent
  });

})();
