import { combineReducers } from "redux";
import uploadReducer from "./uploadReducer";
import getPostsReducer from "./getPostsReducer";

export default combineReducers({
  upload: uploadReducer,
  posts: getPostsReducer,
});
