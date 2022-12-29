import React from 'react';
import { FaComment, FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Post = ({ sta, handleReaction, userId }) => {
    const { details, image, reaction, author, _id } = sta;
    // console.log(uid.includes(userId.uid))
    // console.log(sta)
    return (
        <div className='text-white border-4 border-secondary p-3 rounded-lg'>
            <h2 className="text-2xl font-bold">{author}</h2>
            <img src={image} alt="" className='w-full rounded-lg h-64' />
            <p>{details}</p>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-3'>
                    {
                        sta?.uid ? <>
                            {
                                sta?.uid?.includes(userId.uid) ? <FaHeart className='h-5 w-5 text-red-400' /> : <FaHeart onClick={() => handleReaction(sta)} className='h-5 w-5' />
                            }
                        </> : <FaHeart onClick={() => handleReaction(sta)} className='h-5 w-5' />
                    }
                    <p>{reaction}</p>
                </div>
                <p className='text-white flex items-center gap-2'><FaComment /> Comment</p>
                <Link to={`/post/${_id}`}>
                    <button className='btn btn-secondary'>Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Post;