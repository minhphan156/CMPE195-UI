import { GET_POSTS, GET_FILTERED_POSTS } from "./types";
import axios from "axios";

export const getPostsActions = accessToken => dispatch => {
  console.log(accessToken)

  axios
    .get("http://localhost:3001/api/search", {
      headers: { Authorization: `Bearer ${accessToken}` }
    })
    .then(res => {
      console.log("getPostsActions ", res.data);
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
  console.log("getPostsActions search post ", newQuery);
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
  console.log(accessToken)
 
  const searchPack = {
    tag: filterQuery.tags,
    startDate: filterQuery.startDate,
    endDate: filterQuery.endDate,
  };
  console.log(searchPack)
  let config = {
    headers: { Authorization: `Bearer ${accessToken}` },
    params: searchPack,
  }
  axios
    .get("http://localhost:3001/api/search", config)
    .then(res => {
      console.log("getFilteredPostsActions  ", res.data);
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