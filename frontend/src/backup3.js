import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundColor: 'green',
    border: '0px solid lightgreen',
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

const NewContainer = styled.div`
  display: flex;
  flexGrow: 1;
  height: 50%;
  width: 95%;
  max-width: 95%;
  background-color: lightblue;
  border: 2px solid lightgreen;
  padding: 20px;
  margin-right: 20px;
  margin-left: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const NewBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: lightblue;
`;

const AppWrapper = styled.div`
  border: 2px solid lightgreen;
  background-color: green;
  height: 100vh;
  overflow-x: hidden;
`;

const lineDivider = styled.div`
border-left: 2px solid black;
margin: 20px 0;
`;
const Header = styled.h1`
  color: black;
  text-align: center;
  margin-top: 0;
`;

const FileInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightblue;
  padding: 20px;
  margin: 0 20px;
`;

function App() {
  const classes = useStyles();
  const [active, setActive] = useState('Interactive Mode');
  const [zipcodeInput, setZipcodeInput] = useState('');
  const [priceInput, setPriceInput] = useState('');
  const [squareFeetInput, setSquareFeetInput] = useState('');
  const [bathroomsInput, setBathroomsInput] = useState('');
  const [garageInput, setGarageInput] = useState('');
  const [timeOnMarketInput, setTimeOnMarketInput] = useState('');
  const [batchFile, setBatchFile] = useState(null);

  const handleFileChange = (event) => {
    setBatchFile(event.target.files[0]);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor: 'green',
        height: '100vh',
        border: '4px solid lightgreen',
      }}
    >
      <div className={classes.banner}>
        <h1>CSCE 4430</h1>
      </div>
      <div className={classes.buttonContainer}>
        <Button className={classes.button} variant="contained">
          Home
        </Button>
        <Button className={classes.button} variant="contained">
          Help
        </Button>
        <Button className={classes.button} variant="contained">
          About Us
        </Button>
      </div>
      <div style={{ border: '0px solid lightgreen', padding: '10px' }}>
        <ButtonGroup>
          <ButtonToggle
            active={active === 'Interactive Mode'}
            onClick={() => setActive('Interactive Mode')}
          >
            Interactive Mode
          </ButtonToggle>
          <ButtonToggle
            active={active === 'Batch Mode'}
            onClick={() => setActive('Batch Mode')}
          >
            Batch Mode
          </ButtonToggle>
        </ButtonGroup>
      </div>
      <NewContainer>

        {active === 'Interactive Mode' ? (
          <>
            <NewBox>
              <Header>Estimate The Time Property Will Be On Market Before Sale</Header>
              <br />
              <form>
        <label>
          Zipcode:
          <br />
          <input
            type="text"
            placeholder="Zipcode"
            value={zipcodeInput}
            onChange={(e) => setZipcodeInput(e.target.value)}
          />
        </label>
        <br />
        <label>
          Price:
          <br />
          <input
            type="text"
            placeholder="Price"
            value={priceInput}
            onChange={(e) => setPriceInput(e.target.value)}
          />
        </label>
        <br />
        <label>
          Square Feet:
          <input
            type="text"
            placeholder="Square Feet"
            value={squareFeetInput}
            onChange={(e) => setSquareFeetInput(e.target.value)}
          />
        </label>
        <br />
        <label>
          Bathrooms(s):
          <input
            type="text"
            placeholder="Bathrooms(s)"
            value={bathroomsInput}
            onChange={(e) => setBathroomsInput(e.target.value)}
          />
        </label>
        <br />
        <label>
          Garage(Y/N):
          <input
            type="text"
            placeholder="Garage(Y/N)"
            value={garageInput}
            onChange={(e) => setGarageInput(e.target.value)}
          />
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
            </NewBox>
            <hr lineDivider />
            <NewBox>
              <Header>Input Time on Market and Receive a Price Estimate for Zip to Sell Within that Time</Header>
              <form>
        <label>
          Zipcode:
          <br />
          <input
            type="text"
            placeholder="Zipcode"
            value={zipcodeInput}
            onChange={(e) => setZipcodeInput(e.target.value)}
          />
        </label>
        <br />
        <label>
          Time on Market (days):
          <input
            type="text"
            placeholder="Time on Market (days)"
            value={timeOnMarketInput}
            onChange={(e) => setTimeOnMarketInput(e.target.value)}
          />
        </label>
        <br />
        <label>
          Square Feet:
          <input
            type="text"
            placeholder="Square Feet"
            value={squareFeetInput}
            onChange={(e) => setSquareFeetInput(e.target.value)}
          />
        </label>
        <br />
        <label>
          Bathrooms(s):
          <input
            type="text"
            placeholder="Bathrooms(s)"
            value={bathroomsInput}
            onChange={(e) => setBathroomsInput(e.target.value)}
          />
        </label>
        <br />
        <label>
          Garage(Y/N):
          <input
            type="text"
            placeholder="Garage(Y/N)"
            value={garageInput}
            onChange={(e) => setGarageInput(e.target.value)}
          />
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
            </NewBox>
          </>
        ) : (
          <NewBox>
                  {active === 'Batch Mode' && (
          <FileInput>
            <h3 style={{ textAlign: 'center'}}>Please Input an Input Batch File</h3>
            <input type="file" onChange={handleFileChange} />
          </FileInput>
        )}
          </NewBox>
        )}
      </NewContainer>
    </div>
  );
}

export default App;