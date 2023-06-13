import React, { FC } from 'react';
import Navbar from './Navbar';

interface LayoutProps {
    children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow py-8 px-6 my-14">{children}</main>
        </div>
    );
};

export default Layout;
