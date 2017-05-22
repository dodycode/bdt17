/* Exercise 1 */
//console.log('HELLO WORLD');

/* Exercise 2 */
/*var total = 0;
for (var i = 2; i < process.argv.length; i++) {
	total += Number(process.argv[i]);
}
console.log(total);*/

/* Exercise 3 */
/*var fs = require('fs');
var bufferStr = fs.readFileSync(process.argv[2], 'utf8');
var jumlahLine = bufferStr.split('\n').length - 1;
console.log(jumlahLine);*/

/* Exercise 4 */
/*var fs = require('fs');
var file = undefined;
var jumlahLine = 0;

file = fs.readFile(process.argv[2], 'utf8', function(err, data){
	if (err) {
		console.log(err);
	}else{
		jumlahLine = data.split('\n').length - 1;
		console.log(jumlahLine);
	}
});*/

/* Exercise 5 */
/*var fs = require('fs');
var path = require('path');
var p = process.argv[2];

//cek direktori
fs.stat(p, function(err, status){
	if (err) {
		//kalau tidak ditemukan atau sejenisnya
		console.log(err);
	}

	if (!status.isDirectory()) {
		callback(new Error('Pastikan anda mengetik path/alamat direktori dengan benar'));
	}else{
		//Jalankan perintah readdir
		fs.readdir(p, function(err, data){
			if (err) {
				console.log(err);
			}else{
				for (var i = 0; i < data.length; i++) {
					//Kalau data yg dicari sesuai, keluarkan
					if ('.' + process.argv[3] == path.extname(data[i])) {
						console.log(data[i]);
					}else{
						//jika tidak, lanjut
						continue;
					}
				}
			}
		});
	}
});*/

/* Exercise 6 */
/*var module = require('./mymodule.js');
module(process.argv[2], process.argv[3], function(err, data){
	data.forEach(function(item){
		console.log(item);
	});
});*/

/* Exercise 7 */
/*var http = require('http');

http.get(process.argv[2], function(respon){
	respon.setEncoding('utf8'); //jadikan string utf8

	respon.on('data', function(potonganData){
		console.log(potonganData);
	});

	respon.on('error', function(err){
		console.log('Error: ' + err.message);
	})
});*/

/* Exercise 8 */
/*var http = require('http');
var datanya = '';

http.get(process.argv[2], function(respon){
	respon.setEncoding('utf8'); //jadikan string utf8

	respon.on('data', function(potonganData){
		//console.log(potonganData);
		datanya += potonganData;
	});

	respon.on('end', function(){
		console.log(datanya.length);
		console.log(datanya);
	});

	respon.on('error', function(err){
		console.log('Error: ' + err.message);
	})
});*/

/* Exercise 9 */
//global variable
/*var http = require('http');
var datanya = '';

http.get(process.argv[2], function(respon){
	respon.setEncoding('utf8'); //jadikan string utf8

	respon.on('data', function(potonganData){
		datanya += potonganData;
	});

	respon.on('end', function(){
		console.log(datanya); //keluarkan

		datanya = ''//lalu kosongkan datanya

		http.get(process.argv[3], function(respon){
			respon.setEncoding('utf8'); //jadikan string utf8

			respon.on('data', function(potonganData){
				datanya += potonganData;
			});

			respon.on('end', function(){
				console.log(datanya);

				datanya = '';

				http.get(process.argv[4], function(respon){
					respon.setEncoding('utf8'); //jadikan string utf8

					respon.on('data', function(potonganData){
						datanya += potonganData;
					});

					respon.on('end', function(){
						console.log(datanya);
					});

					respon.on('error', function(err){
						console.log('Error: ' + err);
					})
				});
			});
			respon.on('error', function(err){
				console.log('Error: ' + err);
			})
		});
	});
	respon.on('error', function(err){
		console.log('Error: ' + err);
	})
});*/

/* Exercise 10 */
/*var net = require('net');
net.createServer(function (sangserver){
	var date = new Date();

	var bulan = date.getMonth() + 1;

	//setting penulisan bulan
	if (bulan < 10) {
		bulan = '0' + bulan;
	};

	//minta sangserver outputkan waktu
	//format: YYYY-MM-DD hh:mm
	sangserver.write(date.getFullYear() + '-' + bulan + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + '\n');
	sangserver.end()
}).listen(process.argv[2]);*/ //host yg diketik

/* Exercise 11 */
/*var http = require('http');
var fs = require('fs');

http.createServer(function (req, res){
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

http.createServer(function(req, res){
	if (req.method == 'POST') {
		var potonganDataKapital = map(function (potonganData){
			return potonganData.toString().toUpperCase(); 
		});

		req.pipe(potonganDataKapital).pipe(res);
	}
}).listen(process.argv[2]);*/

/* Exercise 13 */
/*var http = require('http');
var url = require('url');
var port = process.argv[2];

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
}).listen(port);*/



