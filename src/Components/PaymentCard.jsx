const PaymentCard = ({ icon, title }) => {
  const shadowAndBorder = {
    boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.07)",
    border: "2px solid rgba(224, 224, 224, 1)",
  };

  const hedlineColor = {
    color: "rgba(79, 91, 118, 1)",
    fontWeight: "700",
  };

  return (
    <div
      className="bg-white pt-4 px-3 my-1 rounded-2 h-100"
      style={shadowAndBorder}
    >
      {icon ? (
        <img src={icon} alt="Card icon" style={{ width: "22px" }} />
      ) : null}
      <h6 style={hedlineColor}>{title}</h6>
    </div>
  );
};

export default PaymentCard;
