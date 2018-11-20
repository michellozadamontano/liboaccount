var express = require('express');
var router = express.Router();

/* GET ccosto listing. */
router.get('/', function(req, res, next) {
  
    let sql = 'select * from ccosto';
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

module.exports = router;