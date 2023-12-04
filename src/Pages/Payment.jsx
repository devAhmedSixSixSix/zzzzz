import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";
import Logo from "../Assets/Kurier-link-logos_transparent1.png";
import PaymentCard from "../Components/PaymentCard";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import icon1 from "../Assets/card.svg";
import icon2 from "../Assets/EPS.svg";
import icon3 from "../Assets/Giropay.svg";

const Payment = () => {
  const shadowAndBorder = {
    boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.07)",
    border: "2px solid rgba(224, 224, 224, 1)",
  };

  const btnShadow = {
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  };

  const hedlineColor = {
    color: "rgba(79, 91, 118, 1)",
    fontWeight: "700",
  };

  return (
    <div className=" bg-light py-5">
      <Container>
        <Row>
          <Col sm={12}>
            <img className="m-auto d-block mb-5" src={Logo} alt="logo" />
          </Col>
        </Row>
        <Row>
          <Col>
            <PaymentCard icon={icon1} title="Card" />
          </Col>
          <Col>
            <PaymentCard icon={icon2} title="EPS" />
          </Col>
          <Col>
            <PaymentCard icon={icon3} title="Giropay" />
          </Col>
          <Col sm={1}>
            <PaymentCard icon={null} title="..." />
          </Col>
        </Row>
        <Form className="mt-3">
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={hedlineColor}>Card number</Form.Label>
                <Form.Control
                  style={shadowAndBorder}
                  type="text"
                  placeholder="1234 1234 1234 1234"
                  className="rounded-1"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={hedlineColor}>Expiry</Form.Label>
                <Form.Control
                  style={shadowAndBorder}
                  type="text"
                  placeholder="MM / YY"
                  className="rounded-1"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={hedlineColor}>CVC</Form.Label>
                <Form.Control
                  style={shadowAndBorder}
                  type="text"
                  placeholder="CVC"
                  className="rounded-1"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label style={hedlineColor}>Country</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Egypt</option>
                <option value="1">Saudi Arabia</option>
                <option value="2">Kuwait</option>
                <option value="3">Oman</option>
              </Form.Select>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <Button
                variant="primary"
                type="submit"
                className="text-white w-100 rounded-1 mb-5  w-auto mx-auto d-block"
                style={btnShadow}
              >
                Review Order
              </Button>
            </Col>
            <Col>
              <Button
                variant="primary"
                type="submit"
                className="text-white w-100 rounded-1 mb-5 w-auto mx-auto d-block"
                style={btnShadow}
              >
                Pay 250$
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default Payment;
