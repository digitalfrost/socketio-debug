## App to debug multiple web sockets after server restart with Socket.io

### Master Branch Socket.io only

This is a sample app to demonstrate multiple web sockets after server restarts when using socket.io

Server log output
1 Chromium client
1 Firefox Client

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
### socketio-auth branch - Using Socket.io with socketio-auth


Server log output
1 Chromium Client

```
$ DEBUG=socket.io* node index.js
  socket.io:server initializing namespace / +0ms
  socket.io:server creating engine.io instance with opts {"path":"/socket.io"} +3ms
  socket.io:server attaching client serving req handler +4ms
listening on *:3000
  socket.io:server incoming connection with id MmPH2g-QgaLtFyemAAAA +2s
  socket.io:client connecting to namespace / +2ms
  socket.io:namespace adding socket to nsp / +0ms
  socket.io:socket socket connected - writing packet +4ms
  socket.io:socket joining room MmPH2g-QgaLtFyemAAAA +0ms
  socket.io:client writing packet {"type":0,"nsp":"/"} +1ms
  socket.io-parser encoding packet {"type":0,"nsp":"/"} +0ms
  socket.io-parser encoded {"type":0,"nsp":"/"} as 0 +0ms
a user connected
  socket.io-parser encoding packet {"type":2,"data":["message","Socket Connected to server!"],"nsp":"/"} +0ms
  socket.io-parser encoded {"type":2,"data":["message","Socket Connected to server!"],"nsp":"/"} as 2["message","Socket Connected to server!"] +0ms
  socket.io:socket joined room MmPH2g-QgaLtFyemAAAA +3ms
  socket.io-parser decoded 2["authentication",{"username":"John","password":"secret"}] as {"type":2,"nsp":"/","data":["authentication",{"username":"John","password":"secret"}]} +38ms
  socket.io:socket got packet {"type":2,"nsp":"/","data":["authentication",{"username":"John","password":"secret"}]} +1ms
  socket.io:socket emitting event ["authentication",{"username":"John","password":"secret"}] +0ms
authenticate called
Socket: MmPH2g-QgaLtFyemAAAA
  socket.io:client writing packet {"type":2,"data":["authenticated",{"username":"John","password":"secret"}],"nsp":"/"} +2ms
  socket.io-parser encoding packet {"type":2,"data":["authenticated",{"username":"John","password":"secret"}],"nsp":"/"} +0ms
  socket.io-parser encoded {"type":2,"data":["authenticated",{"username":"John","password":"secret"}],"nsp":"/"} as 2["authenticated",{"username":"John","password":"secret"}] +0ms
post Authenticate called
  socket.io-parser encoding packet {"type":2,"data":["message","Test message"],"nsp":"/"} +42ms
  socket.io-parser encoded {"type":2,"data":["message","Test message"],"nsp":"/"} as 2["message","Test message"] +0ms
  socket.io:client writing packet ["2[\"message\",\"Test message\"]"] +0ms

```


Browser  log output

Test message being sent multiple time to client after reconnect

```
Test message
socket.io.js:4194 GET http://localhost:3000/socket.io/?EIO=3&transport=polling&t=LViwRTN net::ERR_CONNECTION_REFUSEDRequest.create @ socket.io.js:4194Request @ socket.io.js:4107XHR.request @ socket.io.js:4035XHR.doPoll @ socket.io.js:4065Polling.poll @ socket.io.js:4482Polling.doOpen @ socket.io.js:4426Transport.open @ socket.io.js:4694Socket.open @ socket.io.js:3314Socket @ socket.io.js:3195Socket @ socket.io.js:3121Manager.open.Manager.connect @ socket.io.js:2708(anonymous function) @ socket.io.js:3022
3(index):26 Test message
socket.io.js:4194 GET http://localhost:3000/socket.io/?EIO=3&transport=polling&t=LViwgeE net::ERR_CONNECTION_REFUSEDRequest.create @ socket.io.js:4194Request @ socket.io.js:4107XHR.request @ socket.io.js:4035XHR.doPoll @ socket.io.js:4065Polling.poll @ socket.io.js:4482Polling.doOpen @ socket.io.js:4426Transport.open @ socket.io.js:4694Socket.open @ socket.io.js:3314Socket @ socket.io.js:3195Socket @ socket.io.js:3121Manager.open.Manager.connect @ socket.io.js:2708(anonymous function) @ socket.io.js:3022
socket.io.js:4194 GET http://localhost:3000/socket.io/?EIO=3&transport=polling&t=LViwh0V net::ERR_CONNECTION_REFUSEDRequest.create @ socket.io.js:4194Request @ socket.io.js:4107XHR.request @ socket.io.js:4035XHR.doPoll @ socket.io.js:4065Polling.poll @ socket.io.js:4482Polling.doOpen @ socket.io.js:4426Transport.open @ socket.io.js:4694Socket.open @ socket.io.js:3314Socket @ socket.io.js:3195Socket @ socket.io.js:3121Manager.open.Manager.connect @ socket.io.js:2708(anonymous function) @ socket.io.js:3022
6(index):26 Test message
socket.io.js:4194 GET http://localhost:3000/socket.io/?EIO=3&transport=polling&t=LViwuLQ net::ERR_CONNECTION_REFUSEDRequest.create @ socket.io.js:4194Request @ socket.io.js:4107XHR.request @ socket.io.js:4035XHR.doPoll @ socket.io.js:4065Polling.poll @ socket.io.js:4482Polling.doOpen @ socket.io.js:4426Transport.open @ socket.io.js:4694Socket.open @ socket.io.js:3314Socket @ socket.io.js:3195Socket @ socket.io.js:3121Manager.open.Manager.connect @ socket.io.js:2708(anonymous function) @ socket.io.js:3022
10(index):26 Test message
```
