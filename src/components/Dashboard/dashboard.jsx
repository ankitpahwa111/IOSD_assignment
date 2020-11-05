import React, { Component } from "react";
import Notification from "./notification";
import ProjectList from "../Projects/ProjectList";
import { Tag } from "antd";
import Demo from './Comment';
import "antd/dist/antd.css";
import { Radio, Card, Tree, Progress, Avatar } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Stat from './Header';
import {
  faGoogle,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const { Meta } = Card;
const treeData = [
  {
    title: "parent 1",
    key: "0-0",
    children: [
      {
        title: "parent 1-0",
        key: "0-0-0",
        disabled: true,
        children: [
          {
            title: "leaf",
            key: "0-0-0-0",
            disableCheckbox: true,
          },
          {
            title: "leaf",
            key: "0-0-0-1",
          },
        ],
      },
      {
        title: "parent 1-1",
        key: "0-0-1",
        children: [
          {
            title: <span style={{ color: "#1890ff" }}>sss</span>,
            key: "0-0-1-0",
          },
        ],
      },
    ],
  },
];

class Dashboard extends Component {
  state = {
    value: 1,
  };
  onChange = (e) => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value,
    });
  };
  onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };

  onCheck = (checkedKeys, info) => {
    console.log("onCheck", checkedKeys, info);
  };
  render() {
    const radioStyle = {
      display: "block",
      height: "30px",
      lineHeight: "30px",
      marginTop: "10%",
    };
    const { value } = this.state;
    return (
      <div className="row dashboard">
        <div className="site-card-border-less-wrapper col s2">
          <Card
            title="Pages and Channels"
            bordered={true}
            style={{ marginLeft: "5%", marginTop: "15%", height: "40em" }}
            hoverable="true"
            // style = {{fontWeight : "bold"}}
          >
            <Radio.Group
              onChange={this.onChange}
              value={value}
              className="social"
            >
              <Radio style={radioStyle} value={1}>
                Ankit Pahwa
                <FontAwesomeIcon
                  icon={faGoogle}
                  size="2x"
                  className="Google"
                  style={{ marginLeft: "10%" }}
                />
              </Radio>
              <Radio style={radioStyle} value={2}>
                Ankit Pahwa
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="2x"
                  className="facebook"
                  style={{ marginLeft: "10%" }}
                />
              </Radio>
              <Radio style={radioStyle} value={3}>
                Ankit Pahwa
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="2x"
                  className="twitter"
                  style={{ marginLeft: "10%" }}
                />
              </Radio>
            </Radio.Group>
            <div className="status" style={{ marginTop: "10%" }}>
              <h5 className="bold">Status</h5>
              <Tree
                checkable
                defaultExpandedKeys={["0-0-0", "0-0-1"]}
                defaultSelectedKeys={["0-0-0", "0-0-1"]}
                defaultCheckedKeys={["0-0-0", "0-0-1"]}
                onSelect={this.onSelect}
                onCheck={this.onCheck}
                treeData={treeData}
              />
            </div>
          </Card>
          <Card
            title="Plan Usage"
            bordered={false}
            style={{
              marginLeft: "5%",
              marginTop: "10%",
              height: "10em",
              marginBottom: "10%",
            }}
            hoverable="true"
          >
            <div style={{ width: 170 }}>
              <Progress percent={30} size="small" status="active"></Progress>
              <Progress percent={50} size="small" status="success" />
            </div>
          </Card>
        </div>
        <div className="col s1"></div>
        <div className="col s5">
          <div className="tags center">
            <Stat/>
          </div>
          <ProjectList />
        </div>
        <div className="col s1"></div>
        <div className="col s3">
          <Card
            // title="Post By Rachna Ranade"
            bordered={true}
            style={{ marginTop: "10%", height: "50em", marginRight: "5%" }}
            hoverable="true"
          >
            <div className="row">
              <Avatar size={40} src="https://avatars2.githubusercontent.com/u/32906809?s=460&u=4285e5bbc385e2177c342e1293f24492ec381746&v=4" className="col m4"/>
              <Meta title="Ankit Pahwa" description="10 mins ago" />
              <br/>
              <p>
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure), to help people create their product prototypes beautifully
                and efficiently.
              </p>
            </div>
            <Card
              cover={
                <img
                  src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  style={{
                    // marginTop: "10%",
                    height: "100%",
                    // marginRight: "5%",
                    width: "100%",
                  }}
                />
              }
              style={{ height: "100%", width: "100%" }}
              bordered={false}
              // hoverable="true"
            />
            {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
            {/* <div className="row">
              <Avatar size={40} src="https://avatars2.githubusercontent.com/u/32906809?s=460&u=4285e5bbc385e2177c342e1293f24492ec381746&v=4" className="col m4"/>
              <Meta title="Prayag Mukhi" description="10 AM Today" />
            </div> */}
            <Demo/>
          </Card>
        </div>
      </div>
    );
  }
}

export default Dashboard;
