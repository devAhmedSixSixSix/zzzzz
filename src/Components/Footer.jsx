import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Logo from "../Assets/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9vUVNVby9NQUZvaTRvUVNVby8xL3AucG5n 1.png";
import { BsLinkedin, BsFacebook, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="my-5">
      <Container>
        <Row>
          <Col xs={12} md={4} className="text-center">
            <img src={`${Logo}`} alt="Logo" />
            <div>
              <h6>Follow us on</h6>
              <BsLinkedin/>
              <BsFacebook className="mx-2" />
              <BsTwitter/>
            </div>
          </Col>
          <Col xs={12} md={4} className="mt-4 text-center">
            <h6 className="mb-3">Pursue</h6>
            <p>About Us</p>
            <p>Services</p>
            <p>Contant</p>
          </Col>
          <Col xs={12} md={4} className="mt-4 text-center" >
            <h6 className="mb-3">Support</h6>
            <p>FAQ</p>
            <p>Termes of use</p>
            <p>Privacy Policy</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
