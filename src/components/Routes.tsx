import React, { useContext } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { darkLightContext } from "../App";
import { All } from "../pages/All/All";
import { Favorite } from "../pages/Favorite/Favorite";
import Random from "../pages/Random/Random";

export function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Routes = () => {
  const darkMode = useContext(darkLightContext);

  return (
    <div className={`routes ${darkMode.darkMode ? "darkTheme" : ""}`}>
      <Switch>
        <Route path="/all">
          <All />
        </Route>
        <Route path="/random">
          <Random />
        </Route>
        <Route path="/favorite">
          <Favorite />
        </Route>
        <Route exact path="/">
          <Redirect to="/all/?page=1"></Redirect>
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
