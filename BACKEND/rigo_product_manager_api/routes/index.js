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
  //res.render('index', { title: 'Express' });
});

router.get('/products', function(req, res, next){

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

  //connection.connect();

  var query = 'SELECT product_name, recommend_price , main_image FROM oasis_shop.products LIMIT 10;';
  connection.query( query , function (error, results, fields) {
  if (error) throw error;
    console.log('The solution is: ', results[0]);
    res.send(results)
  });
  //connection.end();
});

module.exports = router;

