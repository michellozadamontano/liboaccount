var express = require('express');
var router = express.Router();

/* GET Areas listing. */
router.get('/', function(req, res, next) {
  
    let sql = "select a.id, a.nombre, a.responsable, cc.descripcion as costo" +
     " from area a inner join ccosto cc on cc.id = a.ccosto_id where eliminada = 0";
    
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
    sql = 'select * from area where id = ?';
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
    let ccosto_id        = req.body.ccosto_id;
    let nombre           = req.body.nombre;
    let responsable      = req.body.responsable;
    let almacen          = req.body.almacen;     


    // verifico que esta area no tenga el nombre repetido
    let checkQuery = "SELECT * from area a WHERE UPPER(a.nombre) = ? and ccosto_id = ?";
    let paramsQuery = [nombre.toUpperCase(), ccosto_id];

    db.execute(checkQuery,paramsQuery,(err,result)=>{
        if (err) {
            res.json('error en la consulta ' + err);
        }
        if (result.length > 0) {
            res.json('1');
        }
        else
        {
            // inserto el area si pasó la validacion
            let sql = 'insert into area(ccosto_id,nombre,responsable,almacen) values(?,?,?,?)';
            let sql_params = [ccosto_id,nombre,responsable,almacen];

            db.execute(sql,sql_params,(err,result)=>{
                if (err) {
                    res.json('error en la consulta ' + err);
                }
                res.json('ok');
            })
        }
    })
})
router.put('/:id',(req,res)=> {
    let id = req.params.id;

    let ccosto_id        = req.body.ccosto_id;
    let nombre           = req.body.nombre;
    let responsable      = req.body.responsable;
    let almacen          = req.body.almacen;   

   
    let sql = 'update area set ccosto_id = ?, nombre = ?, responsable = ?, almacen = ? where id = ?';
    let sql_values = [ccosto_id,nombre,responsable,almacen, id];
    db.execute(sql,sql_values,(err,result)=> {
        if(err)
        {
            res.json('Ocurrio un error al Actualizar ' + err)
        }        
        res.json('Area actualizada correctamente ');           
            
        
    })
})
router.delete('/:id',(req,res)=> {
    let id = req.params.id;
    let eliminada = 1;
    let sql = 'update area set eliminada = ? where id = ?';
    let sql_val = [eliminada,id];
    db.execute(sql,sql_val,(err,result)=> {
        if (err) {
            res.json( err);
        }
        res.json('Area eliminada correctamente ');
    })
})

module.exports = router;