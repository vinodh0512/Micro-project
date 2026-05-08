import { Link } from 'react-router-dom';
import { ShieldCheck, GraduationCap, Users } from 'lucide-react';

export default function Landing() {
  const portals = [
    {
      title: 'Admin Portal',
      desc: 'Institutional oversight, user management, and system configuration.',
      icon: <ShieldCheck size={48} />,
      path: '/admin',
      color: '#3b82f6',
      bg: 'rgba(59, 130, 246, 0.1)'
    },
    {
      title: 'Instructor Portal',
      desc: 'Course management, student enrollment, and academic content hub.',
      icon: <GraduationCap size={48} />,
      path: '/instructor',
      color: '#8b5cf6',
      bg: 'rgba(139, 92, 246, 0.1)'
    },
    {
      title: 'Student Portal',
      desc: 'Learning dashboard, course discovery, and academic progress tracking.',
      icon: <Users size={48} />,
      path: '/student',
      color: '#10b981',
      bg: 'rgba(16, 185, 129, 0.1)'
    }
  ];

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#0f172a', 
      color: 'white', 
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Orbs */}
      <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, rgba(15,23,42,0) 70%)', pointerEvents: 'none' }}></div>
      <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, rgba(15,23,42,0) 70%)', pointerEvents: 'none' }}></div>

      <div style={{ textAlign: 'center', marginBottom: '64px', zIndex: 1 }}>
        <h1 style={{ 
          fontSize: 'clamp(40px, 8vw, 64px)', 
          fontWeight: 800, 
          letterSpacing: '-2px',
          margin: '0 0 16px 0',
          background: 'linear-gradient(135deg, #fff 0%, #94a3b8 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Unified Learning <span style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Ecosystem</span>
        </h1>
        <p style={{ fontSize: '18px', color: '#94a3b8', maxWidth: '600px', margin: '0 auto' }}>
          Welcome to the E-Learning Academy. Select your specialized portal below to access your workspace.
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '24px', 
        width: '100%', 
        maxWidth: '1100px',
        zIndex: 1
      }}>
        {portals.map((p, i) => (
          <Link 
            key={i} 
            to={p.path}
            style={{ 
              textDecoration: 'none',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '24px',
              padding: '48px 32px',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.borderColor = p.color;
              e.currentTarget.style.background = p.bg;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
            }}
          >
            <div style={{ 
              width: '80px', 
              height: '80px', 
              borderRadius: '20px', 
              background: 'rgba(255,255,255,0.05)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: p.color,
              marginBottom: '24px'
            }}>
              {p.icon}
            </div>
            <h3 style={{ fontSize: '24px', fontWeight: 700, margin: '0 0 12px 0', color: 'white' }}>{p.title}</h3>
            <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
          </Link>
        ))}
      </div>

      <div style={{ marginTop: '64px', fontSize: '14px', color: '#475569', zIndex: 1 }}>
        &copy; 2024 E-Learning Unified Academy. All Rights Reserved.
      </div>
    </div>
  );
}
