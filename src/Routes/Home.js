import React, { useState, useEffect } from "react";
import Axios from "axios";

const Home = () => {
  const [country, setCountry] = useState({});
  const [searchTirm, setSearchTirm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Change the value of the setSearchTirm State
  const handleSearch = (event) => {
    setSearchTirm(event.target.value);
  };

  // when the page loead do something
  useEffect(() => {
    refreshPage();
  }, []);

  const refreshPage = () => {
    setIsLoading(true);
    Axios.get(`https://covid-api.mmediagroup.fr/v1/cases?`).then((response) => {
      console.log(response.data);
      setIsLoading(false);
      setCountry(response.data);
    });
  };

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

      <div className="covidCountryInfo"></div>
    </div> // end of the App
  );
};

export default Home;
