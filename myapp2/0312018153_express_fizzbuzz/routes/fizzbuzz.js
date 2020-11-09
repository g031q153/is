var express = require('express');
const app = require('../app');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:suuji',function(req,res){
  for(let i = 1;i <= parseInt(req.params.suuji);i++) {
    if(i % 3 === 0) {
      if(i % 15 === 0) {
        res.write('FizzBuzz     ');
      } else {
        res.write('Fizz     ');
      }
    } else if(i % 5 === 0) {
      if(i % 15 === 0) {
        res.write('FizzBuzz     ');
      } else {
        res.write('Buzz     ');
      }
    } else {
      res.write(i + '     ');
    }
  }
  res.end();
});

module.exports = router;