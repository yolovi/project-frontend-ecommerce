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
        <Row className="footer-container">
          <Col span={6}>
            <Link to="/" className="header-content-logo">
              Hikari
            </Link>
          </Col>
          <Col span={4}>
            <h4> About us </h4>
            <p> Contact </p>
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
          <Col span={6} >
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

/* <html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Untitled</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
    <link rel="stylesheet" href="assets/css/style.css">
</head>

<body>
    <div class="footer-basic">
        <footer>
            <div class="social">
              <a href="#"><i class="icon ion-social-instagram"></i></a>
              <a href="#"><i class="icon ion-social-snapchat"></i></a>
              <a href="#"><i class="icon ion-social-twitter"></i></a>
              <a href="#"><i class="icon ion-social-facebook"></i></a>
              </div>
              <ul class="list-inline">
                  <li class="list-inline-item"><a href="#">Home</a></li>
                  <li class="list-inline-item"><a href="#">Services</a></li>
                  <li class="list-inline-item"><a href="#">About</a></li>
                  <li class="list-inline-item"><a href="#">Terms</a></li>
                  <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
              </ul>
              <p class="copyright">Company Name © 2018</p>
        </footer>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
</body>

</html>

<!-- credit to https://epicbootstrap.com/snippets/footer-basic --></link> */
