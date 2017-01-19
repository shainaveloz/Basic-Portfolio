var express = require('express');
var bodyParser = require('body-parser');
<<<<<<< HEAD
var router = express.Router();
var nodemailer = require('nodemailer');
=======
>>>>>>> 81baf8d8ac17f90e29e512c1c11d97f5eef0ac5f
var path = require('path');
var app = express();

app.use(express.static(__dirname + '/views'));
<<<<<<< HEAD
app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/js'));
app.use('/views',  express.static( path.join(__dirname, '/views')));
app.use('/assets',  express.static( path.join(__dirname, '/assets')));
app.use('/js',  express.static( path.join(__dirname, '/js')));
=======
app.use('/views',  express.static( path.join(__dirname, '/views')));
>>>>>>> 81baf8d8ac17f90e29e512c1c11d97f5eef0ac5f

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

<<<<<<< HEAD
// app.use('/sayHello', router);
// router.post('/', handleSayHello);

=======
>>>>>>> 81baf8d8ac17f90e29e512c1c11d97f5eef0ac5f

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, './views', 'index.html'));
});

<<<<<<< HEAD
app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, './js', 'contact_me.js'));
});

=======
app.post('/contact', function(req, res){
    res.sendFile(path.join(__dirname, './views/mail/contact.js'));
});
>>>>>>> 81baf8d8ac17f90e29e512c1c11d97f5eef0ac5f
var PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
    console.log("Listening on %d", PORT);
});