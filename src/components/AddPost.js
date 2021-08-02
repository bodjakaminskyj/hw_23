import React from "react";
import { useDispatch } from "react-redux";
import {addPost} from '../store';
import './AddPost.css'
import {useForm} from "react-hook-form";
import ButtonsResult from "./ButtonsResult";

const AddPost = () => {
    const dispatch = useDispatch();
    const {register, reset, handleSubmit} = useForm()
    const submitPostData = data => {
        dispatch(addPost(data))
        reset(
            {
                name: '',
                type: '',
                color: '',
                wheelSize: '',
                price: '',
                id: '',
                description: ''
            }
        );
    }

    return(
        <div className="add-bike">
            <form onSubmit={handleSubmit(submitPostData)}>
                <input {...register("name", { required: true, maxLength: 20})} placeholder='Name'/>
                <input {...register("type", { required: true, pattern: /^[A-Za-z]+$/i })} placeholder='Type'  />
                <input {...register("color", { required: true, maxLength: 20})} placeholder='Color'/>
                <input type="number" {...register("wheelSize", { min: 10, max: 31 })} placeholder='Wheel Size'/>
                <input type='number' {...register("price", { required: true, pattern: /^[0-9.]+$/i })} placeholder='Price'  />
                <input {...register("id", { required: true, pattern: /^[A-Za-z]+$/i })} placeholder='ID (slug): ХХХХХХХХХХХХХ'  />
                <textarea id='description' {...register('description')}placeholder='Description'/>

                <ButtonsResult {...{ reset }} />

            </form>
        </div>
    )
}

export default AddPost;

