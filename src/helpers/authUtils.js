import { jwtDecode } from "jwt-decode";
import { Cookies } from "react-cookie";

const getLoggedInUser = () => {
  const cookies = new Cookies();
  const user = cookies.get("user");
  return user ? (typeof user === "object" ? user : JSON.parse(user)) : null;
};

// Check if user is authenticated
const isUserAuthenticated = () => {
  const user = getLoggedInUser();

  if (!user) {
    return false;
  }

  const decoded = jwtDecode(user.token);

  // Fetch the time in Seconds
  const currentTime = Date.now() / 1000;

  if (decoded.exp < currentTime) {
    return false;
  } else {
    return true;
  }
};

export { isUserAuthenticated, getLoggedInUser };
