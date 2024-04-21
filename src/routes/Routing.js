import React, { Component } from "react";
import { Routes, BrowserRouter } from "react-router-dom";

import { allRoutes as routing } from "./index";

export default class Routing extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          {routing.map((route, index) => {
            return (
              <route.route
                key={index}
                path={route.path}
                exact={route.exact}
                element={route.component}
              ></route.route>
            );
          })}
        </Routes>
      </BrowserRouter>
    );
  }
}
