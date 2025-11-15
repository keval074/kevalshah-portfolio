import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

export default function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Main cursor glow */}
      <Box
        sx={{
          position: 'fixed',
          left: position.x,
          top: position.y,
          width: '400px',
          height: '400px',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: isVisible ? 0.15 : 0,
          transition: 'opacity 0.3s ease',
          background: (theme) =>
            theme.palette.mode === 'light'
              ? 'radial-gradient(circle, rgba(14, 165, 233, 0.4) 0%, rgba(59, 130, 246, 0.2) 40%, transparent 70%)'
              : 'radial-gradient(circle, rgba(56, 189, 248, 0.5) 0%, rgba(96, 165, 250, 0.3) 40%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      
      {/* Secondary cursor trail */}
      <Box
        sx={{
          position: 'fixed',
          left: position.x,
          top: position.y,
          width: '200px',
          height: '200px',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9998,
          opacity: isVisible ? 0.2 : 0,
          transition: 'opacity 0.5s ease, left 0.15s ease, top 0.15s ease',
          background: (theme) =>
            theme.palette.mode === 'light'
              ? 'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(34, 211, 238, 0.5) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />
    </>
  );
}
