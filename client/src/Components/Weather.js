export const Weather = (props) => {
    const weather = props.weather;
    return(
        <div>
            {(weather && weather.cod === "200") && 
            <div>
                Temperature: {weather[0].main.temp}
                Feels like: {weather[0].main.feels_like}
                Min/Max: {weather[0].main.temp_min} / {weather[0].main.temp_max}
                Humidity: {weather[0].main.humidity}
            </div>}
            {(weather && weather.cod !== "200") &&
                <div>
                    No Result found!
                </div>
            }
        </div>
    )
}