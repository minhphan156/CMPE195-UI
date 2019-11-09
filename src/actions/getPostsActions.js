import { GET_POSTS } from "./types";
import axios from "axios";

export const getPostsActions = accessToken => dispatch => {
  axios
    .get("http://localhost:3001/api/search", {
      headers: { Authorization: `Bearer ${accessToken}` }
    })
    .then(res => {
      console.log("getPostsActions reducer ", res.data);
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