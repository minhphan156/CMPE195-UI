import { GET_POSTS, GET_FILTERED_POSTS, NO_POSTS_FOUND } from "../actions/types";

var initialState = {
  posts: [ ],
  isNotFound: false,
};


export default function(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload, isNotFound: false
      };
      case GET_FILTERED_POSTS:
        return {
          ...state,
          posts: action.payload, isNotFound: false
        };
      case NO_POSTS_FOUND:
      return {
        ...state,
        isNotFound: true
      };
    default:
      return state;
  }
}
