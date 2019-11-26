import React from "react";
import { Link } from "../components";
import pages from "../pages";
import { Card, Avatar, Button } from "antd";
import "antd/dist/antd.css";

const { Meta } = Card;


class UpdateUserForm extends React.Component {

    render() {
        return (
            <>
           <h3>Placeholder for the form for updating user information</h3>
           <Card>
               <Card>
                   <Meta
                    title="User Name" // we'll need to make this show the name for the user account
                    />
                    <p>edit user name text field</p>
               </Card>
               <Card>
                   <Meta
                    title="User Bio" // we'll need to make this show the name for the user account
                    />
                    <p>edit user bio text field, show either blank field or current bio if already available</p>
               </Card>
               <Card>
                   <Meta
                   title="User Avatar"
                    avatar={<Avatar size={64} src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />} //we'll need to make this link to whatever icon the user uploads
                    />
                    <p>edit avatar image upload section</p>
               </Card>
               <Card>
                <Button type="primary" ><Link to={pages.Profile.path}>Save Changes</Link></Button>
                <p>button will save changes made and redirect back to the updated profile page</p>
               </Card>
           </Card>
            </>
            );
        }
    
    }
    
export default UpdateUserForm;
    