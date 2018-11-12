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
    let sql = 'SELECT  c.cuenta, tipc.descripcion as titulo from tasa t ' +
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
    db.cuentas.create({            
        tipo_cuenta_id   : req.body.tipo_cuenta_id,
        moneda_id        : req.body.moneda_id,
        cuenta          : req.body.cuenta,
        descripcion     : req.body.descripcion,
        activa          : 1,
        ccosto_id        : req.body.ccosto_id,
        predeterminada  : req.body.predeterminada
    })
    .then(cuenta => res.status(201).json({            
            data: cuenta,
            message: 'Cuenta creada exitosamente.'
    }))
    .catch(error => res.json({     
        error: error
    }));
});
//Update
router.put('/:id',(req,res)=>{
    console.log(req.params.id);
    
    db.cuentas.update({
        tipo_cuenta_id   : req.body.tipo_cuenta_id,
        moneda_id        : req.body.moneda_id,
        cuenta           : req.body.cuenta,
        descripcion      : req.body.descripcion,
        activa           : 1,
        ccosto_id        : req.body.ccosto_id,
        predeterminada   : req.body.predeterminada
    },
    {
        where: {
            id: req.params.id
        }
    })
    .then(cuenta => res.status(201).json({               
        message: 'Cuenta actualizada exitosamente.'
    }))
    .catch(error => res.json({        
        error: error
    }));

});

//Delete
router.delete('/:id',(req,res)=>{
    db.cuentas.destroy({
        where:{
            id: req.params.id
        }
    })
    .then(cuenta => res.status(201).json({               
        message: 'Cuenta eliminada exitosamente.'
    }))
    .catch(error => res.json({        
        error: error
    }));
})

module.exports = router;