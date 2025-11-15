import { useContext } from 'react';
import { IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { ThemeContext } from '../../pages/_app';

export default function ThemeToggle() {
  const { toggleTheme, mode } = useContext(ThemeContext);

  return (
    <IconButton
      onClick={toggleTheme}
      color="inherit"
      aria-label={mode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      sx={{
        ml: 1,
        minWidth: 44,
        minHeight: 44,
      }}
    >
      {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
    </IconButton>
  );
}
