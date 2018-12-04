var express = require('express');
var router = express.Router();

/* GET tasa listing. */
router.get('/', (req, res)=> {  
    let sql = 'select * from entidad limit 1';
    db.execute(sql,(err,result)=>{
        if(err){
            res.json(err);
        }
        res.json({result})
    })
    
});

router.post('/',(req,res) => {
    let codigo          = req.body.codigo;
    let nombre          = req.body.nombre;
    let provincia_id    = req.body.provincia_id;
    let direccion       = req.body.direccion;
    let corporacion     = req.body.corporacion;
    let compania       = req.body.compania;

    sql = 'insert into entidad(codigo,nombre,provincia_id,direccion,corporacion,compania) values(?,?,?,?,?,?)';
    params = [codigo,nombre,provincia_id,direccion,corporacion,compania];

    db.execute(sql,params,(err,result)=> {
        if(err)
        {
            res.json(err)
        }
        else{
            res.json('ok');
        }
    })

})
router.put('/:id',(req,res)=> {
    let id = req.params.id;

    let codigo          = req.body.codigo;
    let nombre          = req.body.nombre;
    let provincia_id    = req.body.provincia_id;
    let direccion       = req.body.direccion;
    let corporacion     = req.body.corporacion;
    let compania       = req.body.compania;
    sql = 'update entidad set codigo = ?,nombre = ?, provincia_id = ?, direccion = ?, corporacion = ?, compania = ? where id= ?';
    params = [codigo,nombre,provincia_id,direccion,corporacion,compania, id];

    db.execute(sql,params,(err,result)=> {
        if(err)
        {
            res.json(err)
        }
        else{
            res.json('ok');
        }
    })
})


module.exports = router;