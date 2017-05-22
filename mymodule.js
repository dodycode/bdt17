//Global variable
var fs = require('fs');
var path = require('path');

module.exports = function(alamat, ekstensi, callback){
	var ext = '.' + ekstensi;

	//Jalankan perintah readdir
	fs.readdir(alamat, function(err, data){
		if (err) {
			callback(err, null); //tidak return nilai apa-apa, melainkan return message error
		}else{
			var FilterList = [];

			for (var i = 0; i < data.length; i++) {
				//Kalau data yg dicari sesuai, keluarkan
				if (ext == path.extname(data[i])) {
					FilterList.push(data[i]); //masukkan ke array
				}else{
					//jika tidak, lanjut
					continue;
				}
			}

			callback(null, FilterList); //return filterList
		}
	});
};