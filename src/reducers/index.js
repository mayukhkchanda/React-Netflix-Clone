import { combineReducers } from "redux";
import { AuthReducer } from "./AuthReducer";
import { reducer as formReducer } from "redux-form";

export const reducers = combineReducers({
  user: AuthReducer,
  form: formReducer,
});
