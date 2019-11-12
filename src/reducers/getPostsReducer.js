import {
  GET_POSTS,
  GET_FILTERED_POSTS,
  NO_POSTS_FOUND,
  SET_EXPLORE_STATUS,
  GET_INDIVIDUAL_POST
} from "../actions/types";

var initialState = {
  posts: [],
  isNotFound: false,
  isInExplore: false,
  individualPost: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        isNotFound: false
      };
    case GET_FILTERED_POSTS:
      return {
        ...state,
        posts: action.payload,
        isNotFound: false
      };
    case NO_POSTS_FOUND:
      return {
        ...state,
        isNotFound: true
      };
    case SET_EXPLORE_STATUS:
      return {
        ...state,
        isInExplore: action.payload
      };
    case GET_INDIVIDUAL_POST:
        return {
          ...state,
          individualPost: action.payload
        };
    default:
      return state;
  }
}
