#Demonstratring multiple web sockets after server restart with Socket.io

This is a sample app to demonstrate multiple web sockets after server restarts when using socket.io

Server log output

```
$ DEBUG=socket.io* node index.js
  socket.io:server initializing namespace / +0ms
  socket.io:server creating engine.io instance with opts {"path":"/socket.io"} +3ms
  socket.io:server attaching client serving req handler +5ms
listening on *:3000
  socket.io:server incoming connection with id gd2nrMdYGwjBZ3R8AAAA +2s
  socket.io:client connecting to namespace / +3ms
  socket.io:namespace adding socket to nsp / +0ms
  socket.io:socket socket connected - writing packet +8ms
  socket.io:socket joining room gd2nrMdYGwjBZ3R8AAAA +1ms
  socket.io:client writing packet {"type":0,"nsp":"/"} +1ms
  socket.io-parser encoding packet {"type":0,"nsp":"/"} +7ms
  socket.io-parser encoded {"type":0,"nsp":"/"} as 0 +4ms
a user connected
  socket.io-parser encoding packet {"type":2,"data":["message","Socket Connected to server!"],"nsp":"/"} +0ms
  socket.io-parser encoded {"type":2,"data":["message","Socket Connected to server!"],"nsp":"/"} as 2["message","Socket Connected to server!"] +9ms
  socket.io:client writing packet ["2[\"message\",\"Socket Connected to server!\"]"] +18ms
  socket.io:socket joined room gd2nrMdYGwjBZ3R8AAAA +0ms
  socket.io:server incoming connection with id t4FM344PF_ixHMh0AAAB +55ms
  socket.io:client connecting to namespace / +0ms
  socket.io:namespace adding socket to nsp / +1ms
  socket.io:socket socket connected - writing packet +0ms
  socket.io:socket joining room t4FM344PF_ixHMh0AAAB +0ms
  socket.io:client writing packet {"type":0,"nsp":"/"} +0ms
  socket.io-parser encoding packet {"type":0,"nsp":"/"} +0ms
  socket.io-parser encoded {"type":0,"nsp":"/"} as 0 +0ms
a user connected
  socket.io-parser encoding packet {"type":2,"data":["message","Socket Connected to server!"],"nsp":"/"} +64ms
  socket.io-parser encoded {"type":2,"data":["message","Socket Connected to server!"],"nsp":"/"} as 2["message","Socket Connected to server!"] +1ms
  socket.io:client writing packet ["2[\"message\",\"Socket Connected to server!\"]"] +1ms
  socket.io:socket joined room t4FM344PF_ixHMh0AAAB +0ms

```
