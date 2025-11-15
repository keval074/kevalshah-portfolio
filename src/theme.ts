import { createTheme, ThemeOptions, PaletteMode } from '@mui/material/styles';

export const getTheme = (mode: PaletteMode) => {
  const lightPalette = {
    mode: 'light' as PaletteMode,
    primary: {
      main: '#0EA5E9', // Electric Sky Blue
      light: '#38BDF8',
      dark: '#0284C7',
    },
    secondary: {
      main: '#3B82F6', // Bright Blue
      light: '#60A5FA',
      dark: '#2563EB',
    },
    background: {
      default: '#F1F5F9', // Cool light slate
      paper: '#FFFFFF', // Pure white
    },
    text: {
      primary: '#0F172A', // Dark slate
      secondary: '#475569', // Medium slate
    },
    divider: '#E2E8F0',
    accent: {
      main: '#06B6D4', // Cyan accent
      light: '#22D3EE',
      dark: '#0891B2',
    },
  };

  const darkPalette = {
    mode: 'dark' as PaletteMode,
    primary: {
      main: '#38BDF8', // Lighter electric blue for dark mode
      light: '#7DD3FC',
      dark: '#0EA5E9',
    },
    secondary: {
      main: '#60A5FA', // Lighter bright blue
      light: '#93C5FD',
      dark: '#3B82F6',
    },
    background: {
      default: '#0F172A', // Dark slate
      paper: '#1E293B', // Slightly lighter slate
    },
    text: {
      primary: '#F1F5F9', // Light slate
      secondary: '#CBD5E1', // Improved contrast - lighter slate
    },
    divider: '#334155',
    accent: {
      main: '#22D3EE', // Lighter cyan for dark mode
      light: '#67E8F9',
      dark: '#06B6D4',
    },
  };

  const themeOptions: ThemeOptions = {
    palette: mode === 'light' ? lightPalette : darkPalette,
    typography: {
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      h1: {
        fontWeight: 700,
        fontSize: '3rem',
        lineHeight: 1.2,
      },
      h2: {
        fontWeight: 600,
        fontSize: '2.5rem',
        lineHeight: 1.3,
      },
      h3: {
        fontWeight: 600,
        fontSize: '2rem',
        lineHeight: 1.3,
      },
      h4: {
        fontWeight: 600,
        fontSize: '1.5rem',
        lineHeight: 1.4,
      },
      h5: {
        fontWeight: 600,
        fontSize: '1.25rem',
        lineHeight: 1.4,
      },
      h6: {
        fontWeight: 600,
        fontSize: '1rem',
        lineHeight: 1.5,
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.6,
      },
      body2: {
        fontSize: '0.875rem',
        lineHeight: 1.6,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: 8,
            fontWeight: 500,
            padding: '10px 24px',
            '&:focus-visible': {
              outline: '3px solid',
              outlineColor: mode === 'light' ? '#0EA5E9' : '#38BDF8',
              outlineOffset: '2px',
            },
          },
          contained: {
            boxShadow: 'none',
            '&:hover': {
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: 'none',
            borderBottom: `1px solid ${mode === 'light' ? '#E4E6EA' : '#2A2F34'}`,
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
            },
            '&:focus-visible': {
              outline: '3px solid',
              outlineColor: mode === 'light' ? '#0EA5E9' : '#38BDF8',
              outlineOffset: '2px',
              borderRadius: '4px',
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 6,
            fontWeight: 500,
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            '&:focus-visible': {
              outline: '3px solid',
              outlineColor: mode === 'light' ? '#0EA5E9' : '#38BDF8',
              outlineOffset: '2px',
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused': {
                '& .MuiOutlinedInput-notchedOutline': {
                  borderWidth: '2px',
                },
              },
            },
          },
        },
      },
      MuiFab: {
        styleOverrides: {
          root: {
            '&:focus-visible': {
              outline: '3px solid',
              outlineColor: mode === 'light' ? '#0EA5E9' : '#38BDF8',
              outlineOffset: '2px',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 20,
            boxShadow: mode === 'light'
              ? '0 4px 20px rgba(14, 165, 233, 0.12)'
              : '0 4px 20px rgba(56, 189, 248, 0.2)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            border: mode === 'light' ? '2px solid rgba(14, 165, 233, 0.1)' : '2px solid rgba(56, 189, 248, 0.2)',
            background: mode === 'light'
              ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(224, 242, 254, 0.4))'
              : 'linear-gradient(135deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.5))',
            '&:hover': {
              transform: 'translateY(-12px) scale(1.03) rotate(1deg)',
              boxShadow: mode === 'light'
                ? '0 20px 60px rgba(14, 165, 233, 0.25), 0 0 40px rgba(6, 182, 212, 0.15)'
                : '0 20px 60px rgba(56, 189, 248, 0.35), 0 0 40px rgba(34, 211, 238, 0.25)',
              borderColor: mode === 'light' ? 'rgba(14, 165, 233, 0.4)' : 'rgba(56, 189, 248, 0.5)',
            },
          },
        },
      },
    },
  };

  return createTheme(themeOptions);
};

// Extend the palette type to include custom accent color
declare module '@mui/material/styles' {
  interface Palette {
    accent: Palette['primary'];
  }
  interface PaletteOptions {
    accent?: PaletteOptions['primary'];
  }
}
