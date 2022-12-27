import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { registerUser, updateName } = useContext(AuthContext);
    const handleRegister = async (data) => {
        // console.log(data)
        const res = await registerUser(data.email, data.password);
        const name = await updateName(data.name)
        // console.log(res.user)
    }
    return (
        <div className='h-screen grid place-items-center'>
            <div className='w-1/3 mt-5 bg-primary p-8 rounded-lg'>
                <h3 className="text-3xl font-bold text-center text-white uppercase">Register</h3>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <label className="label">
                        <span className="label-text text-white">Name</span>
                    </label>
                    <input type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full"
                        {...register("name", { required: "Name field is required" })}
                    />
                    {
                        errors.name && <span className='text-error mt-2'>{errors.name.message}</span>
                    }
                    <label className="label">
                        <span className="label-text text-white">Email</span>
                    </label>
                    <input type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full"
                        {...register("email", {
                            required: "Hello",
                            pattern:
                            {
                                value: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
                                message: "Email is not valid"
                            }
                        }
                        )}
                    />
                    {
                        errors.email && <span className='text-error mt-2'>{errors.email.message}</span>
                    }
                    <label className="label">
                        <span className="label-text text-white">Password</span>
                    </label>
                    <input type="password"
                        placeholder="Type here"
                        className="input input-bordered w-full"
                        {...register("password", {
                            required: "Password field is required",
                            pattern: {
                                value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
                                message: "Must contain 1 uppercase, 1 number, 1 special character total 8 characters"
                            }
                        })}
                    />
                    {
                        errors.password && <span className='text-error mt-2'>{errors.password.message}</span>
                    }
                    <button type="submit" className='btn btn-accent w-full mt-3'>Register</button>
                </form>
                <p className='text-white text-center mt-2'>Already have an account? <Link className='text-blue-500' to="/user/login">Login Now</Link></p>
            </div>
        </div>

    );
};

export default Register;