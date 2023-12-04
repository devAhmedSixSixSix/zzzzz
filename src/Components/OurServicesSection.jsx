import Container from "react-bootstrap/esm/Container";
import OurServicesSectionCard from "./OurServicesSectionCard";
import imageOne from "../Assets/couple-with-cardboard-boxes-their-new-home.png";
import imageTwo from "../Assets/full-shot-man-delivering-box.png";
import imageThree from "../Assets/medium-shot-delivery-man-holding-box.png";

const OurServicesSection = () => {
  return (
    <div>
      <Container>
        <h2 className="text-center mb-5 pb-5">Our Services</h2>
        <OurServicesSectionCard
          order="frist"
          image={imageOne}
          title="Support and tools available at every stage"
          paragraph="Our commitment to your seamless experience extends to providing comprehensive support and a wide range of resources that cater to your needs at every stage of your journey with us. Whether you're in the planning, execution, or follow-up phase, we're here to assist and provide the necessary tools to ensure a smooth and successful experience"
        />
        <OurServicesSectionCard
          order="last"
          image={imageTwo}
          title="Swift and effortless service tailored to your preferences"
          paragraph="We are dedicated to providing a swift and effortless service is founded on our dedication to understanding and accommodating your unique preferences. We strive to ensure that every aspect of our service, from the moment you engage with us, aligns perfectly with your individual requirements and expectations."
        />
        <OurServicesSectionCard
          order="frist"
          image={imageThree}
          title="Rapid and Secure Delivery Services"
          paragraph="We understand that your time is precious, and you deserve the peace of mind that your items will reach their destination swiftly and intact. With our swift and secure delivery services, we ensure not only timely arrivals but also a meticulous approach to safeguarding your shipments, implementing advanced security measures to protect against any potential risks during transit."
        />
      </Container>
    </div>
  );
};

export default OurServicesSection;
