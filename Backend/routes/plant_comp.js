var express = require('express');
var router = express.Router();


/* GET plantilla  */
router.get('/', (req, res) => {
 
    let sql = 'SELECT p.id, t.desc_mov, p.descrip  FROM plant_comp p INNER JOIN tipo_movimiento t on p.tipo_movimiento_id = t.id';
    db.execute(sql,(err,result)=>{
        if(err){
            res.json(err);
        }
        res.json({result})
    });    
});

module.exports = router;