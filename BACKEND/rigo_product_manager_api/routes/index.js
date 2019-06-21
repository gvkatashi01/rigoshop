var express = require('express');
var router = express.Router();

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Minh0972571187',
  database : 'oasis_shop',
  port : 3306
});
 
/* GET home page. */
router.get('/', function(req, res, next) {  
  res.render('index', { title: 'Express' });
});

router.get('/products', function(req, res, next){
  connection.connect();

  connection.query('SELECT * FROM oasis_shop.products LIMIT 10;', function (error, results, fields) {
  if (error) throw error;
    console.log('The solution is: ', results[0]);
  });
  connection.end();
});

module.exports = router;

