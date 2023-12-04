import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";
import myBg from "../Assets/Rectangle12.png";
import { Link } from "react-router-dom"; 
import germanLang from "../../lang/german/resetPassword.json";
import englishLang from "../../lang/english/resetPassword.json";

function ResetPassword({ userLang }) {
  
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
    <div style={bg} className="text-white py-5">
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
            <Form className="bg-white rounded text-black p-5">
              <div className="text-center pb-4">
                <h2 className="py-0" style={fontColor}>
                  {lang.resetPasswordFormMainTitle}
                </h2>
                <p style={fontColor} className=" fw-lighter">
                 {lang.resetPasswordFormsubTitle}
                </p>
              </div>
              <Form.Group className="mb-3" controlId="formBasicPassword-1">
                <Form.Label>
                  {lang.resetPasswordEmailInputTitle}
                  <span className=" text-danger"> *</span>
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  className="rounded-1"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword-2">
                <Form.Label>
                  {lang.resetPasswordPasswordInputTitle}
                  <span className=" text-danger"> *</span>
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  className="rounded-1"
                />
              </Form.Group>

              <Button
                variant="warning"
                type="submit"
                className="text-white w-100 rounded-1 mb-5"
                as={Link}
                to="/confirmingchangeingpasswordsuccessflye"
              >
                {lang.btnTxt}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default ResetPassword;
