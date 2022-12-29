import React from 'react';
import { Link } from 'react-router-dom';
import error from "../../../assets/error.jpg"
const ErrorPage = () => {
    return (
        <>
            <div className='mt-32 grid place-items-center gap-2'>
                <img src={error} className="h-64 w-64" alt="" />
                <Link to="/">
                    <button className='btn btn-primary'>Back To Home</button>
                </Link>
            </div>
        </>
    );
};

export default ErrorPage;