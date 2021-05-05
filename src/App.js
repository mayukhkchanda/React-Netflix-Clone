import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./screens/Landing";
import Login from "./screens/Login";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <switch>
          <Route path="/" exact component={Landing} />
          <Route path="/signin" exact component={Login} />
        </switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
