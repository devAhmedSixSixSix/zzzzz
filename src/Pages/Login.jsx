import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import myBg from "../Assets/Rectangle12.png";
import googleIcon from "../Assets/Group1.png";
import facebookIcon from "../Assets/Group2.png";
import appleIcon from "../Assets/Group3.png";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";
import germanLang from "../../lang/german/login.json";
import englishLang from "../../lang/english/login.json";


const Login = ({ userLang }) => {
  
  const lang = userLang == "en" ? englishLang : germanLang
  
  const fontColor = {
    color: "#0C356A",
  };

  const bg = {
    backgroundImage: `url(${myBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    minHeight: "100vh",
  };


  return (
    <div style={bg} className="text-white">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <div className=" text-center py-4">
              <h2>{lang.mainTitle}</h2>
              <p>{lang.subTitle}</p>
            </div>
            <Form className="bg-white rounded text-black p-5 mb-5">
              <h2 className="py-3 text-center" style={fontColor}>
                {lang.loginFormTitle}
              </h2>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                  {lang.emailInputTitle}
                  <span className=" text-danger"> *</span>
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-1"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>
                  {lang.passwordInputTitle}
                  <span className=" text-danger"> *</span>
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  className="rounded-1"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <div className="d-flex align-content-center justify-content-between">
                  <Form.Check
                    type="checkbox"
                    label={lang.keepMeLoggedIn}
                    className=" text-black-50"
                  />
                  <Link to="/forgetpassword" className=" text-decoration-none" style={fontColor}>
                    {lang.forgetPassword}
                  </Link>
                </div>
              </Form.Group>
              <Button
                variant="warning"
                type="submit"
                className="text-white w-100 rounded-1"
              >
                {lang.btnTxt}
              </Button>
              <div className="text-center">
                <div className="d-flex align-items-center justify-content-center mt-3 text-black-50">
                  <hr className="my-4 mx-2 w-25" />
                  <span className="mx-4 w-50">{lang.orContinueWith}</span>
                  <hr className="my-4 mx-2 w-25" />
                </div>

                <div className="mt-3 mb-4">
                  <img src={googleIcon} alt="google icone" />
                  <img src={appleIcon} alt="google icone" className="mx-2" />
                  <img src={facebookIcon} alt="google icone" />
                </div>
                <p style={fontColor}>
                  {lang.dontHaveAnAccount}
                  <Link
                    to="/signup"
                    className="text-decoration-none text-secondary"
                  >
                    {" "}
                    Sign up
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

export default Login;
