import { UPLOAD } from "./types";
import axios from "axios";

export const uploadNotebook = (uploadData, history, accessToken) => dispatch => {
  // Inject form data
  var formData = new FormData();
  Object.keys(uploadData).forEach(key => {
    formData.append(key, uploadData[key]);
  });

  axios
    .post("http://localhost:3001/api/post", formData, {
      headers: { Authorization: `Bearer ${accessToken}` }
    })
    .then(res => {
      dispatch({
        type: UPLOAD,
        payload: res.data
      });
      //   history.push("./post");
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
