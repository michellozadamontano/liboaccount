var express = require('express');
var router = express.Router();


/* GET tasa listing. */
router.get('/', function(req, res, next) {  
    let sql = 'select * from tasa';
    db.execute(sql,(err,result)=>{
        if(err){
            res.json(err);
        }
        res.json({tasas: result})
    })
    
});
//Get by Id
router.get('/getbyId/:id',(req, res)=> {
    let sql = 'select * from tasa where id = ?';
    let sql_params = [req.params.id];
    db.execute(sql,sql_params,(err,result)=>{
        if(err){
            res.json(err);
        }
        res.json({tasa: result})
    })

});
// Get cuentas tasas
router.get('/getCuentas/:id',(req,res)=>{
    let sql = 'SELECT  c.id,c.cuenta, tipc.descripcion as titulo, tipc.id as tipoId from tasa t ' +
    'INNER JOIN tasa_cuenta tc on tc.tasa_id = t.id INNER JOIN cuentas c ON tc.cuentas_id = c.id '+
    'INNER JOIN tipo_cuenta tipc on c.tipo_cuenta_id = tipc.id WHERE t.id = ?';
    let sql_params = [req.params.id];

    db.execute(sql,sql_params,(err,result)=>{
        if(err){
            res.json(err);
        }
        res.json({cuentas_tasa: result});
    })

});


//Add
router.post('/',(req,res)=>{
    let tasa = req.body.tasa;
    let descripcion = req.body.descripcion;
    let cod_tasa = req.body.cod_tasa;
    let porciento_depreciacion = 1;
    let moneda_id = req.body.moneda_id;
    let cuentaTitulo_id = req.body.cuentaTitulo_id;
    let cuentaDepre_id = req.body.cuentaDepre_id;
    let cuentaSobrante_id = req.body.cuentaSobrante_id;
    let cuentaFaltante_id = req.body.cuentaFaltante_id;

    let cuentaArray = [cuentaTitulo_id,cuentaDepre_id,cuentaSobrante_id,cuentaFaltante_id];

    // verifico que esta tasa no tenga ya el codigo repetido
    let checkQuery = "SELECT * from tasa t WHERE t.cod_tasa = ?";
    let paramsQuery = [cod_tasa];
    
    db.execute(checkQuery, paramsQuery, (err, result)=>{
        if (err) {
            res.json('error en la consulta ' + err);
        }
        if (result.length > 0) {
            res.json('Ya existe una tasa con este codigo')
        }
        else{
            // inserto la tasa
            let sql = "insert into tasa(tasa,descripcion,cod_tasa,porciento_depreciacion,moneda_id) values(?,?,?,?,?)"
            let sql_params = [tasa,descripcion,cod_tasa,porciento_depreciacion,moneda_id];
            db.execute(sql,sql_params,(err, resulti)=>{
                if (err) {
                    res.json('Error al insertar ' + err)
                }
                db.execute("SELECT LAST_INSERT_ID() as id",(err,result)=>{
                    if (err) {
                        res.json('Error al insertar ' + err)
                    }
                    let obj = JSON.stringify(result);
                    let resp = JSON.parse(obj);
                    cuentaArray.forEach(x=>{
                        let query = "INSERT INTO tasa_cuenta(tasa_id,cuentas_id) VALUES(?,?)";
                        let queryParams = [resp[0].id,x];
                        db.execute(query,queryParams,(err,result)=>{
                            if (err) {
                                res.json('Error al insertar ' + err)
                            }
                        })
                    })    
                    
                    res.json('Tasa creada correctamente ');
                })
                
               
            })
        }
    })
});
//Update
router.put('/:id',(req,res)=>{
    console.log(req.params.id);
    
    let tasa = req.body.tasa;
    let descripcion = req.body.descripcion;
    let cod_tasa = req.body.cod_tasa;
    let porciento_depreciacion = 1;
    let moneda_id = req.body.moneda_id;
    let cuentaTitulo_id = req.body.cuentaTitulo_id;
    let cuentaDepre_id = req.body.cuentaDepre_id;
    let cuentaSobrante_id = req.body.cuentaSobrante_id;
    let cuentaFaltante_id = req.body.cuentaFaltante_id;

    let cuentaArray = [cuentaTitulo_id,cuentaDepre_id,cuentaSobrante_id,cuentaFaltante_id];

    let sql = "update tasa set tasa = ?, descripcion = ?, cod_tasa = ?, moneda_id = ? where id = ?";
    let sql_params = [tasa,descripcion,cod_tasa,moneda_id,req.params.id];
    db.execute(sql,sql_params,(err,result)=>{
        if(err)
        {
            res.json('Ocurrió un error en el proceso de actualización' + err);
        }
        let sql_delete = "delete from tasa_cuenta where tasa_id = ?";
        let sql_delete_params = [req.params.id];
        db.execute(sql_delete,sql_delete_params,(err,result)=>{
            if(err)
            {
                res.json('Ocurrió un error en el proceso de actualización' + err);
            }
            cuentaArray.forEach(x=>{
                let query = "INSERT INTO tasa_cuenta(tasa_id,cuentas_id) VALUES(?,?)";
                let queryParams = [req.params.id,x];
                db.execute(query,queryParams,(err,result)=>{
                    if (err) {
                        res.json('Error al actualizar ' + err);
                    }
                })
            })    
            
            res.json('Tasa actualizada correctamente ');
        })

    })

});

//Delete
router.delete('/:id',(req,res)=>{
    sql = "delete from tasa where id = ?";
    sql_params = [req.params.id];
    db.execute(sql,sql_params,(err,result)=>{
        if(err){
            res.json('Ocurrió un error al eliminar esta tasa');
        }
        res.json('Tasa eliminada');
    })
})

module.exports = router;