var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


require('socketio-auth')(io, {
    authenticate: authenticate,
    postAuthenticate: postAuthenticate,
    timeout: 1000
});


function authenticate(socket, data, callback) {

    console.log("authenticate called");
    console.log("Socket: "+ socket.id);

   //assume client sent correct credentials and authenticate...
   //return callback(null, data);

    //assume client sent incorrect credentials and send error
    return callback(new Error("Nobody is getting authenticated"));
}

function postAuthenticate(socket, data) {

    console.log("post Authenticate called");
    io.to(socket.id).emit('message', 'Test message');

}

//Clients should only receive this if authenticated
setTimeout(function(){
    io.emit("message", "Sending to Authenticated Users");
    console.log("Sending stuff to authenticated users!")
},10000);

app.get('/', function(req, res){
    res.sendfile('index.html');
});

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
    io.to(socket.id).emit('message', 'Socket Connected to server!');
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});
