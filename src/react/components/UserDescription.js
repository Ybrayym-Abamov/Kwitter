import React from "react";

class UserDescription extends React.Component {
    render() {
        return (
          <>
          {this.props.about}
          </>
        );
      }
}

export default UserDescription;
