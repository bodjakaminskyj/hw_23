import { createStore } from "redux";

const postData = []


const initialState = {
  postData: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "load_posts":
      return {
        ...state,
        postData: postData,
      };
    case "add_post":
      return {
        ...state,
        postData: [...state.postData, action.payload]
      };
    default:
      return state;
  }
};

export const loadPosts = () => ({
  type: "load_posts"
});

export const addPost = (value) => ({
  type: "add_post",
  payload: value,
});

const store = createStore(reducer);

export default store;