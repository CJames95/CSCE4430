import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
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
  const [zipcode, setZipcode] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [squareFeet, setSquareFeet] = React.useState('');
  const [bathrooms, setBathrooms] = React.useState('');
  const [garage, setGarage] = React.useState('');
  const [anchorEl, setAnchorEl] = React.useState(null);

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
    <div className="App" style={{backgroundColor: "white"}}>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Button className={classes.menuButton} color="inherit" onClick={handleMenuClick}>
              Menu
            </Button>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              <MenuItem onClick={handleMenuClose}>Home</MenuItem>
              <MenuItem onClick={handleMenuClose}>About</MenuItem>
              <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
            </Menu>
            <h1 className={classes.title}>CSCE 4430</h1>
          </Toolbar>
        </AppBar>
      </div>
      <div className={classes.formContainer}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            className={classes.input}
            label="Zipcode"
            value={zipcode}
            onChange={(event) => setZipcode(event.target.value)}
          />
          <TextField
            className={classes.input}
            label="Price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
          <TextField
            className={classes.input}
            label="Square Feet"
            value={squareFeet}
            onChange={(event) => setSquareFeet(event.target.value)}
          />
          <TextField
            className={classes.input}
            label="Bathrooms"
            value={bathrooms}
            onChange={(event) => setBathrooms(event.target.value)}
          />
          <TextField
            className={classes.input}
            label="Garage"
            value={garage}
            onChange={(event) => setGarage(event.target.value)}
            />
            <Button className={classes.button} variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    );
  }
  
  export default App;
  