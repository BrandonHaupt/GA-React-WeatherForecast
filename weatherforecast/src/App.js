import data from './data';
import './App.css';
import WeatherForecast from './components/WeatherForecast';

function App() {
  return (<>
    <h1>Weather App</h1>
    <div className="container">
      <WeatherForecast data={data}/>
    </div>
  
  </>);
}

export default App;
