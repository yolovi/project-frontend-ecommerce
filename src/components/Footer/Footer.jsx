import "./Footer.scss";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const Footer = () => {

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
            <Link to="/Contact" className="footer-link">
              <p>Contact</p>
            </Link>
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
              <a href="https://www.instagram.com/" target="_blank">
                <InstagramOutlined />
              </a>
            </span>
            <span className="follow-icons">
              <a href="https://www.facebook.com/" target="_blank">
                <FacebookOutlined />
              </a>
            </span>
            <span className="follow-icons">
              <a href="https://www.twitter.com/" target="_blank">
                <TwitterOutlined />
              </a>
            </span>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div className="footer-by">
              A project by{" "}
              <a href="https://github.com/yolovi" target="_blank">
                Yolanda López
              </a>
            </div>
          </Col>
        </Row>
      </footer>
    </>
  );
};

export default Footer;
