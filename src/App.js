import React, {useState} from 'react';
import './App.css';
import {
    AppBar,
    Badge,
    Box,
    createTheme,
    CssBaseline,
    IconButton,
    Link,
    ThemeProvider,
    Toolbar,
    Typography
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import getData from "./data/ApiRepository";
import SimpleAccordion from "./data/dashboard/SimpleAccording";
import VigoLogo from './assets/vigo-logo-no-iks.svg';

const theme = createTheme({
    palette: {
        primary: {
            main: '#8cc640',
            dark: '#666666',
        },
        secondary: {
            main: '#8cc640',
            contrastText: '#fff',
        },
    },
    status: {
        danger: 'orange',
        error: 'red',
    },
    overrides: {
        MuiOutlinedInput: {
            root: {
                '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
                    borderColor: '#8cc640',
                    // Reset on touch devices, it doesn't add specificity
                    '@media (hover: none)': {
                        borderColor: 'rgba(0, 0, 0, 0.23)',
                    },
                },
                '&$focused $notchedOutline': {
                    borderColor: '#8cc640',
                    borderWidth: 1,
                },
            },
        },
        MuiFormLabel: {
            root: {
                '&$focused': {
                    color: '#8cc640',
                },
            },
        },
        MuiInput: {},
    },
});

function App() {

    // TODO: Data needs to be put in the state and only retrieved once.

    const [data, setData] = useState(getData);
    // const data = fetchApi();
    console.log('jennifera', data);

  return (
      <>
          <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar position="fixed" style={{ background: '#fafafa' }}>
              <Toolbar>

                  <Link to="/">
                      <Box
                          component="img"
                          sx={{
                              height: 35,
                              ml: 8,
                              pr: 1.5,
                          }}
                          alt="Vigo Logo"
                          src={VigoLogo}
                      />
                  </Link>
                  <Typography variant="h6" noWrap>
                      FINT Status
                  </Typography>
                  <Box display="flex" ml="auto" alignItems="center">

                      <IconButton
                          aria-label="show new notifications"
                          color="inherit"
                          // aria-owns={open ? 'mouse-over-popover' : undefined}
                          aria-haspopup="true"
                          // onClick={handleClick}
                          size="large"
                      >
                          <Badge color="secondary">
                              <NotificationsIcon />
                          </Badge>
                      </IconButton>
                      <Typography variant="button" sx={{ m: 2 }}>
                          |
                      </Typography>
                      <Box display="flex" alignItems="center" justifyContent="flex-end">
                          <Typography variant="button">
                              display-login-name
                          </Typography>
                          <Typography variant="button" sx={{ m: 1.5 }}>
                              |
                          </Typography>
                      </Box>
                  </Box>
              </Toolbar>
          </AppBar>
          <Box
              component="main"
              sx={{ flexGrow: 1, mt: 8, p: 3 }}
          >
              <main>
                  <SimpleAccordion dataArray={data}/>
              </main>
          </Box>
      </Box>
          </ThemeProvider>
      </>

  );
}

export default App;
