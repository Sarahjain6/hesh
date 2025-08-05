const PricingCard = ({
  addclass = "",
  title,
  content,
  FeatureList = [],
  price,
  pricename,
}) => {
  return (
    <div className={addclass} data-aos="fade-up" data-aos-duration="900">
      {/* Title */}
      <h6 style={{ color: "#fff" }}>{title}</h6>

      {/* Description */}
      <p style={{ color: "#fff" }}>{content}</p>

      {/* Optional Features (if any) */}
      {FeatureList.length > 0 && (
        <ul className="pricing-list">
          {FeatureList.map((item, index) => (
            <li key={index}>
              <span>
                <i className="bi bi-check-lg"></i>
              </span>{" "}
              {item}
            </li>
          ))}
        </ul>
      )}

      {/* Name */}
      <div className="head-text">
        <h3 style={{ color: "#fff", marginTop: "20px" }}>
          {price}
          {pricename && <span style={{ color: "#fff" }}> / {pricename}</span>}
        </h3>
      </div>

      {/* Founder Tag (instead of button) */}
      <div
        style={{
          marginTop: "30px",
          display: "inline-block",
          padding: "8px 20px",
          backgroundColor: "#f0b90b", // Yellow/gold tone
          color: "#000",
          fontWeight: "600",
          borderRadius: "20px",
          fontSize: "14px",
        }}
      >
        Founder
      </div>
    </div>
  );
};

export default PricingCard;
