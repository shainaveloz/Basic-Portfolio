var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.use(express.static(__dirname + '/views'));
app.use('/views',  express.static( path.join(__dirname, '/views')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, './views', 'index.html'));
});

app.get('/contact', function(req,res){

})
var PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
    console.log("Listening on %d", PORT);
});