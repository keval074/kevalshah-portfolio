import { Box, Container, Typography, Link as MuiLink, IconButton } from '@mui/material';
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  Email as EmailIcon,
} from '@mui/icons-material';
import { SocialLink } from '../content';

interface FooterProps {
  name: string;
  email: string;
  socialLinks: SocialLink[];
}

const getSocialIcon = (platform: string) => {
  switch (platform.toLowerCase()) {
    case 'github':
      return <GitHubIcon />;
    case 'linkedin':
      return <LinkedInIcon />;
    case 'twitter':
      return <TwitterIcon />;
    case 'email':
      return <EmailIcon />;
    default:
      return null;
  }
};

const navSections = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer({ name, email, socialLinks }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        background: (theme) =>
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, rgba(241, 245, 249, 0.5), rgba(255, 255, 255, 1))'
            : 'linear-gradient(180deg, rgba(15, 23, 42, 0.5), rgba(30, 41, 59, 1))',
        borderTop: 1,
        borderColor: 'divider',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: (theme) =>
            theme.palette.mode === 'light'
              ? 'linear-gradient(90deg, transparent, rgba(14, 165, 233, 0.5), transparent)'
              : 'linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.5), transparent)',
        },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 4,
          }}
        >
          {/* Brand and Email */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              {name}
            </Typography>
            <MuiLink
              href={`mailto:${email}`}
              aria-label={`Send email to ${email}`}
              sx={{
                color: 'text.secondary',
                display: 'block',
                mb: 2,
                '&:hover': {
                  color: 'primary.main',
                },
              }}
            >
              {email}
            </MuiLink>
          </Box>

          {/* Quick Links */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Quick Links
            </Typography>
            <Box
              component="nav"
              aria-label="Footer navigation"
              sx={{
                display: 'flex',
                flexDirection: { xs: 'row', md: 'column' },
                flexWrap: 'wrap',
                gap: { xs: 2, md: 1 },
              }}
            >
              {navSections.map((section) => (
                <MuiLink
                  key={section.href}
                  onClick={() => handleNavClick(section.href)}
                  aria-label={`Navigate to ${section.label} section`}
                  sx={{
                    color: 'text.secondary',
                    cursor: 'pointer',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  {section.label}
                </MuiLink>
              ))}
            </Box>
          </Box>

          {/* Social Links */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Connect
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialLinks.map((link) => (
                <IconButton
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${link.platform}`}
                  sx={{
                    color: 'text.secondary',
                    minWidth: 44,
                    minHeight: 44,
                    '&:hover': {
                      color: 'primary.main',
                      backgroundColor: 'action.hover',
                    },
                  }}
                >
                  {getSocialIcon(link.platform)}
                </IconButton>
              ))}
            </Box>
          </Box>
        </Box>

      </Container>

      {/* Fixed Copyright Bar */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 16,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1100,
          width: { xs: 'calc(100% - 32px)', md: 'auto' },
          maxWidth: { xs: '100%', md: '500px' },
        }}
      >
        <Box
          sx={{
            px: 3,
            py: 1,
            borderRadius: 50,
            background: (theme) =>
              theme.palette.mode === 'light'
                ? 'rgba(255, 255, 255, 0.8)'
                : 'rgba(15, 30, 50, 0.8)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            border: '1px solid',
            borderColor: (theme) =>
              theme.palette.mode === 'light'
                ? 'rgba(14, 165, 233, 0.1)'
                : 'rgba(56, 189, 248, 0.2)',
            boxShadow: (theme) =>
              theme.palette.mode === 'light'
                ? '0 8px 32px rgba(14, 165, 233, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)'
                : '0 8px 32px rgba(56, 189, 248, 0.15), 0 2px 8px rgba(0, 0, 0, 0.3)',
            textAlign: 'center',
          }}
        >
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'text.secondary',
              fontSize: '0.75rem',
            }}
          >
            © {currentYear} {name}. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
