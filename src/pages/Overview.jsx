import React from 'react';
import { Users, Clock, Book, Star, Calendar, ArrowRight, MoreHorizontal } from 'lucide-react';
import './Overview.css';

const StatCard = ({ icon: Icon, label, value, trend, trendUp }) => (
    <div className="card stat-card">
        <div className="stat-icon-wrapper">
            <Icon size={24} className="stat-icon" />
        </div>
        <div className="stat-content">
            <span className="stat-label">{label}</span>
            <h3 className="stat-value">{value}</h3>
            <span className={`stat-trend ${trendUp ? 'trend-up' : 'trend-down'}`}>
                {trend} vs last month
            </span>
        </div>
    </div>
);

const ClassCard = ({ subject, time, students, color }) => (
    <div className="class-card">
        <div className="class-time">
            <span className="time">{time}</span>
            <span className="duration">60 min</span>
        </div>
        <div className="class-line" style={{ backgroundColor: color }}></div>
        <div className="class-info">
            <h4>{subject}</h4>
            <div className="class-meta">
                <Users size={14} />
                <span>{students} Students</span>
            </div>
        </div>
        <button className="btn-join">Start</button>
    </div>
);

const CourseProgress = ({ course, progress, studentCount, avgScore }) => (
    <div className="course-row">
        <div className="course-info">
            <div className="course-icon">
                <Book size={18} />
            </div>
            <div>
                <h4>{course}</h4>
                <span>{studentCount} Students</span>
            </div>
        </div>
        <div className="progress-section">
            <div className="progress-label">
                <span>Progress</span>
                <span>{progress}%</span>
            </div>
            <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
        </div>
        <div className="score-badge">
            <Star size={14} fill="var(--warning-color)" stroke="none" />
            <span>{avgScore}</span>
        </div>
        <button className="icon-btn-sm"><MoreHorizontal size={16} /></button>
    </div>
);

const Overview = () => {
    return (
        <div className="overview-container">
            {/* Welcome Section */}
            <div className="welcome-section">
                <div>
                    <h2>Welcome back, Sarah! 👋</h2>
                    <p>Here's what's happening with your courses today.</p>
                </div>
                <div className="date-display">
                    <Calendar size={18} />
                    <span>{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</span>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="stats-grid grid-cols-4">
                <StatCard icon={Users} label="Total Students" value="1,240" trend="+12%" trendUp={true} />
                <StatCard icon={Book} label="Active Courses" value="8" trend="+2" trendUp={true} />
                <StatCard icon={Clock} label="Hours Taught" value="142" trend="+8.5%" trendUp={true} />
                <StatCard icon={Star} label="Avg. Rating" value="4.8" trend="+0.2" trendUp={true} />
            </div>

            <div className="dashboard-content">
                {/* Left Column */}
                <div className="main-col">
                    <section className="dashboard-section">
                        <div className="section-header">
                            <h3>To Do Today</h3>
                            <a href="#" className="view-all">View Schedule <ArrowRight size={16} /></a>
                        </div>
                        <div className="classes-list">
                            <ClassCard subject="Advanced Mathematics" time="09:00 AM" students="42" color="#7c3aed" />
                            <ClassCard subject="Physics: Thermodynamics" time="11:30 AM" students="38" color="#f59e0b" />
                            <ClassCard subject="Calculus Review" time="02:00 PM" students="25" color="#10b981" />
                        </div>
                    </section>

                    <section className="dashboard-section">
                        <div className="section-header">
                            <h3>AI Insights & Recommendations</h3>
                            <span className="ai-badge">✨ AI Powered</span>
                        </div>
                        <div className="ai-insights card">
                            <div className="insight-item">
                                <div className="insight-icon low">!</div>
                                <div className="insight-text">
                                    <h4>Attention Needed: Physics Class</h4>
                                    <p>Attendance dropped by 15% in the last session. Consider calculating a quick quiz to boost engagement.</p>
                                </div>
                                <button className="btn btn-sm btn-outline">View Details</button>
                            </div>
                            <div className="insight-item">
                                <div className="insight-icon good">✓</div>
                                <div className="insight-text">
                                    <h4>Great Job! Mathematics</h4>
                                    <p>Student quiz scores improved by 12% after your last resource upload.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Right Column */}
                <div className="side-col">
                    <section className="dashboard-section">
                        <div className="section-header">
                            <h3>Course Performance</h3>
                        </div>
                        <div className="card courses-list">
                            <CourseProgress course="Advanced Math" progress={75} studentCount={120} avgScore={4.5} />
                            <CourseProgress course="Physics 101" progress={45} studentCount={85} avgScore={4.2} />
                            <CourseProgress course="Geometry" progress={90} studentCount={95} avgScore={4.8} />
                            <CourseProgress course="Calculus II" progress={30} studentCount={60} avgScore={3.9} />
                        </div>
                    </section>

                    <section className="dashboard-section">
                        <div className="section-header">
                            <h3>Pending Assignments</h3>
                        </div>
                        <div className="card pending-grid">
                            <div className="pending-item">
                                <span className="count">24</span>
                                <span className="label">To Grade</span>
                            </div>
                            <div className="pending-item">
                                <span className="count">5</span>
                                <span className="label">Late</span>
                            </div>
                        </div>
                        <button className="btn btn-primary w-full mt-4">Start Grading</button>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Overview;
