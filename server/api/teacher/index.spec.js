'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var teacherCtrlStub = {
  index: 'teacherCtrl.index',
  show: 'teacherCtrl.show',
  create: 'teacherCtrl.create',
  update: 'teacherCtrl.update',
  destroy: 'teacherCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var teacherIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './teacher.controller': teacherCtrlStub
});

describe('Teacher API Router:', function() {

  it('should return an express router instance', function() {
    teacherIndex.should.equal(routerStub);
  });

  describe('GET /api/teachers', function() {

    it('should route to teacher.controller.index', function() {
      routerStub.get
        .withArgs('/', 'teacherCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/teachers/:id', function() {

    it('should route to teacher.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'teacherCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/teachers', function() {

    it('should route to teacher.controller.create', function() {
      routerStub.post
        .withArgs('/', 'teacherCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/teachers/:id', function() {

    it('should route to teacher.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'teacherCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/teachers/:id', function() {

    it('should route to teacher.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'teacherCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/teachers/:id', function() {

    it('should route to teacher.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'teacherCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
