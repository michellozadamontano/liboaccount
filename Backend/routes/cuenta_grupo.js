var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {

  let sql = 'select * from cuenta_grupo order by codigo'
  db.execute(sql,(err,result)=>{
      if(err){
          res.json(err);
      }
      res.json(result)
  })    
});
router.get('/byId/:id',(req, res)=>{
    let id = req.params.id;
    sql = 'select * from cuenta_grupo where id = ?';
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
    let codigo  = req.body.codigo;
    let nombre  = req.body.nombre;   

    let checkCode = 'select * from cuenta_grupo where codigo = ?';
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
            let sql = 'insert into cuenta_grupo(nombre,codigo) values(?,?)';
            let paramms = [nombre,codigo];
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
    let codigo  = req.body.codigo;
    let nombre  = req.body.nombre;
    

    let checkCode = 'select * from cuenta_grupo where codigo <> ? and id = ?';
    let checkParams = [codigo, id];
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
            let sql = 'update cuenta_grupo set  codigo = ?, nombre = ? where id = ?';
            let paramms = [codigo,nombre,id];
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

router.delete('/:id',(req,res)=>{
    let id = req.params.id;
    let sql = 'delete from cuenta_grupo where id = ?';
    let paramms = [id];
    db.execute(sql,paramms,(err,result)=> {
        if(err){
            res.json(err);
        }
        res.json('ok');
    })
})

module.exports = router;