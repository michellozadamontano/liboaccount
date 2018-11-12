var express = require('express');
var router = express.Router();
//var db  = require('../models');

/* GET monedas listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  let sql = 'select * from moneda';
  db.execute(sql,(err,result)=>{
      if(err){
          res.json(err);
      }
      res.json({
              moneda: result
          })
  })    
});

module.exports = router;