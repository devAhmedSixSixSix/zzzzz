import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

const ExperienceProcessSectionCard = ({ Icon, title, number }) => {
  return (
    <div>
      <Row>
        <Col>
          <span
            className="me-4 rounded-circle bg-warning d-inline-block text-white"
            style={{
              width: "24px",
              height: "24px",
            }}
          >
            {number}
          </span>
          <Icon size={128} />
          <h4 className="my-5 ms-5">{title}</h4>
        </Col>
      </Row>
    </div>
  );
};

export default ExperienceProcessSectionCard;
