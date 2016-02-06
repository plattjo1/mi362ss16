var fs =require('fs');

fs.readFile('myfile.txt', 'utf8', function(error, data) {
	console.log(data)
})