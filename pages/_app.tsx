import { useState, useEffect, useMemo, useCallback, createContext } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { PaletteMode } from '@mui/material';
import { Inter } from 'next/font/google';
import { getTheme } from '../src/theme';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export const ThemeContext = createContext({
  toggleTheme: () => { },
  mode: 'light' as PaletteMode,
});

export default function App({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState<PaletteMode>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load theme preference from localStorage
    const savedMode = localStorage.getItem('themeMode') as PaletteMode;
    if (savedMode && (savedMode === 'light' || savedMode === 'dark')) {
      setMode(savedMode);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setMode(prefersDark ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Add transition class before theme change
    document.documentElement.classList.add('theme-transition');

    // Update data-theme attribute for CSS variables
    document.documentElement.setAttribute('data-theme', mode);

    // Remove transition class after animation completes
    const timer = setTimeout(() => {
      document.documentElement.classList.remove('theme-transition');
    }, 300);

    return () => clearTimeout(timer);
  }, [mode, mounted]);

  const toggleTheme = useCallback(() => {
    // Use requestAnimationFrame for smoother transition
    requestAnimationFrame(() => {
      const newMode = mode === 'light' ? 'dark' : 'light';
      setMode(newMode);
      localStorage.setItem('themeMode', newMode);
    });
  }, [mode]);

  const theme = useMemo(() => getTheme(mode), [mode]);

  const themeContextValue = useMemo(
    () => ({
      toggleTheme,
      mode,
    }),
    [mode, toggleTheme]
  );

  // Prevent flash of unstyled content
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={inter.className}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
