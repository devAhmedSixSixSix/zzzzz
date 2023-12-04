import ContactUsForm from "../Components/ContactUsForm";
import ExperienceProcessSection from "../Components/ExperienceProcessSection";
import HeroBanner from "../Components/HeroBanner";
import OurServicesSection from "../Components/OurServicesSection";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <div
        className="position-relative"
        style={{
          bottom: "111px",
        }}
      >
        <ExperienceProcessSection />
      </div>
      <OurServicesSection />
      <ContactUsForm />
    </div>
  );
};

export default Home;
