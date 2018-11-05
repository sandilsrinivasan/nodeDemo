var should = require('should');
var app = require('../app');
var request = require('supertest');

describe('POST /api', function() {

  it('10 plus 5 equals 15', function(done) {
    request(app)
    .post('/api')
    .send({
      "num1": 10,
      "num2": 5
    })
    .expect(200)
    .end(function(err, res) {
      if (err)
        done(err);
      res.body.should.have.property('sum', 15);
    });
    done();
  });

  it('2 plus -4 equals -2', function(done) {
    request(app)
    .post('/api')
    .send({
      "num1": 2,
      "num2": -4
    })
    .expect(200)
    .end(function(err, res) {
      if (err)
        done(err);
      res.body.should.have.property('sum', -2);
    });
    done();
  });

  it('5 plus 0 equals 5', function(done) {
    request(app)
    .post('/api')
    .send({
      "num1": 5,
      "num2": 0
    })
    .expect(200)
    .end(function(err, res) {
      if (err)
        done(err);
      res.body.should.have.property('sum', 5);
    });
    done();
  });

});