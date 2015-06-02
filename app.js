var express = require('express'),
    firebase = require('firebase'),
    app = express();
    
//my firebase ref
var myFirebaseRef = new firebase("https://crackling-inferno-4598.firebaseio.com/hobby");
    
app.get('/', function(req, res){
    myFirebaseRef.set({
        "id1":"Suman",
        "id2":"Tulu"
    });
    res.send('Hello from Node Express running in Cloud 9...<br/>Some data is written to firebase...');
});
app.listen(9090);
console.log('Node Express Server running at localhost:9090');