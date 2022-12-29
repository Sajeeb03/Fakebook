import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Post from './Post';

const Media = () => {
    const { user, loading, setLoading } = useContext(AuthContext);

    if (loading) {
        return <p>Loading</p>
    }
    const { data: status = [], isLoading, refetch } = useQuery({
        queryKey: ["status"],
        queryFn: async () => {
            try {
                const res = await axios("http://localhost:5000/posts");
                // console.log(res.data)
                return res.data.data;
            } catch (error) {
                console.log(error.message)
            }
        }
    });
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

    if (isLoading) {
        return <p>
            Loading
        </p>
    }
    return (
        <div className='p-12 grid grid-cols-1 gap-4'>
            {
                status.map(sta => <Post
                    key={sta._id}
                    sta={sta}
                    userId={uid}
                    handleReaction={handleReaction}
                    loading={loading}
                />)
            }
        </div>
    );
};

export default Media;