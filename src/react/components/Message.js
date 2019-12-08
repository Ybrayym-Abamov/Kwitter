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
        this.props.getUserMessages(this.props.username)
    }


    render() {
        
        if (this.props.result === null) {
            return <div>Loading...</div>;
        }
        const getMessages = this.props.result.messages
        

            return (
                
                <div className='Message'>
                    <h3>Latest Kweets</h3>                      
                    <div>
                        {items.map(item => (
                            <Card key={item.id} className="userpost">
                                <div className="postinfo">
                                    <Meta key={item.id}
                                        avatar={<Avatar size={64} src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />} //we'll need to make this link to whatever icon the user uploads
                                        title={item.username}
                                        description={item.text}
                                    />
                                    <div className="timestamp">{moment(item.createdAt).startOf('hour').fromNow()}</div>
                                </div>
                            </Card>
                        ))}
                    </div>

                </div>
            )
        }
    }


export default withAsyncAction("messages", "getUserMessages") (Message);
