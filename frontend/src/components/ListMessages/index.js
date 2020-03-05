import React, { Component } from 'react';
import './styles.css';

class ListMessages extends Component {
    
    render() {        
        const { messages, message, render } = this.props;

        return (
            <div id="box" className="card">
                <div id="messages" className="card-block">
                    {messages.map(message => (
                        <div className="message">
                            <strong> {message.name}: </strong>
                            { message.message }
                        </div>
                    ))}
                    {render? (
                        message.map(message => (
                            <div className="message">
                                <strong> {message.name}: </strong>
                                { message.message }
                            </div>
                        ))    
                    ):(null)
                    }
                </div>
            </div>
        );
    }        
}

export default ListMessages;