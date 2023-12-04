import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import myBg from "../Assets/Rectangle12.png";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";
import germanLang from "../../lang/german/forgetPassword.json";
import englishLang from "../../lang/english/forgetPassword.json";

const ForgetPassword = ({ userLang }) => {
  
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
                <h2 className="py-0" style={fontColor}>
                  {lang.forgetPasswordFormTitle}
                </h2>
                <p
                  style={{ ...fontColor, fontSize: "13px" }}
                  className=" fw-lighter"
                >
                  {lang.forgetPasswordFormSubTitle}
                </p>
              </div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                  {lang.emailAddressInputTitle}
                  <span className=" text-danger"> *</span>
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-1"
                />
              </Form.Group>

              <Button
                variant="warning"
                type="submit"
                className="text-white w-100 rounded-1 mb-5"
                as={Link}
                to="/VeryfiyResetPasswordCode"
              >
                {lang.btnText}
              </Button>
              <div className="text-center">
                <p style={fontColor}>
                  {lang.rememberPassword}
                  <Link
                    to="/login"
                    className="text-decoration-none text-secondary"
                  >
                    {" "}
                    Sign in
                  </Link>
                </p>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ForgetPassword;
