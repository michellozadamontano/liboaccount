var createError         = require('http-errors');
var express             = require('express');
var path                = require('path');
var cookieParser        = require('cookie-parser');
var logger              = require('morgan');
var cors                = require('cors');
const mysql             = require('mysql2');

var indexRouter         = require('./routes/index');
var usersRouter         = require('./routes/users');
var cuenta_tipoRouter   = require('./routes/cuenta_tipo');
var actividades         = require('./routes/actividaes');
var tcpRouter           = require('./routes/tcp');
var cuentaGrupoRouter   = require('./routes/cuenta_grupo');
var cuentaPlanRouter    = require('./routes/cuenta_plan');


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
  database: 'liboaccount',
  typeCast: function castField( field, useDefaultTypeCasting ) {

    // We only want to cast bit fields that have a single-bit in them. If the field
    // has more than one bit, then we cannot assume it is supposed to be a Boolean.
    if ( ( field.type === "BIT" ) && ( field.length === 1 ) ) {

        var bytes = field.buffer();

        // A Buffer in Node represents a collection of 8-bit unsigned integers.
        // Therefore, our single "bit field" comes back as the bits '0000 0001',
        // which is equivalent to the number 1.
        return( bytes[ 0 ] === 1 );

    }

    return( useDefaultTypeCasting() );

  }
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
app.use('/cuenta_tipo',cuenta_tipoRouter);
app.use('/activity',actividades);
app.use('/tcp',tcpRouter);
app.use('/cuenta_mayor',cuentaGrupoRouter);
app.use('/cuenta_plan',cuentaPlanRouter);



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
