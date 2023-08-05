export const BASE_URL = "http://localhost:9000";

export const endopoints = {
  signin: `${BASE_URL}/users/signin`,
  signup: `${BASE_URL}/users/signup`,
  getUserDetails: (user_id) => `${BASE_URL}/users/${user_id}/details`,
  portfolio: (user_id) => `${BASE_URL}/portfolio/${user_id}`,
};
