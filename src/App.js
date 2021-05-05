import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./screens/Login";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <switch>
          <Route path="/" exact component={Login} />
        </switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
