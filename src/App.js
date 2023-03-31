
import './App.css';
import Search from './Components/Search/Search';
import CurrentWeather from './Components/Current-Weather/Current-Weather';
import { WEATHER_API_URL, WEATHER_API_KEY} from "./api"
import { useState } from 'react';
import Forecast from './Components/forecast/forecast';
function App() {

  const [currentweather, setCurrentWeather]=useState(null)

  const [forecast, setForecast]=useState(null)
 
  const handleOnSerachChange=(serachData)=>{
  const [lat, lon]=serachData.value.split(" ");
    
     const currentweatherFetch= fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
     const forecastFetch= fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
   
     Promise.all([currentweatherFetch,forecastFetch])
       .then(async(response)=>{
         const weatherResponse= await response[0].json()
         const forecastResponse= await response[1].json()

         setCurrentWeather({city:serachData.label,...weatherResponse});
         setForecast({city:serachData.label,...forecastResponse});
       })
       .catch((err)=> console.log(err))
  }

  console.log(forecast)

  return (
    <div className="container">
      <Search onSerachChange={handleOnSerachChange}/>
   {  currentweather && <CurrentWeather data={currentweather} />}
   {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
