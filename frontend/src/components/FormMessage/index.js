import React, { Component } from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import socket from '../../socket';

class FormMessage extends Component {
    constructor(props){
        super(props);
        this.state = {
            message: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        const { message } = this.state;
        const { room } = this.props;
        const name = sessionStorage.getItem('username');

        let data = {
            room,
            name,
            message
        }

        this.props.callbackParent(data);

        socket.emit("input", data );
    } 

    render() {
        return (
            <Form id onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Input required={true} type="textarea" name="message" value={this.state.message} onChange={this.handleChange} placeholder="Enter message..." ></Input>
                </FormGroup>
                <Button color="info" type="submit">Enviar</Button>
                <br />
                <br/>
                <br />
                <br/>
            </Form>
        );
    }
}

export default FormMessage;