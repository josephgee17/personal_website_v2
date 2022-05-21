import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import routes from "../constants/routes.json";

import { Home } from "./home-page/home-page";
import { Login } from "./login-page/login-page";
import { Workout } from "./workout-page/workout-page";
import { RootState, Dispatch } from "../store";

export const App: React.FC = (): JSX.Element => {
  const dispatch = useDispatch<Dispatch>();
  const { loggedinUser } = useSelector((state: RootState) => state.User);
  if (loggedinUser) {
    dispatch.Workout.initSessionNumber();
    dispatch.Workout.initWorkoutData();
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={routes.WORKOUT}>
            <Workout />
          </Route>
          <Route path={routes.LOGIN}>
            <Login />
          </Route>
          <Route path={routes.HOME}>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
