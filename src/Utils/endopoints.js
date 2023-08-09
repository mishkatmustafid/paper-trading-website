export const BASE_URL = "http://localhost:9000";

export const endopoints = {
  signin: `${BASE_URL}/users/signin`,
  signup: `${BASE_URL}/users/signup`,
  getUserDetails: (user_id) => `${BASE_URL}/users/${user_id}/details`,
  portfolio: (user_id) => `${BASE_URL}/portfolio/${user_id}`,
  asset: `${BASE_URL}/assets`,
  order: (portfolioId) => `${BASE_URL}/transaction/${portfolioId}`,
  allOrders: (userId) => `${BASE_URL}/transaction/user/${userId}`,
  portfolioStock: (portfolioId) => `${BASE_URL}/portfolio_stock/${portfolioId}`,
  allPortfolioStocks: (userId) => `${BASE_URL}/portfolio_stock/user/${userId}`,
};
