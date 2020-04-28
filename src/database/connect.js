/*const mysql = require("mysql2");
const dbConfig = require("../config/database");

const connection = mysql.createConnection(dbConfig);

connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
  });
  
module.exports = connection;*/

var mysql      = require('mysql2');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database: 'icode_one'
});

connection.connect();

connection.query('select * from users;', (err, rows, fields) => {
  if (err == null) {
    console.log('Conectado!');
  } else {
    console.log('Tivemos um erro inesperado! ' + err);
  }
});

//connection.end();

module.exports = connection;