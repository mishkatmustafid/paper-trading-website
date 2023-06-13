import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./views/landingPage/LandingPage";
import Dashboard from "./views/dashboard/Dashboard";
import SignupPage from "./views/auth/signupPage/SignupPage";
import LoginPage from "./views/auth/loginPage/LoginPage";
import StockPage from "./views/stockPage/StockPage";
import MarketView from "./views/marketView/MarketView";
import MarketOverview from "./views/marketOverview/MarketOverview";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} exact />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignupPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/stock" element={<StockPage />} />
          <Route path="/market" element={<MarketView />} />
          <Route path="/marketoverview" element={<MarketOverview />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
