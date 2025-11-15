import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import {
  CheckCircle as CheckIcon,
  TrendingUp as TrendingIcon,
  EmojiEvents as AwardIcon,
  Code as CodeIcon,
  Speed as SpeedIcon,
  Groups as TeamIcon,
} from '@mui/icons-material';
import Section from '../components/Section';
import { AboutSection as AboutContent } from '../content';

interface AboutSectionProps {
  about: AboutContent;
}

const highlightIcons = [
  <TrendingIcon />,
  <CodeIcon />,
  <SpeedIcon />,
  <AwardIcon />,
  <CheckIcon />,
  <TeamIcon />,
];

export default function AboutSection({ about }: AboutSectionProps) {
  return (
    <Section id="about" title="About Me">
      <Box sx={{ maxWidth: '1200px', mx: 'auto' }}>
        {/* Bio Section with Enhanced Styling */}
        <Box
          sx={{
            mb: 6,
            p: { xs: 3, md: 4 },
            borderRadius: 3,
            background: (theme) =>
              theme.palette.mode === 'light'
                ? 'linear-gradient(135deg, rgba(14, 165, 233, 0.05), rgba(59, 130, 246, 0.05))'
                : 'linear-gradient(135deg, rgba(56, 189, 248, 0.1), rgba(96, 165, 250, 0.1))',
            border: '2px solid',
            borderColor: 'divider',
            position: 'relative',
            overflow: 'hidden',
            animation: 'fadeInUp 0.6s ease-out',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '4px',
              height: '100%',
              background: (theme) =>
                theme.palette.mode === 'light'
                  ? 'linear-gradient(180deg, #0EA5E9, #3B82F6)'
                  : 'linear-gradient(180deg, #38BDF8, #60A5FA)',
              animation: 'slideDown 0.8s ease-out',
            },
            '@keyframes fadeInUp': {
              from: {
                opacity: 0,
                transform: 'translateY(30px)',
              },
              to: {
                opacity: 1,
                transform: 'translateY(0)',
              },
            },
            '@keyframes slideDown': {
              from: {
                height: '0%',
              },
              to: {
                height: '100%',
              },
            },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.125rem',
              lineHeight: 1.8,
              color: 'text.primary',
            }}
          >
            {about.bio}
          </Typography>
        </Box>

        {/* Highlights Grid */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              textAlign: 'center',
              fontWeight: 600,
              background: (theme) =>
                theme.palette.mode === 'light'
                  ? 'linear-gradient(135deg, #0EA5E9, #3B82F6)'
                  : 'linear-gradient(135deg, #38BDF8, #60A5FA)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Key Highlights
          </Typography>
          <Grid container spacing={3}>
            {about.highlights.map((highlight, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    background: (theme) =>
                      theme.palette.mode === 'light'
                        ? 'linear-gradient(135deg, rgba(14, 165, 233, 0.03), rgba(59, 130, 246, 0.03))'
                        : 'linear-gradient(135deg, rgba(56, 189, 248, 0.08), rgba(96, 165, 250, 0.08))',
                    border: '2px solid',
                    borderColor: 'divider',
                    borderRadius: 3,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    animation: 'fadeInUp 0.6s ease-out backwards',
                    animationDelay: `${index * 0.1}s`,
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      borderColor: 'primary.main',
                      boxShadow: (theme) =>
                        theme.palette.mode === 'light'
                          ? '0 12px 40px rgba(14, 165, 233, 0.2)'
                          : '0 12px 40px rgba(56, 189, 248, 0.3)',
                    },
                    '@keyframes fadeInUp': {
                      from: {
                        opacity: 0,
                        transform: 'translateY(30px)',
                      },
                      to: {
                        opacity: 1,
                        transform: 'translateY(0)',
                      },
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 2,
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 48,
                          height: 48,
                          borderRadius: 2,
                          background: (theme) =>
                            theme.palette.mode === 'light'
                              ? 'linear-gradient(135deg, #0EA5E9, #3B82F6)'
                              : 'linear-gradient(135deg, #38BDF8, #60A5FA)',
                          color: 'white',
                          flexShrink: 0,
                          boxShadow: (theme) =>
                            theme.palette.mode === 'light'
                              ? '0 4px 12px rgba(14, 165, 233, 0.3)'
                              : '0 4px 12px rgba(56, 189, 248, 0.4)',
                        }}
                      >
                        {highlightIcons[index % highlightIcons.length]}
                      </Box>
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: '1rem',
                          lineHeight: 1.7,
                          color: 'text.primary',
                          flex: 1,
                        }}
                      >
                        {highlight}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Section>
  );
}
