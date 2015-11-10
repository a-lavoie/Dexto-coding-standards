var request = require('supertest'); 
var express = require('express'); 
var assert = require('assert');
var request = require('request');
var http = require('http');
 
var sessionToken = "";
var httpRequest = {  
    protocol: "http://",
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

var getPort = function(){
   if (httpRequest.port != undefined){
      var separator = ":";
      return separator + httpRequest.port;
   }
   return "";
};

var getUrl = function(){
   var url = httpRequest.protocol 
      + httpRequest.hostname 
      + getPort() 
      + httpRequest.path;
   return url;
};
  
console.log("Running on server " + httpRequest.hostname); 
 
//describe('GET /users', function(){
//   it('respond with json', function(done){
//      var req = request.get('http://localhost:3000/user', 
//         function(err, res, dat){ 
//            assert.equal(200, res.statusCode); 
//            done();
//      });
//   });
//});
//
//describe('GET /ping', function(){  
//    it('respond ok', function(done){
//	httpRequest.path = "/ping";
//	httpRequest.method = "POST";
//        var url = 'http://' + httpRequest.hostname 
//            + ":" + httpRequest.port  
//            + httpRequest.path;
//        var req = request.get(url,
//	    function(error, res, body){
//		if (error){
//		    console.log(error);   
//		} else {
//                    assert.equal(200, res.statusCode);
//		    var o = JSON.parse(body);
//		}
//                done();
//	 });
//    });
//});

describe('GET /echo', function(){  
    it('respond ok', function(done){
        this.timeout(10000);
	httpRequest.path = "/echo";
	httpRequest.method = "GET";
        var req = request.get(getUrl(), 
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




  


