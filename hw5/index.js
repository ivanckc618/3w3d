var shelljs = require('shelljs');
var express = require('express');
var app = express();
const cors=require('cors');

app.use(cors());

app.listen('3000',()=>{
    console.log('server is runing ');
 });

app.get ('/hw5', function (req, res) {

	var cx = req.query.cx;
	var cy = req.query.cy; 
	var r = req.query.r;
	var minx = req.query.minx; 
	var miny = req.query.miny; 
	var maxx = req.query.maxx; 
	var maxy = req.query.maxy; 
	
	shelljs.exec('circle-rect.exe ' + cx +' ' + cy +' ' + r + ' ' + minx + ' ' + miny + ' '+ maxx + ' '+ maxy ,function(status, output) {
	  
		  
          var output = {
          	status: status,
          	output: output
          };
		  res.writeHead(200, {
			"Content-Type": "application/json",
		  "Access-Control-Allow-Origin": "*",
		  "Access-Control-Allow-Headers": "Content-Type"
		});
		  res.write(JSON.stringify(output));
		  res.end();

	});
});
