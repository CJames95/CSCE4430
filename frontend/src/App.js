import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Unstable_Grid2';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import logo from './North_Texas_Mean_Green_logo.png';
import { createTheme } from '@mui/material';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(3),
  },
  input: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));


let theme = createTheme({
  palette: {
    primary: {
      main: '#00853E',
    },
    secondary: {
      main: '#00853E',
    },
  },
});


function App() {
  const classes = useStyles();
  const [days_to_sell, setDaysToSell] = React.useState('');
  const [zipcode, setZipcode] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [squareFeet, setSquareFeet] = React.useState('');
  const [bathrooms, setBathrooms] = React.useState('');
  const [garage, setGarage] = React.useState('');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isChecked, setIsChecked] = React.useState(true);
  const [homeActive, setHomeActive] = useState(true);
  const [aboutUsActive, setAboutUsActive] = useState(false);
  const [helpActive, setHelpActive] = useState(false);

  const handleIsChecked = () => {
    setIsChecked(!isChecked);
    console.log(isChecked);
  }

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Zipcode: ${zipcode}`);
    console.log(`Price: ${price}`);
    console.log(`Square Feet: ${squareFeet}`);
    console.log(`Bathrooms: ${bathrooms}`);
    console.log(`Garage: ${garage}`);
  };

  return (
    <MuiThemeProvider theme={theme}>
    <Grid>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Button 
            className={classes.menuButton} color="inherit"
            onClick={() => {
              setHomeActive(true);
              setAboutUsActive(false);
              setHelpActive(false);
            }}
            >
              Menu
            </Button>
            <Button 
            className={classes.menuButton} color="inherit"
            onClick={() => {
              setHomeActive(false);
              setAboutUsActive(true);
              setHelpActive(false);
            }}
            >
              About
            </Button>
            <Button 
            className={classes.menuButton} color="inherit"
            onClick={() => {
              setHomeActive(false);
              setAboutUsActive(false);
              setHelpActive(true);
            }}
            >
              Contact
            </Button>
          </Toolbar>
        </AppBar>
      </div>
      {homeActive && (
      <Grid container xs={8} alignItems='center' justifyContent='center' sx={{display: 'flex', flexDirection: 'column'}}>
        <FormGroup>
          <FormControlLabel 
            control={<Switch onChange={handleIsChecked}/>} label = {isChecked ? 'Results by Time to Sell' : 'Results by Price'}/>
          {(isChecked == true) &&
            <TextField
              className={classes.input}
              label="Zipcode"
              value={zipcode}
              onChange={(event) => setZipcode(event.target.value)}
            />
          }
          {(isChecked == true) &&
            <TextField
             className={classes.input}
              label="Price"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          }
          {(isChecked == true) &&
            <TextField
              className={classes.input}
              label="Square Feet"
              value={squareFeet}
              onChange={(event) => setSquareFeet(event.target.value)}
            />
          }
          {(isChecked == true) &&
            <TextField
              className={classes.input}
              label="Bathrooms"
              value={bathrooms}
              onChange={(event) => setBathrooms(event.target.value)}
            />
          }
          {(isChecked == true) &&
            <TextField
              className={classes.input}
              label="Garage"
              value={garage}
              onChange={(event) => setGarage(event.target.value)}
              />
          }
          {(isChecked == false) &&
            <TextField
              className={classes.input}
              label="Zipcode"
              value={zipcode}
              onChange={(event) => setZipcode(event.target.value)}
            />
          }
          {(isChecked == false) &&
            <TextField
             className={classes.input}
              label="Days to Sell"
              value={days_to_sell}
              onChange={(event) => setPrice(event.target.value)}
            />
          }
          {(isChecked == false) &&
            <TextField
              className={classes.input}
              label="Square Feet"
              value={squareFeet}
              onChange={(event) => setSquareFeet(event.target.value)}
            />
          }
          {(isChecked == false) &&
            <TextField
              className={classes.input}
              label="Bathrooms"
              value={bathrooms}
              onChange={(event) => setBathrooms(event.target.value)}
            />
          }
          {(isChecked == false) &&
            <TextField
              className={classes.input}
              label="Garage"
              value={garage}
              onChange={(event) => setGarage(event.target.value)}
              />
          }
            <Button className={classes.button} variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </FormGroup>
        </Grid>
      )}
      {aboutUsActive && (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            About Us
          </h1>
      <p>
        Created by: Pearson Davenport, Calvin James, Hang Tran, .... 
      </p>
      <p>
        This project was created for our CSCE 4430: Programming Languages class project for the Spring 2023 semester
      </p>
          <a
            className="App-link"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Real Estate Estimator - Home Page
          </a>
        </header>
      </div>
      )}
      {helpActive && (
       <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <h1>
           Help/Contact
         </h1>
     <p>
       If you have a question or comment you can click on the Google Form link below and fill it out. We will try to get back with you as soon as possible 
     </p>
         <a
           className="App-link"
           href="https://docs.google.com/forms/d/e/1FAIpQLSfr_-FoJahDgMl9ieiyATgwaN6KbT3BFvklfMIXrCXgdLTvyA/viewform?usp=share_link"
           target="_blank"
           rel="noopener noreferrer"
         >
           Real Estate Estimator - Help Form
         </a>
       </header>
     </div>
      )}
      </Grid>
      </MuiThemeProvider>
    );
  }
  
  export default App;
  