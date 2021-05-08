import { SIGNIN, SIGNOUT } from "./types";

export const signInAck = (user) => {
  return { type: SIGNIN, payload: { user: user } };
};
export const signOutAck = () => {
  return { type: SIGNOUT, payload: { user: null } };
};
