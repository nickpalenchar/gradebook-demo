'use strict';

(function () {

  console.warn("running in development mode");

  class MainController {

    constructor($http) {
      this.$http = $http;
      this.awesomeThings = [];
    }

    $onInit() {
      console.log("getting students from /api/students");
      this.$http.get('/api/students').then(response => {
        this.awesomeThings = response.data;
      });
    }

    addThing() {
      if (this.newThing) {
        this.$http.post('/api/things', {name: this.newThing});
        this.newThing = '';
      }
    }

    deleteThing(thing) {
      this.$http.delete('/api/things/' + thing._id);
    }
  }

  angular.module('gradebookDemoApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });

  console.log("module gradebookDemoApp successfully loaded.");

})();
