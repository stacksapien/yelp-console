import { Navigate, Route } from "react-router-dom";
import { isUserAuthenticated } from "../helpers/authUtils";
import React from "react";

// React Lazy is used to load components in browser like lazy loading
// which saves up memory and optimizes it

const Login = React.lazy(() => import("../components/Test"));

const PrivateRoute = ({ element: Component, roles, ...rest }) => {
  <Route
    {...rest}
    render={(props) => {
      // If user is not authenticated then we redirect him to login page
      // if user is authenticated we redirect him to dashboard
      if (!isUserAuthenticated()) {
        return (
          <Navigate
            to={{ pathname: "/account/login", state: { from: props.location } }}
          />
        );
      }

      return <Component {...props} />;
    }}
  />;
};

const rootRoute = {
  path: "/",
  exact: true,
  component: () => <Navigate to="/dashboard" />,
  route: PrivateRoute,
};

const singUpRoute = {
  path: "/account/register",
  component: Login,
  route: Route,
};

const loginRoute = {
  path: "/account/login",
  component: Login,
  route: Route,
};

const dashboardRoute = {
  path: "/dashboard",
  component: Login,
  route: PrivateRoute,
};

const campsiteRoute = {
  path: "/campsite",
  component: Login,
  route: PrivateRoute,
};

const allRoutes = [
  rootRoute,
  singUpRoute,
  loginRoute,
  dashboardRoute,
  campsiteRoute,
];

const authProtectedRoutes = [dashboardRoute, campsiteRoute];

export { allRoutes, authProtectedRoutes };
