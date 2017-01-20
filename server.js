var express = require('express');
var bodyParser = require('body-parser');

var nodemailer = require('nodemailer');
var path = require('path');
var app = express();


app.use(express.static(__dirname + '/views'));
app.use('/bower_components',  express.static( path.join(__dirname, '/bower_components')));
app.use('/assets',  express.static( path.join(__dirname, '/assets')));
app.use('/js',  express.static( path.join(__dirname, '/js')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, './views', 'index.html'));
});

// exports.setup = function (handleSayHello, secret){
//     function handleSayHello(req, res) {
//         var transporter = nodemailer.createTransport({
//             service: 'Gmail',
//             auth: {
//                 user: secret.gmail.user, // Your email id
//                 secret: secret.gmail.secret // Your password
//             }
//         });
//
//
//         // setup e-mail data with unicode symbols
//         var mailOptions = {
//             from: 'shaina.veloz@gmail.com>', // sender address
//             to: ' shaina.veloz@gmail.com', // list of receivers
//             subject: 'Hello ✔', // Subject line
//             text: 'Hello world ?', // plaintext body
//             html: '<b>Hello world ?</b>' // html body
//         };
//
// // send mail with defined transport object
//         transporter.sendMail(mailOptions, function (error, info) {
//             if (error) {
//                 console.log(error);
//                 res.json({yo: 'error'});
//             } else {
//                 console.log('Message sent: ' + info.response);
//                 res.json({yo: info.response});
//             }
//         });
//     }
// };
// app.get('/', function(req,res){
//     res.sendFile(path.join(__dirname, './js', 'contact_me.js'));
// });

var PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
    console.log("Listening on %d", PORT);
});