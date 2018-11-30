var express = require('express');
var router = express.Router();

/* GET Generico listing. */
router.get('/', function(req, res, next) {
  
    let sql = 'select g.id, g.codigo, g.descripcion, t.cod_tasa as tasa from generico g inner join tasa t on t.id = g.tasa_id';
    
    db.execute(sql,(err,result)=>{
        if(err)
        {
            res.json(err);
        }
        res.json({
            result
        })
    })

    
});
router.get('/byId/:id',(req, res)=>{
    let id = req.params.id;
    sql = 'select * from generico where id = ?';
    params = [id];
    db.execute(sql,params,(err, result)=>{
        if(err)
        {
            res.json(err);
        }
        res.json({
            result
        })
    })
})

//Add
router.post('/',(req,res)=>{    
    let codigo           = req.body.codigo;
    let descripcion      = req.body.descripcion;
    let tasa_id          = req.body.tasa_id;
    let transrent        = req.body.transrent; 
    

    // verifico que este generico no tenga ya el codigo repetido
    let checkQuery = "SELECT * from generico g WHERE g.codigo = ?";
    let paramsQuery = [codigo];

    db.execute(checkQuery,paramsQuery,(err,result)=>{
        if (err) {
            res.json('error en la consulta ' + err);
        }
        if (result.length > 0) {
            res.json('1');
        }
        else
        {
            // inserto el generico si pasó la validacion
            let sql = 'insert into generico(codigo,descripcion,tasa_id,transrent) values(?,?,?,?)';
            let sql_params = [codigo,descripcion,tasa_id,transrent];

            db.execute(sql,sql_params,(err,result)=>{
                if (err) {
                    res.json('error en la consulta ' + err);
                }
                db.execute("SELECT LAST_INSERT_ID() as id",(err,result)=>{
                   
                    res.json('ok');
                });
            })
        }
    })
})
router.put('/:id',(req,res)=> {
    let id = req.params.id;

    let tipo_control_inventario_id  = req.body.tipo_control_inventario_id;
    let codigo                      = req.body.codigo;
    let descripcion                 = req.body.descripcion;
    let cuenta_gasto_mn_id          = req.body.cuenta_gasto_mn_id;
    let cuenta_gasto_div_id         = req.body.cuenta_gasto_div_id; 

    let cuentaArray = [cuenta_gasto_mn_id,cuenta_gasto_div_id];
    let sql = 'update ccosto set tipo_control_inventario_id = ?, codigo = ?, descripcion = ? where id = ?';
    let sql_values = [tipo_control_inventario_id,codigo,descripcion,id];
    db.execute(sql,sql_values,(err,result)=> {
        if(err)
        {
            res.json('Ocurrio un error al Actualizar ' + err)
        }
        let sql_delete = "delete from ccosto_gasto_depreciacion where ccosto_id = ?";
        let sql_delete_params = [id];
        db.execute(sql_delete,sql_delete_params,(err,result)=> {
            if(err)
            {
                res.json('Ocurrio un error al Actualizar ' + err)
            }
            cuentaArray.forEach(x =>{
                let query = 'insert into ccosto_gasto_depreciacion(ccosto_id,cuenta_id) values(?,?)';
                let query_params = [id,x];
                db.execute(query,query_params,(err,result)=>{
                    if (err) {
                        res.json('error en la consulta ' + err);
                    }
                })
            });
            res.json('Centro costo actualizado correctamente ');           
            
        })
    })
})
router.delete('/:id',(req,res)=> {
    let id = req.params.id;
    let sql = 'delete from generico where id = ?';
    let sql_val = [id];
    db.execute(sql,sql_val,(err,result)=> {
        if (err) {
            res.json( err);
        }
        res.json('Generico eliminado correctamente ');
    })
})

module.exports = router;