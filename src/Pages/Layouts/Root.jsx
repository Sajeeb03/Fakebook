import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Root = () => {
    return (
        <div>
            <Header />
            <div className='grid grid-cols-5'>
                <div className="">1</div>
                <div className='col-span-3 bg-primary min-h-screen'><Outlet></Outlet></div>
                <div>3</div>
            </div>
            <Footer />
        </div>
    );
};

export default Root;