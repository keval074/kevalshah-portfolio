import { Box, Typography, Button, Container } from '@mui/material';
import { CTAButton } from '../content';

interface HeroProps {
  name: string;
  title: string;
  summary: string;
  tagline: string;
  ctaButtons: CTAButton[];
  location?: string;
}

export default function Hero({ name, title, summary, tagline, ctaButtons, location }: HeroProps) {
  const handleButtonClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 100;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        background: (theme) =>
          theme.palette.mode === 'light'
            ? 'linear-gradient(135deg, #F1F5F9 0%, #E0F2FE 30%, #DBEAFE 50%, #E0F2FE 70%, #F1F5F9 100%)'
            : 'linear-gradient(135deg, #0F172A 0%, #1E3A8A 30%, #0C4A6E 70%, #0F172A 100%)',
        px: { xs: 2, sm: 3 },
        pt: { xs: 10, sm: 12, md: 14 },
        pb: { xs: 12, sm: 14, md: 16 },
        overflow: 'hidden',
        width: '100%',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-50%',
          right: '-20%',
          width: '600px',
          height: '600px',
          background: (theme) =>
            theme.palette.mode === 'light'
              ? 'radial-gradient(circle, rgba(14, 165, 233, 0.3) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 70%)'
              : 'radial-gradient(circle, rgba(56, 189, 248, 0.35) 0%, rgba(96, 165, 250, 0.25) 50%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 20s ease-in-out infinite',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-30%',
          left: '-10%',
          width: '500px',
          height: '500px',
          background: (theme) =>
            theme.palette.mode === 'light'
              ? 'radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, rgba(14, 165, 233, 0.15) 50%, transparent 70%)'
              : 'radial-gradient(circle, rgba(34, 211, 238, 0.3) 0%, rgba(56, 189, 248, 0.2) 50%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 15s ease-in-out infinite reverse',
        },
        '@keyframes float': {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1)',
          },
          '50%': {
            transform: 'translate(30px, -30px) scale(1.1)',
          },
        },
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              fontWeight: 800,
              mb: 2,
              letterSpacing: '-0.02em',
              animation: 'fadeInScale 1s ease-out',
              background: (theme) =>
                theme.palette.mode === 'light'
                  ? 'linear-gradient(135deg, #0EA5E9 0%, #3B82F6 50%, #06B6D4 100%)'
                  : 'linear-gradient(135deg, #60A5FA 0%, #93C5FD 50%, #DBEAFE 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: (theme) =>
                theme.palette.mode === 'light'
                  ? '0 2px 10px rgba(14, 165, 233, 0.3)'
                  : '0 2px 20px rgba(96, 165, 250, 0.5)',
              '@keyframes fadeInScale': {
                '0%': {
                  opacity: 0,
                  transform: 'translateY(30px) scale(0.9)',
                },
                '50%': {
                  transform: 'translateY(-5px) scale(1.02)',
                },
                '100%': {
                  opacity: 1,
                  transform: 'translateY(0) scale(1)',
                },
              },
            }}
          >
            {name}
          </Typography>

          <Typography
            variant="h4"
            component="p"
            sx={{
              fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
              fontWeight: 500,
              mb: location ? 1.5 : 3,
              color: 'primary.main',
              animation: 'fadeInUp 0.8s ease-out 0.2s backwards',
            }}
          >
            {title}
          </Typography>

          {location && (
            <Typography
              variant="body2"
              component="p"
              sx={{
                fontSize: { xs: '0.875rem', sm: '1rem' },
                fontWeight: 400,
                mb: 3,
                color: 'text.secondary',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 0.5,
                animation: 'fadeInUp 0.8s ease-out 0.3s backwards',
                '&::before': {
                  content: '"📍"',
                  fontSize: { xs: '1rem', sm: '1.125rem' },
                },
              }}
            >
              {location}
            </Typography>
          )}

          <Typography
            variant="h6"
            component="p"
            sx={{
              fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
              fontWeight: 400,
              mb: 2,
              color: 'text.secondary',
              fontStyle: 'italic',
              animation: 'fadeInUp 0.8s ease-out 0.4s backwards',
            }}
          >
            {tagline}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', sm: '1.125rem' },
              mb: 5,
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
              animation: 'fadeInUp 0.8s ease-out 0.6s backwards',
            }}
          >
            {summary}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              gap: 2,
              justifyContent: 'center',
              flexWrap: 'wrap',
              animation: 'fadeInUp 0.8s ease-out 0.8s backwards',
            }}
          >
            {ctaButtons.map((button, index) => (
              <Button
                key={index}
                variant={button.variant}
                size="large"
                onClick={() => handleButtonClick(button.href)}
                sx={{
                  px: { xs: 3, sm: 4 },
                  py: 1.5,
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  minWidth: 44,
                  minHeight: 44,
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                    transition: 'left 0.5s',
                  },
                  '&:hover::before': {
                    left: '100%',
                  },
                }}
              >
                {button.text}
              </Button>
            ))}
          </Box>


        </Box>
      </Container>

      {/* Scroll Down Indicator */}
      <Button
        onClick={() => {
          const aboutSection = document.querySelector('#about');
          if (aboutSection) {
            const elementPosition = aboutSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - 100;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }}
        aria-label="Scroll down to about section"
        sx={{
          position: 'absolute',
          bottom: { xs: 10, sm: 30, md: 40 },
          left: '50%',
          transform: 'translateX(-50%)',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 0.5, md: 1 },
          animation: { xs: 'none', md: 'bounce 2s ease-in-out infinite' },
          opacity: 0.8,
          transition: 'all 0.3s ease',
          zIndex: 10,
          padding: { xs: 1, md: 2 },
          minWidth: 'auto',
          backgroundColor: 'transparent',
          '&:hover': {
            opacity: 1,
            transform: { xs: 'translateX(-50%)', md: 'translateX(-50%) scale(1.15)' },
            backgroundColor: 'transparent',
          },
          '&:focus': {
            opacity: 1,
            outline: '2px solid',
            outlineColor: 'primary.main',
            outlineOffset: '4px',
          },
          '@keyframes bounce': {
            '0%, 100%': {
              transform: 'translateX(-50%) translateY(0)',
            },
            '50%': {
              transform: 'translateX(-50%) translateY(10px)',
            },
          },
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: 'text.primary',
            fontWeight: 700,
            letterSpacing: { xs: 1.5, md: 2.5 },
            textTransform: 'uppercase',
            fontSize: { xs: '0.65rem', sm: '0.75rem', md: '0.85rem' },
            mb: { xs: 0.25, md: 0.5 },
            textShadow: (theme) =>
              theme.palette.mode === 'light'
                ? '0 2px 4px rgba(0,0,0,0.1)'
                : '0 2px 4px rgba(0,0,0,0.5)',
          }}
        >
          Scroll Down
        </Typography>
        
        {/* Animated Chevron Arrows */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          <Box
            sx={{
              width: 0,
              height: 0,
              borderLeft: { xs: '10px solid transparent', md: '12px solid transparent' },
              borderRight: { xs: '10px solid transparent', md: '12px solid transparent' },
              borderTop: { xs: '10px solid', md: '12px solid' },
              borderTopColor: 'primary.main',
              filter: 'drop-shadow(0 2px 4px rgba(14, 165, 233, 0.4))',
              animation: 'arrowBounce1 2s ease-in-out infinite',
              '@keyframes arrowBounce1': {
                '0%, 100%': {
                  opacity: 0.4,
                  transform: 'translateY(0)',
                },
                '50%': {
                  opacity: 1,
                  transform: 'translateY(6px)',
                },
              },
            }}
          />
          <Box
            sx={{
              width: 0,
              height: 0,
              borderLeft: { xs: '10px solid transparent', md: '12px solid transparent' },
              borderRight: { xs: '10px solid transparent', md: '12px solid transparent' },
              borderTop: { xs: '10px solid', md: '12px solid' },
              borderTopColor: 'primary.main',
              filter: 'drop-shadow(0 2px 4px rgba(14, 165, 233, 0.4))',
              mt: { xs: -0.6, md: -0.75 },
              animation: 'arrowBounce2 2s ease-in-out infinite 0.2s',
              '@keyframes arrowBounce2': {
                '0%, 100%': {
                  opacity: 0.4,
                  transform: 'translateY(0)',
                },
                '50%': {
                  opacity: 1,
                  transform: 'translateY(6px)',
                },
              },
            }}
          />
          <Box
            sx={{
              width: 0,
              height: 0,
              borderLeft: { xs: '10px solid transparent', md: '12px solid transparent' },
              borderRight: { xs: '10px solid transparent', md: '12px solid transparent' },
              borderTop: { xs: '10px solid', md: '12px solid' },
              borderTopColor: 'primary.main',
              filter: 'drop-shadow(0 2px 4px rgba(14, 165, 233, 0.4))',
              mt: { xs: -0.6, md: -0.75 },
              animation: 'arrowBounce3 2s ease-in-out infinite 0.4s',
              '@keyframes arrowBounce3': {
                '0%, 100%': {
                  opacity: 0.4,
                  transform: 'translateY(0)',
                },
                '50%': {
                  opacity: 1,
                  transform: 'translateY(6px)',
                },
              },
            }}
          />
        </Box>
      </Button>
    </Box>
  );
}
