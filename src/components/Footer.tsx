import { Box, Container, Typography, Link as MuiLink } from '@mui/material';
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
} from '@mui/icons-material';
import { SocialLink } from '../content';

interface FooterProps {
  name: string;
  email: string;
  socialLinks: SocialLink[];
}

export default function Footer({ name, email, socialLinks }: FooterProps) {
  const currentYear = new Date().getFullYear();

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
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'center',
            alignItems: 'center',
            gap: 3,
          }}
        >
          {/* LinkedIn */}
          <MuiLink
            href={socialLinks.find(link => link.platform.toLowerCase() === 'linkedin')?.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit LinkedIn profile"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              px: 4,
              py: 2,
              borderRadius: 2,
              background: (theme) =>
                theme.palette.mode === 'light'
                  ? 'linear-gradient(135deg, #0077B5 0%, #005885 100%)'
                  : 'linear-gradient(135deg, #0A66C2 0%, #004471 100%)',
              color: '#fff',
              fontWeight: 600,
              fontSize: '1rem',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(0, 119, 181, 0.3)',
              minWidth: { xs: '100%', sm: '200px' },
              justifyContent: 'center',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px rgba(0, 119, 181, 0.4)',
              },
            }}
          >
            <LinkedInIcon sx={{ fontSize: 28 }} />
            <span>LinkedIn</span>
          </MuiLink>

          {/* GitHub */}
          <MuiLink
            href={socialLinks.find(link => link.platform.toLowerCase() === 'github')?.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GitHub profile"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              px: 4,
              py: 2,
              borderRadius: 2,
              background: (theme) =>
                theme.palette.mode === 'light'
                  ? 'linear-gradient(135deg, #24292e 0%, #1a1e22 100%)'
                  : 'linear-gradient(135deg, #333 0%, #24292e 100%)',
              color: '#fff',
              fontWeight: 600,
              fontSize: '1rem',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(36, 41, 46, 0.3)',
              minWidth: { xs: '100%', sm: '200px' },
              justifyContent: 'center',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px rgba(36, 41, 46, 0.4)',
              },
            }}
          >
            <GitHubIcon sx={{ fontSize: 28 }} />
            <span>GitHub</span>
          </MuiLink>

          {/* Email */}
          <MuiLink
            href={`mailto:${email}`}
            aria-label="Send email"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              px: 4,
              py: 2,
              borderRadius: 2,
              background: (theme) =>
                theme.palette.mode === 'light'
                  ? 'linear-gradient(135deg, #EA4335 0%, #C5221F 100%)'
                  : 'linear-gradient(135deg, #EA4335 0%, #B31412 100%)',
              color: '#fff',
              fontWeight: 600,
              fontSize: '1rem',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(234, 67, 53, 0.3)',
              minWidth: { xs: '100%', sm: '200px' },
              justifyContent: 'center',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px rgba(234, 67, 53, 0.4)',
              },
            }}
          >
            <EmailIcon sx={{ fontSize: 28 }} />
            <span>Email</span>
          </MuiLink>
        </Box>
      </Container>

      {/* Fixed Copyright at Bottom */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 8,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
        }}
      >
        <Typography 
          variant="body2" 
          sx={{ 
            color: 'text.secondary',
            fontSize: '0.75rem',
            fontWeight: 400,
            opacity: 0.6,
            whiteSpace: 'nowrap',
          }}
        >
          © {currentYear} {name}. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
