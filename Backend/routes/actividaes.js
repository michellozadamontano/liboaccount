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


})


module.exports = router;