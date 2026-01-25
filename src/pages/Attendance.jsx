import React, { useState } from 'react';
import { ChevronDown, Calendar, Check, X, Clock, User, Search } from 'lucide-react';
import './Attendance.css';

const Attendance = () => {
    const [selectedCourse, setSelectedCourse] = useState('Advanced Mathematics');
    const [students, setStudents] = useState([
        { id: 1, name: 'Alice Johnson', status: 'present', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice' },
        { id: 2, name: 'Bob Smith', status: 'present', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bob' },
        { id: 3, name: 'Charlie Brown', status: 'absent', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie' },
        { id: 4, name: 'Diana Prince', status: 'present', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Diana' },
        { id: 5, name: 'Evan Wright', status: 'late', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Evan' },
        { id: 6, name: 'Fiona Gallagher', status: 'present', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Fiona' },
        { id: 7, name: 'George Martin', status: 'absent', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=George' },
        { id: 8, name: 'Hannah Abbott', status: 'present', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hannah' },
    ]);

    const toggleStatus = (id, newStatus) => {
        setStudents(students.map(s => s.id === id ? { ...s, status: newStatus } : s));
    };

    const markAll = (status) => {
        setStudents(students.map(s => ({ ...s, status })));
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'present': return 'var(--success-color)';
            case 'absent': return 'var(--danger-color)';
            case 'late': return 'var(--warning-color)';
            default: return 'var(--text-secondary)';
        }
    };

    return (
        <div className="attendance-container">
            {/* Filters & Controls */}
            <div className="card controls-card">
                <div className="control-group">
                    <label>Select Course</label>
                    <div className="select-wrapper">
                        <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
                            <option>Advanced Mathematics</option>
                            <option>Physics 101</option>
                            <option>Geometry</option>
                        </select>
                        <ChevronDown size={16} className="select-icon" />
                    </div>
                </div>

                <div className="control-group">
                    <label>Date</label>
                    <div className="date-input">
                        <Calendar size={18} />
                        <input type="date" defaultValue={new Date().toISOString().split('T')[0]} />
                    </div>
                </div>

                <div className="control-actions">
                    <button className="btn btn-outline" onClick={() => markAll('present')}>Mark All Present</button>
                    <button className="btn btn-primary">Save Attendance</button>
                </div>
            </div>

            {/* Stats Summary */}
            <div className="stats-summary">
                <div className="stat-box present">
                    <span className="label">Present</span>
                    <span className="value">{students.filter(s => s.status === 'present').length}</span>
                </div>
                <div className="stat-box absent">
                    <span className="label">Absent</span>
                    <span className="value">{students.filter(s => s.status === 'absent').length}</span>
                </div>
                <div className="stat-box late">
                    <span className="label">Late</span>
                    <span className="value">{students.filter(s => s.status === 'late').length}</span>
                </div>
                <div className="stat-box total">
                    <span className="label">Total</span>
                    <span className="value">{students.length}</span>
                </div>
            </div>

            {/* Student List */}
            <div className="card student-list-card">
                <div className="list-header">
                    <h3>Student List</h3>
                    <div className="search-box">
                        <Search size={16} />
                        <input type="text" placeholder="Search student..." />
                    </div>
                </div>

                <div className="student-grid">
                    {students.map(student => (
                        <div key={student.id} className={`student-row ${student.status}`}>
                            <div className="student-profile">
                                <img src={student.img} alt={student.name} />
                                <span>{student.name}</span>
                            </div>

                            <div className="attendance-toggles">
                                <button
                                    className={`toggle-btn present ${student.status === 'present' ? 'active' : ''}`}
                                    onClick={() => toggleStatus(student.id, 'present')}
                                    title="Present"
                                >
                                    <Check size={18} />
                                </button>
                                <button
                                    className={`toggle-btn absent ${student.status === 'absent' ? 'active' : ''}`}
                                    onClick={() => toggleStatus(student.id, 'absent')}
                                    title="Absent"
                                >
                                    <X size={18} />
                                </button>
                                <button
                                    className={`toggle-btn late ${student.status === 'late' ? 'active' : ''}`}
                                    onClick={() => toggleStatus(student.id, 'late')}
                                    title="Late"
                                >
                                    <Clock size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Attendance;
