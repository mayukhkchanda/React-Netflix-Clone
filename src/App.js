import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./screens/Landing";
import Login from "./screens/Login";
import Homepage from "./screens/Homepage";
import Profile from "./screens/Profile";
import Signup from "./screens/Signup";
import { authenticator } from "./firebase";
import { signInAck, signOutAck } from "./actions";

import { connect } from "react-redux";

const App = ({ User, signInAck, signOutAck }) => {
  useEffect(() => {
    const unsubscribe = authenticator.onAuthStateChanged((user) => {
      if (user) {
        //console.log(user);
        signInAck({ email: user.email });
      } else signOutAck();

      return unsubscribe;
    });
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={User ? Homepage : Landing} />
          <Route path="/signin" exact component={Login} />
          <Route path="/profiles" exact component={Profile} />
          <Route path="/signup" exact component={Signup} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { User: state.user };
};

export default connect(mapStateToProps, { signInAck, signOutAck })(App);
