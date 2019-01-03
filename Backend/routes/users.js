var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
let jwt                 = require('jsonwebtoken');
let config              = require('../config');
let middleware          = require('../middleware');

/* GET users listing. */
router.get('/',middleware.checkToken, (req, res)=> {
  let sql = 'select * from usuarios';
  db.execute(sql,(err,result)=>{
    if(err){
      res.json(err);
    }
    res.json(result)
  })
});
router.post('/',(req,res)=>{
  let nombre          = req.body.nombre;
  let apellidos       = req.body.apellidos;
  let username        = req.body.username;
  let password        = req.body.password;

  const saltRounds = 10;

  let checkUser   = 'select * from usuarios where username = ?';
  let paramsCheck = [username];
  db.execute(checkUser,paramsCheck,(err,result)=>{
    if(err){
      res.json(err);
    }
    if(result.lenght > 0)
    {
      res.json('1')
    }
    else{
      bcrypt.hash(password, saltRounds, function(err, hash) {
        // Store hash in your password DB.
        password = hash;
        let sql = 'insert into usuarios(nombre, apellidos, username, password)values(?,?,?,?)';
        let params = [nombre, apellidos, username, password];
        db.execute(sql,params,(err,result)=>{
          if(err){
            res.json(err);
          }
          res.json('ok');
        })
        
      });
      
    }
  })
})
router.post('/login',(req,res)=>{
   let username = req.body.username;
   let password = req.body.password;
   

   let sql = 'select * from usuarios where username = ?';
   let params = [username];
   db.execute(sql,params,(err,result)=>{
     if(err){
       res.json(err);
     }

     if(result.length > 0)
     {
      bcrypt.compare(password, result[0].password, function(err, result) {        
        
        if(result) {
         // Passwords match
          let token = jwt.sign({username: username},
            config.secret,
            { expiresIn: '24h' // expires in 24 hours
            }
          );
          // return the JWT token for the future API calls
          res.json({
            success: true,
            message: 'Authentication successful!',
            token: token
          });        
        } else {
         // Passwords don't match
         res.json('Usuario o Password Incorrectos')
        } 
      });
     }

   })
})

router.put('/:id',(req,res)=>{
  let id              = req.params.id;
  let nombre          = req.body.nombre;
  let apellidos       = req.body.apellidos;
  let nombre_usuario  = req.body.nombre_usuario;  

  let checkUser   = 'select * from usuarios where nombre_usuario = ? and id <> ?';
  let paramsCheck = [nombre_usuario, id];
  db.execute(checkUser,paramsCheck,(err,result)=>{
    if(err){
      res.json(err);
    }
    if(result.lenght > 0)
    {
      res.json('1')
    }
    else{
      let sql = 'update usuarios set nombre = ?, apellidos = ?, nombre_usuario = ? where id = ?';
      let params = [nombre, apellidos, nombre_usuario, id];
      db.execute(sql,params,(err,result)=>{
        if(err){
          res.json(err);
        }
        res.json('ok');
      })
    }
  })
})

router.delete('/:id',(req,res)=>{
  let id = req.body.id;
  sql = 'delete from usuarios where id = ?';
  params = [id];
  db.execute(sql,params,(err,result)=>{
    if(err){
      res.json(err);
    }
    res.json('ok');
  })
})

module.exports = router;
