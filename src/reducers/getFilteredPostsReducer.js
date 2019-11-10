import { GET_FILTERED_POSTS } from "../actions/types";

var initialState = {
  filteredPosts: null
};


export default function(state = initialState, action) {
  switch (action.type) {
    case GET_FILTERED_POSTS:
      console.log("get filteredPosts data reducer ", action.payload);
      return {
        ...state,
        filteredPosts: action.payload
      };
    default:
      return state;
  }
}
