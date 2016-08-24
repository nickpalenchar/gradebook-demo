/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import Student from '../api/student/student.model';

Thing.find({}).remove()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
             'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
             'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
             'tests alongside code. Automatic injection of scripts and ' +
             'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
             'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
             'payload, minifies your scripts/css/images, and rewrites asset ' +
             'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators'
    });
  });

Student.find({}).remove()
.then(() => {
  Student.create({
    name: 'Christy Moore',
    pin: 1234,
    class: "ENG101",
    grades: [94, 92, 87, 88, 95, 90]
  }, {
    name: "James Boyles",
    pin: 1234,
    class: "ENG101",
    grades: [85, 85, 88, 80, 82, 80]
  }, {
    name: "Lee Martel",
    pin: 1234,
    class: "ENG101",
    grades: [78, 73, 81, 76, 73, 79]
  }, {
    name: "Omer Kirkham",
    pin: 1234,
    class: "ENG325",
    grades: [90, 84, 88, 73, 79, 86]
  }, {
    name: "Julie Sherman",
    class: "ENG325",
    grades: [97, 100, 97, 96, 97, 99]
  }, {
    name: "Estella Hoffman",
    pin: 1234,
    class: "ENG325",
    grades: [80, 75, 62, 79, 60, 73]
  })
})
