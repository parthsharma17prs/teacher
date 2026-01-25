import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { Outlet, useLocation } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
    const location = useLocation();
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    // Dynamic title based on route
    const getTitle = () => {
        switch (location.pathname) {
            case '/': return 'Dashboard Overview';
            case '/courses': return 'Manage Courses';
            case '/attendance': return 'Attendance';
            case '/assignments': return 'Assignments';
            case '/quizzes': return 'Quiz Management';
            case '/live-classes': return 'Live Classes';
            case '/analytics': return 'Performance Analytics';
            default: return 'Dashboard';
        }
    };

    return (
        <div className="app-container">
            <div className={`sidebar-wrapper ${isMobileSidebarOpen ? 'show' : ''}`}>
                <Sidebar onClose={() => setIsMobileSidebarOpen(false)} />
            </div>

            {isMobileSidebarOpen && (
                <div className="sidebar-overlay" onClick={() => setIsMobileSidebarOpen(false)}></div>
            )}

            <div className="main-content-wrapper">
                <Topbar
                    title={getTitle()}
                    onMenuClick={() => setIsMobileSidebarOpen(true)}
                />
                <main className="main-content">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Layout;
