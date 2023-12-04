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
import germanLang from "../../lang/german/signup.json";
import englishLang from "../../lang/english/signup.json";
import { useState } from "react";
import axios from "axios"

const Signup = ({ userLang }) => {
  
  const lang = userLang == "en" ? englishLang : germanLang

 const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make an API request to your backend for registration
      const response = await axios.post('/api/register', { email });

      // Handle the response accordingly (e.g., show success message, redirect, etc.)
      console.log('Registration successful:', response.data);
    } catch (error) {
      // Handle errors (e.g., show error message)
      console.error('Registration failed:', error.message);
    }
  };

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
            <div className=" text-center py-4">
              <h2>{lang.mainTitle}</h2>
              <p>{lang.subTitle}</p>
            </div>
            <Form onSubmit={handleSubmit} className="bg-white rounded text-black p-5">
              <h2 className="py-3 text-center" style={fontColor}>
                {lang.signupFormTitle}
              </h2>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                  {lang.emailAddressInputTitle}
                  <span className=" text-danger"> *</span>
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-1"
                  value={email}
                  onChange={handleEmailChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label={lang.iAgreeToTheTermsConditions}
                  className=" text-black-50"
                />
              </Form.Group>

              <Button
                variant="warning"
                type="submit"
                className="text-white w-100 rounded-1"
              >
                {lang.btnText}
              </Button>
              <div className="text-center">
                <div className="d-flex align-items-center justify-content-center mt-3 text-black-50">
                  <hr className="my-4 mx-2 w-25" />
                  <span className="mx-4 w-50">{lang.orContinueWith}</span>
                  <hr className="my-4 mx-2 w-25" />
                </div>

                <div className="mt-3 mb-4">
                  <div className="mt-3 mb-4">
                    <img src={googleIcon} alt="google icone" />
                    <img src={appleIcon} alt="google icone" className="mx-2" />
                    <img src={facebookIcon} alt="google icone" />
                  </div>
                </div>
                <p style={fontColor}>
                  {lang.alreadyHaveAnAccount}
                  <Link
                    to="/login"
                    className="text-decoration-none text-secondary"
                  >
                    {" "}
                    Login
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

export default Signup;
