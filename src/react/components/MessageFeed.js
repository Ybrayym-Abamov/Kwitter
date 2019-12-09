import React from "react";
import { Message } from ".";
// import "./MessageFeed.css";

class MessageFeed extends React.Component {
      // componentDidMount {
      //       this.messagePollingID = setInterval()
      // }
    render() {
        return (
        <>
              <Message />
        </>
        );
      }
}
export default MessageFeed;
