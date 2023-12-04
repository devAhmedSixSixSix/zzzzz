import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import image from "../Assets/Rectangle27.png";
import Container from "react-bootstrap/esm/Container";

const ContactUsForm = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={12} md={8} className="px-0">
            <img src={image} alt="map" className="w-100 h-100" />
          </Col>
          <Col xs={12} md={4} className="border">
            <h4 className="text-center my-5">Contact Us</h4>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  className="border-0 border-bottom rounded-0"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  className="border-0 border-bottom rounded-0"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicNumber">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Phone"
                  className="border-0 border-bottom rounded-0"
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100 my-5">
                Contant Us
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUsForm;
