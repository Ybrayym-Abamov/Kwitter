import React, { Component } from "react";
import { Card, Avatar } from 'antd';
import 'antd/dist/antd.css';
import "./Message.css";
import moment from 'moment';

const { Meta } = Card;

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
                    <h3>Latest Kweets</h3>
                    {/* <Card>
                    {items.map(item => (
                        <Meta key={item.id}
                        avatar={<Avatar size={64} src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />} //we'll need to make this link to whatever icon the user uploads
                        title={item.username} 
                        {item.text}
                        {moment(item.createdAt).startOf('hour').fromNow()}
                        />
                    ))}
                    </Card> */}
                      
                    <div>
                        {items.map(item => (
                            <Card key={item.id} class="userpost">
                                <div class="postinfo">
                                    <div class="timestamp">{moment(item.createdAt).startOf('hour').fromNow()}</div>
                                    <Meta key={item.id}
                                        avatar={<Avatar size={64} src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />} //we'll need to make this link to whatever icon the user uploads
                                        title={item.username}
                                        description={item.text}
                                    />
                                </div>
                            </Card>
                        ))}  
                    </div>

            </div>
            )
        }
    }
}

export default Message;
