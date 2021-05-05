import React from "react";

import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <div>Netflix Landing Page</div>
      <Link to="/login">
        <button className="signin">Login</button>
      </Link>
    </>
  );
}

export default Landing;
