var express = require('express');
var router = express.Router();

var express = require('express');
var router = express.Router();

router.get('/',(req, res)=> {

    let sql = 'select t.id, t.nombre, t.nit, a.nombre as actividad from tcp t inner join actividades a '+
    'on t.actividad_id = a.id limit 1';
    db.execute(sql,(err, result) => {
        if(err)
        {
            res.json(err)
        }
        res.json(result);
    })
})
router.get('/byId/:id',(req,res)=>{
    let id = req.params.id;
    let sql = 'select * from tcp where id = ?';
    let params = [id];
    db.execute(sql,params,(err,result) => {
        if(err){
            res.json(err)
        }
        res.json(result);
    })
})

router.post('/',(req,res)=>{    
    let nombre = req.body.nombre;
    let nit = req.body.nit;
    let actividad_id = req.body.actividad_id;    

    let sql = 'insert into tcp(nombre,nit,actividad_id) values(?,?,?)';
    let parmas = [nombre,nit,actividad_id];

        db.execute(sql,parmas,(err,result) =>{
            if(err)
            {
                res.json(err);
            }
            res.json('ok');
        })
});

router.put('/:id',(req,res)=> {
    let id              = req.params.id;
    let nombre = req.body.nombre;
    let nit = req.body.nit;
    let actividad_id = req.body.actividad_id;   
    

    let sql = 'update tcp set nombre = ?, nit = ?, actividad_id = ?  where id = ?';
    let params = [nombre, nit, actividad_id, id];

        db.execute(sql,params,(err,result) =>{
            if(err)
            {
                res.json(err);
            }
            res.json('ok');
        })
})

router.delete('/:id',(req,res)=>{
    let id = req.params.id;
    let sql = 'delete from tcp where id = ?';
    let paramms = [id];
    db.execute(sql,paramms,(err,result)=> {
        if(err){
            res.json(err);
        }
        res.json('ok');
    })
});



module.exports = router;