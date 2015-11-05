var request = require('supertest');
var express = require('express');
var assert = require('assert');
var request = require('request');
var http = require('http');
 
var sessionToken = "";
var httpRequest = { 
    url: "http://" + "192.168.2.33" + "/path",
    hostname: "192.168.2.33",
    path: "/ping",
    port: 3000,  
    method: "GET",    
    headers: {  
       'Content-Type': 'application/json',
       'Authorization': '...'     
    }    
}; 
  
console.log("Running on server " + httpRequest.hostname); 
 
describe('GET /users', function(){
   it('respond with json', function(done){
      var req = request.get('http://localhost:3000/user', 
         function(err, res, dat){ 
            assert.equal(200, res.statusCode); 
            done();
      });
   });
});


describe('GET /ping', function(){  
    it('respond ok', function(done){
	httpRequest.path = "/ping";
	httpRequest.method = "POST";
        var url = 'http://' + httpRequest.hostname 
            + ":" + httpRequest.port  
            + httpRequest.path;
        var req = request.get(url,
	    function(error, res, body){
		if (error){
		    console.log(error);   
		} else {
                    assert.equal(200, res.statusCode);
		    var o = JSON.parse(body);
		}
                done();
	 });
    });
});






