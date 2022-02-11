import { useEffect, useState } from "react";
import { DisplayWeather } from "./DisplayWeather";

export const Location = () => {
  const [location, setLocation] = useState("Uttarakhand");
  const [weatherData, setWeatherData] = useState({});
  const apiKey = process.env.REACT_APP_API_KEY;
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
  const [apiUrl, setApiurl] = useState(api);
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setWeatherData(data));
  }, [apiUrl]);

  const handleSubmit = () => {
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
    setApiurl(api);
    setLocation("");
  };

  return (
    <>
      <hr />
      <label>Enter your location: </label>
      <input
        type="text"
        placeholder="Enter Location"
        onChange={(e) => setLocation(e.target.value)}
        value={location}
      />{" "}
      <button onClick={handleSubmit}>Submit</button>
      {!weatherData.main ? (
        <p>Loading ...</p>
      ) : (
        <DisplayWeather weatherData={weatherData} />
      )}
    </>
  );
};
