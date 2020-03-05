import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import Chat from '../../components/Chat';

class PrivateChat extends Component {
    
    constructor() {
        super();
        this.state = {
            room: ''
        }
    }
    
    render() {
        const rooms = [
            {
                id: 1,
                name: "Sala 1"
            },
            {
                id: 2,
                name: "Sala 2"
            },
            {
                id: 3,
                name: "Sala 3"
            }
        ];

        if(!this.state.room){
            const username = sessionStorage.getItem('username');
            return(
                <div className="container">
                    <h2 className="font-weight-bold text-center">Bem vindo, {username}!</h2>
                    <br />
                    <Table className=" table-striped table-info text-center">
                        <thead className="thead-dark">
                            <tr>
                                <th>Salas de comunicação</th>
                                <th>Entrar</th>
                            </tr>
                        </thead>
                        <tbody>
                            { rooms.map(room => (
                                <tr key={room.id}>
                                    <td> {room.name} </td>
                                    <td>
                                        <Button color="success" size="sm" onClick={ (e) => this.setState({ room: room.name }) }>Entrar</Button>
                                    </td>
                                </tr>
                            ))}
                
                        </tbody>
                    </Table>
                </div>
            )
        }
        else {
            return (
                <Chat room={this.state.room}/>
            )
        }
    }
}

export default PrivateChat;