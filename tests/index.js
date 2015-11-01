var request = require('supertest');
var express = require('express');
var assert = require('assert');

var app = express();

// mocha --debug-brk tests/index.js

app.get('/user', function(req, res){
  res.send(200, { name: 'tobi' }); 
});

request(app)
  .get('/user') 
  .expect('Content-Type', /json/)  
  .expect('Content-Length', '15')
  .expect(200)
  .end(function(err, res){
    if (err) throw err; 
  });



  describe('GET /users', function(){
  it('respond with json', function(done){
    request(app)
      .get('/user') 
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res){
        if (err) return done(err);
        done();
      });
    });
  });


