import React from "react";
import { Link } from "react-router-dom";
import { Col, Layout, Menu } from "antd";

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header       style={{backgroundColor:"#000000"}}
    >
      <Menu
      style={{backgroundColor:"#000000"}}
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["home"]}
        // style={{ display: "flex", justifyContent: "space-between" }}
      ><Col style={{ marginRight: "auto" }}>
        <Col key="home" >
          <Link style={{color:"#fff"}} to="/">Manhar</Link>
        </Col>
      </Col>
        <Col style={{ marginLeft: "auto",display:"flex",gap:"1rem" }}>
          <Col key="about" >
            <Link style={{color:"#fff"}} to="/about">About</Link>
          </Col>
          <Col key="work">
            <Link style={{color:"#fff"}} to="/work">Work</Link>
          </Col>
        </Col>
      </Menu>
    </Header>
  );
};

export default Navbar;
