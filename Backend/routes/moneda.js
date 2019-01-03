var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  let sql = "select * from moneda";
  db.execute(sql,(err,result)=>{
      if(err){
          res.json(err);
      }
      res.json(result);
  })
});

module.exports = router;