function ServicePlan({ icon, title, description, price, colorClass }) {
  return (
    <div className="serviceCard">
      <div className={`serviceCardLeftSide ${colorClass}`}>
        <img 
          src={icon}
          alt={title} 
          className="serviceIcon" 
        />
      </div>

      <div className="serviceCardRightSide">
        <h1 className="serviceCardTitle">{title}</h1>
        <h3 className="serviceCardText serviceSeparationBottom">
          {description}
        </h3>
        <h3 className="serviceCardText servicePrice">{price}</h3>
      </div>
    </div>
  );
}

export default ServicePlan;