import { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Avatar, Box, IconButton } from '@mui/material';
import {
  FormatQuote as QuoteIcon,
  Person as PersonIcon,
  NavigateBefore as PrevIcon,
  NavigateNext as NextIcon,
} from '@mui/icons-material';
import { Testimonial } from '../content';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

// Gradient colors for different testimonials (same as projects)
const gradients = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', // Purple
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', // Pink-Red
  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', // Blue-Cyan
  'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', // Green-Cyan
  'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', // Pink-Yellow
];

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState<'left' | 'right'>('left');

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection('left');
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setDirection('right');
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setDirection('left');
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setDirection(index > currentIndex ? 'left' : 'right');
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];
  const currentGradient = gradients[currentIndex % gradients.length];

  return (
    <Box
      sx={{
        maxWidth: '900px',
        mx: 'auto',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Main Testimonial Card with Fixed Height Container */}
      <Box 
        sx={{ 
          position: 'relative', 
          width: '100%',
          minHeight: { xs: '400px', md: '450px' },
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Card
          key={currentIndex}
          sx={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            background: (theme) =>
              theme.palette.mode === 'light'
                ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9))'
                : 'linear-gradient(135deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.9))',
            border: '3px solid transparent',
            backgroundClip: 'padding-box',
            borderRadius: 4,
            animation: `fadeSlide${direction === 'left' ? 'Left' : 'Right'} 0.6s cubic-bezier(0.4, 0, 0.2, 1)`,
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: 4,
              padding: '3px',
              background: currentGradient,
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
              zIndex: -1,
            },
            '@keyframes fadeSlideLeft': {
              '0%': {
                opacity: 0,
                transform: 'translateX(50px) scale(0.95)',
              },
              '100%': {
                opacity: 1,
                transform: 'translateX(0) scale(1)',
              },
            },
            '@keyframes fadeSlideRight': {
              '0%': {
                opacity: 0,
                transform: 'translateX(-50px) scale(0.95)',
              },
              '100%': {
                opacity: 1,
                transform: 'translateX(0) scale(1)',
              },
            },
          }}
        >
        {/* Quote Icon */}
        <Box
          sx={{
            position: 'absolute',
            top: 24,
            right: 24,
            opacity: 0.2,
            animation: 'float 3s ease-in-out infinite',
            '& svg': {
              background: currentGradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            },
            '@keyframes float': {
              '0%, 100%': {
                transform: 'translateY(0)',
              },
              '50%': {
                transform: 'translateY(-10px)',
              },
            },
          }}
        >
          <QuoteIcon sx={{ fontSize: { xs: 60, md: 80 } }} />
        </Box>

        <CardContent sx={{ p: { xs: 3, md: 5 }, position: 'relative', zIndex: 1 }}>
          {/* Avatar and Info */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mb: 4,
            }}
          >
            <Avatar
              sx={{
                width: { xs: 80, md: 100 },
                height: { xs: 80, md: 100 },
                mb: 2,
                background: currentGradient,
                fontSize: { xs: '2rem', md: '2.5rem' },
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                animation: 'pulse 2s ease-in-out infinite',
                '@keyframes pulse': {
                  '0%, 100%': {
                    transform: 'scale(1)',
                  },
                  '50%': {
                    transform: 'scale(1.05)',
                  },
                },
              }}
            >
              <PersonIcon sx={{ fontSize: { xs: 40, md: 50 }, color: 'white' }} />
            </Avatar>

            <Typography
              variant="h5"
              component="h3"
              sx={{
                fontWeight: 700,
                mb: 3,
                textAlign: 'center',
                background: currentGradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {currentTestimonial.name}
            </Typography>
          </Box>

          {/* Quote */}
          <Typography
            variant="h6"
            sx={{
              fontStyle: 'italic',
              lineHeight: 1.8,
              textAlign: 'center',
              color: 'text.primary',
              fontSize: { xs: '1rem', md: '1.25rem' },
              px: { xs: 0, md: 4 },
            }}
          >
            &ldquo;{currentTestimonial.quote}&rdquo;
          </Typography>
        </CardContent>
      </Card>
      </Box>

      {/* Navigation Buttons - Absolutely Positioned */}
      <IconButton
        onClick={handlePrev}
        aria-label="Previous testimonial"
        sx={{
          position: 'absolute',
          left: { xs: -20, md: -60 },
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'background.paper',
          border: '2px solid',
          borderColor: 'primary.main',
          boxShadow: 3,
          zIndex: 2,
          '&:hover': {
            bgcolor: 'primary.main',
            color: 'white',
            transform: 'translateY(-50%) scale(1.15)',
            boxShadow: 6,
          },
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <PrevIcon />
      </IconButton>

      <IconButton
        onClick={handleNext}
        aria-label="Next testimonial"
        sx={{
          position: 'absolute',
          right: { xs: -20, md: -60 },
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'background.paper',
          border: '2px solid',
          borderColor: 'primary.main',
          boxShadow: 3,
          zIndex: 2,
          '&:hover': {
            bgcolor: 'primary.main',
            color: 'white',
            transform: 'translateY(-50%) scale(1.15)',
            boxShadow: 6,
          },
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <NextIcon />
      </IconButton>

      {/* Dots Indicator - Below Card */}
      <Box 
        sx={{ 
          display: 'flex', 
          gap: 1, 
          mt: 3,
          justifyContent: 'center',
        }}
      >
        {testimonials.map((_, index) => (
          <Box
            key={index}
            onClick={() => handleDotClick(index)}
            role="button"
            tabIndex={0}
            aria-label={`Go to testimonial ${index + 1}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleDotClick(index);
              }
            }}
            sx={{
              width: currentIndex === index ? 32 : 12,
              height: 12,
              borderRadius: 6,
              background: currentIndex === index ? currentGradient : 'divider',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                transform: 'scale(1.2)',
                opacity: 0.8,
              },
            }}
          />
        ))}
      </Box>


    </Box>
  );
}
