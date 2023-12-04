import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

const OurServicesSectionCard = ({ image, title, paragraph, order }) => {
  return (
    <Row className="my-md-5">
      <Col className={`order-lg-${order} order-sm-first`} xs={12} md={6}>
        <img src={image} alt="man with box" className=" w-100"/>
      </Col>
      <Col xs={12} md={6}>
        <h4 className="py-3">{title}</h4>
        <p className="pb-3">{paragraph}</p>
      </Col>
    </Row>
  );
};

export default OurServicesSectionCard;
