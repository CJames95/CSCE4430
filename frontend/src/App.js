import React from 'react';
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

function App() {
  const classes = useStyles();
  const [days_to_sell, setDaysToSell] = React.useState('');
  const [zipcode, setZipcode] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [squareFeet, setSquareFeet] = React.useState('');
  const [bathrooms, setBathrooms] = React.useState('');
  const [garage, setGarage] = React.useState('');
  const [year, setYear] = React.useState('');
  const [bedrooms, setBedrooms] = React.useState('');
  const [half_bathrooms, setHalfBathrooms] = React.useState('');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isChecked, setIsChecked] = React.useState(true);

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
    <Grid>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Button className={classes.menuButton} color="inherit">
              Menu
            </Button>
            <Button className={classes.menuButton} color="inherit">
              About
            </Button>
            <Button className={classes.menuButton} color="inherit">
              Contact
            </Button>
          </Toolbar>
        </AppBar>
      </div>
      <Grid container xs={8} alignItems='center' justifyContent='center' sx={{display: 'flex', flexDirection: 'column'}}>
        <FormGroup>
          <FormControlLabel 
            control={<Switch onChange={handleIsChecked}/>} label = {isChecked ? 'Results by Time to Sell' : 'Results by Price'}/>
          {/* Results by Time to Sell */}
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
          {/* Results by Price */}
          {(isChecked == false) &&
            <TextField
              className={classes.input}
              label="Total Square Feet"
              value={squareFeet}
              onChange={(event) => setSquareFeet(event.target.value)}
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
              label="Zip Code"
              value={zipcode}
              onChange={(event) => setZipcode(event.target.value)}
            />
          }
          {(isChecked == false) &&
            <TextField
              className={classes.input}
              label="Bedrooms"
              value={bedrooms}
              onChange={(event) => setBedrooms(event.target.value)}
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
              label="Half Bathrooms"
              value={half_bathrooms}
              onChange={(event) => setHalfBathrooms(event.target.value)}
            />
          }
          {(isChecked == false) &&
            <TextField
              className={classes.input}
              label="Year Built"
              value={year}
              onChange={(event) => setYear(event.target.value)}
            />
          }
          {(isChecked == false) &&
            <TextField
              className={classes.input}
              label="Has Garage"
              value={garage}
              onChange={(event) => setGarage(event.target.value)}
              />
          }
            <Button className={classes.button} variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </FormGroup>
        </Grid>
      </Grid>
    );
  }
  
  export default App;
  