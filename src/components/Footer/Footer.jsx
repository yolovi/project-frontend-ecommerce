

//TODO:
//viw example: https://lostine.com/
//Contact Us
//FAQ's
//Shipping and return policy
//Newsletter > susbsribe
//Follow us > icons social media (fb ig)


import { Col, Row } from 'antd';
import "./Footer.scss"


const Footer = () => (
  <>
  <footer className="footer">
<p className="footer-by">
  A project by{" "}
  <a
    href="https://github.com/yolovi"
    target="_blank"
  >
    Yolanda López
  </a>

</p>
</footer>
  
    <Row>
      <Col span={3}>col-3</Col>
      <Col span={6}>col-6</Col>
      <Col span={3}>col-3</Col>
      <Col span={12}>col-12</Col>
    </Row>
    <Row>
      <Col span={24}>col-24</Col>
    </Row>
  </>
);

export default Footer;


 