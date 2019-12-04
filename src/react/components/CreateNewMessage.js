import React, { Component } from 'react';
import { Input, Button } from 'antd';
import 'antd/dist/antd.css';
import './CreateNewMessage.css';

const { TextArea } = Input;

class CreateNewMessage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            message: ''
        }
    }


    handleMessage = (event) => {
        event.preventDefault()
        const data = this.state
        console.log("Your kweet is", data)
    }

    handleInput = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.message]: event.target.value
        })
    }
    render() {
        const { message } = this.state
        return (
            <div className="field">
                <h1>Kweet</h1>
                <p>{message}</p>
                <form onSubmit={this.handleMessage}>
                    <p><TextArea rows={4} type='text' placeholder='Your Kweet' message='message' onChange={this.handleInput} /></p>
                    <Button icon="edit" disabled>Kweet</Button>
                </form>
            </div>
        )
    }
}

export default CreateNewMessage;