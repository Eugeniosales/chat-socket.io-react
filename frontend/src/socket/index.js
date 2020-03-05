import io from 'socket.io-client';

const socket = io("https://chat-onboard-backend.herokuapp.com/atendimento");
//const socket = io("http://localhost:5000/atendimento");

export default socket;
