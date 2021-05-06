import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./screens/Landing";
import Login from "./screens/Login";
import Homepage from "./screens/Homepage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/signin" exact component={Login} />
          <Route path="/dashboard" exact component={Homepage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
