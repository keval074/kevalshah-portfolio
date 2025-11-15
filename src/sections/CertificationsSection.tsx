import { Container, Typography, Box } from '@mui/material';
import Section from '../components/Section';
import CertificationCard from '../components/CertificationCard';
import { Certification } from '../content';

interface CertificationsSectionProps {
  certifications: Certification[];
}

export default function CertificationsSection({ certifications }: CertificationsSectionProps) {
  return (
    <Section id="certifications" title="Certifications" alternate>
      <Container maxWidth="lg">
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            mb: 6,
            maxWidth: '700px',
            mx: 'auto',
          }}
        >
          Professional certifications and continuous learning achievements that validate my expertise
          and commitment to staying current with industry best practices.
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: 3,
            maxWidth: '900px',
            mx: 'auto',
          }}
        >
          {certifications.map((certification, index) => (
            <CertificationCard key={index} certification={certification} index={index} />
          ))}
        </Box>
      </Container>
    </Section>
  );
}
