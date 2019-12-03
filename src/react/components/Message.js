import React from "react";
import { UserInfo } from ".";
// import "./Message.css";
import { Card } from 'antd';
import 'antd/dist/antd.css';



class Message extends React.Component {
    render() {
        return (
           <>
                <div id="message">
                    <UserInfo />
                    <Card>
                        <p>this should be where the message shows up, put that code here</p>
                        <p>userinfo and the message card should be side-by-side in two columns, the userinfo the thinner column</p>
                    </Card>
                </div>
           </>
        );
      }
}
export default Message;
