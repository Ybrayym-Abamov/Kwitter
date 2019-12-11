import React, { Component } from "react";
import { Card, Avatar } from 'antd';
import 'antd/dist/antd.css';
import "./Message.css";
import moment from 'moment';
import { withAsyncAction } from "../HOCs";


const { Meta } = Card;

class Message extends Component {

    state = {
        items: [],
        isLoaded: false,
    }


    componentDidMount() {
        this.props.getUserMessages(this.props.username);
        this.messagePollingID = setInterval(this.props.getUserMessages, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.messagePollingID)
    }


    render() {
        
        if (this.props.result === null) {
            return <div>Loading...</div>;
        }
        const getMessages = this.props.result.messages
        

            return (
                
                <div className='Message'>
                    <div>
                        {getMessages.map(item => (
                            <Card bordered={false} key={item.id} className="userpost">
                                <div className="postinfo">
                                    <Meta key={item.id}
                                        avatar={<Avatar size={64} src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />} //we'll need to make this link to whatever icon the user uploads
                                        title={item.username}
                                        description={item.text}
                                    />
                                    <div className="timestamp">{moment(item.createdAt).startOf('minutes').fromNow()}</div>
                                </div>
                            </Card>
                        ))}
                    </div>
                <h3>looks like you ran out of Kweets</h3>
                </div>
            )
        }
    }


export default withAsyncAction("messages", "getUserMessages") (Message);