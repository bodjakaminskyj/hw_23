import { createStore } from "redux";


const usersData = [
  {
    name: "Anakin skywalker",
    nickname: "@dart_vader",
    linkToPhoto: "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg",
  },
  {
    name: "Palpatine",
    nickname: "@darth_sidious",
    linkToPhoto: "https://upload.wikimedia.org/wikipedia/uk/9/9c/Senator_Palpatine_EpIII.png" ,
  },
]

const postData = [
  {
    name: 'Anakin skywalker',
    date: new Date().toLocaleString("ua", { year: 'numeric', month: 'long', day: 'numeric' }),
    content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image: "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",
    coment: Math.floor(Math.random() * 100),
    repost: Math.floor(Math.random() * 100),
    like: Math.floor(Math.random() * 100),
},
{
  name: 'Palpatine',
  date: new Date().toLocaleString("ua", { year: 'numeric', month: 'long', day: 'numeric' }),
  content: "Good... Good... Let the hate flow through you!",
  image: "https://upload.wikimedia.org/wikipedia/uk/9/9c/Senator_Palpatine_EpIII.png",
  coment: Math.floor(Math.random() * 100) ,
  repost: Math.floor(Math.random() * 100),
  like: Math.floor(Math.random() * 100),
},
]


const initialState = {
  postData: [],
  usersData: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "load_posts":
      return {
        ...state,
        postData: postData,
        usersData,
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