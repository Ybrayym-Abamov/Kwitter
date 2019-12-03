import React, { Component } from "react";
import 'antd/dist/antd.css';
import moment from 'moment'

class Message extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {

        fetch('https://kwitter-api.herokuapp.com/messages?limit=35&offset=0')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json.messages,
                })
            });
    }


    render() {

        var { isLoaded, items } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>;
        }

        else {

            return (
                <div className='Message'>
                    <h1>Message Feed</h1>

                    <ul>
                        {items.map(item => (
                            <li key={item.id}>
                               Username: {item.username} | Message: {item.text} | Time: {moment(item.createdAt).startOf('hour').fromNow()}
                            </li>
                        ))}  
                    </ul>

            </div>
            )
        }
    }
}

export default Message;