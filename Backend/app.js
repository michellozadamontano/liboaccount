import createError from 'http-errors';
import express from 'express';
import { join } from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';


import grapqlHTTP from 'express-graphql';
import schema from './schema/schema';

import indexRouter from './routes/index';
import usersRouter from './routes/users';
import cuenta_tipoRouter from './routes/cuenta_tipo';
import actividades from './routes/actividaes';
import tcpRouter from './routes/tcp';
import cuentaGrupoRouter from './routes/cuenta_grupo';
import cuentaPlanRouter from './routes/cuenta_plan';
import ccostoRouter from './routes/ccosto';
import monedaRouter from './routes/moneda';


var app                 = express();

// view engine setup
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(static(join(__dirname, 'public')));
app.use(express.static(join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cuenta_tipo',cuenta_tipoRouter);
app.use('/activity',actividades);
app.use('/tcp',tcpRouter);
app.use('/cuenta_mayor',cuentaGrupoRouter);
app.use('/cuenta_plan',cuentaPlanRouter);
app.use('/ccosto', ccostoRouter);
app.use('/moneda', monedaRouter);
app.use('/graphql',grapqlHTTP({
   schema,
   graphiql:true
}));



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
