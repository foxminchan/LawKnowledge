import { createTheme } from '@mui/material/styles';
import clsx from 'clsx';

const outerTheme = createTheme();

export const CustomTheme = createTheme({
  palette: {
    mode: outerTheme.palette.mode,
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '--TextField-brandBorderColor': '#E0E3E7',
          '--TextField-brandBorderHoverColor': '#B2BAC2',
          '--TextField-brandBorderFocusedColor': '#ce7a58',
          '--TextField-borderWidth': '1px',
          '& label.Mui-focused': {
            color: 'var(--TextField-brandBorderFocusedColor)',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: 'var(--TextField-brandBorderColor)',
          borderWidth: 'var(--TextField-borderWidth)',
        },
        root: {
          [clsx('&:hover .MuiOutlinedInput-notchedOutline')]: {
            borderColor: 'var(--TextField-brandBorderHoverColor)',
          },
          [clsx('&.Mui-focused .MuiOutlinedInput-notchedOutline')]: {
            borderColor: 'var(--TextField-brandBorderFocusedColor)',
          },
        },
      },
    },
  },
});
