import React from "react";
// // import { UserInfoBlock } from ".";
// // import { Link } from ".";
// import "./UserList.css";
// import { Card, Avatar } from 'antd';
// import 'antd/dist/antd.css';

// const { Meta } = Card;



class UserList extends React.Component {
    render() {
        return (
          <>
            <p>This will be a feed of userinfoblocks for all registered users.</p>
            <p>can you imagine?</p>
            <p>a whole list of the currently registered users</p>
            <p>none of their kweets or messages or whatever</p>
            <p>but just a long, long list of all the test users everyone created during this assignment</p>
            <p>i bet it's a thing to behold</p>
            <p>"look at all the users I have. just look at them. here they are"</p>
          </>
        );
      }
}
export default UserList;
// class UserList extends React.Component {

//   state = {
//     items: [],
//     isLoaded: false,
//   }


//   componentDidMount() {
//     this.props.getUserMessages(this.props.username);
//     this.messagePollingID = setInterval(this.props.getUserMessages, 5000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.messagePollingID)
//   }


//   render() {

//     if (this.props.result === null) {
//       return <div>Loading...</div>;
//     }
//     const getUsers = this.props.result.messages


//     return (

//       <div className='Message'>
//         <h3>Latest Kweets</h3>
//         <div>
//           {getMessages.map(item => (
//             <Card key={item.id} className="userpost">
//               <div className="postinfo">
//                 <Meta key={item.id}
//                   avatar={<Avatar size={64} src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />} //we'll need to make this link to whatever icon the user uploads
//                   title={item.username}
//                   description={item.text}
//                 />
//                 <div className="timestamp">{moment(item.createdAt).startOf('minutes').fromNow()}</div>
//               </div>
//             </Card>
//           ))}
//         </div>

//       </div>
//     )
//   }
// }


// export default withAsyncAction("messages", "getUserMessages")(Message);
