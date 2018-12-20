var express = require('express');
var router = express.Router();

router.get('/', (req, res)=> {
  
  let sql = 'select c.id, c.codigo, c.nombre t.nombre as tipo  from cuenta_plan c' + 
  ' inner join cuenta_tipo t on t.id = c.tipo_id order by codigo';
  
  db.execute(sql,(err,result)=>{
      if(err){
          res.json(err);
      }
      res.json(result)
  })    
});
router.get('/byId/:id',(req, res)=>{
    let id = req.params.id;
    sql = 'select * from cuenta_plan where id = ?';
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
    let codigo      = req.body.codigo;
    let nombre      = req.body.nombre;
    let tipo_id     = req.body.tipo_id;
    let activa      = req.body.activa;

    let checkCode = 'select * from cuenta_plan where codigo = ?';
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
            let sql = 'insert into cuenta_plan(tipo_id,codigo,nombre,deudora) values(?,?,?,?)';
            let paramms = [tipo_id,codigo,nombre,activa];
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
    let id          = req.params.id;
    let codigo      = req.body.codigo;
    let nombre      = req.body.nombre;
    let tipo_id     = req.body.tipo_id;    

    let checkCode = 'select * from cuenta_plan where codigo = ? and id <> ?';
    let checkParams = [codigo, id];
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
            let sql = 'update cuenta_plan set nombre = ?, tipo_id = ?, codigo = ? where id = ?';
            let params = [nombre,tipo_id,codigo,id];
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
    let sql = 'delete from cuenta_plan where id = ?';
    let paramms = [id];
    db.execute(sql,paramms,(err,result)=> {
        if(err){
            res.json(err);
        }
        res.json('ok');
    })
})

module.exports = router;