import {
  GET_POSTS,
  GET_FILTERED_POSTS,
  NO_POSTS_FOUND,
  SET_EXPLORE_STATUS,
  GET_INDIVIDUAL_POST,
  CLEAR_UPLOAD
} from "./types";
import axios from "axios";

export const getPostsActions = accessToken => dispatch => {
  axios
    .get("http://localhost:3001/api/search", {
      headers: { Authorization: `Bearer ${accessToken}` }
    })
    .then(res => {
      res.data.length < 1
        ? dispatch({
            type: NO_POSTS_FOUND,
            payload: res.data
          })
        : dispatch({
            type: GET_POSTS,
            payload: res.data
          });
    })
    .catch(err => {
      console.log(err);
      if (err.response !== undefined) {
        console.log(err.response.data);
      }
    });
};

export const searchPost = (newQuery, accessToken) => dispatch => {
  const searchPack = {
    query: newQuery.query
  };
  let config = {
    headers: { Authorization: `Bearer ${accessToken}` },
    params: searchPack
  };
  axios
    .get("http://localhost:3001/api/search", config)
    .then(res => {
      res.data.length < 1
        ? dispatch({
            type: NO_POSTS_FOUND,
            payload: res.data
          })
        : dispatch({
            type: GET_POSTS,
            payload: res.data
          });
    })
    .catch(err => {
      console.log(err);
      if (err.response !== undefined) {
        console.log(err.response.data);
      }
    });
};

export const getFilteredPostsActions = (
  filterQuery,
  accessToken
) => dispatch => {
  const searchPack = {
    tag: filterQuery.tags,
    startDate: filterQuery.startDate,
    endDate: filterQuery.endDate
  };
  let config = {
    headers: { Authorization: `Bearer ${accessToken}` },
    params: searchPack
  };
  axios
    .get("http://localhost:3001/api/search", config)
    .then(res => {
      res.data.length < 1
        ? dispatch({
            type: NO_POSTS_FOUND,
            payload: res.data
          })
        : dispatch({
            type: GET_FILTERED_POSTS,
            payload: res.data
          });
    })
    .catch(err => {
      console.log(err);
      if (err.response !== undefined) {
        console.log(err.response.data);
      }
    });
};

export const getIndividualPostsActions = (
  post,
  accessToken,
  history
) => dispatch => {
  let config = {
    headers: { Authorization: `Bearer ${accessToken}` }
  };
  axios
    .get(`http://localhost:3001/api/post/${post.hash_id}`, config)
    .then(res => {
      res.data.length < 1
        ? dispatch({
            type: NO_POSTS_FOUND,
            payload: res.data
          })
        : dispatch({
            type: GET_INDIVIDUAL_POST,
            payload: res.data
          });
      history.push("/post");
    })
    .catch(err => {
      console.log(err);
      if (err.response !== undefined) {
        console.log(err.response.data);
      }
    });
};

export const setExploreStatus = route => dispatch => {
  dispatch({
    type: SET_EXPLORE_STATUS,
    payload: route
  });
};

export const clearUpload = () => dispatch => {
  dispatch({
    type: CLEAR_UPLOAD
  });
};
