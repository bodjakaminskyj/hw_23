import './App.css';
import Post from './components/Post';
import AddPost from './components/AddPost';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadPosts } from "./store";
import { useSelector } from "react-redux";


function App() {
  const dispatch = useDispatch();
  const { usersData, postData } = useSelector((state) => state);
  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  return (
    <div className="wall">
      <AddPost/>
      {postData.map((post, i) => 
        <Post key={i}
          postData={post}
          user={usersData.find((user) => user.name === post.name)}
        />)}
    </div>
  );
}

export default App;
