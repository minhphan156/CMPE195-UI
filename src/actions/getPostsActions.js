import { GET_POSTS, GET_FILTERED_POSTS,NO_POSTS_FOUND } from "./types";
import axios from "axios";

export const getPostsActions = accessToken => dispatch => {

  axios
    .get("http://localhost:3001/api/search", {
      headers: { Authorization: `Bearer ${accessToken}` }
    })
    .then(res => {
      res.data.length < 1 ? 
      dispatch({
        type: NO_POSTS_FOUND,
        payload: res.data
      }) : 
      dispatch({
        type: GET_POSTS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      // Axios can fail if response's status is not 2xx,
      // so we should check api's error response here.
      if (err.response !== undefined) {
        console.log(err.response.data);
      }
    });
};

export const searchPost = (newQuery, accessToken) => dispatch => {
  const searchPack = {
    query: newQuery
  };

  axios
    .get(
      "http://localhost:3001/api/search",
      { params: searchPack },
      {
        headers: { Authorization: `Bearer ${accessToken}` }
      }
    )
    .then(res => {
      dispatch({
        type: GET_POSTS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      // Axios can fail if response's status is not 2xx,
      // so we should check api's error response here.
      if (err.response !== undefined) {
        console.log(err.response.data);
      }
    });
};

export const getFilteredPostsActions = (filterQuery,accessToken) => dispatch => { 
  const searchPack = {
    tag: filterQuery.tags,
    startDate: filterQuery.startDate,
    endDate: filterQuery.endDate,
  };
  let config = {
    headers: { Authorization: `Bearer ${accessToken}` },
    params: searchPack,
  }
  console.log('getFilteredPostsActions-',searchPack)
  axios
    .get("http://localhost:3001/api/search", config)
    .then(res => {
      res.data.length < 1 ? 
      dispatch({
        type: NO_POSTS_FOUND,
        payload: res.data
      }) : 
      dispatch({
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