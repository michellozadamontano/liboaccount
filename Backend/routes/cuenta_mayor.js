var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {

  let sql = 'select * from cuenta_mayor order by codigo'
  db.execute(sql,(err,result)=>{
      if(err){
          res.json(err);
      }
      res.json(result)
  })    
});
router.get('/byId/:id',(req, res)=>{
    let id = req.params.id;
    sql = 'select * from cuenta_mayor where id = ?';
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
    let tipo_id = req.body.tipo_id;
    let codigo  = req.body.codigo;
    let nombre  = req.body.nombre;
    let deudora = req.body.deudora;

    let checkCode = 'select * from cuenta_mayor where codigo = ?';
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
            let sql = 'insert into cuenta_mayor(tipo_id,codigo,nombre,deudora) values(?,?,?,?)';
            let paramms = [tipo_id,codigo,nombre,deudora];
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

    let tipo_id = req.body.tipo_id;
    let codigo  = req.body.codigo;
    let nombre  = req.body.nombre;
    let deudora = req.body.deudora;

    let checkCode = 'select * from cuenta_mayor where codigo <> ? and id = ?';
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
            let sql = 'update cuenta_mayor set tipo_id = ?, codigo = ?, nombre = ?, deudora = ? where id = ?';
            let paramms = [tipo_id,codigo,nombre,deudora,id];
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
    let sql = 'delete from cuenta_mayor where id = ?';
    let paramms = [id];
    db.execute(sql,paramms,(err,result)=> {
        if(err){
            res.json(err);
        }
        res.json('ok');
    })
})

module.exports = router;