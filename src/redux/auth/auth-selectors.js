const getIsAuthenticated = state => state.auth.isAuthenticated;
const getUserName = state => state.auth.user.name;
const authSelectors = { getIsAuthenticated, getUserName };
export default authSelectors;
