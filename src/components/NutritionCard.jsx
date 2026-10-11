function NutritionCard({
  title,
  value,
  target,
  unit,
  icon,
  percentage,
}) {
  return (
    <div className="nutrition-card">
      <div className="nutrition-card-top">
        <div className="nutrition-icon">{icon}</div>

        <span className="nutrition-title">
          {title}
        </span>
      </div>

      <div className="nutrition-value">
        {value}
        <span>{unit}</span>
      </div>

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{
            width: `${Math.min(percentage, 100)}%`,
          }}
        ></div>
      </div>

      <div className="nutrition-footer">
        <span>
          {value}
          {unit}
        </span>

        <span>
          {target}
          {unit} target
        </span>
      </div>
    </div>
  );
}

export default NutritionCard;