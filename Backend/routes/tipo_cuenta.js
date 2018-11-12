var express = require('express');
var router = express.Router();
//var db  = require('../models');

/* GET tipo cuentas listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  let sql = 'select * from tipo_cuenta'
  db.execute(sql,(err,result)=>{
      if(err){
          res.json(err);
      }
      res.json({
          tipo_cuenta: result
      })
  })    
});

module.exports = router;