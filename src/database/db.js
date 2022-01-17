const mysql = require('mysql');

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'express',
};

const dbConnect = mysql.createConnection(dbConfig);
dbConnect.connect((err) => {
  if (err) throw err;
  console.log('Successfully connected to the database');
});

module.exports = dbConnect;
