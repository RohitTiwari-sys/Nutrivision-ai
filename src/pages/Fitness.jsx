function Fitness() {
  const workouts = [
    {
      name: "Brisk Walking",
      duration: "20 min",
      calories: "90 kcal",
      icon: "🚶",
      difficulty: "Easy",
    },
    {
      name: "Bodyweight Squats",
      duration: "10 min",
      calories: "70 kcal",
      icon: "🏋️",
      difficulty: "Beginner",
    },
    {
      name: "Push-ups",
      duration: "8 min",
      calories: "55 kcal",
      icon: "💪",
      difficulty: "Beginner",
    },
    {
      name: "Stretching",
      duration: "10 min",
      calories: "30 kcal",
      icon: "🧘",
      difficulty: "Easy",
    },
  ];

  return (
    <div className="fitness-page">
      {/* Header */}
      <section className="page-intro">
        <div>
          <p className="section-label">
            PHYSICAL FITNESS
          </p>

          <h2>Fitness & Workouts</h2>

          <p>
            Stay active with simple workouts and track
            your daily physical activity.
          </p>
        </div>
      </section>

      {/* Fitness Summary */}
      <section className="fitness-summary">
        <div className="fitness-stat-card">
          <div className="fitness-stat-icon">🔥</div>

          <div>
            <span>Calories Burned</span>
            <strong>245 kcal</strong>
          </div>
        </div>

        <div className="fitness-stat-card">
          <div className="fitness-stat-icon">⏱️</div>

          <div>
            <span>Active Time</span>
            <strong>48 min</strong>
          </div>
        </div>

        <div className="fitness-stat-card">
          <div className="fitness-stat-icon">👟</div>

          <div>
            <span>Steps</span>
            <strong>6,420</strong>
          </div>
        </div>

        <div className="fitness-stat-card">
          <div className="fitness-stat-icon">🎯</div>

          <div>
            <span>Daily Goal</span>
            <strong>78%</strong>
          </div>
        </div>
      </section>

      {/* Today's Workout */}
      <section className="workout-section">
        <div className="section-heading">
          <div>
            <p className="section-label">
              TODAY'S PLAN
            </p>

            <h3>Recommended Workouts</h3>
          </div>

          <span className="date-label">
            Beginner Friendly
          </span>
        </div>

        <div className="workout-grid">
          {workouts.map((workout) => (
            <div
              className="workout-card"
              key={workout.name}
            >
              <div className="workout-top">
                <div className="workout-icon">
                  {workout.icon}
                </div>

                <span className="difficulty">
                  {workout.difficulty}
                </span>
              </div>

              <h4>{workout.name}</h4>

              <div className="workout-details">
                <span>⏱️ {workout.duration}</span>

                <span>🔥 {workout.calories}</span>
              </div>

              <button
                className="start-workout-button"
                type="button"
              >
                Start Workout
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Weekly Activity */}
      <section className="activity-section">
        <div className="section-heading">
          <div>
            <p className="section-label">
              THIS WEEK
            </p>

            <h3>Activity Overview</h3>
          </div>
        </div>

        <div className="activity-card">
          <div className="activity-summary">
            <div>
              <span>Total Active Minutes</span>

              <strong>186 min</strong>
            </div>

            <div>
              <span>Workouts Completed</span>

              <strong>8</strong>
            </div>

            <div>
              <span>Average Daily Steps</span>

              <strong>6,850</strong>
            </div>
          </div>

          <div className="weekly-bars">
            <div className="day-bar">
              <div
                className="bar"
                style={{ height: "65%" }}
              ></div>
              <span>Mon</span>
            </div>

            <div className="day-bar">
              <div
                className="bar"
                style={{ height: "80%" }}
              ></div>
              <span>Tue</span>
            </div>

            <div className="day-bar">
              <div
                className="bar"
                style={{ height: "50%" }}
              ></div>
              <span>Wed</span>
            </div>

            <div className="day-bar">
              <div
                className="bar"
                style={{ height: "90%" }}
              ></div>
              <span>Thu</span>
            </div>

            <div className="day-bar">
              <div
                className="bar"
                style={{ height: "70%" }}
              ></div>
              <span>Fri</span>
            </div>

            <div className="day-bar">
              <div
                className="bar"
                style={{ height: "45%" }}
              ></div>
              <span>Sat</span>
            </div>

            <div className="day-bar">
              <div
                className="bar"
                style={{ height: "60%" }}
              ></div>
              <span>Sun</span>
            </div>
          </div>
        </div>
      </section>

      {/* Fitness Tip */}
      <section className="fitness-tip">
        <div className="tip-icon">
          💡
        </div>

        <div>
          <p className="section-label">
            FITNESS TIP
          </p>

          <h3>Consistency matters</h3>

          <p>
            Start with activities that match your current
            fitness level. Gradually increase duration or
            intensity as your body adapts, and include
            rest and recovery.
          </p>
        </div>
      </section>

      {/* Safety Note */}
      <section className="scanner-note">
        <span>ℹ️</span>

        <p>
          Workout suggestions are general wellness
          guidance. Exercise intensity and suitability
          can vary between people. Stop if you feel pain,
          dizziness or unusual discomfort.
        </p>
      </section>
    </div>
  );
}

export default Fitness;