import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import routes from "./constants/routes.json";

import { Home } from "./components/home-page/home-page";
import { Login } from "./components/login-page/login-page";

export const App: React.FC = (): JSX.Element => (
    <div className="App">
      <Router>
        <Switch>
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
