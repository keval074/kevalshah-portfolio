import { Box, Typography, Chip, Card, CardContent } from '@mui/material';
import { Work as WorkIcon, CalendarToday as CalendarIcon } from '@mui/icons-material';
import { ExperienceItem } from '../content';

interface ExperienceTimelineProps {
  experience: ExperienceItem[];
}

export default function ExperienceTimeline({ experience }: ExperienceTimelineProps) {
  return (
    <Box
      sx={{
        maxWidth: '900px',
        mx: 'auto',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          left: { xs: '20px', md: '50%' },
          top: 0,
          bottom: 0,
          width: '2px',
          background: (theme) =>
            theme.palette.mode === 'light'
              ? 'linear-gradient(180deg, #0EA5E9, #3B82F6, #0EA5E9)'
              : 'linear-gradient(180deg, #38BDF8, #60A5FA, #38BDF8)',
          transform: { md: 'translateX(-50%)' },
        },
      }}
    >
      {experience.map((item, index) => (
        <Box
          key={index}
          sx={{
            position: 'relative',
            mb: 4,
            animation: 'fadeInUp 0.6s ease-out backwards',
            animationDelay: `${index * 0.1}s`,
            '@keyframes fadeInUp': {
              from: {
                opacity: 0,
                transform: 'translateY(20px)',
              },
              to: {
                opacity: 1,
                transform: 'translateY(0)',
              },
            },
          }}
        >
          {/* Timeline Dot */}
          <Box
            sx={{
              position: 'absolute',
              left: { xs: '20px', md: '50%' },
              top: '24px',
              transform: { xs: 'translateX(-50%)', md: 'translate(-50%, 0)' },
              zIndex: 2,
            }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: (theme) =>
                  theme.palette.mode === 'light'
                    ? 'linear-gradient(135deg, #0EA5E9, #3B82F6)'
                    : 'linear-gradient(135deg, #38BDF8, #60A5FA)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: (theme) =>
                  theme.palette.mode === 'light'
                    ? '0 0 0 4px rgba(14, 165, 233, 0.2), 0 4px 12px rgba(14, 165, 233, 0.3)'
                    : '0 0 0 4px rgba(56, 189, 248, 0.2), 0 4px 12px rgba(56, 189, 248, 0.4)',
              }}
            >
              <WorkIcon sx={{ color: 'white', fontSize: 20 }} />
            </Box>
          </Box>

          {/* Content Card */}
          <Box
            sx={{
              ml: { xs: '60px', md: index % 2 === 0 ? 0 : 'calc(50% + 30px)' },
              mr: { xs: 0, md: index % 2 === 0 ? 'calc(50% + 30px)' : 0 },
            }}
          >
            <Card
              sx={{
                background: (theme) =>
                  theme.palette.mode === 'light'
                    ? 'rgba(255, 255, 255, 0.9)'
                    : 'rgba(30, 41, 59, 0.9)',
                backdropFilter: 'blur(10px)',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  borderColor: 'primary.main',
                  boxShadow: (theme) =>
                    theme.palette.mode === 'light'
                      ? '0 8px 24px rgba(14, 165, 233, 0.15)'
                      : '0 8px 24px rgba(56, 189, 248, 0.2)',
                },
              }}
            >
              <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                {/* Duration Badge */}
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.5,
                    px: 1.5,
                    py: 0.5,
                    mb: 2,
                    borderRadius: 2,
                    background: (theme) =>
                      theme.palette.mode === 'light'
                        ? 'rgba(14, 165, 233, 0.1)'
                        : 'rgba(56, 189, 248, 0.15)',
                    border: '1px solid',
                    borderColor: 'primary.main',
                  }}
                >
                  <CalendarIcon sx={{ fontSize: 14, color: 'primary.main' }} />
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 600,
                      color: 'primary.main',
                      fontSize: '0.75rem',
                    }}
                  >
                    {item.duration}
                  </Typography>
                </Box>

                {/* Role */}
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontWeight: 700,
                    mb: 0.5,
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                    background: (theme) =>
                      theme.palette.mode === 'light'
                        ? 'linear-gradient(135deg, #0EA5E9, #3B82F6)'
                        : 'linear-gradient(135deg, #38BDF8, #60A5FA)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {item.role}
                </Typography>

                {/* Company */}
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: 'text.primary',
                    fontSize: { xs: '0.875rem', md: '1rem' },
                  }}
                >
                  {item.company}
                </Typography>

                {/* Description */}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    mb: 2,
                    lineHeight: 1.7,
                    fontSize: { xs: '0.875rem', md: '0.9375rem' },
                  }}
                >
                  {item.description}
                </Typography>

                {/* Technologies */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                  {item.technologies.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      sx={{
                        fontSize: '0.7rem',
                        height: 24,
                        fontWeight: 500,
                        background: (theme) =>
                          theme.palette.mode === 'light'
                            ? 'rgba(14, 165, 233, 0.08)'
                            : 'rgba(56, 189, 248, 0.12)',
                        color: 'primary.main',
                        border: '1px solid',
                        borderColor: (theme) =>
                          theme.palette.mode === 'light'
                            ? 'rgba(14, 165, 233, 0.3)'
                            : 'rgba(56, 189, 248, 0.3)',
                        '&:hover': {
                          background: (theme) =>
                            theme.palette.mode === 'light'
                              ? 'rgba(14, 165, 233, 0.15)'
                              : 'rgba(56, 189, 248, 0.2)',
                        },
                      }}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
