import { GET_POSTS } from "../actions/types";

const initialState = {
  posts: [
    {
      title: "1dmsadasd",
      summary: "sdasdsadasdas sad sadsad asd asd",
      views: 312312,
      created_at: "12-12-12",
      authors: "Minhd asdsa da",
      tags: ["sadas", "qweqwewq", "eqwe231"]
    },
    {
      title: "2dmsadasd",
      summary: "sdasdsadasdas sad sadsad asd asd",
      views: 312312,
      created_at: "12-12-12",
      authors: "Minhd asdsa da",
      tags: ["sadas", "qweqwewq", "eqwe231"]
    },
    {
      title: "3dmsadasd",
      summary: "sdasdsadasdas sad sadsad asd asd",
      views: 312312,
      created_at: "12-12-12",
      authors: "Minhd asdsa da",
      tags: ["sadas", "qweqwewq", "eqwe231"]
    },
    {
      title: "4dmsadasd",
      summary: "sdasdsadasdas sad sadsad asd asd",
      views: 312312,
      created_at: "12-12-12",
      authors: "Minhd asdsa da",
      tags: ["sadas", "qweqwewq", "eqwe231"]
    },
    {
      title: "5dmsadasd",
      summary: "sdasdsadasdas sad sadsad asd asd",
      views: 312312,
      created_at: "12-12-12",
      authors: "Minhd asdsa da",
      tags: ["sadas", "qweqwewq", "eqwe231"]
    },
    {
      title: "6dmsadasd",
      summary: "sdasdsadasdas sad sadsad asd asd",
      views: 312312,
      created_at: "12-12-12",
      authors: "Minhd asdsa da",
      tags: ["sadas", "qweqwewq", "eqwe231"]
    },
    {
      title: "dmsadasd",
      summary: "sdasdsadasdas sad sadsad asd asd",
      views: 312312,
      created_at: "12-12-12",
      authors: "Minhd asdsa da",
      tags: ["sadas", "qweqwewq", "eqwe231"]
    },
    {
      title: "7dmsadasd",
      summary: "sdasdsadasdas sad sadsad asd asd",
      views: 312312,
      created_at: "12-12-12",
      authors: "Minhd asdsa da",
      tags: ["sadas", "qweqwewq", "eqwe231"]
    },
    {
      title: "8dmsadasd",
      summary: "sdasdsadasdas sad sadsad asd asd",
      views: 312312,
      created_at: "12-12-12",
      authors: "Minhd asdsa da",
      tags: ["sadas", "qweqwewq", "eqwe231"]
    },
    {
      title: "dmsadasd",
      summary: "sdasdsadasdas sad sadsad asd asd",
      views: 312312,
      created_at: "12-12-12",
      authors: "Minhd asdsa da",
      tags: ["sadas", "qweqwewq", "eqwe231"]
    }
  ]
};
/*
 ...state = current state

Object.assign({}, state, {upload: action.payload}) = 
 {...state,upload: action.payload};
*/
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      console.log("get posts data reducer ", action.payload);
      return {
        ...state,
        posts: action.payload
      };
    default:
      return state;
  }
}
