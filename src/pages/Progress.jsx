function Progress() {
  const weeklyData = [
    { day: "Mon", calories: 72, activity: 60 },
    { day: "Tue", calories: 85, activity: 75 },
    { day: "Wed", calories: 68, activity: 50 },
    { day: "Thu", calories: 90, activity: 85 },
    { day: "Fri", calories: 78, activity: 70 },
    { day: "Sat", calories: 82, activity: 65 },
    { day: "Sun", calories: 88, activity: 80 },
  ];

  const achievements = [
    {
      icon: "🔥",
      title: "7 Day Streak",
      description: "Logged your nutrition for 7 days",
    },
    {
      icon: "🥗",
      title: "Healthy Week",
      description: "Met your nutrition goals this week",
    },
    {
      icon: "🏃",
      title: "Active User",
      description: "Completed 8 workouts",
    },
  ];

  return (
    <div className="progress-page">
      {/* Header */}
      <section className="page-intro">
        <div>
          <p className="section-label">
            YOUR JOURNEY
          </p>

          <h2>Progress Tracking</h2>

          <p>
            Track your nutrition, fitness and healthy
            habits over time.
          </p>
        </div>
      </section>

      {/* Progress Stats */}
      <section className="progress-stats">
        <div className="progress-stat-card">
          <span className="progress-stat-icon">
            ⚖️
          </span>

          <div>
            <span>Current Weight</span>
            <strong>68 kg</strong>
            <small>↓ 1.5 kg this month</small>
          </div>
        </div>

        <div className="progress-stat-card">
          <span className="progress-stat-icon">
            🔥
          </span>

          <div>
            <span>Avg. Calories</span>
            <strong>1,850 kcal</strong>
            <small>Daily average</small>
          </div>
        </div>

        <div className="progress-stat-card">
          <span className="progress-stat-icon">
            🏃
          </span>

          <div>
            <span>Workouts</span>
            <strong>8</strong>
            <small>This week</small>
          </div>
        </div>

        <div className="progress-stat-card">
          <span className="progress-stat-icon">
            🎯
          </span>

          <div>
            <span>Consistency</span>
            <strong>82%</strong>
            <small>Last 30 days</small>
          </div>
        </div>
      </section>

      {/* Weekly Chart */}
      <section className="progress-chart-section">
        <div className="section-heading">
          <div>
            <p className="section-label">
              WEEKLY ACTIVITY
            </p>

            <h3>Nutrition & Activity</h3>
          </div>

          <span className="date-label">
            Last 7 days
          </span>
        </div>

        <div className="chart-card">
          <div className="chart-legend">
            <span>
              <i className="legend-dot nutrition-dot"></i>
              Nutrition
            </span>

            <span>
              <i className="legend-dot activity-dot"></i>
              Activity
            </span>
          </div>

          <div className="chart">
            {weeklyData.map((item) => (
              <div
                className="chart-column"
                key={item.day}
              >
                <div className="chart-bars">
                  <div
                    className="chart-bar nutrition-bar"
                    style={{
                      height: `${item.calories}%`,
                    }}
                  ></div>

                  <div
                    className="chart-bar activity-bar"
                    style={{
                      height: `${item.activity}%`,
                    }}
                  ></div>
                </div>

                <span>{item.day}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="goals-section">
        <div className="section-heading">
          <div>
            <p className="section-label">
              PERSONAL GOALS
            </p>

            <h3>Your Goals</h3>
          </div>
        </div>

        <div className="goal-card">
          <div className="goal-top">
            <div>
              <span>Weekly Activity Goal</span>
              <strong>186 / 240 min</strong>
            </div>

            <span className="goal-percentage">
              78%
            </span>
          </div>

          <div className="progress-track large">
            <div
              className="progress-fill"
              style={{ width: "78%" }}
            ></div>
          </div>

          <p>
            54 more active minutes to reach this week's
            goal.
          </p>
        </div>

        <div className="goal-card">
          <div className="goal-top">
            <div>
              <span>Daily Nutrition Logging</span>
              <strong>6 / 7 days</strong>
            </div>

            <span className="goal-percentage">
              86%
            </span>
          </div>

          <div className="progress-track large">
            <div
              className="progress-fill"
              style={{ width: "86%" }}
            ></div>
          </div>

          <p>
            Log one more day to complete this week's goal.
          </p>
        </div>
      </section>

      {/* Achievements */}
      <section className="achievements-section">
        <div className="section-heading">
          <div>
            <p className="section-label">
              ACHIEVEMENTS
            </p>

            <h3>Your Milestones</h3>
          </div>
        </div>

        <div className="achievement-grid">
          {achievements.map((achievement) => (
            <div
              className="achievement-card"
              key={achievement.title}
            >
              <div className="achievement-icon">
                {achievement.icon}
              </div>

              <div>
                <h4>{achievement.title}</h4>

                <p>
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Note */}
      <section className="scanner-note">
        <span>ℹ️</span>

        <p>
          Progress data shown in this prototype is sample
          data. Once the backend is connected, these
          values will come from the user's actual nutrition
          and activity records.
        </p>
      </section>
    </div>
  );
}

export default Progress;