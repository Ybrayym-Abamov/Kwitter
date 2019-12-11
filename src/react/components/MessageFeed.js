import React from "react";
import { Message } from ".";
// import "./MessageFeed.css";

class MessageFeed extends React.Component {
      // componentDidMount() {
      //       this.props.getUserMessages(this.props.currentUser)
      //       // this.messagePollingID = setInterval()
      // }

      

      render() {
            return (
                  <>
                        <Message currentUser={JSON.parse(localStorage.login).result.username}/>
                  </>
            );
      }
}
export default MessageFeed;
