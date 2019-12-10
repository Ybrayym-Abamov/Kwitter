import React from "react";
import { BackTop, Icon } from 'antd';
import "antd/dist/antd.css";
import "./BackToTop.css";

class BackToTop extends React.Component {

render() {
    return (
    <div>
      <BackTop>
        <div className="ant-back-top-inner"><Icon type="caret-up" /></div>
        <div className="words"><h3>up top</h3></div>
      </BackTop>
    </div>
    );
};

}

export default BackToTop;