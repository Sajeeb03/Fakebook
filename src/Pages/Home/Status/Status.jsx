import axios from 'axios';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Context/AuthProvider';

const Status = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext);
    const date = new Date();
    const handleStatus = data => {
        const img = data.image[0];
        const imageHostKey = import.meta.env.VITE_IMAGE_API;
        console.log(imageHostKey)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

        // console.log(img)
        const formData = new FormData();
        formData.append("image", img)
        // console.log(formData)
        axios.post(url, formData)
            .then(res => {
                if (res.data.success) {
                    // const image = data.url;
                    // console.log(res.data.data.url)
                    const status = {
                        details: data.status,
                        image: res.data.data.url,
                        reaction: 0,
                        author: user.displayName,
                        time: date.getDate() + date.getTime(),
                        uid: [],
                        comment: []
                    }

                    axios.post("http://localhost:5000/posts", status)
                        .then(res => {
                            if (res.data.success) {
                                toast.success("Post uploaded")
                            }
                        })
                        .catch(err => console.log(err))
                }
            })
    }
    return (
        <div className='p-12'>
            <form onSubmit={handleSubmit(handleStatus)}>

                <textarea
                    className="textarea textarea-bordered w-full"
                    placeholder="Share Your Thoughts"
                    {...register("status")}
                ></textarea>
                <div className='flex justify-between'>
                    <input type="file" name="image" id="" className='p-2 border-2 border-dashed rounded-lg text-white' {...register("image")} />
                    <button className='btn btn-secondary' type="submit">Post</button>
                </div>
            </form>
        </div>
    );
};

export default Status;