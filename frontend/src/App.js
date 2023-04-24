import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundColor: 'green',
    border: '2px solid lightgreen',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50px',
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 0,
  },
  buttonContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
    backgroundColor: 'green',
    paddingBottom: '10px',
    paddingTop: '10px',
    border: '2px solid lightgreen',
    marginTop: 0,
  },
  button: {
    backgroundColor: 'lightgreen',
    color: 'white',
    '&:hover': {
      backgroundColor: 'lightblue',
    },
  },
}));

const ButtonToggle = styled(Button)`
  opacity: 1;
  ${({ active }) =>
    active &&
    `
    opacity: .6;
  `}
    margin: 0 10px;
    color: white;
    background-color: lightgreen;
  &:hover {
    background-color: lightblue;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const BlueBox = styled.div`
  background-color: lightblue;
  border: 2px solid lightgreen;
  margin: 0 20px;
  padding: 20px;
  width: 60%;
  margin: auto;
  text-align: center;
`;

function App() {
  const classes = useStyles();
  const [interactiveModeActive, setInteractiveModeActive] = useState(true);
  const [batchModeActive, setBatchModeActive] = useState(false);
  const [homeActive, setHomeActive] = useState(true);
  const [aboutUsActive, setAboutUsActive] = useState(false);
  const [helpActive, setHelpActive] = useState(false);

  return (
    <div className="App" style={{ backgroundColor: 'green' }}>
      <div className={classes.banner}>
        <h1>CSCE 4430</h1>
      </div>
      <div className={classes.buttonContainer}>
        <Button
          className={classes.button}
          variant="contained"
          onClick={() => {
            setHomeActive(true);
            setAboutUsActive(false);
            setHelpActive(false);
          }}
          style={homeActive ? { opacity: 0.6 } : {}}
        >
          Home
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          onClick={() => {
            setHomeActive(false);
            setAboutUsActive(true);
            setHelpActive(false);
          }}
          style={aboutUsActive ? { opacity: 0.6 } : {}}
        >
          About Us
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          onClick={() => {
            setHomeActive(false);
            setAboutUsActive(false);
            setHelpActive(true);
          }}
          style={helpActive ? { opacity: 0.6 } : {}}
        >
          Help
        </Button>
      </div>
      <div style={{ border: '2px solid lightgreen', padding: '10px' }}>
        <ButtonGroup>
          <ButtonToggle
          active={interactiveModeActive}
      onClick={() => {
        setInteractiveModeActive(true);
        setBatchModeActive(false);
      }}
    >
      Interactive Mode
    </ButtonToggle>
    <ButtonToggle
      active={batchModeActive}
      onClick={() => {
        setInteractiveModeActive(false);
        setBatchModeActive(true);
      }}
    >
      Batch Mode
    </ButtonToggle>
    </ButtonGroup>
    {interactiveModeActive && (
      <BlueBox>
        <h2>Interactive Mode Content Goes Here</h2>
      </BlueBox>
    )}
    {batchModeActive && (
      <BlueBox>
        <h2>Batch Mode Content Goes Here</h2>
      </BlueBox>
    )}
  </div>
</div>
);
}

export default App;