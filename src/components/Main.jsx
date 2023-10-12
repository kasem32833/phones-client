import React from 'react';
import { Outlet } from 'react-router-dom';

const main = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default main;