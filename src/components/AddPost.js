import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import {addPost} from '../store';
import './AddPost.css'

const AddPost = () => {
    const dispatch = useDispatch();

    const { usersData} = useSelector((state) => state);
    const [content, setContent] = useState();
    const [linkToPhoto, setlinkToPhoto] = useState();
    const [activeUserName, setActiveUserName] = useState('Anakin skywalker');

    const submitPostData = () => {
        const user = usersData.find((user) => user.name === activeUserName);
        const post = {
            name: user.name,
            date: new Date().toLocaleString("ua", { year: 'numeric', month: 'long', day: 'numeric' }),
            content: content,
            linkToPhoto: linkToPhoto,
            coment: Math.floor(Math.random() * 100),
            repost: Math.floor(Math.random() * 100),
            like: Math.floor(Math.random() * 100),
        }
        dispatch(addPost(post))
    }

    return(
        <div className="addPost">
            <div className="chooseUser">
                <select onChange={(event) => ( setActiveUserName(event.target.value))}>   
                {usersData.map((user) => 
                    <option value={user.name} key={user.name}>{user.name} </option>
                    )}
                </select>
            </div>
            <div className="content">
                <div className="addText">
                    <input placeholder="Що у вас на думці" onChange={(event) =>  setContent(event.target.value)}/>
                </div>
                <div className="addLink">
                    <input placeholder="Посилання на світлину" onChange={(event) =>  setlinkToPhoto(event.target.value)}/>
                </div>
            </div>
            <div className="subBut">
                <button onClick={submitPostData}>Опублікувати</button>
            </div>
        </div>
    )
}

export default AddPost;

