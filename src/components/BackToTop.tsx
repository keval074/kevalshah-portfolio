import { useState, useEffect } from 'react';
import { Fab, Zoom } from '@mui/material';
import { KeyboardArrowUp as ArrowUpIcon } from '@mui/icons-material';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past the hero section (approximately viewport height)
      setIsVisible(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Zoom in={isVisible}>
      <Fab
        onClick={scrollToTop}
        color="primary"
        size="medium"
        aria-label="Back to top"
        sx={{
          position: 'fixed',
          bottom: { xs: 80, md: 32 },
          right: { xs: 16, md: 32 },
          zIndex: 1000,
          minWidth: 48,
          minHeight: 48,
          width: { xs: 48, md: 56 },
          height: { xs: 48, md: 56 },
          background: (theme) =>
            theme.palette.mode === 'light'
              ? 'linear-gradient(135deg, #0EA5E9 0%, #3B82F6 50%, #06B6D4 100%)'
              : 'linear-gradient(135deg, #38BDF8 0%, #60A5FA 50%, #22D3EE 100%)',
          boxShadow: '0 4px 20px rgba(14, 165, 233, 0.5)',
          animation: 'pulse 2s ease-in-out infinite',
          '&:hover': {
            background: (theme) =>
              theme.palette.mode === 'light'
                ? 'linear-gradient(135deg, #0284C7 0%, #2563EB 50%, #0891B2 100%)'
                : 'linear-gradient(135deg, #0EA5E9 0%, #3B82F6 50%, #06B6D4 100%)',
            transform: 'scale(1.1) rotate(5deg)',
          },
          '@keyframes pulse': {
            '0%, 100%': {
              boxShadow: '0 4px 20px rgba(14, 165, 233, 0.5)',
            },
            '50%': {
              boxShadow: '0 8px 40px rgba(59, 130, 246, 0.7), 0 0 60px rgba(6, 182, 212, 0.5)',
            },
          },
        }}
      >
        <ArrowUpIcon />
      </Fab>
    </Zoom>
  );
}
