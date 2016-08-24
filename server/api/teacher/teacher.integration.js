'use strict';

var app = require('../..');
import request from 'supertest';

var newTeacher;

describe('Teacher API:', function() {

  describe('GET /api/teachers', function() {
    var teachers;

    beforeEach(function(done) {
      request(app)
        .get('/api/teachers')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          teachers = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      teachers.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/teachers', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/teachers')
        .send({
          name: 'New Teacher',
          info: 'This is the brand new teacher!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newTeacher = res.body;
          done();
        });
    });

    it('should respond with the newly created teacher', function() {
      newTeacher.name.should.equal('New Teacher');
      newTeacher.info.should.equal('This is the brand new teacher!!!');
    });

  });

  describe('GET /api/teachers/:id', function() {
    var teacher;

    beforeEach(function(done) {
      request(app)
        .get('/api/teachers/' + newTeacher._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          teacher = res.body;
          done();
        });
    });

    afterEach(function() {
      teacher = {};
    });

    it('should respond with the requested teacher', function() {
      teacher.name.should.equal('New Teacher');
      teacher.info.should.equal('This is the brand new teacher!!!');
    });

  });

  describe('PUT /api/teachers/:id', function() {
    var updatedTeacher;

    beforeEach(function(done) {
      request(app)
        .put('/api/teachers/' + newTeacher._id)
        .send({
          name: 'Updated Teacher',
          info: 'This is the updated teacher!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedTeacher = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedTeacher = {};
    });

    it('should respond with the updated teacher', function() {
      updatedTeacher.name.should.equal('Updated Teacher');
      updatedTeacher.info.should.equal('This is the updated teacher!!!');
    });

  });

  describe('DELETE /api/teachers/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/teachers/' + newTeacher._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when teacher does not exist', function(done) {
      request(app)
        .delete('/api/teachers/' + newTeacher._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
