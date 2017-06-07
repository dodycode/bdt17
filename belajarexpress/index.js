// Task 1
// var express = require('express');
// var app = express();
// app.get('/home', function(req, res){
// 	res.end('Hello World!');
// })
// app.listen(process.argv[2]);

//Task 2
// var express = require('express');
// var app = express();
// var port = process.argv[2];
// var path = process.argv[3];

// app.use(express.static(path));

// app.listen(port);

//Task 3
// var express = require('express');
// var app = express();
// var port = process.argv[2];
// var viewpath = process.argv[3];

// //setting
// app.set('views', viewpath);
// app.set('view engine', 'pug');

// app.get('/home', function(req, res){
// 	res.render('index', {date: new Date().toDateString()})
// })
// app.listen(port);

//Task 4
// var express = require('express');
// var app = express();
// var bodyparser = require('body-parser');
// var viewpath = process.argv[3];
// var port = process.argv[2];

// //setting
// app.set('views', viewpath);
// app.set('view engine', 'pug');
// app.use(bodyparser.urlencoded({extended: false}));

// //route
// app.get('/form', function(req, res){
// 	res.render('index');
// });

// app.post('/form', function(req, res){
// 	res.end(req.body.str.split('').reverse().join(''));
// });

// app.listen(port);

//Task 5
// var express = require('express');
// var app = express();
// var stylus = require('stylus');
// var viewpath = process.argv[3];
// var port = process.argv[2];

// //setting
// app.use(stylus.middleware(viewpath));
// app.use(express.static(viewpath));

// app.listen(port);

//Task 6
// var express = require('express');
// var app = express();
// var crypto = require('crypto');
// var viewpath = process.argv[3];
// var port = process.argv[2];

// //route
// app.put('/message/:id', function(req, res){
// 	res.end(crypto.createHash('sha1').update(new Date().toDateString() + req.params.id).digest('hex'));
// });

// app.listen(port);

//Task 7
// var express = require('express');
// var app = express();
// var port = process.argv[2];

// //route
// app.get('/search', function(req, res){
// 	res.set({
// 		'content-type':'application/json'
// 	})
// 	res.end(JSON.stringify(req.query));
// });

// app.listen(port);

//Task 8
var express = require('express');
var fs = require('fs');
var app = express();
var port = process.argv[2];
var file = process.argv[3];

//route
app.get('/books', function(req, res){
	res.set({
		'content-type':'application/json'
	});

	fs.readFile(file, function(err, data){
		if(err){
			console.log('error:' + err);
			return;
		}

		res.json(JSON.parse(data.toString()));
	});
});

app.listen(port);