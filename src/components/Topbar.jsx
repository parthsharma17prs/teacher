import React from 'react';
import { Search, Bell, ChevronDown, Menu } from 'lucide-react';
import './Topbar.css';

const Topbar = ({ title, onMenuClick }) => {
    return (
        <header className="topbar">
            <div className="topbar-left">
                <button className="menu-btn" onClick={onMenuClick}>
                    <Menu size={24} />
                </button>
                <div className="topbar-title">
                    <h1>{title}</h1>
                </div>
            </div>

            <div className="topbar-actions">
                <div className="search-bar">
                    <Search size={18} className="search-icon" />
                    <input type="text" placeholder="Search anything..." />
                </div>

                <button className="icon-btn">
                    <Bell size={20} />
                    <span className="badge">3</span>
                </button>

                <div className="user-profile">
                    <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Teacher"
                        alt="Profile"
                        className="avatar"
                    />
                    <div className="user-info">
                        <span className="user-name">Ms. Sarah Wilson</span>
                        <span className="user-role">Senior Mathematics Teacher</span>
                    </div>
                    <ChevronDown size={16} className="chevron" />
                </div>
            </div>
        </header>
    );
};

export default Topbar;
