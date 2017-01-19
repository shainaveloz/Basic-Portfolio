var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var nodemailer = require('nodemailer');
var path = require('path');
var app = express();

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/js'));
app.use('/views',  express.static( path.join(__dirname, '/views')));
app.use('/assets',  express.static( path.join(__dirname, '/assets')));
app.use('/js',  express.static( path.join(__dirname, '/js')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// app.use('/sayHello', router);
// router.post('/', handleSayHello);


app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, './views', 'index.html'));
});

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, './js', 'contact_me.js'));
});

var PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
    console.log("Listening on %d", PORT);
});