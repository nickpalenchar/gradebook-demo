'use strict';

angular.module('gradebookDemoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        template: '<admin></admin>'
      });
  });
