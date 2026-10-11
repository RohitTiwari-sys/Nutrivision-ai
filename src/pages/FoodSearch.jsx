import { useState } from "react";

const foodData = [
  {
    name: "Banana",
    category: "Fruit",
    calories: 105,
    protein: 1.3,
    carbs: 27,
    fat: 0.4,
    fiber: 3.1,
    icon: "🍌",
  },
  {
    name: "Apple",
    category: "Fruit",
    calories: 95,
    protein: 0.5,
    carbs: 25,
    fat: 0.3,
    fiber: 4.4,
    icon: "🍎",
  },
  {
    name: "Egg",
    category: "Protein",
    calories: 78,
    protein: 6.3,
    carbs: 0.6,
    fat: 5.3,
    fiber: 0,
    icon: "🥚",
  },
  {
    name: "Rice",
    category: "Grain",
    calories: 206,
    protein: 4.3,
    carbs: 45,
    fat: 0.4,
    fiber: 0.6,
    icon: "🍚",
  },
  {
    name: "Paneer",
    category: "Dairy",
    calories: 265,
    protein: 18,
    carbs: 6,
    fat: 20,
    fiber: 0,
    icon: "🧀",
  },
  {
    name: "Chicken Breast",
    category: "Protein",
    calories: 284,
    protein: 53,
    carbs: 0,
    fat: 6.2,
    fiber: 0,
    icon: "🍗",
  },
];

function FoodSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFoods = foodData.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="food-search-page">
      {/* Header */}
      <section className="page-intro">
        <div>
          <p className="section-label">FOOD DATABASE</p>

          <h2>Food Search</h2>

          <p>
            Search for a food to quickly view its estimated
            nutritional information.
          </p>
        </div>
      </section>

      {/* Search Box */}
      <section className="food-search-box">
        <div className="search-input-wrapper">
          <span>🔎</span>

          <input
            type="text"
            placeholder="Search food... e.g. Banana, Rice, Paneer"
            value={searchTerm}
            onChange={(event) =>
              setSearchTerm(event.target.value)
            }
          />
        </div>
      </section>

      {/* Results */}
      <section className="food-results">
        <div className="section-heading">
          <div>
            <p className="section-label">RESULTS</p>

            <h3>
              {searchTerm
                ? `Foods matching "${searchTerm}"`
                : "Popular Foods"}
            </h3>
          </div>

          <span className="result-count">
            {filteredFoods.length} foods
          </span>
        </div>

        {filteredFoods.length > 0 ? (
          <div className="food-grid">
            {filteredFoods.map((food) => (
              <div
                className="food-result-card"
                key={food.name}
              >
                <div className="food-result-top">
                  <div className="food-emoji">
                    {food.icon}
                  </div>

                  <div>
                    <h4>{food.name}</h4>

                    <span>{food.category}</span>
                  </div>
                </div>

                <div className="food-calories">
                  <strong>{food.calories}</strong>
                  <span> kcal</span>
                </div>

                <div className="food-nutrients">
                  <div>
                    <span>Protein</span>
                    <strong>{food.protein}g</strong>
                  </div>

                  <div>
                    <span>Carbs</span>
                    <strong>{food.carbs}g</strong>
                  </div>

                  <div>
                    <span>Fat</span>
                    <strong>{food.fat}g</strong>
                  </div>

                  <div>
                    <span>Fiber</span>
                    <strong>{food.fiber}g</strong>
                  </div>
                </div>

                <button
                  className="food-add-button"
                  type="button"
                >
                  + Add to Today's Food
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <div>🔍</div>

            <h3>No food found</h3>

            <p>
              Try searching for another food.
            </p>
          </div>
        )}
      </section>

      {/* Information Note */}
      <section className="scanner-note">
        <span>ℹ️</span>

        <p>
          Nutritional values shown here are example
          values for the prototype. Actual nutrition can
          vary based on serving size, ingredients and
          preparation method.
        </p>
      </section>
    </div>
  );
}

export default FoodSearch;