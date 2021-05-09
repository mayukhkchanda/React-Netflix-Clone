export const emailValidator = (email) => {
  const errors = {};
  if (!email) {
    errors.empty = "Email Address is Required";
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.invalid = "Invalid Email Address";
  }
  return errors;
};

export const passwdValidator = (passwd) => {
  const errors = {};
  if (!passwd) {
    errors.empty = "Password is Required";
  }
  if (passwd.length < 6) {
    errors.tooShort = "Password must contain at least 6 characters";
  }
  if (passwd.length > 50) {
    errors.tooLong = "Password must contain at most 50 characters";
  }

  return errors;
};
