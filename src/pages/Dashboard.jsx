import NutritionCard from "../components/NutritionCard";

function Dashboard() {
  return (
    <div className="dashboard-page">
      {/* Welcome Section */}
      <section className="welcome-section">
        <div>
          <p className="welcome-label">GOOD MORNING 👋</p>

          <h2>
            Welcome back, Rohit!
          </h2>

          <p className="welcome-text">
            Let's make today a healthier day.
            Here's your nutrition overview.
          </p>
        </div>

        <div className="daily-score">
          <span>Daily Score</span>
          <strong>82</strong>
          <small>/ 100</small>
        </div>
      </section>

      {/* Calories Section */}
      <section className="calorie-section">
        <div className="section-heading">
          <div>
            <p className="section-label">TODAY'S NUTRITION</p>
            <h3>Calorie Overview</h3>
          </div>

          <span className="date-label">
            Today
          </span>
        </div>

        <div className="calorie-card">
          <div className="calorie-main">
            <div className="calorie-icon">
              🔥
            </div>

            <div>
              <span>Calories consumed</span>

              <h2>
                1,420
                <small> kcal</small>
              </h2>
            </div>
          </div>

          <div className="calorie-progress">
            <div className="progress-track large">
              <div
                className="progress-fill"
                style={{ width: "71%" }}
              ></div>
            </div>

            <div className="calorie-progress-text">
              <span>1,420 consumed</span>
              <span>2,000 kcal goal</span>
            </div>
          </div>
        </div>
      </section>

      {/* Nutrition Cards */}
      <section className="nutrition-section">
        <div className="section-heading">
          <div>
            <p className="section-label">MACRONUTRIENTS</p>
            <h3>Nutrition Breakdown</h3>
          </div>
        </div>

        <div className="nutrition-grid">
          <NutritionCard
            title="Protein"
            value="65"
            target="100"
            unit="g"
            icon="💪"
            percentage={65}
          />

          <NutritionCard
            title="Carbs"
            value="142"
            target="250"
            unit="g"
            icon="🍚"
            percentage={57}
          />

          <NutritionCard
            title="Fat"
            value="48"
            target="70"
            unit="g"
            icon="🥑"
            percentage={69}
          />

          <NutritionCard
            title="Fiber"
            value="18"
            target="30"
            unit="g"
            icon="🌾"
            percentage={60}
          />
        </div>
      </section>

      {/* Quick Actions */}
      <section className="quick-section">
        <div className="section-heading">
          <div>
            <p className="section-label">QUICK ACTIONS</p>
            <h3>What would you like to do?</h3>
          </div>
        </div>

        <div className="quick-grid">
          <button className="quick-card">
            <span className="quick-icon">📸</span>

            <div>
              <strong>Scan Food</strong>
              <p>Identify food with AI</p>
            </div>

            <span className="arrow">→</span>
          </button>

          <button className="quick-card">
            <span className="quick-icon">🔎</span>

            <div>
              <strong>Search Food</strong>
              <p>Find nutrition information</p>
            </div>

            <span className="arrow">→</span>
          </button>

          <button className="quick-card">
            <span className="quick-icon">🏃</span>

            <div>
              <strong>Start Workout</strong>
              <p>View today's exercises</p>
            </div>

            <span className="arrow">→</span>
          </button>
        </div>
      </section>

      {/* Today's Summary */}
      <section className="summary-section">
        <div className="section-heading">
          <div>
            <p className="section-label">TODAY'S ACTIVITY</p>
            <h3>Your Daily Summary</h3>
          </div>
        </div>

        <div className="summary-grid">
          <div className="summary-card">
            <span className="summary-icon">🍽️</span>
            <div>
              <strong>3</strong>
              <span>Meals logged</span>
            </div>
          </div>

          <div className="summary-card">
            <span className="summary-icon">💧</span>
            <div>
              <strong>5</strong>
              <span>Glasses of water</span>
            </div>
          </div>

          <div className="summary-card">
            <span className="summary-icon">🔥</span>
            <div>
              <strong>320</strong>
              <span>Active calories</span>
            </div>
          </div>

          <div className="summary-card">
            <span className="summary-icon">⏱️</span>
            <div>
              <strong>32</strong>
              <span>Minutes active</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;