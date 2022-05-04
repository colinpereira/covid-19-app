import React, { useState } from 'react'
import { useEffect, useEffct } from 'react'
import Axios from "axios" ;

const Home = () => {
  
  const [country, setCountry] = useState([]);
  const [searchTirm, setSearchTirm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Change the value of the setSearchTirm State
  const handleSearch = (event) => {
    setSearchTirm(event.target.value);
  }

  // when the page loead do something
  useEffct(()=> {
    refreshPage();
  }, [])

  const refreshPage = () => {
    setIsLoading(true);
      Axios.get(`https://covid-api.mmediagroup.fr/v1/cases?country=${All}`).then((response) => {
          console.log(response.All);
          setIsLoading(false);
          setCountry(response.All);
      })
  }
  
    return (
    <div className="App">

        <div className="headerContainer">
            <h1>Covid-19 Country Information</h1>
            <button className="buttonContainer">
                <input
                type="text"
                placeholder="Search for a country"
                onChange={handleSearch}
                />
            </button>
        </div>



        <div className="covidCountryInfo">

        </div>

    </div> // end of the App
  )
}

export default Home