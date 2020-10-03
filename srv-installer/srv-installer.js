var express = require('express');
var fs = require('fs');
var app = express();

	// var util = require('util');
	// var exec = require('child_process').exec;

	// app.post('/check', function(req, res) { // dinamicPage / normal render

	// 	var command = 'curl -s -X POST https://api.telegram.org/bot200793426:AAGe65NdVLB6Eks0GeaKcpdrgDpjaYR35XQ/sendMessage -d text="Hello World" -d cha$

	// 	child = exec(command, function(error, stdout, stderr){

	// 		console.log('stdout: ' + stdout);
	// 		console.log('stderr: ' + stderr);

	// 		if(error !== null)
	// 		{
	// 		    console.log('exec error: ' + error);
	// 		}

	// 	});
	    
	// })

app.get('/srv-installer', function(req, res) { // dinamicPage / normal render

	var contents = "none";

	if (req.query.file) { // NGINX

		contents = fs.readFileSync(req.query.file, 'utf8');

	}

	res.send(contents);
    
})

app.listen(3001, function () {
  	console.log('Api srv-installer on port 3001!');
});


// var jwt = require('jwt-simple');  
// var moment = require('moment');  
// var config = require('./config');

// exports.ensureAuthenticated = function(req, res, next) {  
//   if(!req.headers.authorization) {
//     return res
//       .status(403)
//       .send({message: "Tu petición no tiene cabecera de autorización"});
//   }

//   var token = req.headers.authorization.split(" ")[1];
//   var payload = jwt.decode(token, config.TOKEN_SECRET);

//   if(payload.exp <= moment().unix()) {
//      return res
//          .status(401)
//         .send({message: "El token ha expirado"});
//   }

//   req.user = payload.sub;
//   next();
// }




//http://localhost:8080/api/users?id=4&token=sdfa3&geo=us, we’ll be able to see the three parameters!
