var express = require('express');
var router = express.Router();

/* GET ccosto listing. */
router.get('/', function(req, res, next) {
  
    let sql = 'select c.id, c.codigo, c.descripcion, t.descripcion as tipocontrol from ccosto c INNER JOIN tipo_control_inventario t ON t.id = c.tipo_control_inventario_id';
    db.execute(sql,(err,result)=>{
        if(err)
        {
            res.json(err);
        }
        res.json({
            costo: result
        })
    })

    
});
// Obtengo el centro de costo según su id mas sus cuentas de depreciacion
router.get('/byId/:id',(req,res)=>{
    let id = req.params.id;
    let sql = "select * from ccosto where id = ?";
    let value = [id];

    db.execute(sql, value,(err, result)=>{
        if(err)
        {
            res.json('Hubo un error en la consulta' + err);
        }
        let getDepre = "select * from ccosto_gasto_depreciacion where ccosto_id = ?";
        let value = [result[0].id]
        db.execute(getDepre,value,(err, resultDepre)=>{
            if(err)
            {
                res.json('Hubo un error en la consulta depre' + err);
            }
            let costo = {
                tipo_control_inventario_id: result[0].tipo_control_inventario_id,
                codigo : result[0].codigo,
                descripcion : result[0].descripcion,
                cuenta_gasto_mn_id : resultDepre[0].cuenta_id,
                cuenta_gasto_div_id : resultDepre[1].cuenta_id
            }
            res.json(costo);

        })
    })
})
router.get('/codigo/:codigo',(req,res)=>{
    //con este metodo voy a chequear que el codigo exista
    let codigo = req.params.codigo;
    let checkQuery = "SELECT * from ccosto c WHERE c.codigo = ?";
    let paramsQuery = [codigo];
    db.execute(checkQuery,paramsQuery,(err,result)=>{
        if (err) {
            res.json('error en la consulta ' + err);
        }
        if (result.length > 0) {
            res.json(1);
        }
        else
        {
            res.json(0);
        }
    })
})

//Add
router.post('/',(req,res)=>{
    let tipo_control_inventario_id  = req.body.tipo_control_inventario_id;
    let codigo                      = req.body.codigo;
    let descripcion                 = req.body.descripcion;
    let cuenta_gasto_mn_id          = req.body.cuenta_gasto_mn_id;
    let cuenta_gasto_div_id         = req.body.cuenta_gasto_div_id; 

    let cuentaArray = [cuenta_gasto_mn_id,cuenta_gasto_div_id];

    // verifico que este centro de costo no tenga ya el codigo repetido
    let checkQuery = "SELECT * from ccosto c WHERE c.codigo = ?";
    let paramsQuery = [codigo];

    db.execute(checkQuery,paramsQuery,(err,result)=>{
        if (err) {
            res.json('error en la consulta ' + err);
        }
        if (result.length > 0) {
            res.json('Ya existe este codigo');
        }
        else
        {
            // inserto el centro costo
            let sql = 'insert into ccosto(tipo_control_inventario_id,codigo,descripcion) values(?,?,?)';
            let sql_params = [tipo_control_inventario_id,codigo,descripcion];

            db.execute(sql,sql_params,(err,result)=>{
                if (err) {
                    res.json('error en la consulta ' + err);
                }
                db.execute("SELECT LAST_INSERT_ID() as id",(err,result)=>{
                    cuentaArray.forEach(x =>{
                        let query = 'insert into ccosto_gasto_depreciacion(ccosto_id,cuenta_id) values(?,?)';
                        let query_params = [result[0].id,x];
                        db.execute(query,query_params,(err,result)=>{
                            if (err) {
                                res.json('error en la consulta ' + err);
                            }
                        })
                    });
                    res.json('Centro costo creado correctamente ');
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
    let sql = 'delete from ccosto where id = ?';
    let sql_val = [id];
    db.execute(sql,sql_val,(err,result)=> {
        if (err) {
            res.json('error eliminando centro de costo ' + err);
        }
        res.json('Centro costo eliminado correctamente ');
    })
})

module.exports = router;