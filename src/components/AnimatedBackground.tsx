import { Box } from '@mui/material';

export default function AnimatedBackground() {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {/* Floating Orbs */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: { xs: '200px', md: '400px' },
          height: { xs: '200px', md: '400px' },
          borderRadius: '50%',
          background: (theme) =>
            theme.palette.mode === 'light'
              ? 'radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)'
              : 'radial-gradient(circle, rgba(56, 189, 248, 0.3) 0%, rgba(96, 165, 250, 0.2) 50%, transparent 70%)',
          animation: 'float 20s ease-in-out infinite',
          filter: 'blur(40px)',
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          bottom: '15%',
          left: '5%',
          width: { xs: '150px', md: '300px' },
          height: { xs: '150px', md: '300px' },
          borderRadius: '50%',
          background: (theme) =>
            theme.palette.mode === 'light'
              ? 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, rgba(14, 165, 233, 0.08) 50%, transparent 70%)'
              : 'radial-gradient(circle, rgba(34, 211, 238, 0.25) 0%, rgba(56, 189, 248, 0.18) 50%, transparent 70%)',
          animation: 'float 15s ease-in-out infinite reverse',
          filter: 'blur(40px)',
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: { xs: '250px', md: '500px' },
          height: { xs: '250px', md: '500px' },
          borderRadius: '50%',
          background: (theme) =>
            theme.palette.mode === 'light'
              ? 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(14, 165, 233, 0.05) 50%, transparent 70%)'
              : 'radial-gradient(circle, rgba(96, 165, 250, 0.22) 0%, rgba(56, 189, 248, 0.15) 50%, transparent 70%)',
          animation: 'parallaxFloat 25s ease-in-out infinite',
          filter: 'blur(60px)',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Animated Grid Lines */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: (theme) =>
            theme.palette.mode === 'light'
              ? 'linear-gradient(rgba(14, 165, 233, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(14, 165, 233, 0.03) 1px, transparent 1px)'
              : 'linear-gradient(rgba(56, 189, 248, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.08) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          opacity: 0.5,
          animation: 'fadeIn 2s ease-out',
        }}
      />
    </Box>
  );
}
