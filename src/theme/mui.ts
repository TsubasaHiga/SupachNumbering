import { createTheme } from '@mui/material/styles'

const backgroundColor = '#f9fafb'
export const theme = createTheme({
  typography: {
    fontFamily: ['Roboto', 'Noto Sans JP'].join(','),
    allVariants: {
      color: '#3c3c3c',
    },
  },
  components: {
    MuiFormGroup: {
      styleOverrides: {
        root: {
          '&:not(:first-of-type)': {
            marginTop: '20px',
          },

          '&[role="radiogroup"]': {
            '.MuiButtonBase-root': {
              padding: '4px',
            },
            '.MuiFormControlLabel-root': {
              '&:not(:first-of-type)': {
                marginTop: '0',
              },
            },
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: '15px',
          color: '#aaa',
          marginBottom: '10px',
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginLeft: '-3px',
          '&:not(:first-of-type)': {
            marginTop: '10px',
          },
          '&.Mui-disabled': {
            cursor: 'not-allowed',
            opacity: '.5',
          },
        },
        label: {
          fontSize: '14px',
          alignItems: 'center',
          display: 'flex',
          flexWrap: 'wrap',
          fontWeight: 700,
          userSelect: 'none',
          marginLeft: '5px',
          transition: 'opacity 400ms ease',
          '&:not(.Mui-disabled):hover': {
            opacity: '.5',
          },
          span: {
            backgroundColor: '#eee',
            alignItems: 'center',
            lineHeight: '1',
            color: '#666',
            display: 'flex',
            fontSize: '13px',
            fontWeight: '400',
            padding: '3px 10px 3px 5px',
            marginLeft: '3px',
            borderRadius: '999px',
            svg: {
              color: '#999',
              fontSize: '17px',
              marginRight: '2px',
            },
            '&[data-text]': {
              marginLeft: '0',
              marginRight: '5px',
              padding: '4px 10px 3px',
              fontSize: '13px',
            },
            '&[data-color="red"]': {
              backgroundColor: '#d73a4a',
              color: '#fff',
            },
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            cursor: 'not-allowed',
            opacity: '.5',
          },
        },
        input: {
          paddingTop: '4px',
          paddingBottom: '4px',
          fontWeight: '700',
          color: '#777',
          '&.Mui-disabled': {
            cursor: 'not-allowed',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        caption: {
          position: 'absolute',
          backgroundColor: backgroundColor,
          padding: '0 5px',
          left: '10px',
          top: '-10px',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: 'Roboto',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: '14px',
          padding: '6px 12px 7px',
        },
      },
    },
  },
})
