import { useState } from "react";

function Profile() {
  const [profile, setProfile] = useState({
    name: "Rohit",
    age: "19",
    sex: "Male",
    height: "175",
    weight: "68",
    activity: "Moderately Active",
    goal: "Stay Healthy",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setProfile((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Profile saved successfully!");
  };

  return (
    <div className="profile-page">
      {/* Header */}
      <section className="page-intro">
        <div>
          <p className="section-label">
            PERSONAL INFORMATION
          </p>

          <h2>Your Profile</h2>

          <p>
            Keep your information updated so NutriVision
            can provide more relevant wellness insights.
          </p>
        </div>
      </section>

      {/* Profile Card */}
      <section className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">
            R
          </div>

          <div>
            <h3>{profile.name}</h3>

            <p>
              NutriVision AI Member
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="form-section">
            <div className="section-heading">
              <div>
                <p className="section-label">
                  BASIC DETAILS
                </p>

                <h3>Personal Information</h3>
              </div>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name">
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={profile.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="age">
                  Age
                </label>

                <input
                  id="age"
                  name="age"
                  type="number"
                  min="1"
                  max="120"
                  value={profile.age}
                  onChange={handleChange}
                  placeholder="Enter your age"
                />
              </div>

              <div className="form-group">
                <label htmlFor="sex">
                  Sex
                </label>

                <select
                  id="sex"
                  name="sex"
                  value={profile.sex}
                  onChange={handleChange}
                >
                  <option value="Male">
                    Male
                  </option>

                  <option value="Female">
                    Female
                  </option>

                  <option value="Other">
                    Other
                  </option>

                  <option value="Prefer not to say">
                    Prefer not to say
                  </option>
                </select>
              </div>
            </div>
          </div>

          {/* Body Information */}
          <div className="form-section">
            <div className="section-heading">
              <div>
                <p className="section-label">
                  BODY INFORMATION
                </p>

                <h3>Height & Weight</h3>
              </div>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="height">
                  Height (cm)
                </label>

                <input
                  id="height"
                  name="height"
                  type="number"
                  min="50"
                  max="250"
                  value={profile.height}
                  onChange={handleChange}
                  placeholder="e.g. 175"
                />
              </div>

              <div className="form-group">
                <label htmlFor="weight">
                  Weight (kg)
                </label>

                <input
                  id="weight"
                  name="weight"
                  type="number"
                  min="10"
                  max="300"
                  value={profile.weight}
                  onChange={handleChange}
                  placeholder="e.g. 68"
                />
              </div>
            </div>
          </div>

          {/* Activity & Goal */}
          <div className="form-section">
            <div className="section-heading">
              <div>
                <p className="section-label">
                  WELLNESS PREFERENCES
                </p>

                <h3>Activity & Goals</h3>
              </div>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="activity">
                  Activity Level
                </label>

                <select
                  id="activity"
                  name="activity"
                  value={profile.activity}
                  onChange={handleChange}
                >
                  <option value="Sedentary">
                    Sedentary
                  </option>

                  <option value="Lightly Active">
                    Lightly Active
                  </option>

                  <option value="Moderately Active">
                    Moderately Active
                  </option>

                  <option value="Very Active">
                    Very Active
                  </option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="goal">
                  Main Goal
                </label>

                <select
                  id="goal"
                  name="goal"
                  value={profile.goal}
                  onChange={handleChange}
                >
                  <option value="Stay Healthy">
                    Stay Healthy
                  </option>

                  <option value="Build Fitness">
                    Build Fitness
                  </option>

                  <option value="Improve Nutrition">
                    Improve Nutrition
                  </option>

                  <option value="Increase Activity">
                    Increase Activity
                  </option>
                </select>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="profile-actions">
            <button
              type="submit"
              className="save-profile-button"
            >
              Save Profile
            </button>
          </div>
        </form>
      </section>

      {/* Privacy Note */}
      <section className="scanner-note">
        <span>🔒</span>

        <p>
          Your profile information will be used to
          personalize the NutriVision experience. Avoid
          entering information you do not want stored.
        </p>
      </section>
    </div>
  );
}

export default Profile;