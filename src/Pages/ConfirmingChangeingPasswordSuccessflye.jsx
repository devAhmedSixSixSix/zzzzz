import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import myBg from "../Assets/Rectangle12.png";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import germanLang from "../../lang/german/confirmingchangeingpasswordsuccessflye.json";
import englishLang from "../../lang/english/confirmingchangeingpasswordsuccessflye.json";


const ConfirmingChangeingPasswordSuccessflye = ({userLang}) => {

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
            <div className="bg-white rounded text-black p-5">
              <div className="text-center pb-4">
                <FaCheckCircle size="82px" style={fontColor}/>
                <h2 className="pt-4" style={fontColor}>
                  {lang.mainTitle}
                </h2>
                <p style={fontColor} className=" fw-lighter">
                  {lang.subTitle}
                </p>
              </div>

              <Button
                variant="warning"
                type="submit"
                className="text-white w-100 rounded-1 mb-5"
                as={Link}
                to="/login"
              >
                {lang.btnText}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ConfirmingChangeingPasswordSuccessflye;
