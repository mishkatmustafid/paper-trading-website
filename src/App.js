import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./views/landingPage";
import Dashboard from "./views/dashboard";
import SignupPage from "./views/auth/signupPage";
import LoginPage from "./views/auth/loginPage";
import StockPage from "./views/portfolioPage";
import MarketOverview from "./views/marketOverview";
import LeaderBoard from "./views/leaderboardPage";
import Orders from "./views/Orders";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} exact />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<SignupPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/portfolio" element={<StockPage />} />
            <Route path="/marketoverview" element={<MarketOverview />} />
            <Route path="/leaderboard" element={<LeaderBoard />} />
            <Route path="/transactions" element={<Orders />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
