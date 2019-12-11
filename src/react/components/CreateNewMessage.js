import React, { Component } from "react";
import { Input, Button } from "antd";
import "antd/dist/antd.css";
import "./CreateNewMessage.css";
import { Spinner } from ".";
import { postMessageThenReloadMessages as postMessage } from "../../redux/actionCreators/messages";
import { connect } from "react-redux"


const { TextArea } = Input;

class CreateNewMessage extends Component {
    state = {
        text: ""
    };


    handleClick = e => {
        e.preventDefault();
        this.props.postMessage(this.state);
        this.setState({ text: "" });
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };




    render() {
        const { loading, error } = this.props;
        return (
            <div className="field">
                <form onSubmit={this.handleClick}>
                    <p>
                        <TextArea
                            autoFocus
                            rows={4}
                            type="text"
                            name="text"
                            placeholder="Kweeeeeeet"
                            onChange={this.handleChange}
                            value={this.state.text}
                        />
                    </p>
                    <Button icon="edit" htmlType="submit">Kweet</Button>
                </form>
                {loading && <Spinner name="circle" color="blue" />}
                {error && <p style={{ color: "red" }}>{error.message}</p>}
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        messages: state.messages
    }
}


export default connect(mapStateToProps, { postMessage })(CreateNewMessage)
