var express = require('express');
var router = express.Router();



router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  let sql = 'select * from ccosto order by codigo'
  db.execute(sql,(err,result)=>{
      if(err){
          res.json(err);
      }
      res.json(result)
  })    
});
router.get('/byId/:id',(req, res)=>{
    let id = req.params.id;
    sql = 'select * from ccosto where id = ?';
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

    let checkCode = 'select * from ccosto where codigo = ?';
    let checkParams = [codigo];
    db.execute(checkCode,checkParams, (err,result) => {
        if(err)
        {
            res.json(err);
        }
        if(result.length >0)
        {
            res.json('1');
        }
        else
        {
            let sql = 'insert into ccosto(codigo,nombre) values(?,?)';
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
    let codigo = req.body.codigo;

    let checkCode = 'select * from ccosto where codigo <> ? and id = ?';
    let checkParams = [codigo,id];
    db.execute(checkCode,checkParams, (err,result) => {
        if(err)
        {
            res.json(err);
        }
        if(result.length >0)
        {
            res.json('1');
        }
        else
        {
            let sql = 'update ccosto set codigo = ?,nombre = ? where id = ?';
            let params = [codigo,nombre,id];
            db.execute(sql,params,(err,result) => {
                if(err)
                {
                    res.json(err)
                }
            res.json('ok');
            })
        }
    })



    
})

router.delete('/:id',(req,res)=>{
    let id = req.params.id;
    let sql = 'delete from ccosto where id = ?';
    let paramms = [id];
    db.execute(sql,paramms,(err,result)=> {
        if(err){
            res.json(err);
        }
        res.json('ok');
    })
})

module.exports = router;