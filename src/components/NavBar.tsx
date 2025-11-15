import { useState, useEffect } from 'react';
import {
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
  Link as MuiLink,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

interface NavBarProps {
  name: string;
  resumeUrl?: string;
}

export default function NavBar({ name, resumeUrl }: NavBarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const sectionId = href.substring(1);

      // Immediately set active section for instant feedback
      setActiveSection(sectionId);

      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 100; // Offset for floating navbar

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    // Close drawer after navigation
    setMobileOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Track active section with improved logic
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 150; // Adjusted offset for better detection

      let currentSection = '';

      // Find which section is currently in view
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          // Check if scroll position is within this section
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            currentSection = sectionId;
            break;
          }
        }
      }

      // Update active section only if it changed
      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);

    // Initial check on mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileOpen, activeSection]);

  const drawer = (
    <Box
      sx={{
        width: 250,
        pt: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
      role="navigation"
      aria-label="Mobile navigation menu"
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2, pb: 2 }}>
        <IconButton
          onClick={handleDrawerClose}
          aria-label="Close menu"
          sx={{
            minWidth: 44,
            minHeight: 44,
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navLinks.map((link) => (
          <ListItem key={link.href} disablePadding>
            <ListItemButton
              onClick={() => handleNavClick(link.href)}
              selected={activeSection === link.href.substring(1)}
              sx={{
                minHeight: 56,
                px: 3,
                py: 1.5,
                '&.Mui-selected': {
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                      ? 'rgba(14, 165, 233, 0.1)'
                      : 'rgba(56, 189, 248, 0.15)',
                  borderLeft: '4px solid',
                  borderColor: 'primary.main',
                  '&:hover': {
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? 'rgba(14, 165, 233, 0.15)'
                        : 'rgba(56, 189, 248, 0.2)',
                  },
                },
              }}
            >
              <ListItemText
                primary={link.label}
                primaryTypographyProps={{
                  fontWeight: activeSection === link.href.substring(1) ? 600 : 400,
                  color: activeSection === link.href.substring(1) ? 'primary.main' : 'text.primary',
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
        {resumeUrl && (
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                mt: 2,
                mx: 2,
                minHeight: 48,
                borderRadius: 2,
                background: (theme) =>
                  theme.palette.mode === 'light'
                    ? 'linear-gradient(135deg, #0EA5E9, #3B82F6)'
                    : 'linear-gradient(135deg, #38BDF8, #60A5FA)',
                color: 'white',
                '&:hover': {
                  background: (theme) =>
                    theme.palette.mode === 'light'
                      ? 'linear-gradient(135deg, #0284C7, #2563EB)'
                      : 'linear-gradient(135deg, #0EA5E9, #3B82F6)',
                },
              }}
            >
              <ListItemText primary="Resume" sx={{ textAlign: 'center' }} />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <>
      {/* Skip to content link for accessibility */}
      <MuiLink
        href="#main-content"
        sx={{
          position: 'absolute',
          left: '-9999px',
          zIndex: 9999,
          padding: 1,
          backgroundColor: 'primary.main',
          color: 'primary.contrastText',
          '&:focus': {
            left: 0,
            top: 0,
          },
        }}
      >
        Skip to content
      </MuiLink>

      {/* Modern Floating Navbar */}
      <Box
        component="header"
        sx={{
          position: 'fixed',
          top: scrolled ? 16 : 24,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1100,
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          width: { xs: 'calc(100% - 32px)', md: 'auto' },
          maxWidth: { xs: '100%', md: '900px' },
        }}
      >
        <Toolbar
          component="nav"
          aria-label="Main navigation"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: { xs: 1.5, md: 2 },
            py: 1,
            minHeight: 'auto',
            borderRadius: scrolled ? 50 : 20,
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
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              borderColor: (theme) =>
                theme.palette.mode === 'light'
                  ? 'rgba(14, 165, 233, 0.3)'
                  : 'rgba(56, 189, 248, 0.4)',
              boxShadow: (theme) =>
                theme.palette.mode === 'light'
                  ? '0 12px 40px rgba(14, 165, 233, 0.15), 0 4px 12px rgba(0, 0, 0, 0.08)'
                  : '0 12px 40px rgba(56, 189, 248, 0.2), 0 4px 12px rgba(0, 0, 0, 0.4)',
            },
          }}
        >
          {/* Logo */}
          <IconButton
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
            sx={{
              p: 0,
              minWidth: 'auto',
              '&:hover': {
                backgroundColor: 'transparent',
                transform: 'scale(1.1) rotate(5deg)',
              },
              transition: 'transform 0.3s ease',
            }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                position: 'relative',
                borderRadius: '50%',
                overflow: 'hidden',
                boxShadow: (theme) =>
                  theme.palette.mode === 'light'
                    ? '0 4px 12px rgba(14, 165, 233, 0.3)'
                    : '0 4px 12px rgba(56, 189, 248, 0.4)',
              }}
            >
              <Box
                component="img"
                src="/logo.png"
                alt={`${name} logo`}
                loading="eager"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </Box>
          </IconButton>

          {isMobile ? (
            <>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <ThemeToggle />
                <IconButton
                  color="inherit"
                  aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
                  aria-expanded={mobileOpen}
                  aria-controls="mobile-menu"
                  edge="end"
                  onClick={handleDrawerToggle}
                  sx={{
                    ml: 1,
                    minWidth: 44,
                    minHeight: 44,
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.25 }}>
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  sx={{
                    color: activeSection === link.href.substring(1) ? 'primary.main' : 'text.primary',
                    fontWeight: activeSection === link.href.substring(1) ? 600 : 400,
                    fontSize: '0.8125rem',
                    px: 1.25,
                    py: 0.5,
                    minWidth: 'auto',
                    '&:hover': {
                      backgroundColor: 'action.hover',
                    },
                  }}
                >
                  {link.label}
                </Button>
              ))}
              {resumeUrl && (
                <Button
                  variant="contained"
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    ml: 0.25,
                    px: 1.75,
                    py: 0.5,
                    fontSize: '0.8125rem',
                    minWidth: 'auto',
                    whiteSpace: 'nowrap',
                    background: (theme) =>
                      theme.palette.mode === 'light'
                        ? 'linear-gradient(135deg, #0EA5E9, #3B82F6)'
                        : 'linear-gradient(135deg, #38BDF8, #60A5FA)',
                    '&:hover': {
                      background: (theme) =>
                        theme.palette.mode === 'light'
                          ? 'linear-gradient(135deg, #0284C7, #2563EB)'
                          : 'linear-gradient(135deg, #0EA5E9, #3B82F6)',
                    },
                  }}
                >
                  Resume
                </Button>
              )}
              <ThemeToggle />
            </Box>
          )}
        </Toolbar>
      </Box>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerClose}
        id="mobile-menu"
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          '& .MuiDrawer-paper': {
            width: 250,
            boxSizing: 'border-box',
          },
        }}
        transitionDuration={{
          enter: 300,
          exit: 250,
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
