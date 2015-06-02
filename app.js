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
    myFirebaseRef.createUser({
	  email: "codotronix@gmail.com",
	  password: "Passw0rd"
	}, function(error, userData) {
	  if (error) {
	    switch (error.code) {
	      case "EMAIL_TAKEN":
	        console.log("The new user account cannot be created because the email is already in use.");
	        break;
	      case "INVALID_EMAIL":
	        console.log("The specified email is not a valid email.");
	        break;
	      default:
	        console.log("Error creating user:", error);
	    }
	  } else {
	    console.log("Successfully created user account with uid:", userData.uid);
	  }
	});

    res.render('hello', {"name":"Suman Barick"});
});
app.listen(9090);
console.log('Node Express Server running at localhost:9090');