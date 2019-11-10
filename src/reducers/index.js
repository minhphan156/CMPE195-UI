import { combineReducers } from "redux";
import uploadReducer from "./uploadReducer";
import getPostsReducer from "./getPostsReducer";
import getFilteredPostsReducer from "./getFilteredPostsReducer";

export default combineReducers({
  upload: uploadReducer,
  posts: getPostsReducer,
  filteredPosts: getFilteredPostsReducer
});
