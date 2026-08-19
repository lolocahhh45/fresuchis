function ServiceMassage({ icon, title, description, price, colorClass, onClick }) {
  const handleKeyDown = (e) => {
    if (!onClick) return;
    if (e.key === "Enter" || e.key === " ") onClick();
  };

  return (
    <div
      className={`serviceCard ${onClick ? "clickable" : ""}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={handleKeyDown}
    >
      <div className={`serviceCardLeftSide ${colorClass}`}>
        <img 
          src={icon}
          alt={title} 
          className="serviceMassageIcon" 
        />
      </div>

      <div className="serviceCardRightSide">
        <h1 className="serviceMassageTitle">{title}</h1>
        <h3 className="serviceMassageText serviceSeparationBottom">
          {description}
        </h3>
        <h3 className="serviceCardText servicePrice textToLeft">{price}</h3>
      </div>
    </div>
  );
}

export default ServiceMassage;