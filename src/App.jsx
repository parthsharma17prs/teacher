import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Overview from './pages/Overview';
import Courses from './pages/Courses';
import Attendance from './pages/Attendance';
import PlaceholderPage from './components/PlaceholderPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Overview />} />
          <Route path="courses" element={<Courses />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="assignments" element={<PlaceholderPage title="Assignments" />} />
          <Route path="quizzes" element={<PlaceholderPage title="Quiz Management" />} />
          <Route path="live-classes" element={<PlaceholderPage title="Live Classes" />} />
          <Route path="analytics" element={<PlaceholderPage title="Analytics" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
