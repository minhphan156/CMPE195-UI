import { GET_POSTS } from "../actions/types";

var initialState = {
  posts: [
    {
      title: "1dmsadasd",
      summary: "sdasdsadasdas sad sadsad asd asd",
      views: 312312,
      created_at: "2019-09-09T20:44:01.602Z",
      authors: "Minhd asdsa da",
      tags: ["sadas", "qweqwewq", "eqwe231"]
    },
    {
      title: "2dmsadasd",
      summary: "sdasdsadasdas sad sadsad asd asd",
      views: 312312,
      created_at: "2019-11-08T20:44:01.602Z",
      authors: "Minhd asdsa da",
      tags: ["sadas", "qweqwewq", "eqwe231"]
    },
    {
      title: "3dmsadasd",
      summary: "sdasdsadasdas sad sadsad asd asd",
      views: 312312,
      created_at: "2019-11-04T20:44:01.602Z",
      authors: "Minhd asdsa da",
      tags: ["sadas", "qweqwewq", "eqwe231"]
    },
    {
      title: "4dmsadasd",
      summary: "sdasdsadasdas sad sadsad asd asd",
      views: 312312,
      created_at: "2019-11-01T20:44:01.602Z",
      authors: "Minhd asdsa da",
      tags: ["sadas", "qweqwewq", "eqwe231"]
    },
    {
      title: "5dmsadasd",
      summary: "sdasdsadasdas sad sadsad asd asd",
      views: 312312,
      created_at: "2019-11-02T20:44:01.602Z",
      authors: "Minhd asdsa da",
      tags: ["sadas", "qweqwewq", "eqwe231"]
    },
    {
      title: "6dmsadasd",
      summary: "sdasdsadasdas sad sadsad asd asd",
      views: 312312,
      created_at: "2019-11-08T20:22:01.602Z",
      authors: "Minhd asdsa da",
      tags: ["sadas", "qweqwewq", "eqwe231"]
    },
    {
      title: "dmsadasd",
      summary: "sdasdsadasdas sad sadsad asd asd",
      views: 312312,
      created_at: "2019-11-03T20:11:01.602Z",
      authors: "Minhd asdsa da",
      tags: ["sadas", "qweqwewq", "eqwe231"]
    },
    {
      title: "7dmsadasd",
      summary: "sdasdsadasdas sad sadsad asd asd",
      views: 312312,
      created_at: "2019-11-07T20:43:01.602Z",
      authors: "Minhd asdsa da",
      tags: ["sadas", "qweqwewq", "eqwe231"]
    },
    {
      title: "8dmsadasd",
      summary: "sdasdsadasdas sad sadsad asd asd",
      views: 312312,
      created_at: "2019-11-09T20:24:01.602Z",
      authors: "Minhd asdsa da",
      tags: ["sadas", "qweqwewq", "eqwe231"]
    },
    {
      title: "dmsadasd",
      summary: "sdasdsadasdas sad sadsad asd asd",
      views: 312312,
      created_at: "2019-11-06T20:23:01.602Z",
      authors: "Minhd asdsa da",
      tags: ["sadas", "qweqwewq", "eqwe231"]
    }
  ]
};


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
