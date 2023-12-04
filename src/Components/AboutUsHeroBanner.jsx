import myBg from "../Assets/Vector7.png";

const AboutUsHeroBanner = () => {
  const bg = {
    backgroundImage: `url(${myBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    width: "100%",
    minHeight: "100vh",
  };
  return (
    <div style={bg}>
      <p>test</p>
    </div>
  );
};

export default AboutUsHeroBanner;
