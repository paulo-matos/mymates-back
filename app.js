var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var express = require('express');
var logger = require('morgan');

var indexRouter = require('./routes/index');

// Routes Variable
var usersRouter = require('./routes/user');
const groupRouter = require('./routes/group');
const addressRouter = require('./routes/address');
const phoneRouter = require('./routes/phone');

var app = express();

const database = require('./config/database');
database(process.env.MONGOLAB_URI);

const cors = require('cors');
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/group', groupRouter);
app.use('/address', addressRouter);
app.use('/phone', phoneRouter);

app.use(function (req, res, next) {
    next(createError(404));
});

app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
