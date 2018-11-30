var express = require('express');
var router = express.Router();


router.get('/byId/:id',(req, res)=>{
    let id = req.params.id;
    let sql = 'select * from submayor_aft where generico_id = ?';
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
router.get('/getbyId/:id',(req, res)=>{
    let id = req.params.id;
    let sql = 'select * from submayor_aft where id = ?';
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
    let generico_id      = req.body.generico_id;
   // let submayor         = req.body.submayor;
    let descripcion      = req.body.descripcion;  
   
    

    // voy a generar el numero de submayor segun el codigo de su generico
    let checkQuery = "SELECT submayor FROM submayor_aft WHERE generico_id = ? ORDER BY id DESC LIMIT 1;";
    let paramsQuery = [generico_id];

    db.execute(checkQuery,paramsQuery,(err,result)=>{
        if (err) {
            res.json('error en la consulta ' + err);
        }
        if (result.length > 0) {
            // como existen ya consecutivos lo que voy a hacer entonces es sumarle uno al valor devuelto
            let submayor = result[0].submayor + 1;
            let sql = "insert into submayor_aft(generico_id,submayor,descripcion) values(?,?,?)";
            let params = [generico_id,submayor,descripcion];
            db.execute(sql,params,(err,result)=>{
                if(err) {
                    res.json(err);
                }
                res.json('ok');
            })
        }
        else
        {
            //voy a obtener el codigo des este generico que me esta entrando para generar un submayor
            let queryCodigo = "select codigo from generico where id = ?";
            db.execute(queryCodigo,paramsQuery,(err,result)=>{
                if(err) {
                    res.json('error en la consulta' + err);
                }
                let codigo = result[0];
                // obtengo el tamaño de este codigo
                let length = codigo.codigo.toString().length;
                // el valor que tengo que generar tiene que tener 6 digitos
                let ceros = 6 - length;
                let codeString = codigo.codigo.toString();
                for(let i=0;i<ceros;i++)
                {
                    codeString += 0;
                } 
                codigo = +codeString;              
                let sql = "insert into submayor_aft(generico_id,submayor,descripcion) values(?,?,?)";
                let params = [generico_id,codigo,descripcion];
                db.execute(sql,params,(err,result)=>{
                    if(err) {
                        res.json(err);
                    }
                    res.json('ok' + result);
                })
            })
        }
    })
})
router.put('/:id',(req,res)=> {
    let id            = req.params.id;    
    let descripcion   = req.body.descripcion;

    let sql = 'update submayor_aft set descripcion = ? where id = ?';
    let sql_values = [descripcion,id];
    db.execute(sql,sql_values,(err,result)=> {
        if(err)
        {
            res.json('Ocurrio un error al Actualizar ' + err)
        }
        res.json('ok ');
    })
})
router.delete('/:id',(req,res)=> {
    let id = req.params.id;
    let sql = 'delete from submayor_aft where id = ?';
    let sql_val = [id];
    db.execute(sql,sql_val,(err,result)=> {
        if (err) {
            res.json( err);
        }
        res.json('ok');
    })
})

module.exports = router;