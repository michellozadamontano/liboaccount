var express = require('express');
var router = express.Router();


/* GET tipo cuentas listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  let sql = 'select * from cuenta_tipo'
  db.execute(sql,(err,result)=>{
      if(err){
          res.json(err);
      }
      res.json(result)
  })    
});
router.get('/byId/:id',(req, res)=>{
    let id = req.params.id;
    sql = 'select * from cuenta_tipo where id = ?';
    params = [id];
    db.execute(sql,params,(err, result)=>{
        if(err)
        {
            res.json(err);
        }
        res.json(result)
    })
})

router.post('/',(req,res) => {
    let codigo = req.body.codigo;
    let nombre = req.body.nombre;

    let checkCode = 'select * from cuenta_tipo where codigo = ?';
    let checkParams = [codigo];
    db.execute(checkCode,checkParams, (err,result) => {
        if(err)
        {
            res.json('ha ocurrido un error en la consulta');
        }
        if(result.length >0)
        {
            res.json('1');
        }
        else
        {
            let sql = 'insert into cuenta_tipo(codigo,nombre) values(?,?)';
            let paramms = [codigo,nombre];
            db.execute(sql,paramms,(err,result) => {
                if(err)
                {
                    res.json(err);
                }
                res.json('ok');
            })
        }
    })

    
})

router.put('/:id',(req,res)=> {   
    let id = req.params.id;
    let nombre = req.body.nombre;

    let sql = 'update cuenta_tipo set nombre = ? where id = ?';
    let params = [nombre,id];
    db.execute(sql,params,(err,result) => {
        if(err)
        {
            res.json(err)
        }
        res.json('ok');
    })
})

router.delete('/:id',(req,res)=>{
    let id = req.params.id;
    let sql = 'delete from cuenta_tipo where id = ?';
    let paramms = [id];
    db.execute(sql,paramms,(err,result)=> {
        if(err){
            res.json(err);
        }
        res.json('ok');
    })
})

module.exports = router;