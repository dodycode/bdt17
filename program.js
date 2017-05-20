/* Exercise 2 */
/*var result = 0;
for (var i = 2; i < process.argv.length; i++) {
	result += Number(process.argv[i]);
};
console.log(result);*/

/* Exercise 3 */
/*var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
var jumlahLine = buffer.toString().split('\n').length - 1;
console.log(jumlahLine);*/

/* Exercise 4 */
/*var fs = require('fs');
fs.readFile(process.argv[2], function(err, data){
	if(err){
		console.log('error gan:', err);
	}else{
		var jumlahLine = data.toString().split('\n').length - 1;
	}
	console.log(jumlahLine);
});*/

/* Exercise 5 */
/*var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err, list){
	for (var i = 0; i < list.length; i++) {
		if ('.'+ (process.argv[3]) == path.extname(list[i])) {
			console.log(list[i]);
		}else{
			continue;
		}
	}
});*/

/* Exercise 6 */
/*var mymodule = require("./mymodule.js");

mymodule(process.argv[2], process.argv[3], function(err, data){
	data.forEach(function(item){
		console.log(item);
	});
});*/

/* Exercise 7 */
/*var http = require('http');

http.get(process.argv[2], function(res){
	res.setEncoding('utf8');
	res.on('data', function(chunk){
		console.log(chunk);
	});

	res.on('error', function(err){
		console.log(err);
	});
});*/

/* Exercise 8 */
/*var http = require('http');

http.get(process.argv[2], function(res){
	var datanya = '';
	res.setEncoding('utf8');
	res.on('data', function(chunk){
		//console.log(chunk);
		datanya += chunk;
	});

	res.on('end', function(){
		console.log(datanya.length);
		console.log(datanya);
	});

	res.on('error', function(err){
		console.log(err);
	});
});*/

/* Exercise 9 */
/*var http = require('http');

http.get(process.argv[2], function(res){
	var datanya = '';
	res.setEncoding('utf8');
	res.on('data', function(chunk){
		//console.log(chunk);
		datanya += chunk;
	});

	res.on('end', function(){
		console.log(datanya);

		http.get(process.argv[3], function(res){
			var datake2 = '';
			res.setEncoding('utf8');
			res.on('data', function(chunk){
				//console.log(chunk);
				datake2 += chunk;
			});

			res.on('end', function(){
				console.log(datake2);

				http.get(process.argv[4], function(res){
					var datake3 = '';
					res.setEncoding('utf8');
					res.on('data', function(chunk){
						//console.log(chunk);
						datake3 += chunk;
					});

					res.on('end', function(){
						console.log(datake3);
					});

					res.on('error', function(err){
						console.log(err);
					});
				});
			});

			res.on('error', function(err){
				console.log(err);
			});
		});
	});

	res.on('error', function(err){
		console.log(err);
	});
});*/

/* Exercise 10 */
/*var net = require('net');
net.createServer(function(socket){
	var date = new Date();

	var bulan = date.getMonth() + 1;
	if(bulan < 10){
		bulan = '0' + bulan;
	}

	socket.write(date.getFullYear() + '-' + bulan + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + '\n');
	socket.end()
}).listen(process.argv[2]);*/

/* Exercise 11 */
/*var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
	var stream = fs.createReadStream(process.argv[3]);

	stream.on('open', function(){
		stream.pipe(res);
	});

	stream.on('close', function(){
		res.end();
	});
}).listen(process.argv[2]);*/

/* Exercise 12 */
/*var http = require('http');
var map = require('through2-map');

http.createServer(function (req, res){
	if (req.method == 'POST') {
		var _map = map(function(chunk){
			return chunk.toString().toUpperCase();
		});
		req.pipe(_map).pipe(res);
	}
}).listen(process.argv[2]);*/

/* Exercise 13 */
var http = require('http');
var url = require('url');

http.createServer(function(req, res){
	var parseUrl = url.parse(req.url, true);

	switch(parseUrl.pathname){
		case '/api/parsetime':
			var date = new Date(parseUrl.query.iso);
			res.writeHead(200, {
				"Content-Type":"application/json",
			});
			res.end(JSON.stringify({
				"hour":date.getHours(),
				"minute":date.getMinutes(),
				"second":date.getSeconds(),
			}));
			break;
		case '/api/unixtime':
			var date = new Date(parseUrl.query.iso);
			res.writeHead(200, {
				"Content-Type":"application/json",
			});
			res.end(JSON.stringify({
				"unixtime":date.getTime()
			}));
			break;
	}	
}).listen(process.argv[2]);