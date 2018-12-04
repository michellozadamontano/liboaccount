var express = require('express');
var router = express.Router();

/* GET SubAreas listing. */
router.get('/', function(req, res, next) {
  
    let sql = "select * from subarea where eliminada = 0";
    
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
// subareas por areas
router.get('/area/:id',(req, res)=> {
    console.log(req.params.id);
    
    let area_id = req.params.id;
    let sql = "select * from subarea where area_id = ? and eliminada = ?";
    let params = [area_id,0];
    db.execute(sql,params,(err,result)=>{
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
    sql = 'select * from subarea where id = ?';
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
    console.log(req.body);
    
    let area_id          = req.body.area_id;
    let nombre           = req.body.nombre;
    let responsable      = req.body.responsable;   

    console.log(nombre.toUpperCase());
    
    // verifico que esta area no tenga el nombre repetido
    let checkQuery = "SELECT * from subarea a WHERE UPPER(a.nombre) = ? and area_id = ?";
    let paramsQuery = [nombre.toUpperCase(),area_id];

    db.execute(checkQuery,paramsQuery,(err,result)=>{
        if (err) {
            res.json('error en la consulta ' + err);
        }
        if (result.length > 0) {
            res.json('1');
        }
        else
        {
            // inserto el subarea si pasó la validacion
            let sql = 'insert into subarea(area_id,nombre,responsable) values(?,?,?)';
            let sql_params = [area_id,nombre,responsable];

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

   // let area_id          = req.body.area_id;
    let nombre           = req.body.nombre;
    let responsable      = req.body.responsable;  

   
    let sql = 'update subarea set  nombre = ?, responsable = ? where id = ?';
    let sql_values = [nombre,responsable, id];
    db.execute(sql,sql_values,(err,result)=> {
        if(err)
        {
            res.json('Ocurrio un error al Actualizar ' + err)
        }        
        res.json('SubArea actualizada correctamente ');           
            
        
    })
})
router.delete('/:id',(req,res)=> {
    let id = req.params.id;
    let eliminada = 1;
    let sql = 'update subarea set eliminada = ? where id = ?';
    let sql_val = [eliminada,id];
    db.execute(sql,sql_val,(err,result)=> {
        if (err) {
            res.json( err);
        }
        res.json('SubArea eliminada correctamente ');
    })
})

module.exports = router;