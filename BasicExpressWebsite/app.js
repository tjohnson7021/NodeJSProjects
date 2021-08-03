var express  = require ('express');
var path =  require('path');
var bodyParser = require('body-parser');
var nodeMailer = require('nodemailer');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(request, response){
    response.render('index'); //points to homepage
});

app.listen(3000);
console.log('Server is running on port 3000...');