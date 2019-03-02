var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var loginInflu=require('./routes/loginInflu_routes');
var loginBrand=require('./routes/loginBrand_routes');
var signupInflu=require('./routes/singupInflu_routes');
var signupBrand=require('./routes/signupBrand_routes');

var viewInflu=require('./routes/viewinflu_routes');
var viewBrand=require('./routes/viewbrand_routes');
var editBrand=require('./routes/editBrand_routes');
var editInflu=require('./routes/editInflu_routes');
var editinfluimg=require('./routes/edit_influ_img');

var colabadd=require('./routes/colab_add_routes');
var colabget=require('./routes/colab_get_routes');
var colabupdate=require('./routes/colab_update_routes');
var colabdel=require('./routes/colab_del_routes');

var loginAdmin=require('./routes/loginAdmin_routes');
var getadmin=require('./routes/get_admin_routes');
var addadmin=require('./routes/admin_add_routes');
var updateAdmin=require('./routes/admin_update_routes');
var addbrand=require('./routes/admin_add_brand_routes');
var addinflu=require('./routes/admin_add_influ_routes');
var delbrand=require('./routes/admin_del_brand_routes');
var delinflu=require('./routes/admin_del_influ_routes');
var delmulbrand=require('./routes/admin_delmul_brand_routes');
var delmulinflu=require('./routes/admin_delmul_influ_routes');
var getbrandadmin=require('./routes/admin_get_brand_routes');
var getinfluadmin=require('./routes/admin_get_influ_routes');
var updatebrandadmin=require('./routes/admin_update_brand_routes');
var updateinfluadmin=require('./routes/admin_update_influ_routes');
var addfield=require('./routes/admin_add_field_routes');
var delfield=require('./routes/admin_del_field_routes');
var delmulfield=require('./routes/admin_delmul_field_routes');
var getfield=require('./routes/admin_get_field_routes');
var updatefield=require('./routes/admin_update_field_routes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/logininflu',loginInflu);
app.use('/loginbrand',loginBrand);
app.use('/signupinflu',signupInflu);
app.use('/signupbrand',signupBrand);
app.use('/viewprofileinflu',viewInflu);
app.use('/veiwprofilebrand',viewBrand);
app.use('/updateprofileinflu',editInflu);
app.use('/updateinfluimg',editinfluimg);
app.use('/updateprofilebrand',editBrand);

app.use('/viewinfluencer',getinfluadmin);
app.use('/viewbrand',getbrandadmin);
app.use('/addinfluencer',addinflu);
app.use('/addbrand',addbrand);
app.use('/delinfluencer',delinflu);
app.use('/delbrand',delbrand);
app.use('/delmulbrand',delmulbrand);
app.use('/delmulinflu',delmulinflu);
app.use('/updateinflu',updateinfluadmin);
app.use('/updatebrand',updatebrandadmin);
app.use('/adminlogin',loginAdmin);
app.use('/manageadmin',getadmin);
app.use('/addadmin',addadmin);
app.use('/updateadmin',updateAdmin);
app.use('/viewfield',getfield);
app.use('/addfield',addfield);
app.use('/delfield',delfield);
app.use('/delmulfield',delmulfield);
app.use('/updatefield',updatefield);

app.use('/addcolab',colabadd);
app.use('/updatecolab',colabupdate);
app.use('/viewcolab',colabget);
app.use('/delcolab',colabdel);

app.use('/users', usersRouter);

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
