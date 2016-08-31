'use strict';
(function(){

class LoginComponent {
  constructor($http) {
    this.message = 'Hello';
    this.$http = $http;
  }

  submitLogin(info) {
    console.log("submitting the info: ", info);
    if(!info) console.error("No info was passed to `submitLogin`");
    this.$http.post('/api/login', info)
  }

}

angular.module('gradebookDemoApp')
  .component('login', {
    templateUrl: 'app/login/login.html',
    controller: LoginComponent
  });

})();
