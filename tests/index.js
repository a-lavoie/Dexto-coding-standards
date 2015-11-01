var request = require('supertest');
var express = require('express');
var assert = require('assert');
var http = require('http');

//var app = express();

// mocha --debug-brk tests/index.js

//app.get('/user', function(req, res){
//  res.send(200, { name: 'tobi' }); 
//});

//request(app)
//  .get('/user') 
//  .expect('Content-Type', /json/)  
//  .expect('Content-Length', '15')
//  .expect(200)
//  .end(function(err, res){
//    if (err) throw err; 
//  });

  describe('GET /users', function(){
     it('respond with json', function(done){
        http.get('http://localhost:3000/user', function(res){ 
           assert.equal(200, res.statusCode); 
           done();
        });
    });
  });


