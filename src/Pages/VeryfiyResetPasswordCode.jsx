import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import myBg from "../Assets/Rectangle12.png";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";
import germanLang from "../../lang/german/veryfiyResetPasswordCode.json";
import englishLang from "../../lang/english/veryfiyResetPasswordCode.json";

const ResetPassword = ({ userLang }) => {
  
  const lang = userLang == "en" ? englishLang : germanLang

  const bg = {
    backgroundImage: `url(${myBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    minHeight: "100vh",
  };

  const fontColor = {
    color: "#0C356A",
  };

  return (
    <div style={bg} className="text-white py-5 d-flex align-items-center">
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
            <Form className="bg-white rounded text-black p-5">
              <div className="text-center pb-4">
                <h3 className="py-0" style={fontColor}>
                  {lang.veryfiyResetPasswordCodeFormTitle}
                </h3>
                <p style={fontColor} className=" fw-lighter">
                  {lang.veryfiyResetPasswordCodFormSubTitle}
                </p>
              </div>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail-1">
                    <Form.Control type="text" className="rounded-1" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail-2">
                    <Form.Control type="text" className="rounded-1" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail-3">
                    <Form.Control type="text" className="rounded-1" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail-4">
                    <Form.Control type="text" className="rounded-1" />
                  </Form.Group>
                </Col>
              </Row>

              <Button
                variant="warning"
                type="submit"
                className="text-white w-100 rounded-1 mb-5"
                as={Link}
                to="/resetpassword"
              >
                {lang.btnText}
              </Button>
              <div className="text-center">
                <p style={fontColor}>{lang.youDidntReceiveTheCode}
                 <span className="text-black-50"> Send again</span>
                </p>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ResetPassword;
