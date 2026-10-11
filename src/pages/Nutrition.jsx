function Nutrition() {
  const nutrients = [
    {
      name: "Calories",
      value: "1,420",
      target: "2,000",
      unit: "kcal",
      icon: "🔥",
      percentage: 71,
    },
    {
      name: "Protein",
      value: "65",
      target: "100",
      unit: "g",
      icon: "💪",
      percentage: 65,
    },
    {
      name: "Carbohydrates",
      value: "142",
      target: "250",
      unit: "g",
      icon: "🍚",
      percentage: 57,
    },
    {
      name: "Fat",
      value: "48",
      target: "70",
      unit: "g",
      icon: "🥑",
      percentage: 69,
    },
    {
      name: "Fiber",
      value: "18",
      target: "30",
      unit: "g",
      icon: "🌾",
      percentage: 60,
    },
    {
      name: "Sugar",
      value: "32",
      target: "50",
      unit: "g",
      icon: "🍬",
      percentage: 64,
    },
    {
      name: "Sodium",
      value: "1,120",
      target: "2,300",
      unit: "mg",
      icon: "🧂",
      percentage: 49,
    },
  ];

  const vitamins = [
    {
      name: "Vitamin A",
      value: "68%",
      icon: "🥕",
    },
    {
      name: "Vitamin C",
      value: "82%",
      icon: "🍊",
    },
    {
      name: "Vitamin D",
      value: "45%",
      icon: "☀️",
    },
    {
      name: "Calcium",
      value: "71%",
      icon: "🥛",
    },
    {
      name: "Iron",
      value: "63%",
      icon: "🩸",
    },
    {
      name: "Potassium",
      value: "76%",
      icon: "🍌",
    },
  ];

  return (
    <div className="nutrition-page">
      {/* Header */}
      <section className="page-intro">
        <div>
          <p className="section-label">
            DAILY NUTRITION
          </p>

          <h2>Nutrition Overview</h2>

          <p>
            Track your daily nutrients and understand
            what your body is getting from your food.
          </p>
        </div>
      </section>

      {/* Nutrient Cards */}
      <section className="nutrition-overview">
        <div className="section-heading">
          <div>
            <p className="section-label">
              TODAY
            </p>

            <h3>Nutrition Summary</h3>
          </div>

          <span className="date-label">
            September 23, 2026
          </span>
        </div>

        <div className="detailed-nutrition-grid">
          {nutrients.map((nutrient) => (
            <div
              className="detailed-nutrition-card"
              key={nutrient.name}
            >
              <div className="detailed-card-header">
                <div className="nutrition-icon">
                  {nutrient.icon}
                </div>

                <span>
                  {nutrient.name}
                </span>
              </div>

              <div className="detailed-value">
                <strong>
                  {nutrient.value}
                </strong>

                <span>
                  {nutrient.unit}
                </span>
              </div>

              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{
                    width: `${nutrient.percentage}%`,
                  }}
                ></div>
              </div>

              <div className="detailed-footer">
                <span>
                  {nutrient.percentage}% of target
                </span>

                <span>
                  Target: {nutrient.target}
                  {nutrient.unit}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vitamins & Minerals */}
      <section className="vitamins-section">
        <div className="section-heading">
          <div>
            <p className="section-label">
              MICRONUTRIENTS
            </p>

            <h3>Vitamins & Minerals</h3>
          </div>
        </div>

        <div className="vitamin-grid">
          {vitamins.map((vitamin) => (
            <div
              className="vitamin-card"
              key={vitamin.name}
            >
              <div className="vitamin-icon">
                {vitamin.icon}
              </div>

              <div>
                <span>{vitamin.name}</span>
                <strong>{vitamin.value}</strong>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Nutrition Insight */}
      <section className="nutrition-insight">
        <div className="insight-icon">
          🤖
        </div>

        <div>
          <p className="section-label">
            AI NUTRITION INSIGHT
          </p>

          <h3>
            Your nutrition snapshot
          </h3>

          <p>
            Your protein and fiber intake are being
            tracked throughout the day. Continue adding
            a variety of fruits, vegetables, whole grains
            and protein-rich foods to maintain a balanced
            diet.
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="scanner-note">
        <span>ℹ️</span>

        <p>
          Nutrition targets shown in this prototype are
          sample values. Personalized nutrition targets
          should be based on relevant factors such as
          age, body size, activity level and individual
          needs.
        </p>
      </section>
    </div>
  );
}

export default Nutrition;