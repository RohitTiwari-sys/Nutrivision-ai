import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import FoodScanner from "./pages/FoodScanner";
import FoodSearch from "./pages/FoodSearch";
import Nutrition from "./pages/Nutrition";
import Fitness from "./pages/Fitness";
import Progress from "./pages/Progress";
import Profile from "./pages/Profile";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Sidebar />

      <div className="main-area">
        <Navbar />

        <main className="page-content">
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/dashboard" />}
            />

            <Route
              path="/dashboard"
              element={<Dashboard />}
            />

            <Route
              path="/scanner"
              element={<FoodScanner />}
            />

            <Route
              path="/food-search"
              element={<FoodSearch />}
            />

            <Route
              path="/nutrition"
              element={<Nutrition />}
            />

            <Route
              path="/fitness"
              element={<Fitness />}
            />

            <Route
              path="/progress"
              element={<Progress />}
            />

            <Route
              path="/profile"
              element={<Profile />}
            />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;