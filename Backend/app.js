var createError         = require('http-errors');
var express             = require('express');
var path                = require('path');
var cookieParser        = require('cookie-parser');
var logger              = require('morgan');
var cors                = require('cors');
const mysql             = require('mysql2');

var indexRouter         = require('./routes/index');
var usersRouter         = require('./routes/users');
var monedaRouter        = require('./routes/moneda');
var tipoCuentaRouter    = require('./routes/tipo_cuenta');
var cuentasRouter       = require('./routes/cuentas');
var entidadRouter       = require('./routes/entidad_route');
var provinciaRouter     = require('./routes/provincia');
var ccostoRouter        = require('./routes/ccosto');
var tasaRouter          = require('./routes/tasa');
var genericoRouter      = require('./routes/generico');

var app                 = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// create connection to database
// the mysql.createConnection function takes in a configuration object which contains host, user, password and the database name.
const db = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'zunaftweb'
});

// connect to database
db.connect((err) => {
  if (err) {
      throw err;
  }
  console.log('Connected to database');
});
global.db = db;

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/moneda',monedaRouter);
app.use('/tipo_cuenta',tipoCuentaRouter);
app.use('/cuentas',cuentasRouter);
app.use('/entidad', entidadRouter);
app.use('/provincia', provinciaRouter);
app.use('/ccosto', ccostoRouter);
app.use('/tasa',tasaRouter);
app.use('/generico',genericoRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
