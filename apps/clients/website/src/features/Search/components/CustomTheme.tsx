import { createTheme } from '@mui/material/styles';

export default createTheme({
  palette: {
    mode: createTheme().palette.mode,
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
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--TextField-brandBorderHoverColor)',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--TextField-brandBorderFocusedColor)',
          },
        },
      },
    },
  },
});
