var express = require('express');
var router = express.Router();

/* GET ccosto listing. */
router.get('/', function(req, res, next) {
  
    let sql = 'select * from ccosto';
    db.execute(sql,(err,result)=>{
        if(err)
        {
            res.json(err);
        }
        res.json({
            costo: result
        })
    })

    
});

module.exports = router;