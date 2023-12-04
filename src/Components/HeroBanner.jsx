import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import myBg from "../Assets/courier-doing-jobs-logistics1.png";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
const HeroBanner = () => {
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
        <h2 className="text-center py-5">
          Explore our services and discover the
          <br />
          convenience of moving with us
        </h2>
        <Form>
          <Row className="justify-content-center py-5 mx-3">
            <Col className="px-0" xs={12} md={4}>
              <InputGroup className="mb-3 rounded-sm-0">
                <InputGroup.Text
                  id="basic-addon1"
                  className="bg-white border-end-0"
                >
                  Moving from
                </InputGroup.Text>
                <Form.Control
                  placeholder="Addres one"
                  aria-label="Addres one"
                  aria-describedby="basic-addon1"
                  className="rounded-0 border-start-0"
                />
              </InputGroup>
            </Col>
            <Col className="px-0" xs={12} md={4}>
              <InputGroup className="mb-3">
                <InputGroup.Text
                  id="basic-addon2"
                  className="rounded-0 bg-white border-end-0"
                >
                  Moving to
                </InputGroup.Text>
                <Form.Control
                  placeholder="Addres Two"
                  aria-label="Addres Two"
                  aria-describedby="basic-addon2"
                  className="rounded-0 border-start-0"
                />
              </InputGroup>
            </Col>
            <Col className="px-0" xs={12} md={4}>
              <Form.Select
                aria-label="Default select example"
                className="rounded-start-0"
              >
                <option className="fw-bold">Size?</option>
                <option value="1">One room</option>
                <option value="2">Two room</option>
                <option value="3">Three room</option>
              </Form.Select>
            </Col>
            <Row>
              <Button
                variant="warning"
                type="submit"
                className="text-white fw-semibold d-block m-auto rounded-1 w-auto my-5 px-5 py-2"
              >
                Get Started
              </Button>
            </Row>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default HeroBanner;
