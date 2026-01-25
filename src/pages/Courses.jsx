import React, { useState } from 'react';
import { Plus, Video, FileText, MoreVertical, Users, Clock } from 'lucide-react';
import './Courses.css';

const CourseCard = ({ title, students, duration, progress, coverColor }) => (
    <div className="card course-card">
        <div className="course-cover" style={{ backgroundColor: coverColor }}>
            <span className="course-duration"><Clock size={14} /> {duration}</span>
        </div>
        <div className="course-details">
            <h3>{title}</h3>
            <div className="course-meta">
                <span><Users size={14} /> {students} Students</span>
            </div>
            <div className="course-progress-wrapper">
                <div className="progress-info">
                    <span>Completion</span>
                    <span>{progress}%</span>
                </div>
                <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                </div>
            </div>
            <div className="course-actions">
                <button className="btn-icon-text"><Video size={16} /> Lectures</button>
                <button className="btn-icon-text"><FileText size={16} /> Resources</button>
            </div>
        </div>
    </div>
);

const Courses = () => {
    const [showCreateModal, setShowCreateModal] = useState(false);

    return (
        <div className="courses-container">
            <div className="page-header">
                <div className="header-text">
                    <h2>My Courses</h2>
                    <p>Manage your active courses and content</p>
                </div>
                <button className="btn btn-primary" onClick={() => setShowCreateModal(true)}>
                    <Plus size={20} /> Create New Course
                </button>
            </div>

            <div className="courses-grid">
                <CourseCard
                    title="Advanced Mathematics"
                    students="120"
                    duration="45h"
                    progress={75}
                    coverColor="#7c3aed"
                />
                <CourseCard
                    title="Physics 101: Mechanics"
                    students="85"
                    duration="32h"
                    progress={45}
                    coverColor="#db2777"
                />
                <CourseCard
                    title="Introduction to Geometry"
                    students="95"
                    duration="28h"
                    progress={90}
                    coverColor="#059669"
                />
                <CourseCard
                    title="Calculus II"
                    students="60"
                    duration="50h"
                    progress={30}
                    coverColor="#2563eb"
                />
                <CourseCard
                    title="Chemistry Basics"
                    students="110"
                    duration="35h"
                    progress={15}
                    coverColor="#d97706"
                />
            </div>

            {showCreateModal && (
                <div className="modal-overlay">
                    <div className="modal card">
                        <div className="modal-header">
                            <h3>Create New Course</h3>
                            <button className="close-btn" onClick={() => setShowCreateModal(false)}>×</button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label>Course Title</label>
                                <input type="text" placeholder="e.g. Advanced Physics" />
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <textarea rows="3" placeholder="Course overview..."></textarea>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Duration</label>
                                    <input type="text" placeholder="e.g. 30 hours" />
                                </div>
                                <div className="form-group">
                                    <label>Category</label>
                                    <select>
                                        <option>Science</option>
                                        <option>Math</option>
                                        <option>Literature</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Enrollment Visibility</label>
                                <div className="radio-group">
                                    <label><input type="radio" name="visibility" defaultChecked /> Public</label>
                                    <label><input type="radio" name="visibility" /> Private</label>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-outline" onClick={() => setShowCreateModal(false)}>Cancel</button>
                            <button className="btn btn-primary">Create Course</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Courses;
