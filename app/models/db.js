const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

// Create a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

// connect to the MySQL server
connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  let createTodos = `CREATE TABLE IF NOT EXISTS customers (
    id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email varchar(255) NOT NULL,
    name varchar(255) NOT NULL,
    active BOOLEAN DEFAULT false
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8;`;

  connection.query(createTodos, function(err, results, fields) {
    if (err) {
      console.log(err.message);
    }
  });
});

// open the MySQL connection
// connection.connect(err => {
//   if (err) console.log("not Connected!", err.code);;
//   console.log("Connected!");
//   var sql = "ALTER TABLE IF NOT EXISTS `customers` (id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, email varchar(255) NOT NULL, name varchar(255) NOT NULL, active BOOLEAN DEFAULT false) ENGINE=InnoDB DEFAULT CHARSET=utf8;";
//   connection.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created/ altered");
//   });
// });

module.exports = connection;