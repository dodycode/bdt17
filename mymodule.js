var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback){
	fs.readdir(dir, function(err, list) {
		var ekstensi = '.'+ext;

		if(err){
			callback(err, null);
		}else{
			var jumlahFilter = [];

			for (var i = 0; i < list.length; i++) {
				if (ekstensi == path.extname(list[i])) {
					jumlahFilter.push(list[i])
				}else{
					continue;
				}
			}

			callback(null, jumlahFilter);
		}
	});
};
