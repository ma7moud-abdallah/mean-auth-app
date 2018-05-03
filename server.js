const app = require('./index')

const server = require('http').Server(app);
const io = require('socket.io')(server);

const port = process.env.PORT || 8080

server.listen(port)

 //online and offline access
io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

  