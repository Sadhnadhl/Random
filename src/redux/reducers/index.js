import { combineReducers } from "redux";
import album from "./album";
import todos from "./todoes";
const reducer = combineReducers({
  album: album,
  todos: todos,
});
export default reducer;
