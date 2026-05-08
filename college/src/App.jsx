import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminApp from './pages/admin/AdminApp';
import InstructorApp from './pages/instructor/InstructorApp';
import StudentApp from './pages/student/StudentApp';
import Login from './pages/Login';
import Landing from './pages/Landing';

function RoleGuard({ allowedRole, children }) {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  if (user.role && user.role !== allowedRole) {
    return <Navigate to={`/${user.role}`} replace />;
  }

  return children;
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );

  const onAuth = () => setIsAuthenticated(true);

  return (
    <Routes>
      {/* Root Landing Page - Shows all portals */}
      <Route path="/" element={<Landing />} />

      <Route path="/login" element={
        isAuthenticated ? <Navigate to="/" replace /> : <Login onAuth={onAuth} />
      } />

      <Route path="/admin/*" element={
        <RoleGuard allowedRole="admin">
          <AdminApp />
        </RoleGuard>
      } />

      <Route path="/instructor/*" element={
        <RoleGuard allowedRole="instructor">
          <InstructorApp />
        </RoleGuard>
      } />

      <Route path="/student/*" element={
        <RoleGuard allowedRole="student">
          <StudentApp />
        </RoleGuard>
      } />

      {/* Legacy redirects */}
      <Route path="/students/:id" element={<Navigate replace to="/admin/students/:id" />} />
      <Route path="/students"     element={<Navigate replace to="/admin/students" />} />
      <Route path="/teachers/:id" element={<Navigate replace to="/admin/teachers/:id" />} />
      <Route path="/teachers"     element={<Navigate replace to="/admin/teachers" />} />

      {/* 404 fallback - go back to landing */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
