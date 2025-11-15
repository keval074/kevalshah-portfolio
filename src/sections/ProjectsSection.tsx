import { Box } from '@mui/material';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import { Project } from '../content';

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <Section id="projects" title="Projects" alternate>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          },
          gap: 4,
        }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </Box>
    </Section>
  );
}
