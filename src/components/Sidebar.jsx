import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  BookOpen,
  UserCheck,
  FileText,
  HelpCircle,
  Video,
  BarChart2,
  Settings,
  LogOut,
  X
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ onClose }) => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Overview', path: '/' },
    { icon: BookOpen, label: 'Course Management', path: '/courses' },
    { icon: UserCheck, label: 'Attendance', path: '/attendance' },
    { icon: FileText, label: 'Assignments', path: '/assignments' },
    { icon: HelpCircle, label: 'Quiz Management', path: '/quizzes' },
    { icon: Video, label: 'Live Classes', path: '/live-classes' },
    { icon: BarChart2, label: 'Analytics', path: '/analytics' },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <span className="logo-icon">🎓</span>
          <h2>EduSmart</h2>
        </div>
        <button className="close-sidebar-btn" onClick={onClose}>
          <X size={24} />
        </button>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            onClick={onClose}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button className="nav-item">
          <Settings size={20} />
          <span>Settings</span>
        </button>
        <button className="nav-item logout">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
