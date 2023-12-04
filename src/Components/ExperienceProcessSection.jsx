import Container from "react-bootstrap/esm/Container";
import ExperienceProcessSectionCard from "./ExperienceProcessSectionCard";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { BiSolidTruck } from "react-icons/bi";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { GoChecklist } from "react-icons/go";

const ExperienceProcessSection = () => {
  const shadow = {
    boxShadow: "4px 4px 4px 4px rgba(0, 0, 0, 0.20)",
  };
  return (
    <div>
      <Container className="text-center">
        <div className="bg-white rounded py-5" style={shadow}>
          <h2 className="text-primary mb-4">
            Experience a seamless and effortless process with us
          </h2>
          <p className="mt-3 mb-5">
            Our process has been carefully designed with your convenience in
            mind.
            <br /> From the moment you request a quote to the final delivery of
            your furniture, <br />
            we have ensured that every step is intuitive and hassle-free
          </p>
          <Row>
            <Col xs={12} md={4}>
              <ExperienceProcessSectionCard
                Icon={GoChecklist}
                title="Schedule Your Move"
                number="1"
              />
            </Col>
            <Col xs={12} md={4}>
              <ExperienceProcessSectionCard
                Icon={BsFillBoxSeamFill}
                title="Furniture Pickup"
                number="2"
              />
            </Col>
            <Col xs={12} md={4}>
              <ExperienceProcessSectionCard
                Icon={BiSolidTruck}
                title="Safe Transport"
                number="3"
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default ExperienceProcessSection;
