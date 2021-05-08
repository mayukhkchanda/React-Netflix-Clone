import React from "react";
import Nav from "../components/homepage/Nav";
import "./css/Profile.css";
import { authenticator } from "../firebase";
import { Redirect } from "react-router-dom";

import { connect } from "react-redux";

const Profile = ({ User }) => {
  const signOut = () => {
    authenticator.signOut();
  };
  //console.log(User);
  const renderContent = () => {
    return (
      <div className="profiles">
        <div className="homepage">
          <Nav />
        </div>
        <div className="profileScreen__details--container">
          <h1>Edit Profile</h1>
          <div className="profileScreen__details">
            <img
              className="profileScreen__avatar"
              src={`${process.env.PUBLIC_URL}/assets/images/AvatarLogo_Big.png`}
            />
            <div className="profileScreen_plans--container">
              <p className="profileScreen_email">{User.email}</p>
              <h3 className="profileScreen_currentPlan">
                Plans(Current Plan: Premium)
              </h3>
              <button onClick={signOut} className="profileScreen_signOut">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return User ? renderContent() : <Redirect to="/" />;
};

const mapStateToProps = (state) => {
  return { User: state.user };
};

export default connect(mapStateToProps)(Profile);
