
import { useState } from "react"
import {AsyncPaginate} from "react-select-async-paginate"
import {GEO_API_URL,geoApiOptions} from "../../api"



const Search =({onSerachChange})=>{

const [serach , setSearch]=useState(null)

const loadoptions=(inputValue)=>{
     return fetch(
        `${GEO_API_URL}/cities?minPopulation1000000&namePrefix=${inputValue}`, geoApiOptions)
     .then(response => response.json())
     .then(response => {
        return{
            options:response.data.map((city)=>{
                return{
                   value: `${city.latitude} ${city.longitude}`,
                   label: `${city.name}, ${city.countryCode}` ,
                }
            })
        }
     })
     .catch(err => console.error(err));
}

const handleonChange=(serachData)=>{
    setSearch(serachData);
    onSerachChange(serachData);
}

    return (
        <AsyncPaginate 
          placeholder="serach for city"
          debounceTimeout={600}
          value={serach}
          onChange={handleonChange}
          loadOptions={loadoptions}
        />
    )
}
export default Search