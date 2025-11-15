import {
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
} from '@mui/material';
import { Project } from '../content';

interface ProjectCardProps {
  project: Project;
  index: number;
}

// Gradient colors for different projects
const gradients = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', // Purple
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', // Pink-Red
  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', // Blue-Cyan
  'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', // Green-Cyan
  'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', // Pink-Yellow
];

export default function ProjectCard({ project, index }: ProjectCardProps) {
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
          transform: 'translateY(-12px) scale(1.02)',
          '& .gradient-bg': {
            height: 12,
            opacity: 1,
          },
        },
      }}
    >
      {/* Gradient Header - Compact */}
      <Box
        className="gradient-bg"
        sx={{
          height: 8,
          background: gradient,
          position: 'relative',
          opacity: 0.9,
          transition: 'opacity 0.3s ease',
        }}
      />

      <CardContent sx={{ flexGrow: 1, p: 3, pb: 3 }}>
        <Typography
          variant="h5"
          component="h3"
          sx={{
            fontWeight: 600,
            mb: 2,
            background: gradient,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {project.title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2.5,
            lineHeight: 1.7,
          }}
        >
          {project.description}
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
          {project.technologies.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              sx={{
                fontSize: '0.75rem',
                fontWeight: 500,
                background: (theme) =>
                  theme.palette.mode === 'light'
                    ? 'rgba(14, 165, 233, 0.1)'
                    : 'rgba(56, 189, 248, 0.15)',
                color: 'primary.main',
                border: '1px solid',
                borderColor: 'primary.main',
                '&:hover': {
                  background: (theme) =>
                    theme.palette.mode === 'light'
                      ? 'rgba(14, 165, 233, 0.2)'
                      : 'rgba(56, 189, 248, 0.25)',
                },
              }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
