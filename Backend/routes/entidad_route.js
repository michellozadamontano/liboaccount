var express = require('express');
var router = express.Router();
//var db  = require('../models');

/* GET entidad listing. */
/*router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
    db.entidad.findAll({limit: 1,include: db.provincia})
    .then(resp =>{
        res.json({
            error: false,
            entidad: resp
        })
    })
    .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});

router.post('/',(req,res)=>{
    db.entidad.create({
        id_prov             : req.body.id_prov,
        direccion_entidad   : req.body.direccion_entidad,
        grupo_entidad       : req.body.grupo_entidad,
        desc_agencia        : req.body.desc_agencia,
        fintur              : req.body.fintur
    })
    .then(entidad => res.status(201).json({
            error: false,
            data: entidad,
            message: 'Entidad creada exitosamente.'
    }))
    .catch(error => res.json({
        error: true,
        data: [],
        error: error
    }));
});

router.put('/:id',(req,res)=>{
    console.log(req.params.id);
    
    db.entidad.update({
        id_prov  : req.body.id_prov,
        direccion_entidad   : req.body.direccion_entidad,
        grupo_entidad       : req.body.grupo_entidad,
        desc_agencia        : req.body.desc_agencia,
        fintur              : req.body.fintur
    },
    {
        where: {
            id_entidad: req.params.id
        }
    })
    .then(entidad => res.status(201).json({
        error: false,       
        message: 'Entidad actualizada exitosamente.'
    }))
    .catch(error => res.json({
        error: true,
        data: [],
        error: error
    }));

});*/

module.exports = router;