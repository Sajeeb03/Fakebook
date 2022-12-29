import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { FaComment, FaHeart } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import Loader from '../../Components/Loader';
import { AuthContext } from '../../Context/AuthProvider';

const Details = () => {
    const { id } = useParams();
    const { user, loading, setLoading } = useContext(AuthContext);
    const { data: post = [], isLoading, refetch } = useQuery({
        queryKey: ["details"],
        queryFn: async () => {
            const res = await axios(`https://fakebook-server.vercel.app/post/${id}`)
            return res.data.data;
        }
    });

    // console.log(post)
    const { details, image, reaction, author, _id } = post;
    const uid = { uid: user.uid };
    const handleReaction = async (post) => {
        // console.log(sta)
        const res = await axios.put(`https://fakebook-server.vercel.app/posts/${post._id}`, uid)
        try {
            if (res.data.success) {
                // console.log("hello")
                refetch();
            }
        } catch (error) {

        }
    }
    if (isLoading || loading) {
        return <Loader />
    }
    return (
        <div className='text-white border-4 border-secondary p-3 m-12 rounded-lg'>
            <h2 className="text-2xl font-bold">{author}</h2>
            <img src={image} alt="" className='w-full rounded-lg h-64' />
            <p>{details}</p>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-3'>
                    {
                        post?.uid ? <>
                            {
                                post?.uid?.includes(user.uid) ? <FaHeart className='h-5 w-5 text-red-400' /> : <FaHeart onClick={() => handleReaction(sta)} className='h-5 w-5' />
                            }
                        </> : <FaHeart onClick={() => handleReaction(sta)} className='h-5 w-5' />
                    }
                    <p>{reaction}</p>
                </div>
                <p className='text-white flex items-center gap-2'><FaComment /> Comment</p>
            </div>
        </div>
    );
};

export default Details;