import React from 'react';
import { FaHeart } from "react-icons/fa";
const Post = ({ sta, handleReaction, userId }) => {
    const { details, image, reaction, author } = sta;
    // console.log(uid.includes(userId.uid))
    console.log(sta)
    return (
        <div className='text-white border-4 border-secondary p-3 rounded-lg'>
            <h2 className="text-2xl font-bold">{author}</h2>
            <img src={image} alt="" className='w-full rounded-lg h-64' />
            <p>{details}</p>
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
        </div>
    );
};

export default Post;