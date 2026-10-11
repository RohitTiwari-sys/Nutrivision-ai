import { NavLink } from "react-router-dom";

function Sidebar() {
  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: "🏠" },
    { name: "Food Scanner", path: "/scanner", icon: "📸" },
    { name: "Food Search", path: "/food-search", icon: "🔎" },
    { name: "Nutrition", path: "/nutrition", icon: "🥗" },
    { name: "Fitness", path: "/fitness", icon: "🏃" },
    { name: "Progress", path: "/progress", icon: "📊" },
    { name: "Profile", path: "/profile", icon: "👤" },
  ];

  return (
    <aside className="sidebar">
      <div className="logo">
        <div className="logo-icon">N</div>

        <div>
          <h2>NutriVision</h2>
          <span>AI Health Assistant</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            <span className="nav-icon">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <div className="ai-box">
          <div className="ai-icon">🤖</div>

          <div>
            <strong>AI Coach</strong>
            <p>Your personal health assistant</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;