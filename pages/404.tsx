import { Box, Container, Typography, Button } from '@mui/material';
import { Home as HomeIcon, ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import Link from 'next/link';
import Head from 'next/head';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Keval Shah</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: (theme) =>
            theme.palette.mode === 'light'
              ? 'linear-gradient(135deg, rgba(14, 165, 233, 0.05), rgba(59, 130, 246, 0.05))'
              : 'linear-gradient(135deg, rgba(15, 23, 42, 1), rgba(30, 41, 59, 1))',
        }}
      >
        <Container maxWidth="sm">
          <Box
            sx={{
              textAlign: 'center',
              py: 8,
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '6rem', md: '8rem' },
                fontWeight: 700,
                background: (theme) =>
                  theme.palette.mode === 'light'
                    ? 'linear-gradient(135deg, #0EA5E9, #3B82F6)'
                    : 'linear-gradient(135deg, #38BDF8, #60A5FA)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                mb: 2,
              }}
            >
              404
            </Typography>

            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                mb: 2,
                color: 'text.primary',
              }}
            >
              Page Not Found
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                mb: 4,
                maxWidth: 400,
                mx: 'auto',
              }}
            >
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </Typography>

            <Box
              sx={{
                display: 'flex',
                gap: 2,
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Link href="/" passHref legacyBehavior>
                <Button
                  variant="contained"
                  startIcon={<HomeIcon />}
                  sx={{
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
                  Go Home
                </Button>
              </Link>

              <Button
                variant="outlined"
                startIcon={<ArrowBackIcon />}
                onClick={() => window.history.back()}
              >
                Go Back
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
