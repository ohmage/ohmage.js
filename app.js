//initiate the client
var oh = Ohmage("/app", "myclientname")

//attach global callbacks
oh.addcb("done", function(x, status, req){
	//for debugging only
	console.log(x);
})

//global error handler. In ohmage 200 means unauthenticated
oh.addcb("error", function(msg, code, req){
	(code == 200) ? window.location.replace("/web/#login") : alert("Error!\n" + msg);
});

//main app
oh.user.whoami().done(function(username){
	
	//make sure we don't timeout
	oh.keepalive();



});
