export const ShortError = (Err) => {
  //console.log(Err);
  switch (Err.code) {
    case "auth/user-not-found":
      return "Unregistered Email. Please Sign up to an Account.";
    case "auth/wrong-password":
      return "Password is invalid or your account is deactivated.";
    case "auth/too-many-requests":
      return "Too many failed attempts. Please try again later";
    default:
      return "";
  }
};
