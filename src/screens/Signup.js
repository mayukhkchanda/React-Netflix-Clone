import React from "react";

const Signup = () => {
  return (
    <div class="Signup">
      <div class="Signup__header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2014_logo.svg/250px-Netflix_2014_logo.png"
          class="Signup__header_image"
        />
        <a href="#" class="Signup__header_signin">
          Sign In
        </a>
      </div>
      <form class="Signup__form">
        <h2 class="Signup__form_header max-width-500">
          Create a password to start your membership.
        </h2>
        <p class="Signup__form_para max-width-500">
          Just a few more steps and you're done! We hate paperwork, too.
        </p>
        <div class="Signup__form_input--container">
          <input
            type="email"
            placeholder="Enter Email"
            class="Signup__form_input email"
          />
        </div>
        <div class="Signup__form_input--container">
          <input
            type="password"
            placeholder="Password"
            class="Signup__form_input password"
          />
        </div>
        <button class="Signup__form_button">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
