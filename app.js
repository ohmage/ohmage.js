//initiate the client
var oh = Ohmage("/app", "myclientname")

//attach global callbacks
oh.callback("done", function(x, status, req){
	//for debugging only
	console.log(x);
})

//global error handler. In ohmage 200 means unauthenticated
oh.callback("error", function(msg, code, req){
	(code == 200) ? window.location.replace("/web/#login") : alert("Error!\n" + msg);
});

//main app
oh.user.whoami().done(function(username){
	
	//make sure we don't timeout
	oh.keepalive();

	//This is where you put your app code
	//Silly example app shows user info

	oh.user.info().done(function(x){
		$.each(x[username].campaigns, function(urn, name){
			$("#campaigntable tbody").append("<tr><td>" + urn + "</td><td>" + name + "</td></tr>")
		});
		$.each(x[username].classes, function(urn, name){
			$("#classtable tbody").append("<tr><td>" + urn + "</td><td>" + name + "</td></tr>")
		});		
	})

});
