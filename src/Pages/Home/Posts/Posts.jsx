import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import Loader from '../../../Components/Loader';
import { AuthContext } from '../../../Context/AuthProvider';
import Post from '../../Media/Post';

const Posts = () => {
    const { user, loading, setLoading } = useContext(AuthContext);


    const uid = { uid: user.uid };
    // console.log(uid)
    const handleReaction = async (sta) => {
        // console.log(sta)
        const res = await axios.put(`http://localhost:5000/posts/${sta._id}`, uid)
        try {
            if (res.data.success) {
                // console.log("hello")
                refetch();
            }
        } catch (error) {

        }
    }



    const { data: status = [], isLoading, refetch } = useQuery({
        queryKey: ["status"],
        queryFn: async () => {
            try {
                const res = await axios("http://localhost:5000/posts-home");
                // console.log(res.data)
                return res.data.data;
            } catch (error) {
                console.log(error.message)
            }
        }
    });

    if (isLoading || loading) {
        return <Loader />
    }
    return (
        <div className='p-12'>
            <h3 className='text-3xl font-bold uppercase text-white text-center mb-4'>Your Feed</h3>
            <div className='grid grid-cols-1 gap-4'>
                {
                    status.map(sta => <Post
                        key={sta._id}
                        sta={sta}
                        userId={uid}
                        handleReaction={handleReaction}
                        loading={loading}
                        home={true}
                    />)
                }
            </div>
        </div>
    );
};

export default Posts;