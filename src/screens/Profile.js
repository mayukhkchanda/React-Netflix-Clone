import React from "react";
import Nav from "../components/homepage/Nav";
import "./css/Profile.css";
import { authenticator } from "../firebase";
import { Redirect } from "react-router-dom";

import { connect } from "react-redux";

const plansArr = [
  { name: "Netflix Standard", res: "1080p", isCurrent: false },
  { name: "Netflix Basic", res: "480p", isCurrent: false },
  { name: "Netflix Premium", res: "4k+HDR", isCurrent: true },
];

const Profile = ({ User }) => {
  const signOut = () => {
    authenticator.signOut();
  };
  //console.log(User);

  const renderPlans = () => {
    return plansArr.map((plan) => {
      return (
        <div className="profileScreen__plan">
          <div className="plan_info">
            <span className="plan_name">{plan.name}</span>
            <span className="plan-res">{plan.res}</span>
          </div>
          <button className={`plan_button ${plan.isCurrent ? "current" : ""}`}>
            {plan.isCurrent ? "Current Plan" : "Subscribe"}
          </button>
        </div>
      );
    });
  };

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
              alt="Avatar"
              src={`${process.env.PUBLIC_URL}/assets/images/AvatarLogo_Big.png`}
            />
            <div className="profileScreen_plans--container">
              <p className="profileScreen_email">{User.email}</p>
              <h3 className="profileScreen_currentPlan">
                Plans(Current Plan: Premium)
              </h3>
              <div className="profileScreen__plans">
                <p className="profileScreen__renewalDate">
                  Renewal date: 08/08/2021
                </p>
                {renderPlans()}
              </div>
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
