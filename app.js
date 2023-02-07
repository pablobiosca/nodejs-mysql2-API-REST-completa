require("dotenv").config()

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const employees = require('./routes/employees');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', employees);

app.use((req,res,next)=>{
    res.status(404).json({
        message:"endpoint not found"
    })
})

app.use(express.static(path.join(__dirname, 'public')));
module.exports = app;
