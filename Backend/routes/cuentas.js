var express = require('express');
var router = express.Router();
//var db  = require('../models');

/* GET cuenta listing. */
router.get('/', function (req, res, next) {
    //res.send('respond with a resource');
    let query = "SELECT c.id,c.cuenta, c.descripcion, m.descripcion as moneda," +
        "t.descripcion as tipo, co.descripcion as ccosto FROM cuentas c INNER JOIN moneda m " +
        "on m.id = c.moneda_id INNER JOIN tipo_cuenta t on t.id = c.tipo_cuenta_id LEFT JOIN " +
        "ccosto co on co.id = c.ccosto_id ORDER BY c.id ASC";
    // execute query
    db.execute(query, (err, result) => {
        if (err) {
            res.json('error en la consulta ' + err);
        }
        res.json({
            cuentas: result
        });
    });
});
//Get by Id
router.get('/getbyId/:id', (req, res) => {

    let query = "SELECT c.id,c.cuenta, c.descripcion, m.id as moneda," +
        "t.id as tipo, co.id as ccosto, c.predeterminada FROM cuentas c INNER JOIN moneda m " +
        "on m.id = c.moneda_id INNER JOIN tipo_cuenta t on t.id = c.tipo_cuenta_id LEFT JOIN " +
        "ccosto co on co.id = c.ccosto_id WHERE c.id = '" + req.params.id + "' ";
    // execute query
    db.execute(query, (err, result) => {
        if (err) {
            res.json('error en la consulta ' + err);
        }
        res.json({
            cuenta: result
        });
    });

});
// Get cuenta by tipo cuenta
router.get('/getbyTipo/:id', (req, res) => {
    // aqui voy a obtener las cuentas segun el tipo pasado por parametro
    let sql = 'select c.id, t.descripcion as tipo_cuenta, c.cuenta, c.descripcion, m.descripcion as moneda from cuentas c INNER JOIN tipo_cuenta t on c.tipo_cuenta_id = t.id INNER JOIN moneda m  ON c.moneda_id = m.id where t.id = ?';
    let parmsQuery = [req.params.id];
    db.execute(sql, parmsQuery, (err, result) => {
        if (err) {
            res.json('error en la consulta ' + err);
        }
        res.json({
            cuenta: result
        });
    });

});
//Add
router.post('/', (req, res) => {

    let tipo_cuenta_id = req.body.tipo_cuenta_id;
    let moneda_id = req.body.moneda_id;
    let cuenta = req.body.cuenta;
    let descripcion = req.body.descripcion;
    let activa = 1;
    let ccosto_id = req.body.ccosto_id;
    let predeterminada = req.body.predeterminada;

    let checkQuery = "SELECT * from cuentas c WHERE c.cuenta = ? AND c.ccosto_id = ? ";
    let parmsQuery = [cuenta, ccosto_id];

    db.execute(checkQuery, parmsQuery, (err, result) => {
        if (err) {
            res.json('error en la consulta ' + err);
        }
        if (result.length > 0) {
            res.json('Ya existe esta cuenta con este centro de costo')
        }
        else {
            // ahora si puedo insertar la cuenta
            let sql = 'insert into cuentas(tipo_cuenta_id,moneda_id,cuenta,descripcion,activa,ccosto_id,predeterminada)' +
                'values(?,?,?,?,?,?,?)';
            let sql_params = [tipo_cuenta_id, moneda_id, cuenta, descripcion, activa, ccosto_id, predeterminada];

            db.execute(sql, sql_params, (err, result, field) => {
                if (err) {
                    res.json('Error al insertar ' + err)
                }
                res.json('Cuenta creada correctamente ' + field)
            })

        }
    });

});
//Update
router.put('/:id', (req, res) => {
    console.log(req.params.id);
    let tipo_cuenta_id = req.body.tipo_cuenta_id;
    let moneda_id = req.body.moneda_id;
    let cuenta = req.body.cuenta;
    let descripcion = req.body.descripcion;
    let activa = 1;
    let ccosto_id = req.body.ccosto_id;
    let predeterminada = req.body.predeterminada;

    let sql = 'update cuentas set tipo_cuenta_id = ?, moneda_id = ?, cuenta = ?,' +
        'descripcion = ?, activa = ?, ccosto_id = ?, predeterminada =? where id = ?';

    let sql_params = [tipo_cuenta_id, moneda_id, cuenta, descripcion, activa, ccosto_id, predeterminada, req.params.id];
    db.execute(sql, sql_params, (err, result) => {
        if (err) {
            res.json('error al actualizar ' + err);
        }
        res.json('actualizado correctamente');
    });

});

//Delete
router.delete('/:id', (req, res) => {
    let sql = 'delete from cuentas where id=?';
    let sql_params = [req.params.id];

    db.execute(sql, sql_params, (err, result) => {
        if (err) {
            res.json('Error al eliminar ' + err);
        }
        res.json('Cuenta eliminada');
    })
})

module.exports = router;