import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useForm } from 'react-hook-form';
const About = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { data: sajeeb = [], isLoading } = useQuery({
        queryKey: ["about"],
        queryFn: async () => {
            const res = await axios('https://fakebook-server.vercel.app/about');
            return res.data.data;
        }
    })

    const handleEditAbout = data => {

    }
    return (
        <div className='m-12 p-3 border-4 border-secondary rounded-lg'>
            <h3 className="text-3xl font-bold text-center text-white">About</h3>
            <form onSubmit={handleSubmit(handleEditAbout)}>
                <label className="label">
                    <span className="label-text text-white">Name</span>
                </label>
                <input type="text"
                    placeholder="Type here"
                    defaultValue={sajeeb.name}
                    className="input input-bordered w-full"
                    {...register("name")}
                />

                <label className="label">
                    <span className="label-text text-white">Email</span>
                </label>
                <input type="text"
                    placeholder="Type here"
                    defaultValue={sajeeb.email}
                    className="input input-bordered w-full"
                    {...register("email")}
                />

                <label className="label">
                    <span className="label-text text-white">University</span>
                </label>
                <input type="text"
                    placeholder="Type here"
                    defaultValue={sajeeb.university}
                    className="input input-bordered w-full"
                    {...register("university")}
                />

                <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                    <div>
                        <label className="label">
                            <span className="label-text text-white">Country</span>
                        </label>
                        <input type="text"
                            placeholder="Type here"
                            defaultValue={sajeeb.country}
                            className="input input-bordered w-full"
                            {...register("country")}
                        />
                    </div>
                    <div>

                        <label className="label">
                            <span className="label-text text-white">Division</span>
                        </label>
                        <input type="text"
                            placeholder="Type here"
                            defaultValue={sajeeb.division}
                            className="input input-bordered w-full"
                            {...register("division")}
                        />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text text-white">District</span>
                        </label>
                        <input type="text"
                            placeholder="Type here"
                            defaultValue={sajeeb.dist}
                            className="input input-bordered w-full"
                            {...register("district")}
                        />
                    </div>
                </div>
                <button type="submit" className='btn btn-accent w-full mt-5'>Submit</button>
            </form>
        </div>
    );
};

export default About;