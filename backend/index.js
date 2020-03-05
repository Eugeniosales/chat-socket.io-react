const app = require('express')();
const cors = require('cors');

app.use(cors());

const http = require('http').createServer(app);
const io = require('socket.io')(http);

let rooms = [];

io  
    .of('/atendimento')
    .on('connection', (socket) => {

        socket.on('create', (data) => {
            socket.join(data.room);
            
            console.log(`${data.name} entrou na ${data.room}`);
        
            rooms.push({
                room: data.room,
                messages: []
            });

            socket.to(data.room).broadcast.emit("new user", `${data.name} entrou na ${data.room}`);
        });

        socket.on('input', (data) => {
            
            //Saving to the array
            for(let i = 0; i < rooms.length; i++){
                if(rooms[i].room === data.room ){
                    rooms[i].messages.push({
                        name: data.name,
                        message: data.message
                    });
                    console.log(rooms[i].messages);
                    socket.to(data.room).broadcast.emit("output", rooms[i].messages);
                    break;
                }
            }

        });
        
        });

const PORT = process.env.PORT || 5000;

http.listen(PORT, console.log("Server Started"));
