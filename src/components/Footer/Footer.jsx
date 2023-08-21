//TODO:
//viw example: https://lostine.com/
//Contact Us
//FAQ's
//Shipping and return policy
//Newsletter > susbsribe
//Follow us > icons social media (fb ig)

import { Col, Row } from "antd";
import "./Footer.scss";
import { Link } from "react-router-dom";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faInstagram } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  //const pinterest = <FontAwesomeIcon icon={faInstagram} />

  return (
    <>
      <footer className="footer">
        <Row className="footer-container ">
          <Col span={6}>
            <Link to="/" className="header-content-logo">
              Hikari
            </Link>
          </Col>
          <Col span={4}>
            <h4> About us </h4>
            <Link to="/Contact" className="footer-link"><p>Contact</p></Link>
          </Col>
          <Col span={4}>
            <h4> Support </h4>
            <p> FAQs </p>
            <p> Shipping </p>
          </Col>
          <Col span={4}>
            <h4> Newsletter </h4>
            <p> Subscribe </p>
          </Col>
          <Col span={6}>
            <h4> Follow us </h4>
            <span className="follow-icons">
              {" "}
              <InstagramOutlined />{" "}
            </span>
            <span className="follow-icons">
              {" "}
              <FacebookOutlined />{" "}
            </span>
            <span className="follow-icons">
              {" "}
              <TwitterOutlined />{" "}
            </span>
            {/* <span> {pinterest} </span> */}
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <p className="footer-by">
              A project by{" "}
              <a href="https://github.com/yolovi" target="_blank">
                Yolanda López
              </a>
            </p>
          </Col>
        </Row>
      </footer>
    </>
  );
};

export default Footer;

