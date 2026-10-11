import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const pageNames = {
    "/dashboard": "Dashboard",
    "/scanner": "Food Scanner",
    "/food-search": "Food Search",
    "/nutrition": "Nutrition",
    "/fitness": "Fitness",
    "/progress": "Progress",
    "/profile": "Profile",
  };

  const currentPage = pageNames[location.pathname] || "Dashboard";

  return (
    <header className="navbar">
      <div>
        <p className="breadcrumb">NutriVision AI /</p>
        <h1>{currentPage}</h1>
      </div>

      <div className="navbar-right">
        <button className="notification-btn" type="button">
          🔔
        </button>

        <div className="user-mini">
          <div className="avatar">R</div>

          <div>
            <strong>Rohit</strong>
            <span>Healthy Journey</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;