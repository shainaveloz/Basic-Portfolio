// var nodemailer = require('nodemailer');
//
// //create reusable transporter object using the default SMTP transport
// //var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');
//
// var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');
//
// // setup e-mail data with unicode symbols
// var mailOptions = {
//     from: '"Sender Name" <sender@server.com>', // sender address
//     to: 'shaina.veloz@gmail.com', // list of receivers
//     subject: 'Hello ✔', // Subject line
//     text: "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";, // plaintext body
// html: '<b>Hello world 🐴</b>' // html body
// };
//
//
// // send mail with defined transport object
// transporter.sendMail(mailOptions, function(error, info){
//     if(error){
//         return console.log(error);
//     }
//     console.log('Message sent: ' + info.response);
// });
//
//
// var smtpConfig = {
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true, // use SSL
//     auth: {
//         user: 'user@gmail.com',
//         pass: 'pass'
//     },
//     proxy: 'http://localhost:8080/'
// };
//
// transporter.verify(function(error, success) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Server is ready to take our messages');
//     }
// });
//
// send mail with defined transport object
// transporter.sendMail(mailOptions, function(error, info){
//     if(error){
//         return console.log(error);
//     }
//     console.log('Message sent: ' + info.response);
// });

var nodemailer = require('nodemailer');
var secret = require('../server/environment/app-secret.js');

exports.setup = function (handleSayHello, secret){
    function handleSayHello(req, res) {
        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: secret.gmail.user, // Your email id
                secret: secret.gmail.secret // Your password
            }
        });


        // setup e-mail data with unicode symbols
        var mailOptions = {
            from: 'shaina.veloz@gmail.com>', // sender address
            to: ' shaina.veloz@gmail.com', // list of receivers
            subject: 'Hello ✔', // Subject line
            text: 'Hello world ?', // plaintext body
            html: '<b>Hello world ?</b>' // html body
        };

// send mail with defined transport object
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                res.json({yo: 'error'});
            } else {
                console.log('Message sent: ' + info.response);
                res.json({yo: info.response});
            }
        });
    }
};

module.exports = handleSayHello();
