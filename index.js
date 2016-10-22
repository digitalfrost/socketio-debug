//Server code from http://socket.io/get-started/chat/
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

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
