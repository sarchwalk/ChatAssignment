var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req,res){
   res.sendFile(__dirname + '/index.html') ;
});

io.on('connection', function(socket){
   socket.on('chat message', function(msg){
      console.log(Date.now().toString());
      io.emit('chat message', {message: msg, timeStamp: Date.now().toString()});
   });
});


http.listen(3000, function(){
   console.log('listening on *:3000') ;
});