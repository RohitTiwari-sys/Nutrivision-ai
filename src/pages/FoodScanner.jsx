import { useState } from "react";

function FoodScanner() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <div className="scanner-page">
      {/* Page Header */}
      <section className="page-intro">
        <div>
          <p className="section-label">AI FOOD ANALYSIS</p>

          <h2>Food Scanner</h2>

          <p>
            Upload a photo of your food and NutriVision AI
            will identify it and estimate its nutritional
            information.
          </p>
        </div>
      </section>

      {/* Scanner Area */}
      <section className="scanner-container">
        {!selectedImage ? (
          <label className="upload-box">
            <div className="upload-icon">
              📸
            </div>

            <h3>Upload your food image</h3>

            <p>
              Take a photo or select an image from your
              device.
            </p>

            <span className="upload-button">
              Choose Image
            </span>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              hidden
            />

            <small>
              Supported formats: JPG, JPEG, PNG, WEBP
            </small>
          </label>
        ) : (
          <div className="image-preview-section">
            <div className="preview-header">
              <div>
                <p className="section-label">
                  SELECTED IMAGE
                </p>

                <h3>Ready for analysis</h3>
              </div>

              <button
                className="change-image-btn"
                type="button"
                onClick={() => setSelectedImage(null)}
              >
                Change Image
              </button>
            </div>

            <div className="image-preview">
              <img
                src={selectedImage}
                alt="Selected food"
              />
            </div>

            <button
              className="analyze-button"
              type="button"
            >
              🤖 Analyze Food with AI
            </button>
          </div>
        )}
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="section-heading">
          <div>
            <p className="section-label">
              HOW IT WORKS
            </p>

            <h3>Analyze your food in 3 steps</h3>
          </div>
        </div>

        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">01</div>

            <div className="step-icon">📸</div>

            <h4>Capture</h4>

            <p>
              Upload or capture a clear image of your
              food.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">02</div>

            <div className="step-icon">🤖</div>

            <h4>AI Analysis</h4>

            <p>
              AI identifies the food and estimates its
              nutritional values.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">03</div>

            <div className="step-icon">🥗</div>

            <h4>Get Insights</h4>

            <p>
              View calories, protein, carbs, fats,
              vitamins and more.
            </p>
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="scanner-note">
        <span>ℹ️</span>

        <p>
          Nutrition values generated from an image are
          estimates. Actual values can vary depending on
          portion size, ingredients and preparation method.
        </p>
      </section>
    </div>
  );
}

export default FoodScanner;