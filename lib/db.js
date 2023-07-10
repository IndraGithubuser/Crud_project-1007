var mysql = require('mysql2');
var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'sa*123',
	database:'my_nodedb1007'
});
connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Database (my_nodedb1007 made in mysql, Connected Successfully..!!');
	}
});

module.exports = connection;