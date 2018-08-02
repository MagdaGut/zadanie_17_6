var express = require('express');
var app = express();

const validUser = "Magda";
const validPassword = "abc123";

app.set('view engine', 'pug');
app.set('views','./views');

// app.get('/first-template', function(req, res){
//     res.render('first-template', {
//     	user:{
//     		name: 'Magda'
//     	},
//     	URL: 'http://localhost:3000/first-template'
//     });
// });

app.get('/auth/google', function(req,res){
    res.render('logowanie')
})

app.get('/userform', function(req,res){
    
    if(req.query.login === validUser && validPassword === req.query.password) {
        res.render('zalogowany')
    } else {
        res.render('niezalogowany')
    }
})

app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});

var server = app.listen(3000, 'localhost', function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Przykładowa aplikacja nasłuchuje na http://' + host + ':' + port);
});

