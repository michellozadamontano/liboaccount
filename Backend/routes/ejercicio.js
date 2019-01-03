var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  let sql = "select * from ejercicio";
  db.execute(sql,(err,result)=>{
      if(err){
          res.json(err);
      }
      res.json(result);
  })
});
router.post('/',(req,res)=>{
    let year = req.body.year;
    let checkEjer   = 'select * from ejercicio where year = ?';
    let paramsCheck = [year];
    db.execute(checkEjer,paramsCheck,(err,result)=>{
        if(err){
        res.json(err);
        }
        if(result.lenght > 0)
        {
        res.json('1')
        }
        else{
        let sql = 'insert into ejercicio(year)values(?)';
        let params = [year];
        db.execute(sql,params,(err,result)=>{
            if(err){
            res.json(err);
            }
            res.json('ok');
        })
        }
    })
})

module.exports = router;