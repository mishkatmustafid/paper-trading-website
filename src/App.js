import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./views/landingPage";
import Dashboard from "./views/dashboard";
import SignupPage from "./views/auth/signupPage";
import LoginPage from "./views/auth/loginPage";
import MarketOverview from "./views/marketOverview";
import LeaderBoard from "./views/leaderboardPage";
import store from "./redux/store";
import { Provider } from "react-redux";
import PendingOrders from "./views/Orders/PendingOrders";
import ExecutedOrders from "./views/Orders/ExecutedOrders";
import PortfolioPage from "./views/portfolioPage";

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
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/marketoverview" element={<MarketOverview />} />
            <Route path="/leaderboard" element={<LeaderBoard />} />
            <Route path="/pendingOrders" element={<PendingOrders />} />
            <Route path="/executedOrders" element={<ExecutedOrders />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
