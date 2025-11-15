import { Card, CardContent, Typography, Chip, Box } from '@mui/material';
import { Verified as VerifiedIcon } from '@mui/icons-material';
import { Certification } from '../content';

interface CertificationCardProps {
  certification: Certification;
  index: number;
}

// Gradient colors for different certifications
const gradients = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', // Purple
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', // Pink-Red
  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', // Blue-Cyan
  'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', // Green-Cyan
  'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', // Pink-Yellow
];

export default function CertificationCard({ certification, index }: CertificationCardProps) {
  const gradient = gradients[index % gradients.length];

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
          transform: 'translateY(-8px) scale(1.02)',
          '& .gradient-accent': {
            height: 12,
          },
        },
      }}
    >
      {/* Gradient Accent */}
      <Box
        className="gradient-accent"
        sx={{
          height: 6,
          background: gradient,
          transition: 'height 0.3s ease',
        }}
      />

      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        {/* Title with Verified Icon */}
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 2 }}>
          <VerifiedIcon
            sx={{
              color: 'primary.main',
              fontSize: 24,
              mt: 0.5,
            }}
          />
          <Typography
            variant="h6"
            component="h3"
            sx={{
              fontWeight: 600,
              flex: 1,
              background: gradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {certification.title}
          </Typography>
        </Box>

        {/* Issuer */}
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 500,
            color: 'text.primary',
            mb: 1,
          }}
        >
          {certification.issuer}
        </Typography>

        {/* Date */}
        <Typography 
          variant="body2" 
          color="text.secondary"
          sx={{ 
            mb: 2,
            fontSize: '0.875rem',
          }}
        >
          {certification.date}
        </Typography>

        {/* Skills */}
        {certification.skills && certification.skills.length > 0 && (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
            {certification.skills.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                size="small"
                sx={{
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  height: 24,
                  background: (theme) =>
                    theme.palette.mode === 'light'
                      ? 'rgba(14, 165, 233, 0.1)'
                      : 'rgba(56, 189, 248, 0.15)',
                  color: 'primary.main',
                  border: '1px solid',
                  borderColor: 'primary.main',
                }}
              />
            ))}
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
