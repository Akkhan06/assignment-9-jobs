import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Layoutes = () => {
    return (
        <div className=''>
            <div className="">
            <Navbar/>
            <Outlet/>
            </div>
        </div>
    );
};

export default Layoutes;