//Reducer to sign in
import { SIGNIN, SIGNOUT } from "../actions/types";

// Structure of userState object
// userState = {
//   email : ...
// }

export const AuthReducer = (userState = null, action) => {
  switch (action.type) {
    case SIGNIN:
      return action.payload.user;
    case SIGNOUT:
      return null;

    default:
      return userState;
  }
};
