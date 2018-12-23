const express = require('express');
const app = express();
const morgan =require('morgan');
const path = require('path');
const route = require('./../routes/router');

//SETTING
app.set('port', process.env.PORT || 8080);
app.set('view engine', 'ejs');
app.set( 'views',path.join(__dirname + './../views'));

//STATIC FILE
app.use(express.static(path.join(__dirname , './../public')));

//ROUTES
app.use(route);

//Listen
app.listen(app.get('port'),()=>{
    app.use(morgan('dev'));

});
