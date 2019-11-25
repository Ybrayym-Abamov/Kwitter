import React, { Component } from 'react';
import { Divider } from 'antd'

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
        console.log(event)
        console.log(event.target.message)
        console.log(event.target.value)
        this.setState({
            [event.target.message]: event.target.value
        })
    }
    render() {
        const { message } = this.state
        return (
            <div>
                <h1>Kweet</h1>
                <p>Kweet is: {message}</p>
                <form onSubmit={this.handleMessage}>
                    <p><input type='text' placeholder='Your Kweet' message='message' onChange={this.handleInput} /></p>
                    <p><button>Post</button></p>
                </form>
            </div>
        )
    }
}

export default CreateNewMessage;