import { ReactNode } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useRevealAnimation } from '../utils/animations';

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
  alternate?: boolean;
}

export default function Section({ id, title, children, alternate = false }: SectionProps) {
  const { ref, isVisible } = useRevealAnimation(0.1);

  return (
    <Box
      component="section"
      id={id}
      ref={ref}
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 3 },
        background: alternate
          ? (theme) =>
              theme.palette.mode === 'light'
                ? 'linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 50%, #E0F2FE 100%)'
                : 'linear-gradient(180deg, #0F172A 0%, #1E293B 30%, #0C4A6E 70%, #0F172A 100%)'
          : (theme) =>
              theme.palette.mode === 'light'
                ? 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 50%, #F1F5F9 100%)'
                : 'linear-gradient(180deg, #1E293B 0%, #0F172A 30%, #1E3A8A 70%, #0F172A 100%)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      <Container maxWidth="lg">
        {title && (
          <Typography
            variant="h2"
            component="h2"
            sx={{
              mb: 6,
              textAlign: 'center',
              color: 'text.primary',
              position: 'relative',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s, transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -16,
                left: '50%',
                transform: 'translateX(-50%)',
                width: isVisible ? 80 : 0,
                height: 4,
                background: 'linear-gradient(90deg, primary.main, secondary.main)',
                borderRadius: 2,
                transition: 'width 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.4s',
              },
            }}
          >
            {title}
          </Typography>
        )}
        <Box
          sx={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s, transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s',
          }}
        >
          {children}
        </Box>
      </Container>
    </Box>
  );
}
