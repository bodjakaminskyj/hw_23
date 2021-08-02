import React, { useState } from "react"
import  icon from './images/icon.png'
import  commentImage from "./images/comment.png"
import  repostImage from './images/repost.png'
import './Post.css'


const Post = ({postData}) => {
    return(
        <div className="bike-info">

            <div className='bike'>
                <label>{postData.name}</label> - {postData.type}({postData.color})
            </div>
            <div className='delete'>&#10006;</div>
            <label>{postData.id}</label>
            <div className='status'>
                <label>Status:</label>
                <select>
                    <option defaultValue>Available</option>
                    <option>Busy</option>
                    <option>Unavailable</option>
                </select>
            </div>
            <h1 className='price'>{postData.price} UAH/hr</h1>

        </div>
    )
}

export default Post;
