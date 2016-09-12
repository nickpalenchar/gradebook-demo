'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
  }, {
    'title': 'Login',
    'state': 'login',
  }, {
    'title': 'Dashboard',
    'state' : 'admin',
  }];

  isCollapsed = true;
  //end-non-standard

  constructor() {
    }
}

angular.module('gradebookDemoApp')
  .controller('NavbarController', NavbarController);
