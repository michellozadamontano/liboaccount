var express = require('express');
var router = express.Router();

router.get('/', (req, res)=> {
  
  let sql = 'select * from diario_contable';
  
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
router.get('/byDocument/:id',(req,res)=> {
    let id = req.params.id;
    sql = 'select * from diario_contable where documento = ?';
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
    let documento           = req.body.documento;
    let fecha               = req.body.fecha;
    let cuenta_plan_id      = req.body.cuenta_plan_id;
    let ejercicio_id        = req.body.ejercicio_id;
    let usuario_id          = req.body.usuario_id;
    let moneda_id           = req.body.moneda_id;
    let descripcion         = req.body.descripcion;
    let debe                = req.body.debe;
    let haber               = req.body.haber;

    let sql = 'insert into diario_contable(documento,fecha,cuenta_plan_id,ejercicio_id,'+ 
    'usuario_id,moneda_id,descripcion,debe,haber) values(?,?,?,?,?,?,?,?,?)';
    let paramms = [documento,fecha,cuenta_plan_id,ejercicio_id,usuario_id,moneda_id,descripcion,debe,haber];
    db.execute(sql,paramms,(err,result) => {
        if(err)
        {
            res.json(err);
        }
        res.json('ok');
    })

    
})

router.put('/:id',(req,res)=> {   
    let id          = req.params.id;
    let documento           = req.body.documento;
    let fecha               = req.body.fecha;
    let cuenta_plan_id      = req.body.cuenta_plan_id;
    let ejercicio_id        = req.body.ejercicio_id;
    let usuario_id          = req.body.usuario_id;
    let moneda_id           = req.body.moneda_id;
    let descripcion         = req.body.descripcion;
    let debe                = req.body.debe;
    let haber               = req.body.haber;

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
            let sql = 'update cuenta_plan set nombre = ?, tipo_id = ?, codigo = ?, activa = ? where id = ?';
            let params = [nombre, tipo_id, codigo, activa, id];
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