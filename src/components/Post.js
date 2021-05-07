import React, { useState } from "react"
import  icon from './images/icon.png'
import  commentImage from "./images/comment.png"
import  repostImage from './images/repost.png'
import  likeImage from './images/like.png'
import './Post.css'


const Post = ({postData, user}) => {
    const[coment, setComent] = useState(postData.coment)
    const [comentState, setComentState] = useState(false);
    const[like, setLike] = useState(postData.like)
    const [likeState, setLikeState] = useState(false);
    const[repost, setRepost] = useState(postData.repost)
    const [repostState, setRepostState] = useState(false);
    return(
        <div className="cont">
            
            <div>
            <img className="logo" src={user.linkToPhoto}  alt="logo"/>
           </div>
            <div className="post">
              <label className="name">{user.name} <img className="icon" src={icon} alt="icon"/> </label>
                <label className="nickname">{user.nickname} • {postData.date}</label><br/>
                <label className="content">{postData.content}</label>

            <img className="post_image" src={postData.image} alt="post_image"/>
            <div className="icon_panel">
                <div onClick={
                    ()=>{
                        if(!comentState){
                            setComent(coment + 1)
                        }else(setComent(coment - 1))
                        setComentState(!comentState)  
                    }
                    }>
                <img src={commentImage} alt="comment"/><label>{coment}</label>
                </div>
                <div onClick={
                    ()=>{
                        if(!repostState){
                            setRepost(repost + 1)
                        }else(setRepost(repost - 1))
                        setRepostState(!repostState)  
                    }
                }>
                <img src={repostImage} alt="repost"/><label>{repost}</label>
                </div>
                <div onClick={
                    ()=>{
                        if(!likeState){
                            setLike(like + 1)
                        }else(setLike(like - 1))
                        setLikeState(!likeState)  
                    }
                }>
                <img src={likeImage} alt="like"/><label>{like}</label>
                </div>
            </div>
        </div>
        </div>

    )
}

export default Post;
