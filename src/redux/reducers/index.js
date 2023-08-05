import { combineReducers } from "redux";
import authSlice from "../features/auth/authSlice";
import userSlice from "../features/user/userSlice";
import userPortfolioSlice from "../features/userPortfolio/userPortfolioSlice";
import transactionSlice from "../features/transaction/transactionSlice";
import marketDataSlice from "../features/marketData/marketDataSlice";
import stockSlice from "../features/stock/stockSlice";
import portfolioStockSlice from "../features/portfolioStock/portfolioStockSlice";

const rootReducer = combineReducers({
  auth: authSlice,
  user: userSlice,
  userPortfolio: userPortfolioSlice,
  transaction: transactionSlice,
  portfolioStock: portfolioStockSlice,
  stock: stockSlice,
  marketData: marketDataSlice,
});

export default rootReducer;
