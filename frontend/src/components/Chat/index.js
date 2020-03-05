import React, { Component } from 'react';
import FormMessage from '../FormMessage';
import ListMessages from '../ListMessages';
import socket from '../../socket';
import { Button } from 'reactstrap';
import './styles.css';

class Chat extends Component {
    constructor(){
        super();
        this.state = {
            messages: [],
            message: [],
            render: false
        }
        this.aux = [];

        this.onChildChanged = this.onChildChanged.bind(this);
    }

    componentDidMount () {

        const name = sessionStorage.getItem('username');
        let sessionData = {
            room: this.props.room,
            name
        }

        socket.emit('create', sessionData);
        socket.on('new user', (res) => { alert(res) });
        socket.on('output', messages => {
            console.log(messages);
            this.setState({
                messages,
                render: false
            })
            this.aux = [];
        });
        
        
    }

    onChildChanged = (data) => {
        this.aux.push(data);
        this.setState({
            message: this.aux,
            render: true
        });
    }

    render() {
        const username = sessionStorage.getItem('username');
        
        return (
            <div className="col-md-6" id="chat">
                <Button color="danger" href="/private">Voltar</Button>
                <br /><br />
                <h2 className="font-weight-bold text-center">{username} está na {this.props.room}</h2>
                <ListMessages messages={this.state.messages}  message={this.state.message} render={this.state.render} />
                <FormMessage  callbackParent={(data) => this.onChildChanged(data)}  room={this.props.room}/>
            </div>
        );
    }
}

export default Chat;