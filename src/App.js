import './App.css';
import Post from './components/Post';
import AddPost from './components/AddPost';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadPosts } from "./store";
import { useSelector } from "react-redux";
import {TopPanel} from "./components/topPanel";
import {BottomPanel} from "./components/bottomPanel";
import {Statistic} from "./components/statistic";


function App() {
  const dispatch = useDispatch();
  const { postData } = useSelector((state) => state);
  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  return (
    <div className="App">
      <TopPanel/>
        {postData.map((post, i) =>
            <Post key={i}
                  postData={post}
            />)}
        <AddPost/>

        <BottomPanel/>
    </div>
  );
}

export default App;
