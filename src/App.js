import { useEffect, useState } from 'react/cjs/react.development';
import './App.css';
import Device from './components/Device/Device';


function App() {
  const [steps, setSteps] = useState(0);
  const handleIncreseSteps = () =>{
    const newStepsCount = steps + 1;
    setSteps(newStepsCount) 
  }
  useEffect(() => {
    console.log(steps);
  },[steps])
  return (
    <div className="App">
      <h3>My Steps: {steps}</h3>
      <button onClick={handleIncreseSteps}>Walk</button>
      <Device name="Phone" steps={steps} price="1000"/>
    </div>
  );
}




export default App;

































































































































































/*
function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
    .then(res => res.json())
    .then(data => setCountries(data))
  },[])
  return (
    <div>
      <h2>Traveling around the world</h2>
      <h3>Available Countrie: {countries.length}</h3>
      {
        countries.map(country => <Country>
          name ={country.name} capital={country.capital}
        </Country>)
      }

    </div>
  )
}


function Country(props) {
  console.log(props);
  return (
    <div>
      <h2>Name: {props.country.name}</h2>
      <h3>Capital: {props.capital}</h3>
    </div>
  )
}
 */