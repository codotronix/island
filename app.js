var express = require('express'),
    firebase = require('firebase'),
    app = express(),
    cons = require('consolidate');
 
app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + "/views");

//my firebase ref
var myFirebaseRef = new firebase("https://crackling-inferno-4598.firebaseio.com/");
    
app.get('/', function(req, res){
	/*
    myFirebaseRef.push([{
        "time":"Suman" + (new Date()),
        "id2":"Tulu"
    }]);
    res.send('Hello from Node Express running in Cloud 9...<br/>Some data is written to firebase...');
    */

    res.render('hello', {"name":"Suman Barick"});
});
app.listen(9090);
console.log('Node Express Server running at localhost:9090');