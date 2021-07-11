import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {

  var currentUser = localStorage.getItem('token')

  return (
    <Route
      {...rest}
      render={routeProps =>
        currentUser = localStorage.getItem('token')
          ? (
            <RouteComponent {...routeProps} />
          ) : (
            <Redirect to={"/"} />
          )
      }
    />
  );
};


export default PrivateRoute