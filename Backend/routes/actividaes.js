var express = require('express');
var router = express.Router();

//devolver todas las actividades
router.get('/',(req, res)=> {

    let sql = 'select * from actividades';
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
    let sql = 'select * from actividades where id = ?';
    let params = [id];
    db.execute(sql,params,(err,result) => {
        if(err){
            res.json(err)
        }
        res.json(result);
    })
})

router.post('/',(req,res)=>{
    let codigo = req.body.codigo;
    let nombre = req.body.nombre;
    let gasto_permitido = req.body.gasto_permitido;

    let checkCodigo = 'select * from actividades where codigo = ?';
    let paramsCheck = [codigo];

    db.execute(checkCodigo,paramsCheck,(err, result) => {
        if(err)
        {
            res.json(err);
        }
        if(result.length > 0)
        {
            res.json('1');
        }
        else
        {
            let sql = 'insert into actividades(codigo,nombre,gasto_permitido) values(?,?,?)';
            let parmas = [codigo,nombre,gasto_permitido];

            db.execute(sql,parmas,(err,result) =>{
                if(err)
                {
                    res.json(err);
                }
                res.json('ok');
            })
        }
    })
});

router.put('/:id',(req,res)=> {
    let id              = req.params.id;
    let codigo          = req.body.codigo;
    let nombre          = req.body.nombre;
    let gasto_permitido = req.body.gasto_permitido;   
    

    let checkCodigo = 'select * from actividades where codigo = ? and id <> ?';
    let paramsCheck = [codigo, id];

    db.execute(checkCodigo,paramsCheck,(err, result) => {
        if(err)
        {
            res.json(err);
        }
        console.log(result);
        
        if(result.length > 0)
        {
            res.json('1');
        }
        else
        {
            let sql = 'update actividades set codigo = ?, nombre = ?, gasto_permitido = ?  where id = ?';
            let params = [codigo,nombre,gasto_permitido, id];

            db.execute(sql,params,(err,result) =>{
                if(err)
                {
                    res.json(err);
                }
                res.json('ok');
            })
        }
    })
})

router.delete('/:id',(req,res)=>{
    let id = req.params.id;
    let sql = 'delete from actividades where id = ?';
    let paramms = [id];
    db.execute(sql,paramms,(err,result)=> {
        if(err){
            res.json(err);
        }
        res.json('ok');
    })
});



module.exports = router;