var express = require('express');
var router = express.Router();


/* GET province listing. */
router.get('/', function(req, res, next) {
 
    let sql = 'select * from provincias';
    db.execute(sql,(err,result)=>{
        if(err){
            res.json(err);
        }
        res.json({result})
    });    
});

module.exports = router;