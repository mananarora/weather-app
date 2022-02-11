export const DisplayWeather = (props) => {
  const { weatherData } = props;

  const style = {
    border: "3px solid black",
    borderRadius: "5px",
    width: "90%",
    height: "80%",
    margin: "auto",
    marginTop: "10px"
  };

  const kelvinToFarenheit = (k) => {
    return (k - 273.15).toFixed(2);
  };

  return (
    <>
      <div style={style}>
        <img
          src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
          alt="weather status icon"
          className="weather-icon"
        />
        <h4>{weatherData.weather[0].description.toUpperCase()}</h4>
        <p>
          <span style={{ float: "left", paddingLeft: "10px" }}>
            <strong>Current temperature: </strong>
            {kelvinToFarenheit(weatherData.main.temp)}{" "}
          </span>
          <span style={{ paddingLeft: "0px" }}>
            <strong>Feels like: </strong>
            {kelvinToFarenheit(weatherData.main.feels_like)}
          </span>
        </p>
        <p>
          <span style={{ float: "left", paddingLeft: "10px" }}>
            <strong>Min temperature: </strong>
            {kelvinToFarenheit(weatherData.main.temp_min)}{" "}
          </span>
          <span style={{ paddingLeft: "80px" }}>
            <strong>Max temperature: </strong>
            {kelvinToFarenheit(weatherData.main.temp_max)}
          </span>
        </p>
      </div>
      <h3>{weatherData.name}</h3>
    </>
  );
};
