
import { Accordion,AccordionItem, AccordionItemHeading, AccordionItemPanel,AccordionItemButton } from "react-accessible-accordion";
import "./forecast.css"

const WEEK_DAYS=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]

const Forecast =({data})=>{
  
    const dayInWeek= new Date().getDay()
   const forecastdays= WEEK_DAYS.slice(dayInWeek,WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInWeek))
    ;
    console.log(forecastdays)

 
return (
    <>
  <label className="title">Daily</label>
  <Accordion allowZeroExpand>
  {data.list.splice(0,7).map((item,idx)=>(
    <AccordionItem key={idx}>
    <AccordionItemHeading >
      <AccordionItemButton>
         <div className="daily_item">
           <img src={`icons/${item.weather[0].icon}.png`} alt="weather" className="icon-small" />
           <label className="day">{forecastdays[idx]}</label>
           <label className="descriptions">{item.weather[0].description}</label>
           <label className="min-max">{Math.round(item.main.temp_min)}°C /{Math.round(item.main.temp_max)}°C</label>

         </div>
      </AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel>
      <div className="daily-details-grid">

         <div className="daily-details-grid-item">
           <label>pressure</label>
           <label>{item.main.pressure} hpa</label>
         </div>

         <div className="daily-details-grid-item">
           <label>Humidity</label>
           <label>{item.main.humidity}%</label>
         </div>

         <div className="daily-details-grid-item">
           <label>Clouds</label>
           <label>{item.clouds.all}%</label>
         </div>

         <div className="daily-details-grid-item">
           <label>speed</label>
           <label>{item.wind.speed} m/s</label>
         </div>

         <div className="daily-details-grid-item">
           <label>sea level:</label>
           <label>{item.main.sea_level}m</label>
         </div>

         <div className="daily-details-grid-item">
           <label>Feels lilke:</label>
           <label>{Math.round(item.main.feels_like)}°C</label>
         </div>

       </div>
    </AccordionItemPanel>
    </AccordionItem>
))}
     
  </Accordion>
</>
)
}
export default Forecast;