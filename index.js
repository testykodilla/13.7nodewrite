var fs = require('fs');
var colors = require('colors');

fs.readdir('./katalog', 'utf-8', function(err, data) {
    console.log(data);
    fs.writeFile('./tekst.txt', data, function(err) {
        if (err) throw err;
        console.log('Zapisano!'.blue);
        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
            console.log(data);
        });
    });
});